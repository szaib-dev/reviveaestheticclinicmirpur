import { clinic } from '@/lib/config';
import { Phone } from 'lucide-react';

export function ClinicHours() {
  return <dl className="clinic-hours" aria-label="Clinic opening hours, Pakistan Standard Time">
    {clinic.hours.map(({ label, display }) => <div key={label}><dt>{label}</dt><dd>{display}</dd></div>)}
  </dl>;
}

export function ClinicLandline() {
  return <a className="clinic-landline text-link" href={clinic.landline.href}>
    <Phone size={16} aria-hidden="true"/>Clinic landline · {clinic.landline.display}
  </a>;
}
