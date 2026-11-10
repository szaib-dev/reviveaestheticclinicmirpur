import { JournalCards } from '@/components/JournalCards';
import { meta } from '@/lib/seo';

export const metadata = meta(
  'Skin, Hair & Aesthetics Journal in Mirpur',
  'Explore practical guides from Revive Aesthetics Clinic in Mirpur, AJK, on choosing a clinic, HydraFacial, acne scars, laser hair removal and hair PRP.',
  '/journal',
);

export default function Page() {
  return <div className="section page">
    <span className="eyebrow">THE REVIVE JOURNAL</span>
    <h1>Informed choices.<br/><em>A fresh perspective.</em></h1>
    <p className="lede">Explore skin, hair and aesthetic care, with questions to bring to your next consultation in Mirpur.</p>
    <JournalCards all/>
  </div>;
}
