import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { meta } from '@/lib/seo';
import { practitioners } from '@/lib/config';

export const metadata = meta('Our Specialists', 'Meet Dr. Farhat Zafar and Dr. Saima Ayub at Revive Aesthetics Clinic in Mirpur, AJK.', '/specialists');

export default function Page() {
  return (
    <div className="section page">
      <span className="eyebrow">THE PEOPLE BEHIND YOUR CARE</span>
      <h1>Meet your<br/><em>practitioners.</em></h1>
      <p className="lede">Learn about the practitioners at Revive. Contact the clinic to confirm who will conduct your consultation.</p>
      <div className="practitioner-grid">
        {practitioners.filter(({ verified }) => verified).map(({ id, name, credentials }) => (
          <article key={id}>
            <h2>{name}</h2>
            <ul>{credentials.map(credential => <li key={credential}>{credential}</li>)}</ul>
          </article>
        ))}
      </div>
      <Link className="button" href="/contact">Contact the clinic <ArrowUpRight size={18} aria-hidden="true"/></Link>
    </div>
  );
}
