<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('formacao').path(route.path).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Conteúdo de formação não encontrado' })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
})
</script>

<template>
  <article v-if="page">
    <header class="page-hero">
      <div class="container">
        <NuxtLink to="/formacao" class="back">← Formação</NuxtLink>
        <span class="eyebrow">{{ page.category === 'musica' ? 'Música e Artes' : 'Vida Espiritual' }}</span>
        <h1>{{ page.title }}</h1>
      </div>
    </header>

    <div class="container body">
      <div v-if="page.videos?.length" class="videos">
        <VideoBlock
          v-for="video in page.videos"
          :key="video.label"
          :label="video.label"
          :youtube-id="video.youtubeId"
        />
      </div>

      <ContentRenderer class="prose" :value="page" />
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

.page-hero h1 {
  font-size: clamp(26px, 3.8vw, 38px);
  margin-top: 10px;
}

.body {
  padding: 44px 0 88px;
}

.videos {
  display: grid;
  gap: 16px;
  margin-bottom: 40px;
  max-width: 640px;
}
</style>
