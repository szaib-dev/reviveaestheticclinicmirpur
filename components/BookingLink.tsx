'use client';

import type { ComponentPropsWithoutRef } from 'react';

export default function BookingLink({ children, onClick, ...props }: Omit<ComponentPropsWithoutRef<'a'>, 'href'>) {
  return <a {...props} href="/online-consultation#booking-options" onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const dialog = document.querySelector<HTMLDialogElement>('#booking-dialog');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    if (dialog.open) return;
    if (event.currentTarget.closest('.mobile-drawer')) {
      dialog.addEventListener('close', () => {
        if (document.activeElement === document.body) {
          document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus({ preventScroll: true });
        }
      }, { once: true });
    }
    dialog.showModal();
  }}>{children}</a>;
}
