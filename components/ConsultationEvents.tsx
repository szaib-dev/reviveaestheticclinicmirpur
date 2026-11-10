'use client';

import { useEffect } from 'react';

export default function ConsultationEvents() {
  useEffect(() => {
    function record(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      const action = href.startsWith('tel:') ? 'phone_click'
        : /^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href) ? 'whatsapp_click'
        : /^\/(contact|online-consultation)\/?$/.test(href) ? 'consultation_click'
        : null;
      if (!action) return;
      const analytics = window as Window & { dataLayer?: Record<string, string>[] };
      (analytics.dataLayer ??= []).push({ event: action });
    }
    document.addEventListener('click', record, { passive: true });
    return () => document.removeEventListener('click', record);
  }, []);
  return null;
}
