import type { APIRoute } from 'astro';

export const prerender = true;

const SITE_URL = 'https://vanuzasoaresextensoes.com';

const routes = [
  { path: '/', changeFrequency: 'monthly', priority: '1' },
  { path: '/nossa-historia', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/tecnicas', changeFrequency: 'monthly', priority: '0.9' },
  { path: '/resultados', changeFrequency: 'weekly', priority: '0.9' },
  { path: '/servicos/manutencao', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/perguntas-frequentes', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/vanuza-soares', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/cursos', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/contato', changeFrequency: 'monthly', priority: '0.7' },
  { path: '/blog', changeFrequency: 'weekly', priority: '0.8' },
  { path: '/loja', changeFrequency: 'weekly', priority: '0.8' },
  { path: '/loja/cabelos', changeFrequency: 'weekly', priority: '0.7' },
  { path: '/loja/materiais', changeFrequency: 'weekly', priority: '0.7' },
] as const;

const urlEntries = routes
  .map(
    ({ path, changeFrequency, priority }) => `  <url>
    <loc>${SITE_URL}${path === '/' ? path : `${path}/`}</loc>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

export const GET: APIRoute = () =>
  new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
