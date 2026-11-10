import { practitioners } from './config';

export const bookingContacts = practitioners.flatMap(({ id, name, phone, verified, whatsappEnabled }) =>
  verified && name && phone ? [{ id, name, phone, whatsappEnabled }] : [],
);

// Offer the same booking channel to every practitioner shown in the chooser.
export const bookOnWhatsApp = bookingContacts.length > 0 &&
  bookingContacts.every(({ phone, whatsappEnabled }) => whatsappEnabled && /^\+[1-9]\d{9,14}$/.test(phone));

const message = 'Hello Revive, I’d like to ask about booking a consultation. Could you share your availability and the consultation fee?';

export function bookingUrl(phone: string) {
  return bookOnWhatsApp ? `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(message)}` : `tel:${phone}`;
}
