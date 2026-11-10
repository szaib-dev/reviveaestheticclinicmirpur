 'use client';
import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,useGSAP);
// Mobile toolbar resizes must not repeatedly refresh scroll positions.
ScrollTrigger.config({ignoreMobileResize:true});
export default function Motion(){useGSAP(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
 const intro=gsap.timeline({defaults:{ease:'power3.out'}});intro.from('.cinema-image',{opacity:.65,duration:1},0).from('.hero-line',{y:28,opacity:.15,stagger:.12,duration:.9},.05);
 const targets=gsap.utils.toArray<HTMLElement>('.reveal-line,.approach-visual,.principle,.collection-heading h2,.collection-tabs,.clinic-heading h2,.clinic-photo-feature,.consultation-title h2,.footer-invitation h2');
 const tweens:gsap.core.Tween[]=[];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;observer.unobserve(entry.target);tweens.push(gsap.fromTo(entry.target,{y:30,opacity:.25},{y:0,opacity:1,duration:.85,ease:'power3.out',clearProps:'transform,opacity'}))}},{threshold:.12,rootMargin:'0px 0px -35px 0px'});targets.forEach(el=>observer.observe(el));
 const scene=document.querySelector('.perspective-scene');const sceneObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){sceneObserver.disconnect();tweens.push(gsap.fromTo('.scene-word',{y:35,opacity:.35},{y:0,opacity:1,stagger:.18,duration:1,ease:'power3.out',clearProps:'transform,opacity'}));tweens.push(gsap.fromTo('.orbit-one',{rotate:-18},{rotate:12,duration:2,ease:'power2.out'}))}},{threshold:.25});if(scene)sceneObserver.observe(scene);
 return()=>{observer.disconnect();sceneObserver.disconnect();tweens.forEach(t=>t.kill());gsap.set([...targets,...gsap.utils.toArray<HTMLElement>('.scene-word,.orbit-one')],{clearProps:'transform,opacity'})};
 });mm.add('(min-width:1101px) and (prefers-reduced-motion: no-preference)',()=>{gsap.to('.orbit-two',{rotate:-25,ease:'none',scrollTrigger:{trigger:'.perspective-scene',start:'top bottom',end:'bottom top',scrub:.4}})});return()=>mm.revert()},[]);return null}
