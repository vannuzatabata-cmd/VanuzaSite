// Estrutura da loja. Os produtos serão cadastrados aqui depois.
// Campos de cada produto (preencher quando houver a lista de produtos):
// {
//   id: 'identificador-unico',
//   categoria: 'cabelos' | 'materiais',
//   subcategoria: 'Cabelo Indiano',
//   nome: 'Nome do produto',
//   descricao: 'Descrição curta',
//   preco: 0,              // em euros
//   imagem: '/loja/nome.webp',
//   opcoes: { comprimento: [], cor: [], textura: [] },
//   estoque: 0,
// }

export type LojaCategoria = {
  slug: 'cabelos' | 'materiais';
  nome: string;
  titulo: string;
  descricao: string;
  subcategorias: string[];
  filtros: string[];
};

export const lojaCategorias: LojaCategoria[] = [
  {
    slug: 'cabelos',
    nome: 'Cabelos',
    titulo: 'Cabelos para extensão capilar',
    descricao: 'Cabelos naturais em diferentes origens, texturas e comprimentos, para alongamento e volume.',
    subcategorias: [
      'Cabelo Indiano',
      'Cabelo Vietnamita',
      'Cabelo Brasileiro',
      'Cabelos Lisos',
      'Cabelos Ondulados',
      'Cabelos Cacheados',
      'Cachos Permanentes',
      'Telas e Tecimentos',
      'Apliques Tic Tac',
      'Fitas de Cabelo',
    ],
    filtros: ['Comprimento', 'Textura', 'Cor', 'Origem', 'Preço', 'Stock'],
  },
  {
    slug: 'materiais',
    nome: 'Materiais',
    titulo: 'Materiais para extensão capilar',
    descricao: 'Fitas, anilhas, agulhas, ferramentas, máquinas e produtos para aplicação e manutenção.',
    subcategorias: [
      'Fitas Adesivas',
      'Fita Inject',
      'Fita Invisível',
      'Microlink e Anéis',
      'Agulhas e Linhas',
      'Ferramentas de Aplicação',
      'Máquinas de Costura',
      'Produtos para Manutenção',
      'Acessórios para Extensão Capilar',
      'Materiais para Confeção de Telas',
    ],
    filtros: ['Tipo', 'Finalidade', 'Preço', 'Disponibilidade'],
  },
];

export type Produto = {
  id: string;
  categoria: 'cabelos' | 'materiais';
  subcategoria: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  opcoes: Record<string, string[]>;
  estoque: number;
};

// Lista vazia por enquanto: os produtos serão publicados quando forem enviados.
export const produtos: Produto[] = [];
