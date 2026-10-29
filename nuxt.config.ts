// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  site: {
    url: 'https://www.jesusrenasce.com.br',
    name: 'Jesus Renasce — Grupo de Oração Jovem',
  },

  fonts: {
    families: [
      { name: 'Barlow Condensed', provider: 'google', global: true, weights: [700, 800], styles: ['normal', 'italic'] },
      { name: 'Manrope', provider: 'google', global: true },
    ],
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 2 },
      },
    },
  },

  image: {
    format: ['webp', 'avif'],
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  sitemap: {
    sources: ['/api/sitemap-urls'],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
