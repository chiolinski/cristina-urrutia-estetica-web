import { loadEnv } from 'vite';
import { readFileSync, writeFileSync } from 'node:fs';
const env = {...loadEnv('production', process.cwd(), ''), ...process.env};
if (env.VITE_PUBLICATION_READY === 'true') {
 const url = new URL(env.VITE_SITE_URL || '');
 if (url.protocol !== 'https:') throw new Error('VITE_SITE_URL debe usar HTTPS');
 const home = url.href.endsWith('/') ? url.href : `${url.href}/`;
 const xml = home.replace(/&/g,'&amp;').replace(/</g,'&lt;');
 writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${home}sitemap.xml\n`);
 writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${xml}</loc></url></urlset>`);
 const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'WebSite','@id':`${home}#website`,url:home,name:'Dra. Cristina Urrutia Grabuska',alternateName:'Dra. Cristina Urrutia',inLanguage:'es-CL',publisher:{'@id':`${home}#cristina`}},
  {'@type':'WebPage','@id':`${home}#webpage`,url:home,name:'Dra. Cristina Urrutia | Estética orofacial en Concepción',isPartOf:{'@id':`${home}#website`},about:{'@id':`${home}#cristina`},inLanguage:'es-CL'},
  {'@type':'Person','@id':`${home}#cristina`,name:'Cristina Urrutia Grabuska',honorificPrefix:'Dra.',alternateName:'Dra. Cristina Urrutia',url:home,image:`${home}cristina-retrato-sobre-mi.webp`,sameAs:['https://www.instagram.com/dra.cristinaurrutiagrabuska/']}
 ]};
 const metadata = `<link rel="canonical" href="${home}"/><meta property="og:url" content="${home}"/><meta property="og:site_name" content="Dra. Cristina Urrutia Grabuska"/><meta property="og:image" content="${home}cristina-retrato-sobre-mi.webp"/><meta property="og:image:alt" content="Dra. Cristina Urrutia Grabuska"/><meta name="twitter:title" content="Dra. Cristina Urrutia | Estética orofacial en Concepción"/><meta name="twitter:image" content="${home}cristina-retrato-sobre-mi.webp"/><script type="application/ld+json">${JSON.stringify(graph).replace(/</g,'\\u003c')}</script>`;
 let html = readFileSync('dist/index.html','utf8').replace('noindex,nofollow','index,follow');
 html=html.replace('</head>',`${metadata}</head>`);
 writeFileSync('dist/index.html',html);
}
