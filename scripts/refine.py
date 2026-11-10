import pathlib
r=pathlib.Path('.')
def put(p,s): (r/p).write_text(s,encoding='utf-8')
# Completely replace the clinic introduction.
p=r/'app/page.tsx';s=p.read_text(encoding='utf-8');a=s.index('<section className="identity-section"');b=s.index('<Treatments/>',a)
s=s[:a]+'''<section className="approach-v3" id="philosophy"><div className="approach-index"><span className="kicker">01 / THE REVIVE APPROACH</span><span>PERSONAL BY DESIGN</span></div><div className="approach-composition"><div className="approach-type"><span className="approach-rule"/><h2><span className="reveal-line">Individual.</span><span className="reveal-line"><em>By design.</em></span></h2><p className="approach-lead">A treatment is a decision.<br/>Understanding you comes first.</p><Link href="/about" className="text-link">The way we care <ArrowUpRight aria-hidden="true" size={18}/></Link></div><div className="approach-visual"><Photo name="skin-study"/><span className="approach-caption">AESTHETIC CARE / EDITORIAL PHOTOGRAPHY</span><div className="care-stamp"><ScanFace aria-hidden="true" size={23}/><span>YOUR SKIN.<br/>YOUR STORY.</span></div></div></div><div className="approach-principles">{[{icon:MessagesSquare,title:'A conversation first',copy:'Your concerns, medical history and expectations guide the conversation.'},{icon:ScanFace,title:'A personal perspective',copy:'Explore suitability, options and alternatives before choosing a treatment.'},{icon:ShieldCheck,title:'Space to decide',copy:'Ask about risks, recovery and costs. Take the time you need.'}].map(({icon:Icon,title,copy})=><div className="principle" key={title}><Icon aria-hidden="true" size={24}/><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>
'''+s[b:]
s=s.replace('className="round-link"','className="hero-booking"').replace('<span>Begin your<br/>consultation</span><b>↗</b>','<span>Book a consultation</span><ArrowUpRight aria-hidden="true" size={20}/>')
s="import {ArrowUpRight,ArrowDown,ScanFace,MessagesSquare,ShieldCheck} from 'lucide-react';\n"+s
s=s.replace('↗','<ArrowUpRight aria-hidden="true" size={18}/>').replace('<span>↓</span>','<ArrowDown aria-hidden="true" size={18}/>')
put('app/page.tsx',s)
put('components/Footer.tsx','''import Link from 'next/link';
import {ArrowUpRight,Phone,Instagram,MapPin,ArrowRight} from 'lucide-react';
import {clinic} from '@/lib/config';
export default function Footer(){return <footer className="footer-v3"><div className="footer-invitation"><div><span className="kicker">YOUR NEXT CHAPTER / REVIVE</span><h2>Your care.<br/><em>Your next chapter.</em></h2></div><div className="footer-booking"><p>Begin with a conversation about what matters to you.</p><Link href="/contact" className="booking-bar"><span>Arrange a consultation</span><ArrowUpRight size={22} aria-hidden="true"/></Link><a href={clinic.telephone} className="footer-call"><Phone size={17} aria-hidden="true"/>{clinic.phone}</a></div></div><div className="footer-information"><div className="footer-location"><span className="kicker">A PERSONAL CONNECTION</span><p><MapPin size={18} aria-hidden="true"/>Mirpur, Azad Jammu & Kashmir<br/>Pakistan</p><span>Call for directions and current opening hours.</span><a href={clinic.instagram} target="_blank" rel="noreferrer" className="footer-social"><Instagram size={18} aria-hidden="true"/>Follow Revive<ArrowUpRight size={16} aria-hidden="true"/></a></div><nav aria-label="Footer treatments"><span className="kicker">EXPLORE CARE</span><Link href="/treatments/hydrafacial">Skin & facials</Link><Link href="/treatments/botox">Aesthetic treatments</Link><Link href="/treatments/laser-hair-removal">Laser & corrective care</Link><Link href="/treatments/hair-prp">Hair restoration</Link><Link href="/treatments/dietary-counseling">Wellness & nutrition</Link></nav><nav aria-label="Footer clinic"><span className="kicker">GET TO KNOW REVIVE</span><Link href="/about">Our approach</Link><Link href="/specialists">Practitioner information</Link><Link href="/journal">The journal</Link><Link href="/contact">Contact the clinic<ArrowRight size={16} aria-hidden="true"/></Link></nav></div><Link href="/" className="footer-wordmark" aria-label="Revive Aesthetics Clinic home">REVIVE<span>AESTHETICS CLINIC</span></Link><div className="footer-legal"><span>INDIVIDUAL BY NATURE. PERSONAL BY DESIGN.</span><span>Editorial imagery · not Revive patients or premises</span></div></footer>}
''')
# Consistent SVG icons in interactive controls; Journal unchanged.
for f in ['components/Header.tsx','components/Treatments.tsx','components/Consultation.tsx']:
 p=r/f;s=p.read_text(encoding='utf-8');s=s.replace("'use client';","'use client';\nimport {ArrowUpRight} from 'lucide-react';",1).replace('↗','<ArrowUpRight aria-hidden="true" size={18}/>')
 if 'Header' in f:
  s=s.replace("import {ArrowUpRight}","import {ArrowUpRight,Menu,X}")
  s=s.replace("{open?'Close −':'Menu +'}","<span>{open?'Close':'Menu'}</span>{open?<X size={20} aria-hidden=\"true\"/>:<Menu size={20} aria-hidden=\"true\"/>}")
 put(f,s)
put('components/Motion.tsx',''' 'use client';
import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,useGSAP);
export default function Motion(){useGSAP(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
 const intro=gsap.timeline({defaults:{ease:'power3.out'}});
 intro.from('.cinema-image',{scale:1.035,opacity:.5,duration:1.25},0).from('.hero-line',{y:32,opacity:0,stagger:.13,duration:1},.05).from('.header',{y:-10,opacity:0,duration:.7},0);
 gsap.utils.toArray<HTMLElement>('.reveal-line').forEach(el=>gsap.from(el,{y:55,opacity:.2,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
 gsap.from('.approach-visual',{y:55,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'.approach-visual',start:'top 90%',once:true}});
 gsap.from('.principle',{y:25,opacity:0,stagger:.12,duration:.8,scrollTrigger:{trigger:'.approach-principles',start:'top 92%',once:true}});
 gsap.from('.collection-tabs button',{y:20,opacity:0,stagger:.055,duration:.7,scrollTrigger:{trigger:'.collection-tabs',start:'top 92%',once:true}});
 const scene=gsap.timeline({scrollTrigger:{trigger:'.perspective-scene',start:'top 80%',end:'bottom 25%',scrub:.5}});
 scene.fromTo('.orbit-one',{rotate:-25},{rotate:30},0).fromTo('.orbit-two',{rotate:25},{rotate:-20},0).fromTo('.orbit-three',{y:40},{y:-40},0).fromTo('.scene-word',{opacity:.7,y:25},{opacity:1,y:0,stagger:.15},0);
 gsap.from('.footer-invitation h2',{y:40,opacity:0,duration:1,scrollTrigger:{trigger:'.footer-invitation',start:'top 90%',once:true}});
 });return()=>mm.revert()},[]);return null}
''')
put('components/SmoothScroll.tsx',''' 'use client';
import {useEffect} from 'react';import {usePathname} from 'next/navigation';import Lenis from 'lenis';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
gsap.registerPlugin(ScrollTrigger);
export default function SmoothScroll(){const pathname=usePathname();useEffect(()=>{
 const media=matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)');let cleanup=()=>{};
 function setup(){cleanup();if(!media.matches)return;const lenis=new Lenis({lerp:.12,smoothWheel:true,syncTouch:false,anchors:{offset:-95},autoRaf:false,prevent:node=>node.closest('.nav.open')!==null});const tick=(time:number)=>lenis.raf(time*1000);lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tick);document.documentElement.dataset.smoothScroll='enabled';cleanup=()=>{gsap.ticker.remove(tick);lenis.destroy();delete document.documentElement.dataset.smoothScroll};}
 setup();media.addEventListener('change',setup);return()=>{cleanup();media.removeEventListener('change',setup)};
 },[pathname]);return null}
''')
p=r/'app/layout.tsx';s=p.read_text(encoding='utf-8');s="import SmoothScroll from '@/components/SmoothScroll';\nimport './refinement.css';\n"+s;s=s.replace('<Header/>','<SmoothScroll/><Header/>');put('app/layout.tsx',s)
