# Vanuza Soares Extensões — Astro

Site estático oficial construído integralmente em Astro.

## Requisitos

- Node.js 22.12 ou superior
- npm 9.6 ou superior

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Arquitetura

- `src/pages/`: 12 rotas públicas e página 404.
- `src/layouts/BaseLayout.astro`: metadados, canonical, Open Graph, Twitter e Schema global.
- `src/components/`: layout e seções da home.
- `src/data/`: dados da marca e galeria.
- `src/lib/seo.ts`: URL canônica e JSON-LD.
- `public/`: imagens, favicon, imagem social, `robots.txt` e `llms.txt`.

Menu mobile, lightbox e formulário do WhatsApp usam apenas HTML e JavaScript nativo.

## Domínio canônico

`https://www.vanuzasoaresextensoes.com.br`

As URLs públicas foram preservadas durante a migração.
