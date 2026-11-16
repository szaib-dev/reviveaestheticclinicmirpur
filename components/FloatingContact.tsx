'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Phone, X } from 'lucide-react';
import { clinic } from '@/lib/config';
import { bookingContacts, practitionerWhatsAppUrl } from '@/lib/booking';
import WhatsAppIcon from './WhatsAppIcon';
export default function FloatingContact() {
  const dialog = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => () => { if(timer.current) clearTimeout(timer.current); }, []);
  function close() { setClosing(true); timer.current = setTimeout(() => { dialog.current?.close(); setClosing(false); }, 220); }
  return <><a className="floating-contact floating-call" href={clinic.landline.href} aria-label={`Call Revive Aesthetics Clinic on ${clinic.landline.display}`}><Phone size={23}/><span>Call the clinic</span></a><button className="floating-contact floating-whatsapp" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-label="Choose a doctor to message on WhatsApp"><WhatsAppIcon/><span>WhatsApp us</span></button><dialog ref={dialog} className={`contact-dialog ${closing ? 'is-closing' : ''}`} aria-labelledby="contact-dialog-title" onCancel={event => {event.preventDefault(); close();}} onClick={event => {if(event.target === event.currentTarget) close();}}><div className="contact-dialog-inner"><button className="dialog-close" aria-label="Close doctor chooser" onClick={close}><X size={20}/></button><span className="dialog-symbol"><WhatsAppIcon size={30}/></span><span className="eyebrow">A CONVERSATION IS A GOOD START</span><h2 id="contact-dialog-title">Who would you<br/>like to speak with?</h2><p>Choose your practitioner to continue on WhatsApp.</p><div className="doctor-choices">{bookingContacts.map(({id,name,phone}) => <a key={id} href={practitionerWhatsAppUrl(phone)} className="doctor-choice"><span className="doctor-initials">{name.split(' ').slice(1).map(word => word[0]).join('')}</span><span><strong>{name}</strong><small>{phone}</small><span className="doctor-message">Message on WhatsApp</span></span><ArrowUpRight size={20}/></a>)}</div><span className="dialog-note">For clinic appointments, you can also <a href={clinic.landline.href}>call {clinic.landline.display}</a>.</span></div></dialog></>;
}
