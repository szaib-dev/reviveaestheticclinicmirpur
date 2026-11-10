import Image from 'next/image';
import reception from '@/public/images/clinic-reception-retouched.png';
import careRoom from '@/public/images/clinic-care-room-retouched.png';

import seating from '@/public/images/clinic-seating-retouched.png';

import treatmentRoom from '@/public/images/clinic-treatment-room-retouched.png';

const photos = [
  { src: reception, alt: 'Retouched view of the cream reception desk and mauve sofa at Revive', label: 'Reception' },
  { src: seating, alt: 'Retouched view of the sofa and chairs at Revive', label: 'Seating area' },
  { src: careRoom, alt: 'Retouched view into a Revive treatment room', label: 'Inside a treatment room' },
  { src: treatmentRoom, alt: 'Retouched view of a treatment bed and equipment at Revive', label: 'Treatment room' },
];

export default function ClinicPhotos({ featured = false }: { featured?: boolean }) {
  return (
    <div className={featured ? 'clinic-photo-feature' : 'clinic-photo-grid'}>
      {(featured ? photos.slice(0, 1) : photos).map(({ src, alt, label }) => (
        <figure key={label}>
          <Image src={src} alt={alt} sizes={featured ? '(max-width: 767px) 88vw, 52vw' : '(max-width: 767px) 88vw, 28vw'} placeholder="blur" />
          <figcaption>{label} · Retouched clinic photograph</figcaption>
        </figure>
      ))}
    </div>
  );
}
