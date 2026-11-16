'use client';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight as ArrowUpRight, FiPhone as Phone, FiX as X } from 'react-icons/fi';
import { clinic } from '@/lib/config';
import { bookingContacts, practitionerWhatsAppUrl } from '@/lib/booking';
import WhatsAppIcon from './WhatsAppIcon';
export default function FloatingContact() {
  const dialog = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => () => { if(timer.current) clearTimeout(timer.current); }, []);
  function close() { setClosing(true); timer.current = setTimeout(() => { dialog.current?.close(); setClosing(false); }, 220); }
  return <><a className="floating-contact floating-call" href={clinic.landline.href} aria-label={`Call Revive Aesthetics Clinic on ${clinic.landline.display}`}><Phone size={23}/><span>Call the clinic</span></a><button className="floating-contact floating-whatsapp" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-label="Choose a doctor to message on WhatsApp"><WhatsAppIcon/><span>WhatsApp us</span></button><dialog ref={dialog} className={`contact-dialog ${closing ? 'is-closing' : ''}`} aria-labelledby="contact-dialog-title" aria-describedby="contact-dialog-description" onCancel={event => {event.preventDefault(); close();}} onClick={event => {if(event.target === event.currentTarget) close();}}><div className="contact-dialog-inner"><button className="dialog-close" aria-label="Close doctor chooser" onClick={close}><X size={20}/></button><header className="dialog-heading"><span className="dialog-symbol"><WhatsAppIcon size={32}/></span><h2 id="contact-dialog-title">Message your doctor</h2><p id="contact-dialog-description">Choose who you’d like to contact.</p></header><div className="doctor-choices">{bookingContacts.map(({id,name,phone}) => <a key={id} href={practitionerWhatsAppUrl(phone)} className="doctor-choice"><span className="doctor-contact-icon"><WhatsAppIcon size={25}/></span><span><strong>{name}</strong><small>{phone}</small></span><ArrowUpRight size={20}/></a>)}</div><a className="dialog-call" href={clinic.landline.href}><Phone size={16} aria-hidden="true"/><span>Call the clinic <strong>{clinic.landline.display}</strong></span></a></div></dialog></>;
}
