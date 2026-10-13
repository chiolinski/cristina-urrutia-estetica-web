import { config } from '../config/site';
export function whatsappUrl(treatment?: string) {
 const message = treatment ? `Hola, Dra. Cristina. Visité su página web y me gustaría consultar sobre ${treatment} y solicitar una evaluación para saber si es una alternativa adecuada para mí. Muchas gracias.` : 'Hola, Dra. Cristina. Visité su página web y me gustaría solicitar información para agendar una evaluación de estética orofacial. Muchas gracias.';
 return config.whatsapp ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}` : '';
}
export function trackContact() { if (window.localStorage.getItem('analytics-consent') === 'granted') window.dispatchEvent(new CustomEvent('contact-click', {detail:{channel:'whatsapp'}})); }
