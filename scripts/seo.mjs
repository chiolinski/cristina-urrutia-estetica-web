import { loadEnv } from 'vite';
import { writeFileSync } from 'node:fs';
const env = {...loadEnv('production', process.cwd(), ''), ...process.env};
if (env.VITE_PUBLICATION_READY === 'true') {
 const url = new URL(env.VITE_SITE_URL || '');
 if (url.protocol !== 'https:') throw new Error('VITE_SITE_URL debe usar HTTPS');
 const origin = url.href.replace(/\/$/, '');
 writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
 writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</loc></url></urlset>`);
 const { readFileSync } = await import('node:fs');
 writeFileSync('dist/index.html',readFileSync('dist/index.html','utf8').replace('noindex,nofollow','index,follow'));
}
