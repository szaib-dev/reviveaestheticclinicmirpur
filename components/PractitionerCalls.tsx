import { Phone } from 'lucide-react';
import { bookingContacts } from '@/lib/booking';

export default function PractitionerCalls() {
  return <ul className="practitioner-contacts" aria-label="Practitioner phone numbers">
    {bookingContacts.map(({ id, name, phone }) =>
      <li key={id}>
        <span>{name}</span>
        <a className="text-link" href={`tel:${phone}`} aria-label={`Call ${name} at ${phone}`}>
          <Phone size={17} aria-hidden="true"/>{phone}
        </a>
      </li>
    )}
  </ul>;
}
