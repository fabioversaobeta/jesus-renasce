# Jesus Renasce — site (Nuxt 4)

Reconstrução do site do Grupo de Oração Jovem Jesus Renasce, migrado de WordPress para Nuxt (Vue.js), gerado como site estático (SSG) para preservar a indexação em buscadores.

## Stack

- **Nuxt 4** em modo estático (`nuxt generate`) — cada rota vira HTML completo no build, sem depender de JS no cliente para ser indexada.
- **@nuxt/content v3** — posts de Formação e Notícias são arquivos Markdown em `content/`, sem banco de dados.
- **@nuxtjs/sitemap** + **@nuxtjs/robots** — `sitemap.xml` e `robots.txt` gerados automaticamente (inclusive as rotas dinâmicas de conteúdo, via `server/api/sitemap-urls.ts`).
- **@nuxt/fonts** — Barlow Condensed (títulos) e Manrope (texto) baixadas e servidas localmente no build, sem chamada a CDN externo em produção.
- **@nuxt/image** — otimização de imagens (WebP/AVIF).

## Rodando localmente

```bash
npm install
npm run dev
```

## Gerando o site estático (o que vai para a hospedagem)

```bash
npm run generate
```

Isso gera `.output/public/` — uma pasta 100% estática, pronta para subir em Cloudflare Pages, Netlify, Vercel ou qualquer hospedagem estática.

## Pendências antes de ir para produção

1. **`site.url`** em `nuxt.config.ts` já aponta para `https://www.jesusrenasce.com.br` — conferir se é o domínio definitivo antes do primeiro deploy (usado no sitemap, canonical e Open Graph).

## Conteúdo

- `content/formacao/*.md` — formação sobre a RCC, seus ministérios e vida espiritual (frontmatter: `title`, `description`, `date`, `category` — `rcc`, `ministerios` ou `espiritual` —, `order`). Todo texto deve ser fiel aos materiais oficiais da RCCBRASIL e da Igreja e terminar com uma seção **Fontes** com links.
- `content/noticias/*.md` — notícias do meio católico (frontmatter: `title`, `description`, `date`, `source` opcional).

Para adicionar uma notícia ou conteúdo de formação novo, basta criar um novo `.md` na pasta correspondente — a rota é gerada automaticamente a partir do caminho do arquivo.
