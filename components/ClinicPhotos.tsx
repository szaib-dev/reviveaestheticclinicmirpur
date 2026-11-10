import Image from 'next/image';
import reception from '@/public/images/clinic-reception.jpg';
import treatmentRoom from '@/public/images/clinic-treatment-room.jpg';
import seating from '@/public/images/clinic-seating.jpg';
import careRoom from '@/public/images/clinic-care-room.jpg';

const photos = [
  { src: reception, alt: 'Reception desk and seating at Revive Aesthetics Clinic', label: 'Reception' },
  { src: seating, alt: 'Sofa and chairs inside Revive Aesthetics Clinic', label: 'Seating area' },
  { src: treatmentRoom, alt: 'Treatment bed and equipment inside Revive Aesthetics Clinic', label: 'Treatment room' },
  { src: careRoom, alt: 'View through the doorway into a Revive treatment room', label: 'Inside a treatment room' },
];

export default function ClinicPhotos({ featured = false }: { featured?: boolean }) {
  return (
    <div className={featured ? 'clinic-photo-feature' : 'clinic-photo-grid'}>
      {(featured ? photos.slice(0, 1) : photos.slice(1)).map(({ src, alt, label }) => (
        <figure key={label}>
          <Image src={src} alt={alt} sizes={featured ? '(max-width: 767px) 88vw, 52vw' : '(max-width: 767px) 88vw, 28vw'} placeholder="blur" />
          <figcaption>{label} · Revive Aesthetics Clinic</figcaption>
        </figure>
      ))}
    </div>
  );
}
