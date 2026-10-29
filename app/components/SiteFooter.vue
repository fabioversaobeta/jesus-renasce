<template>
  <footer class="footer">
    <div class="container grid">
      <div>
        <div class="brand">
          <img src="/logo.svg" alt="" width="56" height="56" />
          <span class="brand-text">Jesus Renasce</span>
        </div>
        <p class="addr">
          Comunidade São Paulo da Cruz<br />
          Rua Genésio Moreschi, 613 — Guaraituba, Colombo/PR<br />
          Encontros aos sábados, 17h
        </p>
      </div>

      <div class="col">
        <span class="label">Site</span>
        <NuxtLink to="/sobre">Sobre</NuxtLink>
        <NuxtLink to="/formacao">Formação</NuxtLink>
        <NuxtLink to="/noticias">Novidades</NuxtLink>
      </div>

      <div class="col">
        <span class="label">Redes sociais</span>
        <a href="https://www.instagram.com/gojjesusrenasce/" target="_blank" rel="noopener">
          Instagram @gojjesusrenasce
        </a>
        <a href="https://www.facebook.com/JesusRenasceJovem" target="_blank" rel="noopener">
          Facebook @JesusRenasceJovem
        </a>
      </div>
    </div>

    <div class="container bottom">
      <span>© {{ new Date().getFullYear() }} Grupo de Oração Jovem Jesus Renasce</span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 56px 0 24px;
  background: var(--surface);
}

.grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 26px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink);
}

.addr {
  margin-top: 12px;
  font-size: 14px;
  color: var(--ink-faint);
  line-height: 1.7;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col a {
  color: var(--ink-soft);
  text-decoration: none;
  font-size: 14.5px;
}

.col a:hover {
  color: var(--flame);
}

.label {
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-faint);
  font-weight: 700;
  margin-bottom: 4px;
}

.bottom {
  margin-top: 44px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  font-size: 13px;
  color: var(--ink-faint);
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
