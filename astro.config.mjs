import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://loukas89.github.io/WebEleven-Portfolio/',
  trailingSlash: 'always',
  integrations: [tailwind(), svelte(), sitemap()],
});
