'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import PractitionerCalls from './PractitionerCalls';
import BookingLink from './BookingLink';
import Link from './PageTransitions';

const links = [
  ['Treatments', '/treatments'], ['Our Clinic', '/about'], ['Specialists', '/specialists'],
  ['Journal', '/journal'], ['Client voices', '/reviews'], ['Contact', '/contact'],
];
const subscribeScroll = (notify: () => void) => {
  window.addEventListener('scroll', notify, { passive: true });
  return () => window.removeEventListener('scroll', notify);
};

export default function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState<{ path: string; closing: boolean } | null>(null);
  const open = menu !== null && menu.path === path;
  const closing = open && menu.closing;
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 40, () => false);
  const trigger = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) setMenu(null);
    else setMenu(current => current && { ...current, closing: true });
  }

  useEffect(() => {
    if (!closing) return;
    const fallback = setTimeout(() => setMenu(null), 260);
    return () => clearTimeout(fallback);
  }, [closing]);

  useLayoutEffect(() => {
    if (!open) return;
    const opener = trigger.current;
    document.documentElement.dataset.menuOpen = 'true';
    closeButton.current?.focus({ preventScroll: true });
    const desktop = matchMedia('(min-width:1101px)');
    const close = () => setMenu(null);
    const resize = () => { if (desktop.matches) close(); };
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
      if (event.key !== 'Tab') return;
      const items = drawer.current?.querySelectorAll<HTMLElement>('a,button');
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    desktop.addEventListener('change', resize);
    window.addEventListener('keydown', key);
    window.addEventListener('pageshow', close);
    window.addEventListener('popstate', close);
    return () => {
      delete document.documentElement.dataset.menuOpen;
      desktop.removeEventListener('change', resize);
      window.removeEventListener('keydown', key);
      window.removeEventListener('pageshow', close);
      window.removeEventListener('popstate', close);
      if (!desktop.matches && window.location.pathname === path) opener?.focus({ preventScroll: true });
    };
  }, [open, path]);

  return <>
    <header className={scrolled ? 'header solid' : 'header'} inert={open}>
      <Link href="/" className="brand">REVIVE<span>AESTHETICS CLINIC</span></Link>
      <nav className="nav" aria-label="Main navigation">
        {links.map(([label, url]) => <Link key={url} href={url} aria-current={path === url ? 'page' : undefined}>{label}</Link>)}
        <BookingLink className="nav-book">Book online<ArrowUpRight size={18} aria-hidden="true"/></BookingLink>
      </nav>
      <button ref={trigger} type="button" className="menu-toggle" aria-controls={open ? 'mobile-navigation' : undefined}
        aria-label="Open navigation" aria-expanded={open} onClick={() => setMenu({ path, closing: false })}>
        <Menu size={23} strokeWidth={1.6} aria-hidden="true"/>
      </button>
    </header>
    {open && createPortal(
      <div ref={drawer} className="mobile-drawer" data-closing={closing} data-lenis-prevent
        role="dialog" aria-modal="true" aria-label="Navigation"
        onAnimationEnd={event => { if (closing && event.target === event.currentTarget) setMenu(null); }}>
        <div className="drawer-header">
          <Link className="brand" href="/" onClick={closeMenu}>REVIVE<span>AESTHETICS CLINIC</span></Link>
          <button ref={closeButton} type="button" aria-label="Close navigation" className="drawer-close" onClick={closeMenu}>
            <X size={23} strokeWidth={1.6} aria-hidden="true"/>
          </button>
        </div>
        <div className="drawer-content">
          <span className="drawer-eyebrow">REVIVE AESTHETICS / MIRPUR</span>
          <nav id="mobile-navigation" aria-label="Mobile navigation">
            {links.map(([label, url], index) => <Link key={url} href={url} style={{ '--item': index } as React.CSSProperties}
              aria-current={path === url ? 'page' : undefined} onClick={closeMenu}>
              <small aria-hidden="true">0{index + 1}</small><span>{label}</span><ArrowUpRight size={20} aria-hidden="true"/>
            </Link>)}
          </nav>
          <BookingLink className="drawer-book" onClick={closeMenu}>
            <span>Choose a practitioner</span><ArrowUpRight size={18} aria-hidden="true"/>
          </BookingLink>
          <div className="drawer-contact"><PractitionerCalls/></div>
        </div>
      </div>, document.body)}
  </>;
}
