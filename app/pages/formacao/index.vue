<script setup lang="ts">
useSeoMeta({
  title: 'Formação',
  description:
    'Formação para jovens sobre a Renovação Carismática Católica: história, identidade, Grupo de Oração, ministérios e vida espiritual, com base nos materiais oficiais da RCCBRASIL.',
})

const { data: rcc } = await useAsyncData('formacao-rcc', () =>
  queryCollection('formacao').where('category', '=', 'rcc').order('order', 'ASC').all(),
)

const { data: ministerios } = await useAsyncData('formacao-ministerios', () =>
  queryCollection('formacao').where('category', '=', 'ministerios').order('order', 'ASC').all(),
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
          Quer conhecer a fundo a Renovação Carismática Católica e os ministérios onde a gente pode
          servir? Aqui você encontra material de formação para quem já serve e para quem está
          discernindo um chamado.
        </p>
        <p class="note">
          Todo o conteúdo é baseado nos materiais oficiais da
          <a href="https://rccbrasil.org.br" target="_blank" rel="noopener">RCCBRASIL</a> e nos
          documentos da Igreja. No fim de cada texto você encontra as fontes para ir direto ao
          original.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2>A Renovação Carismática Católica</h2>
        <div class="grid">
          <FormationCard
            v-for="item in rcc"
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
        <h2>Ministérios da RCC</h2>
        <div class="grid">
          <FormationCard
            v-for="item in ministerios"
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

.note {
  margin-top: 16px;
  font-size: 14px;
  color: var(--ink-faint);
  max-width: 62ch;
}

.note a {
  color: var(--flame);
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
