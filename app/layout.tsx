import BookingDialog from '@/components/BookingDialog';
import 'lenis/dist/lenis.css';
import SmoothScroll from '@/components/SmoothScroll';
import {PageTransitions} from '@/components/PageTransitions';
import ConsultationEvents from '@/components/ConsultationEvents';


import type {Metadata} from 'next';import './globals.css';import './home.css';import './refinement.css';import './interaction.css';import Header from '@/components/Header';import Footer from '@/components/Footer';import {clinic} from '@/lib/config';
export const metadata:Metadata={metadataBase:new URL(clinic.domain),title:{default:'Revive Aesthetics Clinic | Mirpur, AJK',template:'%s | Revive Aesthetics'},description:'Explore skin, aesthetics, hair and wellness consultations at Revive Aesthetics Clinic in Mirpur, AJK.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-PK"><body><a className="skip" href="#main">Skip to content</a><PageTransitions><SmoothScroll/><Header/><main id="main">{children}</main><Footer/></PageTransitions><BookingDialog/><ConsultationEvents/></body></html>}
