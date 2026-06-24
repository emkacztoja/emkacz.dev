// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Static output - the public site is pre-rendered at build time.
// Decap CMS at /admin requires GitHub OAuth in production (via Netlify Identity
// or an auth proxy). Locally, use `npx decap-server` as a proxy.
export default defineConfig({
  site: 'https://emkacz.dev',
  output: 'static',
  vite: {
    // Cast to `any` - Astro bundles its own Vite copy and @tailwindcss/vite
    // pulls a newer one, causing a type-only mismatch on plugin hooks.
    // Runtime is identical, this is purely a TS resolution issue.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});