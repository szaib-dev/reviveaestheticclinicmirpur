import { clinic } from '@/lib/config';
import { whatsappBookingUrl } from '@/lib/booking';
import type { ComponentPropsWithoutRef } from 'react';

export default function BookingLink({ children, ...props }: Omit<ComponentPropsWithoutRef<'a'>, 'href'>) {
  const url = whatsappBookingUrl();
  return <a {...props} href={url ?? clinic.telephone}>{children}</a>;
}
