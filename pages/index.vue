<template>
  <main>
    <HeroCarousel />

    <!-- Intro Section -->
    <IntroSection />

    <!-- Sponsors Section -->
    <SponsorsSection />

  </main>
</template>

<script setup lang="ts">
import HeroCarousel from '@/components/HeroCarousel.vue'
import IntroSection from '@/components/IntroSection.vue'
import SponsorsSection from '@/components/SponsorsSection.vue'

useHead({
  htmlAttrs: { lang: 'cs' },
  meta: [{ name: 'theme-color', content: '#065f46' }]
})
</script>
