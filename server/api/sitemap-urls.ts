export default defineEventHandler(async (event) => {
  const [formacao, noticias] = await Promise.all([
    queryCollection(event, 'formacao').all(),
    queryCollection(event, 'noticias').all(),
  ])

  return [
    ...formacao.map((item) => ({ loc: item.path, lastmod: item.date })),
    ...noticias.map((item) => ({ loc: item.path, lastmod: item.date })),
  ]
})
