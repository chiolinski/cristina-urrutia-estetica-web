const env = import.meta.env;
function safeUrl(value: string | undefined) { try { const url = new URL(value || ''); return url.protocol === 'https:' ? url.href : ''; } catch { return ''; } }
export const config = {
 name: 'Dra. Cristina Urrutia Grabuska', clinic: 'Clínica Rinoface', city: 'Concepción, Chile',
 whatsapp: /^\d{8,15}$/.test(env.VITE_WHATSAPP_NUMBER || '') ? env.VITE_WHATSAPP_NUMBER : '',
 maps: safeUrl(env.VITE_GOOGLE_MAPS_URL), reviews: safeUrl(env.VITE_GOOGLE_REVIEW_URL), placeId: env.VITE_GOOGLE_PLACE_ID || '',
 instagram: safeUrl(env.VITE_INSTAGRAM_URL), address: env.VITE_ADDRESS || '', hours: env.VITE_HOURS || '', siteUrl: safeUrl(env.VITE_SITE_URL), ready: env.VITE_PUBLICATION_READY === 'true'
};
