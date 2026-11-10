import { bookingContacts } from '@/lib/booking';
import PractitionerWhatsApp from './PractitionerWhatsApp';

export default function PractitionerContacts() {
  return <ul className="practitioner-contacts" aria-label="Practitioner WhatsApp contacts">
    {bookingContacts.map(({ id, name, phone }) =>
      <li key={id}>
        <span>{name}</span>
        <PractitionerWhatsApp name={name} phone={phone}/>
      </li>
    )}
  </ul>;
}
