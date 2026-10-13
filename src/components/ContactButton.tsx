import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl, trackContact } from '../utils/contact';
export function ContactButton({label='Agendar una evaluación', treatment, light=false}:{label?:string;treatment?:string;light?:boolean}) {
 const href=whatsappUrl(treatment);
 return href ? <a className={`button ${light?'light':''}`} href={href} target="_blank" rel="noopener noreferrer" onClick={trackContact}><MessageCircle size={17}/>{label}<ArrowUpRight size={18}/></a> : <span className="contact-pending"><button className={`button ${light?'light':''}`} disabled><MessageCircle size={17}/>{label}</button><small>WhatsApp pendiente de habilitación</small></span>;
}

