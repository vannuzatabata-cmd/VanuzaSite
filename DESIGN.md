# Sistema visual — Vanuza Soares Extensões

## Direção

Identidade editorial escura, acolhedora e precisa. O vinho representa a marca; o dourado funciona como acento, não como decoração constante. A experiência deve parecer artesanal e confiável, com fotografia real como principal elemento expressivo.

## Cores

- Fundo principal: `#1a0f14` (`--dark`)
- Fundo elevado: `#2a1a20` (`--charcoal`)
- Vinho principal: `#98495c` (`--primary`)
- Vinho profundo: `#5a2e3e` (`--primary-deep`)
- Dourado: `#cfa07a` (`--gold`)
- Dourado claro: `#e5c4a1` (`--gold-light`)
- Creme: `#fdf8f2` (`--cream`)
- Texto primário sobre escuro: branco
- Texto secundário sobre escuro: branco com 68%–76% de opacidade; texto pequeno nunca abaixo do contraste AA.

Gradientes só podem reforçar hierarquia em heróis, CTAs principais ou transições de fundo. Não aplicar gradiente ao texto corrido.

## Tipografia

- Família: Montserrat Variable, carregada localmente por `@fontsource-variable/montserrat`.
- Título principal: `clamp(2.35rem, 5.4vw, 4.35rem)`, peso 800, entrelinha 1.02.
- Título de seção: `clamp(1.85rem, 3.4vw, 2.9rem)`, peso 800, entrelinha 1.08.
- Título de card: `1.125rem` a `1.25rem`, peso 700–800.
- Corpo: `1rem`, entrelinha 1.65; destaque introdutório até `1.125rem`.
- Texto auxiliar: no mínimo `0.8125rem`; `0.75rem` apenas para rótulos curtos.
- Usar `text-wrap: balance` em títulos e `text-wrap: pretty` em parágrafos.

## Espaçamento

Escala base de 4 px. Intervalos preferenciais: 8, 12, 16, 20, 24, 32, 40, 56, 64 e 80 px.

- Container: `max-width: 80rem`, padding lateral de 20 px no mobile e 32 px a partir de 640 px.
- Container de leitura: 48–52rem.
- Seção padrão: `clamp(3.5rem, 6vw, 5rem)` vertical.
- Seção compacta: `clamp(2.5rem, 4vw, 3.5rem)` vertical.
- Hero interno: topo suficiente para o header fixo, mínimo de 112 px; base entre 56 e 80 px.
- Título e descrição: 16–20 px.
- Cabeçalho da seção e conteúdo: 32–48 px.
- Cards relacionados: gap de 16–24 px.

## Componentes

### Botões

- Altura mínima de 44 px.
- Primário: fundo vinho ou dourado sólido, texto de alto contraste.
- Secundário: borda branca sutil, fundo transparente.
- Raio: 9999 px apenas para CTAs e filtros; não usar pílulas em contêineres.
- Hover discreto: deslocamento máximo de 2 px; evitar escalas que causem instabilidade visual.

### Cards

- Raio padrão: 12–16 px.
- Padding padrão: 20–28 px.
- Borda de 1 px com contraste sutil.
- Elevação apenas no hover de elementos clicáveis.
- Não transformar todo conteúdo em cards; listas e faixas editoriais são preferíveis quando a relação é linear.

### Avaliações

- Bloco compacto, com resumo da nota em uma linha e no máximo três trechos visíveis.
- Cards quase quadrados no desktop, texto de 14–16 px, sem depoimento “destaque” gigante.
- Link claro para todas as avaliações no Google.

### Imagens

- Formato entregue: WebP, com variantes responsivas declaradas por `srcset` quando necessário.
- Hero: até 1600 px no maior eixo e preferencialmente abaixo de 200 KB.
- Galeria: 1000–1200 px quadrados e preferencialmente abaixo de 120 KB por arquivo.
- Sempre declarar dimensões por `fill` + contêiner com proporção ou por `width`/`height`.
- Texto alternativo deve descrever a transformação visível, sem inferir técnica não confirmada.

## Motion

- Entradas rápidas, até 700 ms, apenas em elementos prioritários.
- Sem animação obrigatória para compreender ou operar a interface.
- Respeitar redução de movimento do sistema.

## Padrões de página

- Herói interno compacto e consistente.
- Uma única escala de H1 em todas as rotas.
- Corpo principal em `max-w-5xl`; conteúdo longo em `max-w-4xl`.
- Seções alternam contraste com propósito, sem criar uma grade infinita de cards.
- CTA final curto, com título, frase de apoio e uma ação principal.
