<template>
  <TeamSection title="Men's Team" :players="players">
    <template #actions>
      <a v-if="ctaHref" :href="ctaHref" class="btn-ghost">View full squad</a>
    </template>
  </TeamSection>
</template>

<script setup lang="ts">
import TeamSection, { type Player } from '@/components/TeamSection.vue'

const props = defineProps<{
  players: Player[]
  ctaHref?: string
}>()

const { players, ctaHref } = props
</script>

