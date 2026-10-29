<script setup lang="ts">
useSeoMeta({
  title: 'Grupo de Oração Jovem',
  description:
    'Jesus Renasce é o Grupo de Oração Jovem da Renovação Carismática Católica na Comunidade São Paulo da Cruz, Guaraituba. Encontros todos os sábados às 17h.',
  ogTitle: 'Jesus Renasce — Grupo de Oração Jovem',
  ogDescription:
    'Aqui tem Jovem, aqui tem Fogo. Grupo de Oração Jovem da RCC na Comunidade São Paulo da Cruz, desde 2007.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Jesus Renasce — Grupo de Oração Jovem',
        url: 'https://www.jesusrenasce.com.br',
        sameAs: [
          'https://www.instagram.com/gojjesusrenasce/',
          'https://www.facebook.com/JesusRenasceJovem',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Genésio Moreschi, 613, Guaraituba',
          addressLocality: 'Colombo',
          addressRegion: 'PR',
          addressCountry: 'BR',
        },
      }),
    },
  ],
})

const pillars = [
  {
    title: 'Ministério Jovem',
    text: 'Estrutura que torna possível, a partir do grupo de oração, evangelizar, formar, assistir, orientar e motivar os jovens dentro da identidade da Renovação Carismática Católica.',
    href: 'https://rccjovem.com.br/',
    linkLabel: 'Ministério Jovem RCC Brasil',
  },
  {
    title: 'Renovação Carismática Católica',
    text: 'Movimento que surgiu na Igreja num momento em que se buscavam caminhos para pôr em prática a renovação eclesial desejada pelo Concílio Vaticano II.',
    href: 'https://rccbrasil.org.br/',
    linkLabel: 'RCC Brasil',
  },
  {
    title: 'Passionistas',
    text: 'Congregação da Paixão de Jesus Cristo — sacerdotes e leigos em comunidade fraterna, anunciando o Evangelho. Fundada por São Paulo da Cruz em 1720, na Itália.',
    href: 'https://vidapassionista.org/',
    linkLabel: 'Província Passionista Getsêmani',
  },
  {
    title: 'Juventude Mariana',
    text: '"Na plenitude dos tempos, Deus mandou o seu Filho, nascido de uma mulher, para que recebêssemos a adoção de filhos" (Gl 4,4). Uma devoção mariana vivida por jovens.',
    href: null,
    linkLabel: null,
  },
]

const { data: news } = await useAsyncData('home-news', () =>
  queryCollection('noticias').order('date', 'DESC').limit(3).all(),
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container hero-inner">
        <span class="eyebrow">Sentinelas nos Grupos de Oração da RCC pelo Brasil</span>
        <h1>Aqui tem Jovem.<br /><span>Aqui tem Fogo.</span></h1>
        <p class="lede">
          Grupo de Oração Jovem da Renovação Carismática Católica, na Comunidade São Paulo da Cruz,
          Guaraituba. Todos os sábados, às 17h, jovens se reúnem para louvar, ouvir a Palavra e
          interceder pela Igreja. Vem experimentar o fogo do Espírito Santo!
        </p>
        <div class="cta-row">
          <a
            href="https://www.instagram.com/gojjesusrenasce/"
            target="_blank"
            rel="noopener"
            class="btn btn-flame"
          >
            Siga no Instagram
          </a>
          <NuxtLink to="/sobre" class="btn btn-ghost">Conhecer o grupo</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pillars -->
    <section class="section">
      <div class="container">
        <span class="eyebrow">Identidade</span>
        <h2>Onde o Jesus Renasce se enraíza</h2>
        <div class="pillars">
          <article v-for="p in pillars" :key="p.title" class="pillar">
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
            <a v-if="p.href" :href="p.href" target="_blank" rel="noopener" class="pillar-link">
              {{ p.linkLabel }} →
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- About summary -->
    <section class="section about">
      <div class="container about-inner">
        <div>
          <span class="eyebrow">Sobre</span>
          <h2>Santo sem deixar de ser jovem</h2>
          <p class="prose">
            O primeiro encontro do Grupo de Oração Jovem Jesus Renasce aconteceu em 22 de julho de
            2007, com o propósito de mostrar para a juventude o quanto somos amados por Deus. Desde
            então, cada fim de semana partilhamos a Palavra, intercedemos por nossas famílias e por
            toda a Igreja, e buscamos ser sal da terra e luz do mundo.
          </p>
          <NuxtLink to="/sobre" class="btn btn-ghost">Ler a história completa</NuxtLink>
        </div>
        <div class="stats">
          <div class="stat">
            <span class="v">2007</span>
            <span class="l">ano de fundação</span>
          </div>
          <div class="stat">
            <span class="v">Sáb · 17h</span>
            <span class="l">encontro semanal</span>
          </div>
          <div class="stat">
            <span class="v">@gojjesusrenasce</span>
            <span class="l">no Instagram</span>
          </div>
        </div>
      </div>
    </section>

    <!-- News -->
    <section v-if="news?.length" class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Novidades</span>
            <h2>Temas dos últimos encontros</h2>
          </div>
          <NuxtLink to="/noticias" class="btn btn-ghost">Ver todas</NuxtLink>
        </div>
        <div class="news-grid">
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

    <!-- Contact -->
    <section id="contato" class="section contact">
      <div class="container contact-inner">
        <span class="eyebrow">Fale com a gente</span>
        <h2>Nos chame nas redes sociais</h2>
        <p class="prose">
          O contato com o pessoal do grupo é pelo Instagram: mande uma mensagem direta e
          acompanhe os avisos e cartazes de cada semana.
        </p>
        <div class="cta-row">
          <a
            href="https://www.instagram.com/gojjesusrenasce/"
            target="_blank"
            rel="noopener"
            class="btn btn-flame"
          >
            Instagram @gojjesusrenasce
          </a>
          <a
            href="https://www.facebook.com/JesusRenasceJovem"
            target="_blank"
            rel="noopener"
            class="btn btn-ghost"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  padding: 72px 0;
}

.hero {
  position: relative;
  padding: 120px 0 104px;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.92) 0%, rgba(5, 5, 5, 0.6) 48%, rgba(5, 5, 5, 0) 78%),
    url('/banner-hero.svg') 78% center / cover no-repeat,
    #050505;
  border-bottom: 1px solid var(--line);
}

@media (max-width: 760px) {
  .hero {
    padding: 72px 0 64px;
    background:
      linear-gradient(180deg, rgba(5, 5, 5, 0.9) 0%, rgba(5, 5, 5, 0.78) 62%, rgba(5, 5, 5, 0.2) 100%),
      url('/banner-hero.svg') 88% center / cover no-repeat,
      #050505;
  }
}

.hero-inner {
  max-width: 760px;
}

.hero h1 {
  font-size: clamp(52px, 7.6vw, 96px);
  line-height: 0.92;
  font-style: italic;
  margin: 18px 0 22px;
}

.hero h1 span {
  color: var(--flame);
}

.lede {
  font-size: 18px;
  color: var(--ink);
  max-width: 52ch;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.8);
}

.cta-row {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

h2 {
  font-size: clamp(26px, 3.4vw, 34px);
  margin: 10px 0 32px;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.pillar {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pillar h3 {
  font-size: 18px;
}

.pillar p {
  font-size: 14.5px;
  color: var(--ink-soft);
  flex: 1;
}

.pillar-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--flame);
  text-decoration: none;
}

.about {
  background: var(--surface);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.about-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 48px;
  align-items: center;
}

.stats {
  display: grid;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

.stat {
  background: var(--surface);
  padding: 20px 22px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.stat .v {
  font-family: var(--font-display);
  font-size: 22px;
  font-variant-numeric: tabular-nums;
}

.stat .l {
  font-size: 12.5px;
  color: var(--ink-faint);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
  gap: 16px;
  flex-wrap: wrap;
}

.section-head h2 {
  margin-bottom: 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 32px;
}

.contact-inner .prose {
  max-width: 56ch;
}

@media (max-width: 760px) {
  .about-inner {
    grid-template-columns: 1fr;
  }
}
</style>
