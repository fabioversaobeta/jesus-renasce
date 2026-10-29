import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    formacao: defineCollection({
      type: 'page',
      source: 'formacao/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.enum(['rcc', 'ministerios', 'espiritual']),
        order: z.number(),
      }),
    }),
    noticias: defineCollection({
      type: 'page',
      source: 'noticias/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        source: z
          .object({
            name: z.string(),
            url: z.string(),
          })
          .optional(),
      }),
    }),
  },
})
