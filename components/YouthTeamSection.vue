<template>
  <TeamSection title="Youth Team" :players="players">
    <template #actions>
      <a v-if="ctaHref" :href="ctaHref" class="btn-ghost">Explore academy</a>
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

