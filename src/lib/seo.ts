import { siteConfig } from '@/data/site';

export const SITE_URL = 'https://vanuzasoaresextensoes.com';
export const BUSINESS_NAME = 'Vanuza Soares Extensões';

export const DEFAULT_TITLE = 'Vanuza Soares Extensões | Extensão Capilar em Leiria';
export const DEFAULT_DESCRIPTION =
  'Especialista em extensão capilar em Leiria, Portugal, com mais de 10 anos de experiência. Atendimento profissional com Microlink, Fita Adesiva e Ponto Americano.';

export const DEFAULT_SOCIAL_IMAGE = {
  url: `${SITE_URL}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: 'Vanuza Soares Extensões, extensão capilar em Leiria',
};

export function getCanonicalUrl(path: string) {
  const url = new URL(path, `${SITE_URL}/`);
  if (url.pathname !== '/' && !url.pathname.endsWith('/')) url.pathname += '/';
  return url.toString();
}

export function getFullTitle(title: string) {
  return title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`;
}

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HairSalon',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_NAME,
      alternateName: 'Vanuza Soares Extensões Capilares',
      description: siteConfig.brand.description,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/hero-vanuza.webp`,
      telephone: siteConfig.brand.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.brand.address.city,
        addressCountry: siteConfig.brand.address.country,
      },
      hasMap: siteConfig.brand.mapsSearchUrl,
      areaServed: {
        '@type': 'City',
        name: 'Leiria',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de extensão capilar',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Microlink',
              url: `${SITE_URL}/tecnicas/#microlink`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fita Adesiva',
              url: `${SITE_URL}/tecnicas/#fita-adesiva`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ponto Americano',
              url: `${SITE_URL}/tecnicas/#ponto-americano`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Manutenção de extensão capilar',
              url: `${SITE_URL}/servicos/manutencao/`,
            },
          },
        ],
      },
      sameAs: [
        siteConfig.brand.instagramUrl,
        siteConfig.brand.youtubeUrl,
        siteConfig.brand.facebookUrl,
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#vanuza-soares`,
      name: 'Vanuza Soares',
      url: `${SITE_URL}/vanuza-soares/`,
      image: `${SITE_URL}/images/hero-vanuza.webp`,
      jobTitle: 'Especialista em extensão capilar',
      knowsAbout: ['Microlink', 'Fita Adesiva', 'Ponto Americano'],
      worksFor: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BUSINESS_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: 'pt-PT',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ],
};
