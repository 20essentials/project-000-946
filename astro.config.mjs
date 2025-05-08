// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [clerk()],
  adapter: node({
    mode: 'standalone'
  })
});
