import Link from '@/components/PageTransitions';
import { ArrowUpRight } from 'lucide-react';

export default function LaserCareGuide() {
  return <section className="directory-group" id="laser-treatment-mirpur">
    <div><span className="eyebrow">LASER CONSULTATIONS IN MIRPUR, AJK</span><h2>Start with the concern.<br/><em>Then the options.</em></h2><p>Looking for the best laser treatment in Mirpur? Compare options for your concern, confirm the device and practitioner, and discuss your skin history before choosing a procedure. Ask about preparation, risks, aftercare and the full proposed cost.</p></div>
    <div>
      <Link href="/treatments/laser-hair-removal">Laser hair removal consultations <ArrowUpRight size={18} aria-hidden="true"/></Link>
      <Link href="/treatments/pigmentation-consultation">Pigmentation and uneven tone <ArrowUpRight size={18} aria-hidden="true"/></Link>
      <Link href="/treatments/tattoo-removal">Tattoo removal enquiries <ArrowUpRight size={18} aria-hidden="true"/></Link>
      <Link href="/treatments/q-switch-laser">Q-Switch laser consultations <ArrowUpRight size={18} aria-hidden="true"/></Link>
      <Link href="/treatments/carbon-laser">Carbon laser consultations <ArrowUpRight size={18} aria-hidden="true"/></Link>
    </div>
  </section>;
}
