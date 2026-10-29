<script setup lang="ts">
defineProps<{
  path: string
  title: string
  description: string
  date: string | Date
}>()

function formatDate(value: string | Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value))
}
</script>

<template>
  <NuxtLink :to="path" class="card">
    <time class="date" :datetime="new Date(date).toISOString()">{{ formatDate(date) }}</time>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span class="read">Ler mais →</span>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px 24px 24px;
  text-decoration: none;
  color: var(--ink);
  height: 100%;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.card:hover {
  border-color: var(--flame);
  transform: translateY(-2px);
}

.date {
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gold);
}

h3 {
  font-size: 19px;
  line-height: 1.3;
}

p {
  font-size: 14.5px;
  color: var(--ink-soft);
  flex: 1;
}

.read {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--flame);
  margin-top: 4px;
}
</style>
