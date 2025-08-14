<template>
  <main>
    <YouthTeamSection :players="players" />
  </main>
</template>

<script setup lang="ts">
import YouthTeamSection from '@/components/YouthTeamSection.vue'
import type { Player } from '@/components/TeamSection.vue'

const players: Player[] = [
  { id: 'y1', name: 'Marek Dvořák', photo: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80&auto=format&fit=crop', competition: 'U-18 Liga' },
  { id: 'y2', name: 'Tomáš Juráček', photo: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=800&q=80&auto=format&fit=crop', competition: 'U-18 Liga' },
  { id: 'y3', name: 'Pavel Marek', photo: 'https://images.unsplash.com/photo-1529923181844-56f329b9a04a?w=800&q=80&auto=format&fit=crop', competition: 'U-16 Pohár' }
]

useHead({ title: "Mládežnický tým | FC Aurora" })
</script>

