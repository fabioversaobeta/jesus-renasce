<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('noticias').path(route.path).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Notícia não encontrada' })
}

function formatDate(value: string | Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value))
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogType: 'article',
  articlePublishedTime: new Date(page.value.date).toISOString(),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.value.title,
        description: page.value.description,
        datePublished: new Date(page.value.date).toISOString(),
        author: { '@type': 'Organization', name: 'Jesus Renasce' },
      }),
    },
  ],
})
</script>

<template>
  <article v-if="page">
    <header class="page-hero">
      <div class="container">
        <NuxtLink to="/noticias" class="back">← Novidades</NuxtLink>
        <time class="date" :datetime="new Date(page.date).toISOString()">{{ formatDate(page.date) }}</time>
        <h1>{{ page.title }}</h1>
      </div>
    </header>

    <div class="container body">
      <ContentRenderer class="prose" :value="page" />

      <p v-if="page.source" class="source">
        Fonte: <a :href="page.source.url" target="_blank" rel="noopener">{{ page.source.name }}</a>
      </p>
    </div>
  </article>
</template>

<style scoped>
.page-hero {
  padding: 40px 0 32px;
  border-bottom: 1px solid var(--line);
}

.back {
  display: inline-block;
  font-size: 13.5px;
  font-weight: 700;
  color: var(--ink-faint);
  text-decoration: none;
  margin-bottom: 18px;
}

.back:hover {
  color: var(--flame);
}

.date {
  display: block;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 4px;
}

.page-hero h1 {
  font-size: clamp(26px, 3.8vw, 38px);
  margin-top: 10px;
}

.body {
  padding: 44px 0 88px;
}

.source {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  font-size: 14px;
  color: var(--ink-faint);
}

.source a {
  color: var(--flame);
}
</style>
