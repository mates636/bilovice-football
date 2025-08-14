<template>
  <section id="sponsors" class="section py-12 sm:py-16 md:py-20">
    <div class="flex items-end justify-between">
      <div>
        <h2 class="kicker h2">Naši partneři</h2>
        <!-- <h2 class="h2 mt-2">Naši partneři</h2> -->
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
          class="h-10 w-auto opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition"
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
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', href: 'https://nike.com' },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg', href: 'https://adidas.com' },
  // { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_AG.svg', href: 'https://puma.com' },
  // { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg', href: 'https://coca-cola.com' },
  // { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg', href: 'https://visa.com' },
  // { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg', href: 'https://audi.com' },
  // { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Emirates_logo.svg', href: 'https://emirates.com' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg', href: 'https://spotify.com' },
  // { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', href: 'https://amazon.com' },
  // { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png', href: 'https://mastercard.com' },
  // { name: 'Shell', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Shell_logo.svg', href: 'https://shell.com' },
  // { name: 'Heineken', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Heineken_International_logo.svg', href: 'https://heineken.com' }
])
</script>

