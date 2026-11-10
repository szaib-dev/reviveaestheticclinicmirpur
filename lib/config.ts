const bookingNumber = '+923025800744';

export const clinic = { name: 'Revive Aesthetics Clinic', location: 'Mirpur, Azad Jammu & Kashmir, Pakistan', phone: bookingNumber, telephone: `tel:${bookingNumber}`, instagram: 'https://www.instagram.com/revive.aesthetic.pk/', domain: 'https://www.reviveaestheticsmirpur.com', address: null, hours: null, mapsUrl: null, whatsapp: {number: bookingNumber, verified: true, placeholder: '+92 XXX XXXXXXX'}, onlineConsultation: {feePKR: 0, feeConfirmed: false} };
export type Practitioner = { id: string; verified: boolean; name: string | null; credentials: string[]; bio: string | null; expertise: string[]; image: string | null };
// Names and qualifications as listed on the clinic owner's card.
export const practitioners: Practitioner[] = [
  { id: 'farhat-zafar', verified: true, name: 'Dr. Farhat Zafar', credentials: ['MBBS (PK)', 'D. Derma (UK)', 'D. Aesthetics'], bio: null, expertise: [], image: null },
  { id: 'saima-ayub', verified: true, name: 'Dr. Saima Ayub', credentials: ['MBBS (PK)', 'D. Aesthetics', 'General Physician'], bio: null, expertise: [], image: null },
];
export const preview = process.env.NODE_ENV === 'development';
