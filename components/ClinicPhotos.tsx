import Image from 'next/image';
import reception from '@/public/images/clinic-reception-retouched.png';
import careRoom from '@/public/images/clinic-procedure-room.jpg';

import seating from '@/public/images/clinic-seating-retouched.png';

import treatmentRoom from '@/public/images/clinic-facial-room.jpg';

const photos = [
  { src: reception, alt: 'Retouched view of the cream reception desk and mauve sofa at Revive', label: 'Reception', retouched: true },
  { src: seating, alt: 'Retouched view of the sofa and chairs at Revive', label: 'Seating area', retouched: true },
  { src: careRoom, alt: 'Blue-covered treatment bed and equipment in the Revive procedure room', label: 'Procedure room', retouched: false },
  { src: treatmentRoom, alt: 'Treatment chair and facial equipment inside Revive', label: 'Facial treatment room', retouched: false },
];

export default function ClinicPhotos({ featured = false }: { featured?: boolean }) {
  return (
    <div className={featured ? 'clinic-photo-feature' : 'clinic-photo-grid'}>
      {(featured ? photos.slice(0, 1) : photos).map(({ src, alt, label, retouched }) => (
        <figure key={label}>
          <Image src={src} alt={alt} sizes={featured ? '(max-width: 767px) 88vw, 52vw' : '(max-width: 767px) 88vw, 28vw'} placeholder="blur" />
          <figcaption>{label} · {retouched ? 'Retouched clinic photograph' : 'Clinic photograph'}</figcaption>
        </figure>
      ))}
    </div>
  );
}
