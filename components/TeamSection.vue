<template>
  <section class="section py-12 sm:py-16 md:py-20">
    <!-- Header -->
    <header class="flex items-end justify-between">
      <div>
        <p class="kicker">Squad</p>
        <h2 class="h2 mt-2">{{ title }}</h2>
      </div>
      <slot name="actions" />
    </header>

    <!-- Grid of players -->
    <div v-if="players?.length" class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
      <article
        v-for="(p, i) in players"
        :key="p.id ?? p.name ?? i"
        class="card group overflow-hidden hover:ring-emerald-400/30 transition"
      >
        <div class="relative aspect-[3/4] bg-neutral-800">
          <img
            :src="p.photo"
            :alt="p.name ? `${p.name} portrait` : 'Player portrait'"
            class="absolute inset-0 h-full w-full object-cover will-change-transform group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
          <!-- Gradient + text -->
          <div class="absolute inset-x-0 bottom-0 p-3 sm:p-4">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
            <div class="relative">
              <p class="text-[11px] sm:text-xs text-emerald-300 font-medium tracking-wide">{{ p.competition }}</p>
              <p v-if="p.name" class="mt-0.5 text-sm sm:text-base font-semibold">{{ p.name }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>

    <p v-else class="muted mt-6">No players available.</p>
  </section>
</template>

<script setup lang="ts">
export interface Player {
  id?: string | number
  name?: string
  photo: string
  competition: string
}

const props = defineProps<{ title: string; players: Player[] }>()

// Expose for parent wrappers (optional)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { title, players } = props
</script>

