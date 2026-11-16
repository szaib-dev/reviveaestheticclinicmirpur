import { MapPin } from 'lucide-react';
import DirectionsLink from './DirectionsLink';
import { clinic } from '@/lib/config';
export default function ClinicMap() {
  return <section className="clinic-map-section" aria-labelledby="map-title"><div className="map-heading"><div><span className="eyebrow">COME SAY HELLO</span><h2 id="map-title">Find us in Mirpur.</h2><p><MapPin size={18} aria-hidden="true"/>{clinic.address}</p></div><DirectionsLink/></div><div className="map-frame"><iframe title="Revive Aesthetics Clinic location in Mirpur" src="https://maps.google.com/maps?q=33.1447238,73.751862&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><span className="map-label">Revive Aesthetics Clinic <span>Mirpur, AJK</span></span></div></section>;
}
