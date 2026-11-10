import { ClinicHours, ClinicLandline } from './ClinicDetails';
import { X } from 'lucide-react';
import { bookOnWhatsApp } from '@/lib/booking';
import { BookingChoices } from './BookingChoices';

export default function BookingDialog() {
  return <dialog id="booking-dialog" aria-labelledby="booking-title" className="booking-dialog" data-lenis-prevent>
    <form method="dialog"><button type="submit" aria-label="Close booking options"><X size={22} aria-hidden="true"/></button></form>
    <span className="eyebrow">REVIVE AESTHETICS / BOOKING</span>
    <h2 id="booking-title">Choose your practitioner</h2>
    <p>{bookOnWhatsApp ? 'Message either practitioner on WhatsApp to confirm availability.' : 'Call either practitioner to ask about booking and availability.'}</p>
    <BookingChoices/><details className="booking-hours"><summary>Clinic hours and landline</summary><ClinicHours/><ClinicLandline/></details>
  </dialog>;
}
