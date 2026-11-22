export const siteConfig = {
  brand: {
    name: 'Vanuza Soares Extensões',
    shortName: 'Vanuza Soares',
    description: 'Especialista em extensão capilar em Leiria, Portugal. Atendimento personalizado com Microlink, Fita Adesiva e Ponto Americano.',
    instagram: '@vanuzasoaresextensoes',
    instagramUrl: 'https://instagram.com/vanuzasoaresextensoes',
    youtubeUrl: 'https://www.youtube.com/@vanuzasoaresextensoes',
    facebookUrl: 'https://www.facebook.com/vanuzasoaresextensoes/',
    whatsapp: 'https://wa.me/351930666495',
    googleMapsUrl: 'https://maps.app.goo.gl/fUcoGJJuoV9HDra67',
    phone: '+351930666495',
    phoneDisplay: '+351 930 666 495',
    address: {
      city: 'Leiria',
      country: 'PT',
    },
    mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Leiria%2C+Portugal',
    googleRating: {
      value: 5,
      reviewCount: 45,
      checkedAt: '2026-07-17',
    },
  },
  stats: {
    yearsExperience: 10,
  },
  pages: [
    { name: 'Início', path: '/' },
    { name: 'Nossa História', path: '/nossa-historia' },
    { name: 'Técnicas', path: '/tecnicas' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Avaliações', path: '/#avaliacoes' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Blog', path: '/blog', icon: 'book' },
    { name: 'Contacto', path: '/contato' },
  ],
};

// Loja: submenu sempre no fim do menu principal.
export const vendasMenu = {
  name: 'Loja',
  icon: 'bag',
  items: [
    { name: 'Cabelos', path: '/loja/cabelos' },
    { name: 'Materiais', path: '/loja/materiais' },
  ],
};

export const metadata = {
  home: {
    title: 'Extensão Capilar em Leiria | Vanuza Soares',
    description: 'Extensão capilar em Leiria, Portugal, com atendimento personalizado. Microlink, Fita Adesiva, Ponto Americano e manutenção.',
  },
  history: {
    title: 'Nossa história e experiência',
    description: 'Conheça a trajetória de Vanuza Soares e os seus mais de 10 anos de experiência com extensão capilar em Leiria, Portugal.',
  },
  techniques: {
    title: 'Técnicas de Extensão Capilar em Leiria',
    description: 'Conheça Microlink, Fita Adesiva e Ponto Americano, com avaliação personalizada e atendimento em Leiria, Portugal.',
  },
  results: {
    title: 'Resultados de Extensão Capilar em Leiria',
    description: 'Veja transformações reais de extensão capilar realizadas por Vanuza Soares em Leiria, com foco em acabamento natural.',
  },
  courses: {
    title: 'Cursos de Extensão Capilar em Leiria',
    description: 'Aprenda técnicas de extensão capilar com Vanuza Soares em Leiria. Consulte turmas, conteúdo e disponibilidade.',
  },
  contact: {
    title: 'Contacto e agendamento em Leiria',
    description: 'Fale com Vanuza Soares pelo WhatsApp e agende a sua avaliação de extensão capilar em Leiria, Portugal.',
  },
};
