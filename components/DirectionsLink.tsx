import { MapPin, ArrowUpRight } from 'lucide-react';
import { clinic } from '@/lib/config';

export default function DirectionsLink({ className = '' }: { className?: string }) {
  return <a className={`directions-link ${className}`} href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Revive Aesthetics Clinic in Google Maps (opens in a new tab)">
    <MapPin size={18} aria-hidden="true"/><span>Get directions</span><ArrowUpRight size={16} aria-hidden="true"/>
  </a>;
}
