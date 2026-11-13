import DirectionsLink from '@/components/DirectionsLink';
import PractitionerWhatsApp from '@/components/PractitionerWhatsApp';
import BookingLink from '@/components/BookingLink';
import { ArrowUpRight } from 'lucide-react';
import { canonical, JsonLd, meta } from '@/lib/seo';
import Link from '@/components/PageTransitions';
import { practitioners } from '@/lib/config';

export const metadata = meta('Skin Consultations in Mirpur | Our Practitioners', 'Looking for a skin specialist in Mirpur, AJK? Meet Dr. Farhat Zafar and Dr. Saima Ayub at Revive. View listed qualifications and arrange a skin consultation.', '/specialists');

export default function Page() {
  return (
    <div className="section page">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', url: canonical('/specialists'), name: 'Skin consultations and practitioners in Mirpur, AJK', isPartOf: { '@id': canonical('/#website') }, about: { '@id': canonical('/#clinic') }, mainEntity: practitioners.filter(p => p.verified).map(p => ({ '@type': 'Person', '@id': canonical(`/specialists#${p.id}`), name: p.name, url: canonical(`/specialists#${p.id}`), hasCredential: p.credentials.map(name => ({ '@type': 'EducationalOccupationalCredential', name })), worksFor: { '@id': canonical('/#clinic') } })) }}/>
      <span className="eyebrow">THE PEOPLE BEHIND YOUR CARE</span>
      <h1>Skin consultations.<br/><em>In Mirpur, AJK.</em></h1>
      <p className="lede">Looking for a skin specialist in Mirpur? Get to know the practitioners at Revive Aesthetics Clinic, review their listed qualifications and contact the clinic to confirm who will assess your concern.</p>
      <div className="practitioner-grid">
        {practitioners.filter(({ verified }) => verified).map(({ id, name, phone, credentials }) => (
          <article key={id} id={id}>
            <h2>{name}</h2>
            <p>Listed qualifications</p>
            <ul>{credentials.map(credential => <li key={credential}>{credential}</li>)}</ul>
            {name && phone && <PractitionerWhatsApp name={name} phone={phone}/>}
          </article>
        ))}
      </div>
      <section className="directory-group">
        <div><h2>Start with your skin concern</h2><p>You do not need to choose a procedure before booking. Share what concerns you, how long it has been present and what you have already tried.</p></div>
        <div>
          <Link href="/treatments/acne-scar-consultation">Acne, persistent marks and acne scars <ArrowUpRight size={18} aria-hidden="true"/></Link>
          <Link href="/treatments/pigmentation-consultation">Pigmentation and uneven skin tone <ArrowUpRight size={18} aria-hidden="true"/></Link>
          <Link href="/treatments/hydrafacial">Facial care and your skincare routine <ArrowUpRight size={18} aria-hidden="true"/></Link>
          <Link href="/treatments/hair-restoration-consultation">Hair thinning and shedding <ArrowUpRight size={18} aria-hidden="true"/></Link>
        </div>
      </section>
      <section>
        <h2>Before booking a skin consultation</h2>
        <details><summary>How do I choose a skin specialist in Mirpur?</summary><p>Check the practitioner’s professional registration, relevant qualifications and experience with your concern. Ask who will assess you, what the consultation includes and whether referral to another clinician may be appropriate. Contact Revive to confirm the practitioner and scope of your appointment.</p></details>
        <details><summary>What should I bring to my consultation?</summary><p>Bring your skincare and medicine list, details of previous procedures and any relevant medical records. Write down questions about the proposed approach, alternatives, costs, recovery and follow-up.</p></details>
        <details><summary>How do I confirm fees and availability?</summary><p>Call Revive on 05827432845 or use the practitioner contact links above. Confirm the practitioner, consultation fee, appointment time and clinic directions before travelling.</p></details>
        <p>Revive Aesthetics Clinic is in Mirpur, Azad Jammu &amp; Kashmir, Pakistan. <Link href="/contact">Check opening hours and contact the clinic for directions</Link>, or read our guide to <Link href="/journal/choose-skin-specialist-mirpur">choosing a skin clinic in Mirpur</Link>.</p>
      </section>
      <BookingLink className="button">Contact the clinic <ArrowUpRight size={18} aria-hidden="true"/></BookingLink>
      <DirectionsLink/>
    </div>
  );
}
