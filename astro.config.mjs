import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://japan-tech-web.pages.dev', // Update to your custom domain later
  vite: {
    plugins: [tailwindcss()],
  },
});