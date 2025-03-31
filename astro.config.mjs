// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aarbaa.com',
  integrations: [],
  // Optional: If you want to use Astro with other integrations like React, Vue, etc.
  // integrations: [react(), vue()],
  
  // Optional: Configure build output directory
  outDir: './dist',
  
  // Optional: Configure the server for development
  server: {
    port: 3000,
    host: true,
  }
});