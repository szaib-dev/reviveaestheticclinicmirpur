import Accordion from './Accordion';
import Link from '@/components/PageTransitions';
import { clinic } from '@/lib/config';

export default function LocalCareFaq() {
  return <section className="section local-faq" aria-labelledby="local-faq-title">
    <span className="eyebrow">PLANNING YOUR VISIT IN MIRPUR, AJK</span>
    <h2 id="local-faq-title">A few questions.<br/><em>A clearer next step.</em></h2>
    <Accordion title="Where is Revive Aesthetics Clinic in Mirpur?"><p>Find us at <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">{clinic.address}</a>. Open our Google Maps location to check the pin, then use Get directions to plan your route. <Link href="/contact">View opening hours and contact details</Link> before travelling.</p></Accordion>
    <Accordion title="How do I choose a skin specialist or dermatologist in Mirpur AJK?"><p>Compare current professional registration, recognised qualifications and experience with your concern. Check who will assess you and who will provide follow-up. You can <Link href="/specialists">review the listed qualifications of our practitioners</Link> and read our <Link href="/journal/choose-skin-specialist-mirpur">guide to choosing a skin specialist in Mirpur</Link>.</p></Accordion>
    <Accordion title="Which laser treatment in Mirpur is best for my concern?"><p>Start with what you want assessed rather than a device name. <Link href="/treatments/laser-hair-removal">Laser hair removal</Link>, <Link href="/treatments/tattoo-removal">tattoo removal</Link> and <Link href="/treatments/pigmentation-consultation">pigmentation consultations</Link> address different concerns. Ask about the proposed device, practitioner, suitability for your skin, risks, alternatives and aftercare before deciding.</p></Accordion>
    <Accordion title="Can I book for acne care without choosing a procedure?"><p>Yes. Arrange an <Link href="/treatments/acne-scar-consultation">acne care and scar consultation in Mirpur</Link> to discuss breakouts, marks, texture and your previous skincare. Confirm who will assess you and bring details of products, medicines and previous treatments.</p></Accordion>
    <Accordion title="How much does a consultation or laser treatment cost?"><p>Contact the clinic for current fees. Confirm the consultation charge, what a proposed treatment includes, any separate follow-up costs and the practitioner before agreeing to a plan. A price or number of visits should be discussed for your individual concern.</p></Accordion>
    <Link className="text-link" href="/contact">Ask the clinic about your visit</Link>
  </section>;
}
