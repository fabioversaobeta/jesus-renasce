<script setup lang="ts">
defineProps<{
  label: string
  youtubeId: string | null
}>()
</script>

<template>
  <div class="video">
    <div v-if="youtubeId" class="frame">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${youtubeId}`"
        :title="label"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div v-else class="pending">
      <span class="mark" aria-hidden="true">▶</span>
      <div>
        <strong>{{ label }}</strong>
        <p>Vídeo em processo de migração para o YouTube.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface-soft);
}

.frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.pending {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--surface-soft);
  border: 1px dashed var(--line);
  border-radius: var(--radius);
  padding: 18px 20px;
}

.mark {
  flex: none;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: var(--surface);
  color: var(--flame);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.pending strong {
  display: block;
  font-size: 14.5px;
  color: var(--ink);
}

.pending p {
  margin: 2px 0 0;
  font-size: 13px;
  color: var(--ink-faint);
}
</style>
