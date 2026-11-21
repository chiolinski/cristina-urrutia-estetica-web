import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
const siteUrl = process.env.VITE_SITE_URL;
const base = siteUrl ? new URL(siteUrl).pathname : process.env.GITHUB_ACTIONS ? '/cristina-urrutia-estetica-web/' : '/';
export default defineConfig({ base, plugins: [react(), tailwindcss()] });
