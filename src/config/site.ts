const env = import.meta.env;
function safeUrl(value: string | undefined) { try { const url = new URL(value || ''); return url.protocol === 'https:' ? url.href : ''; } catch { return ''; } }
export const config = {
 name: 'Dra. Cristina Urrutia Grabuska', clinic: 'Clínica Rinoface', city: 'Concepción, Chile',
 whatsapp: /^\d{8,15}$/.test(env.VITE_WHATSAPP_NUMBER || '') ? env.VITE_WHATSAPP_NUMBER : '56988656070',
 maps: safeUrl(env.VITE_GOOGLE_MAPS_URL), reviews: safeUrl(env.VITE_GOOGLE_REVIEW_URL), placeId: env.VITE_GOOGLE_PLACE_ID || '',
 instagram: 'https://www.instagram.com/dra.cristinaurrutiagrabuska/', address: env.VITE_ADDRESS || 'Av. Chacabuco 1085, piso 12, 4070146', hours: env.VITE_HOURS || '', phone: '991521346', phoneLabel: '+56 9 9152 1346', directions: 'https://www.google.com/maps/search/?api=1&query=Av.%20Chacabuco%201085%2C%20Concepci%C3%B3n%2C%20Chile', siteUrl: safeUrl(env.VITE_SITE_URL), ready: env.VITE_PUBLICATION_READY === 'true'
};


export const openingHours = [['Lunes', '11:00–20:00'], ['Martes', '11:00–20:00'], ['Miércoles', '12:00–20:00'], ['Jueves', '11:00–20:00'], ['Viernes', '12:00–20:00'], ['Sábado', 'Cerrado'], ['Domingo', 'Cerrado']];



