<template>
  <main>
    <MensTeamSection :players="players" />
  </main>
</template>

<script setup lang="ts">
import MensTeamSection from '@/components/MensTeamSection.vue'
import type { Player } from '@/components/TeamSection.vue'

const players: Player[] = [
  { id: 'm1', name: 'Jan Novak', photo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80&auto=format&fit=crop', competition: 'Regionální liga' },
  { id: 'm2', name: 'Petr Svoboda', photo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80&auto=format&fit=crop', competition: 'Regionální liga' },
  { id: 'm3', name: 'Luis Silva', photo: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800&q=80&auto=format&fit=crop', competition: 'Pohár FA' },
  { id: 'm4', name: 'Adam Zelený', photo: 'https://images.unsplash.com/photo-1510920018318-3b4dfe979eac?w=800&q=80&auto=format&fit=crop', competition: 'Regionální liga' }
]

useHead({ title: "Mužský tým | FC Aurora" })
</script>

