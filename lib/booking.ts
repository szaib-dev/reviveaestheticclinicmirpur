import { practitioners } from './config';

export const bookingContacts = practitioners.flatMap(({ id, name, phone, verified }) =>
  verified && name && phone ? [{ id, name, phone }] : [],
);

const message = 'Hello, I’d like to ask about booking a consultation at Revive. Could you share your availability and the consultation fee?';

export function practitionerWhatsAppUrl(phone: string) {
  return `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(message)}`;
}
