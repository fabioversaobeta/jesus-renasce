<script setup lang="ts">
const route = useRoute()

const categoryLabels: Record<string, string> = {
  rcc: 'A RCC',
  ministerios: 'Ministérios da RCC',
  espiritual: 'Vida Espiritual',
}

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
        <span class="eyebrow">{{ categoryLabels[page.category] }}</span>
        <h1>{{ page.title }}</h1>
      </div>
    </header>

    <div class="container body">
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

</style>
