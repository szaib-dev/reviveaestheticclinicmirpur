import { ClinicHours, ClinicLandline } from '@/components/ClinicDetails';
import { ArrowUpRight, CalendarDays, Phone, ReceiptText } from 'lucide-react';
import Link from '@/components/PageTransitions';
import BookingLink from '@/components/BookingLink';
import PractitionerContacts from '@/components/PractitionerContacts';
import { meta } from '@/lib/seo';

export const metadata = meta(
  'Online Consultations | Mirpur AJK',
  'Request an online consultation with Revive Aesthetics Clinic in Mirpur, AJK. Find out how to confirm practitioner availability, appointment fees and booking details.',
  '/online-consultation',
);

const steps = [
  { icon: Phone, title: 'Call the clinic', copy: 'Share your preferred days and a brief reason for the consultation. The clinic can help you decide whether to start online or visit in person.' },
  { icon: CalendarDays, title: 'Confirm the appointment details', copy: 'Ask who you’ll speak with, when they’re available and what the consultation costs. Agree on the fee and payment instructions before sending money.' },
  { icon: ReceiptText, title: 'Send your receipt if payment is requested', copy: 'Use the payment instructions agreed with the clinic, then share your receipt using the method the practitioner confirms. Wait for the clinic to confirm your appointment and send joining details.' },
];

export default function Page() {
  return <div className="section page online-page">
    <span className="eyebrow">REVIVE AESTHETICS / ONLINE CONSULTATIONS</span>
    <div className="consultation-guide">
      <div>
        <h1>Start with a <em>conversation.</em></h1>
        <p className="lede">If you’re unsure what treatment to ask for, tell us what you’d like help with. We’ll discuss whether an online consultation is a suitable first step.</p>
        <section id="booking-options" aria-label="Booking and practitioner contacts"><BookingLink className="button"><Phone size={18} aria-hidden="true"/>Call the clinic to book<ArrowUpRight size={18} aria-hidden="true"/></BookingLink><p className="guide-caption">Already know which doctor you’d like to speak with?</p><PractitionerContacts/></section>
        <p className="guide-caption">Confirm availability and the fee with the clinic before paying.</p><ClinicHours/><ClinicLandline/>
      </div>
      <section className="online-process" aria-labelledby="booking-steps">
        <h2 id="booking-steps">How to book</h2>
        <ol>
          {steps.map(({ icon: Icon, title, copy }) => <li className="online-step" key={title}>
            <Icon size={23} aria-hidden="true"/>
            <div><h3>{title}</h3><p>{copy}</p></div>
          </li>)}
        </ol>
      </section>
    </div>
    <div className="online-limit">
      <p>When you first get in touch, a brief description is enough. Ask the clinic how to share any sensitive records securely.</p>
      <Link href="/contact" className="text-link">Clinic contact and location<ArrowUpRight size={18} aria-hidden="true"/></Link>
    </div>
  </div>;
}
