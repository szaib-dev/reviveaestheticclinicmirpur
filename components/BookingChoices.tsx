import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { bookingContacts, bookingUrl, bookOnWhatsApp } from '@/lib/booking';

export function BookingChoices() {
  const Icon = bookOnWhatsApp ? MessageCircle : Phone;
  return <ul className="booking-choices">
    {bookingContacts.map(({ id, name, phone }) =>
      <li key={id}>
        <a href={bookingUrl(phone)} aria-label={`${bookOnWhatsApp ? 'Message' : 'Call'} ${name} at ${phone}`}>
          <Icon size={20} aria-hidden="true"/>
          <span><strong>{name}</strong><small>{phone}</small></span>
          <ArrowUpRight size={18} aria-hidden="true"/>
        </a>
      </li>
    )}
  </ul>;
}
