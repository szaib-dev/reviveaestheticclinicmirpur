import type { ComponentPropsWithoutRef } from 'react';
import { clinic } from '@/lib/config';

export default function BookingLink({ children, ...props }: Omit<ComponentPropsWithoutRef<'a'>, 'href'>) {
  return <a {...props} href={clinic.landline.href}>{children}</a>;
}
