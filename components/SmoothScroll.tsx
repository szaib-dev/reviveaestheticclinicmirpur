'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const desktopMotion = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let lenis: Lenis | undefined;

    function syncMenu() {
      if (document.documentElement.dataset.menuOpen) lenis?.stop();
      else lenis?.start();
    }

    function syncPreference() {
      lenis?.destroy();
      lenis = desktopMotion.matches ? new Lenis({ autoRaf: true, lerp: 0.16 }) : undefined;
      syncMenu();
    }

    const menu = new MutationObserver(syncMenu);
    menu.observe(document.documentElement, { attributeFilter: ['data-menu-open'] });
    desktopMotion.addEventListener('change', syncPreference);
    syncPreference();
    return () => {
      menu.disconnect();
      desktopMotion.removeEventListener('change', syncPreference);
      lenis?.destroy();
    };
  }, []);
  return null;
}
