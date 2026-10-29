<script setup lang="ts">
useSeoMeta({
  title: 'Formação',
  description:
    'Conteúdos de formação do Jesus Renasce: música e artes no ministério de louvor, e formação espiritual para a vida de oração.',
})

const { data: musica } = await useAsyncData('formacao-musica', () =>
  queryCollection('formacao').where('category', '=', 'musica').order('order', 'ASC').all(),
)

const { data: espiritual } = await useAsyncData('formacao-espiritual', () =>
  queryCollection('formacao').where('category', '=', 'espiritual').order('order', 'ASC').all(),
)
</script>

<template>
  <div>
    <header class="page-hero">
      <div class="container">
        <span class="eyebrow">Formação</span>
        <h1>Crescer para servir melhor</h1>
        <p class="lede">
          Material de formação usado nos ministérios do Jesus Renasce — para quem já serve e para
          quem está discernindo um chamado.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2>Música e Artes</h2>
        <div class="grid">
          <FormationCard
            v-for="item in musica"
            :key="item.path"
            :path="item.path"
            :title="item.title"
            :description="item.description"
            :order="item.order"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Vida Espiritual</h2>
        <div class="grid">
          <FormationCard
            v-for="item in espiritual"
            :key="item.path"
            :path="item.path"
            :title="item.title"
            :description="item.description"
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
  padding: 56px 0;
}

.section h2 {
  font-size: 22px;
  margin-bottom: 22px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
</style>
