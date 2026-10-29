<script setup lang="ts">
const open = ref(false)
const route = useRoute()

watch(
  () => route.path,
  () => {
    open.value = false
  },
)

const links = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/formacao', label: 'Formação' },
  { to: '/noticias', label: 'Novidades' },
]
</script>

<template>
  <header class="header">
    <div class="container bar">
      <NuxtLink to="/" class="brand">
        <img src="/logo.svg" alt="" class="mark" width="46" height="46" />
        <span class="brand-text">Jesus Renasce</span>
      </NuxtLink>

      <nav class="nav-desktop" aria-label="Navegação principal">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </NuxtLink>
        <a href="https://www.instagram.com/gojjesusrenasce/" target="_blank" rel="noopener" class="btn btn-flame">
          Instagram
        </a>
      </nav>

      <button
        class="burger"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <nav v-if="open" id="mobile-nav" class="nav-mobile" aria-label="Navegação móvel">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
        {{ link.label }}
      </NuxtLink>
      <a href="https://www.instagram.com/gojjesusrenasce/" target="_blank" rel="noopener" class="nav-link">
        Instagram
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: color-mix(in srgb, var(--bg) 90%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
}

.mark {
  width: 46px;
  height: 46px;
  flex: none;
}

.brand-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.15s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--flame);
}

.burger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  width: 20px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  padding: 8px 24px 20px;
  gap: 4px;
  border-bottom: 1px solid var(--line);
}

.nav-mobile .nav-link {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.nav-mobile .nav-link:last-child {
  border-bottom: none;
}

@media (min-width: 860px) {
  .nav-desktop {
    display: flex;
  }
  .burger {
    display: none;
  }
}
</style>
