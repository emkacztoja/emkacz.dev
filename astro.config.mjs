// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
//
// `output: 'static'` keeps the public site pre-rendered (fast, CDN-friendly).
// The Keystatic admin route opts out via `prerender = false` so the UI
// can run as an interactive React SPA. The Node adapter is required for that.
export default defineConfig({
  site: 'https://emkacz.dev',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  vite: {
    // Cast to `any` — Astro bundles its own Vite copy and @tailwindcss/vite
    // pulls a newer one, causing a type-only mismatch on plugin hooks.
    // Runtime is identical, this is purely a TS resolution issue.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});