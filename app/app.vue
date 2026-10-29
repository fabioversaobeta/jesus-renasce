<script setup lang="ts">
const route = useRoute()
const site = useSiteConfig()

const canonical = computed(() => new URL(route.path, site.url).href)

useHead({
  titleTemplate: (title) => (title ? `${title} — Jesus Renasce` : 'Jesus Renasce — Grupo de Oração Jovem'),
  link: [{ rel: 'canonical', href: canonical }],
})

useSeoMeta({
  ogSiteName: 'Jesus Renasce',
  ogLocale: 'pt_BR',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
