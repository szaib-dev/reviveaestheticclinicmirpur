

import type {Metadata} from 'next';import './globals.css';import './home.css';import './refinement.css';import Header from '@/components/Header';import Footer from '@/components/Footer';import {clinic} from '@/lib/config';
export const metadata:Metadata={metadataBase:new URL(clinic.domain || 'http://localhost:3000'),title:{default:'Revive Aesthetics Clinic | Mirpur, AJK',template:'%s | Revive Aesthetics'},description:'Explore skin, aesthetics, hair and wellness consultations at Revive Aesthetics Clinic in Mirpur, AJK.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
