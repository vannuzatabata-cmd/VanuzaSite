import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.vanuzasoaresextensoes.com.br',
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
  },
});
