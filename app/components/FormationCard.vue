<script setup lang="ts">
defineProps<{
  path: string
  title: string
  description: string
  order?: number
}>()
</script>

<template>
  <NuxtLink :to="path" class="card">
    <span v-if="order" class="idx">{{ String(order).padStart(2, '0') }}</span>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: start;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 22px;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.card:hover {
  border-color: var(--flame);
  transform: translateY(-2px);
}

.idx {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--gold);
  padding-top: 2px;
}

h3 {
  font-size: 17.5px;
  margin-bottom: 6px;
}

p {
  font-size: 14px;
  color: var(--ink-soft);
}
</style>
