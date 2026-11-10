import { MessageCircle } from 'lucide-react';
import { practitionerWhatsAppUrl } from '@/lib/booking';

export default function PractitionerWhatsApp({ name, phone }: { name: string; phone: string }) {
  return <a className="text-link" href={practitionerWhatsAppUrl(phone)} aria-label={`Message ${name} on WhatsApp at ${phone}`}>
    <MessageCircle size={17} aria-hidden="true"/><span>WhatsApp · {phone}</span>
  </a>;
}
