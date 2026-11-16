'use client';
import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
export default function Accordion({title, children}: {title: string; children: React.ReactNode}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return <div className={`faq-item ${open ? 'is-open' : ''}`}><h3><button aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>{title}<span><Plus size={18} aria-hidden="true"/></span></button></h3><div id={id} className="faq-reveal" inert={!open}><div><div className="faq-answer">{children}</div></div></div></div>;
}
