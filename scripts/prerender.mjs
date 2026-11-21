import { createServer, loadEnv } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFileSync, writeFileSync } from 'node:fs';
const env = {...loadEnv('production',process.cwd(),''),...process.env};
const server = await createServer({mode:'production', server:{middlewareMode:true}, appType:'custom'});
try {
 const {default:App} = await server.ssrLoadModule('/src/App.tsx');
 const markup = renderToString(createElement(App));
 let html = readFileSync('dist/index.html','utf8').replace('<div id="root"></div>',`<div id="root">${markup}</div>`);
 if (env.VITE_SITE_URL) html = html.replace('</head>', `<link rel="preload" as="image" href="${new URL('cristina-inicio-6563.webp',env.VITE_SITE_URL).href}"/></head>`);
 writeFileSync('dist/index.html',html);
} finally { await server.close(); }
