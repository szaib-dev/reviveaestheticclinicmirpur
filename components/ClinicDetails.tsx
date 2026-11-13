import { clinic } from '@/lib/config';
import { MapPin, Phone } from 'lucide-react';

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

export function ClinicAddress() {
  return <a className="clinic-address" href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${clinic.address}. Open Revive Aesthetics Clinic in Google Maps (opens in a new tab)`}>
    <MapPin size={20} aria-hidden="true"/><span>{clinic.address}</span>
  </a>;
}
