import console from 'node:console';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const h=readFileSync('dist/index.html','utf8');
assert.equal((h.match(/<h1[ >]/g)||[]).length,1);
assert.equal((h.match(/rel="canonical"/g)||[]).length,1);
assert.ok(h.includes('index,follow')&&!h.includes('noindex'));
assert.ok(h.includes('Urrutia Grabuska')&&h.includes('id="sobre-mi"'));
const schema=JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema['@graph'].length,3);
assert.ok(readFileSync('dist/sitemap.xml','utf8').includes('<loc>https://dracristinaurrutia.cl/</loc>'));
console.log('SEO verificado: HTML completo, H1 único, canonical único, indexación, JSON-LD y sitemap correctos.');

