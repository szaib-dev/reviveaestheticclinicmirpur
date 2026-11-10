const openingHours = [
  { label: 'Monday–Thursday', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:30', closes: '17:30', display: '11:30 AM – 5:30 PM' },
  { label: 'Friday', days: ['Friday'], opens: '13:30', closes: '17:30', display: '1:30 PM – 5:30 PM' },
  { label: 'Saturday', days: ['Saturday'], opens: '11:30', closes: '17:30', display: '11:30 AM – 5:30 PM' },
  { label: 'Sunday', days: ['Sunday'], opens: null, closes: null, display: 'Closed' },
];

export const clinic = { name: 'Revive Aesthetics Clinic', location: 'Mirpur, Azad Jammu & Kashmir, Pakistan', instagram: 'https://www.instagram.com/revive.aesthetic.pk/', domain: 'https://www.reviveaestheticsmirpur.com', address: null, landline: { display: '05827432845', href: 'tel:+925827432845' }, hours: openingHours, mapsUrl: null };
export type Practitioner = { id: string; verified: boolean; name: string | null; phone: string | null; whatsappEnabled?: boolean; credentials: string[]; bio: string | null; expertise: string[]; image: string | null };
// Names and qualifications as listed on the clinic owner's card.
export const practitioners: Practitioner[] = [
  { id: 'farhat-zafar', verified: true, name: 'Dr. Farhat Zafar', phone: '+923025800744', whatsappEnabled: true, credentials: ['MBBS (PK)', 'D. Derma (UK)', 'D. Aesthetics'], bio: null, expertise: [], image: null },
  { id: 'saima-ayub', verified: true, name: 'Dr. Saima Ayub', phone: '+923415609511', credentials: ['MBBS (PK)', 'D. Aesthetics', 'General Physician'], bio: null, expertise: [], image: null },
];
export const preview = process.env.NODE_ENV === 'development';
