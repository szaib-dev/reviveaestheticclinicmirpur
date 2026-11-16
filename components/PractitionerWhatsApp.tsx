import WhatsAppIcon from './WhatsAppIcon';
import { practitionerWhatsAppUrl } from '@/lib/booking';

export default function PractitionerWhatsApp({ name, phone }: { name: string; phone: string }) {
  return <a className="text-link" href={practitionerWhatsAppUrl(phone)} aria-label={`Message ${name} on WhatsApp at ${phone}`}>
    <WhatsAppIcon size={20}/><span>WhatsApp · {phone}</span>
  </a>;
}
