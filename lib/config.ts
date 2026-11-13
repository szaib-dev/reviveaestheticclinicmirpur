const openingHours = [
  { label: 'Monday–Thursday', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:30', closes: '17:30', display: '11:30 AM – 5:30 PM' },
  { label: 'Friday', days: ['Friday'], opens: '13:30', closes: '17:30', display: '1:30 PM – 5:30 PM' },
  { label: 'Saturday', days: ['Saturday'], opens: '11:30', closes: '17:30', display: '11:30 AM – 5:30 PM' },
  { label: 'Sunday', days: ['Sunday'], opens: null, closes: null, display: 'Closed' },
];

export const clinic = { name: 'Revive Aesthetics Clinic', location: 'Mirpur, Azad Jammu & Kashmir, Pakistan', instagram: 'https://www.instagram.com/revive.aesthetic.pk/', domain: 'https://www.reviveaestheticsmirpur.com', address: null, landline: { display: '05827432845', href: 'tel:+925827432845' }, hours: openingHours, mapsUrl: 'https://www.google.com/maps/place/Revive+aesthetics/data=!4m2!3m1!1s0x391feb64eaf8eb53:0xc390aea30f24b', directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=33.1447238%2C73.751862', coordinates: { latitude: 33.1447238, longitude: 73.751862 } };
export type Practitioner = { id: string; verified: boolean; name: string | null; phone: string | null; credentials: string[]; bio: string | null; expertise: string[]; image: string | null };
// Names from the clinic card. Owner confirmed matching qualifications for both practitioners.
export const practitioners: Practitioner[] = [
  { id: 'farhat-zafar', verified: true, name: 'Dr. Farhat Zafar', phone: '+923025800744', credentials: ['MBBS (PK)', 'D. Aesthetics', 'General Physician'], bio: null, expertise: [], image: null },
  { id: 'saima-ayub', verified: true, name: 'Dr. Saima Ayub', phone: '+923415609511', credentials: ['MBBS (PK)', 'D. Aesthetics', 'General Physician'], bio: null, expertise: [], image: null },
];
export const preview = process.env.NODE_ENV === 'development';
