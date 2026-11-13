import 'lenis/dist/lenis.css';
import SmoothScroll from '@/components/SmoothScroll';
import {PageTransitions} from '@/components/PageTransitions';
import ConsultationEvents from '@/components/ConsultationEvents';


import type {Metadata} from 'next';import './globals.css';import './home.css';import './refinement.css';import './interaction.css';import Header from '@/components/Header';import Footer from '@/components/Footer';import {clinic} from '@/lib/config';
export const metadata:Metadata={metadataBase:new URL(clinic.domain),title:{default:'Skin Care in Mirpur AJK | Revive Aesthetics',template:'%s | Revive Aesthetics'},description:'Personal skin care in Mirpur, AJK at Revive Aesthetics Clinic. Explore facials, skin consultations, laser hair removal, hair PRP and aesthetic care.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-PK"><body><a className="skip" href="#main">Skip to content</a><PageTransitions><SmoothScroll/><Header/><main id="main">{children}</main><Footer/></PageTransitions><ConsultationEvents/></body></html>}
