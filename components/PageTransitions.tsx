'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, type ComponentProps, type ReactNode } from 'react';
import gsap from 'gsap';

const Navigate = createContext<((href: string, replace?: boolean, scroll?: boolean) => boolean) | null>(null);

export function PageTransitions({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Tween | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pending = useRef(false);

  function reveal() {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = null;
    pending.current = false;
    animation.current?.kill();
    animation.current = gsap.to(curtain.current, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.32,
      ease: 'power3.inOut',
    });
  }

  useEffect(() => {
    if (pending.current) reveal();
  }, [pathname]);

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
    animation.current?.kill();
  }, []);

  function navigate(href: string, replace?: boolean, scroll?: boolean) {
    if (!curtain.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    const destination = new URL(href, location.href);
    if (destination.origin !== location.origin || destination.pathname === location.pathname) return false;
    if (pending.current) return true;

    pending.current = true;
    animation.current?.kill();
    animation.current = gsap.to(curtain.current, {
      scaleY: 1,
      transformOrigin: 'bottom',
      duration: 0.23,
      ease: 'power2.inOut',
      onComplete: () => {
        if (replace) router.replace(href, { scroll });
        else router.push(href, { scroll });
        timeout.current = setTimeout(reveal, 900);
      },
    });
    return true;
  }

  return (
    <Navigate.Provider value={navigate}>
      {children}
      <div ref={curtain} className="page-curtain" aria-hidden="true" />
    </Navigate.Provider>
  );
}

export default function PageLink({ href, onNavigate, replace, scroll, ...props }: ComponentProps<typeof Link>) {
  const navigate = useContext(Navigate);
  return (
    <Link {...props} href={href} replace={replace} scroll={scroll} onNavigate={event => {
      if (onNavigate) {
        onNavigate(event);
        return;
      }
      if (typeof href === 'string' && navigate?.(href, replace, scroll)) event.preventDefault();
    }} />
  );
}
