import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vanuzasoaresextensoes.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
  },
});
