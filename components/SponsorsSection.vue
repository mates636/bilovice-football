<template>
  <section id="sponsors" class="section py-12 sm:py-16 md:py-20">
    <div class="flex items-end justify-between">
      <div>
        <h2 class="kicker h2">Naši partneři</h2>
      </div>
    </div>
    <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
     <a
  v-for="(s, i) in sponsors"
  :key="i"
  class="group card flex items-center justify-center p-6 h-36 sm:h-44 md:h-52 hover:ring-emerald-400/40 transition-shadow"
  :href="s.href"
  target="_blank"
  rel="noopener noreferrer"
  :aria-label="s.name"
>
  <img
    :src="s.logo"
    :alt="s.name"
    class="max-h-full max-w-full object-contain opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition"
    loading="lazy"
  />
</a>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Sponsor { name: string; logo: string; href: string }

const sponsors = ref<Sponsor[]>([
  { name: 'Zámečnictví Gruber', logo: '/images/zamecnictvi-gruber-brno-logo.png', href: 'https://www.gruberbrno.cz/uvod/' },
  { name: 'Damacom', logo: '/images/damacom.png', href: 'https://damacom.cz/' },
])
</script>

