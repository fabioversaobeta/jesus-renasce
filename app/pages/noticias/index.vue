<script setup lang="ts">
useSeoMeta({
  title: 'Novidades',
  description: 'Temas dos encontros do Grupo de Oração Jovem Jesus Renasce, todos os sábados às 17h.',
})

const { data: news } = await useAsyncData('noticias-index', () =>
  queryCollection('noticias').order('date', 'DESC').all(),
)
</script>

<template>
  <div>
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Novidades</span>
        <h1>Temas dos nossos encontros</h1>
        <p class="lede">
          O que o grupo tem vivido aos sábados, às 17h. Os cartazes completos de cada semana ficam
          no Instagram
          <a href="https://www.instagram.com/gojjesusrenasce/" target="_blank" rel="noopener">
            @gojjesusrenasce</a
          >.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="grid">
          <NewsCard
            v-for="item in news"
            :key="item.path"
            :path="item.path"
            :title="item.title"
            :description="item.description"
            :date="item.date"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 72px 0 40px;
  border-bottom: 1px solid var(--line);
}

.page-hero h1 {
  font-size: clamp(30px, 4.4vw, 44px);
  margin: 14px 0 10px;
}

.lede {
  font-size: 17px;
  color: var(--ink-soft);
  max-width: 56ch;
}

.section {
  padding: 56px 0 88px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}
</style>
