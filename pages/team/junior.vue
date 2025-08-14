<template>
  <main>
    <JuniorTeamSection :players="players" />
  </main>
</template>

<script setup lang="ts">
import JuniorTeamSection from '@/components/JuniorTeamSection.vue'
import type { Player } from '@/components/TeamSection.vue'

const players: Player[] = [
  { id: 'j1', name: 'Filip Holý', photo: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80&auto=format&fit=crop', competition: 'U-12 Liga' },
  { id: 'j2', name: 'Lukáš Král', photo: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80&auto=format&fit=crop', competition: 'U-12 Liga' }
]

useHead({ title: "Juniorský tým | FC Aurora" })
</script>

