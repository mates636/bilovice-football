<template>
  <header class="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 ring-1 ring-white/10">
    <div class="section h-16 flex items-center justify-between">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <!-- <div class="size-9 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center">
          <svg class="size-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M5 12l4 3 6-6"/></svg>
        </div> -->
        <span class="font-extrabold tracking-tight">SK Bílovice nad Svitavou</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav aria-label="Hlavní menu" class="hidden md:flex items-center gap-6 text-sm">
        <NuxtLink v-for="item in topItems" :key="item.to" :to="item.to" class="text-neutral-300 hover:text-white transition-colors">
          {{ item.label }}
        </NuxtLink>
        <!-- Týmy dropdown (click to toggle, stays open until click outside/Escape) -->
        <div class="relative" ref="teamsMenu">
          <button
            class="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
            @click.stop="teamsOpen = !teamsOpen"
            :aria-expanded="teamsOpen ? 'true' : 'false'"
            aria-haspopup="menu"
          >
            Týmy
            <svg class="size-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div v-show="teamsOpen" class="absolute right-0 mt-2 w-48 rounded-lg bg-neutral-900 ring-1 ring-white/10 shadow-lg py-2" role="menu">
            <NuxtLink v-for="t in teamItems" :key="t.to" :to="t.to" class="block px-3 py-2 text-neutral-200 hover:bg-white/5" role="menuitem" @click="teamsOpen = false">
              {{ t.label }}
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- Actions (desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <!-- <a href="#tickets" class="btn-primary">Vstupenky</a> -->
        <a href="#sponsors" class="btn-ghost">Partneři</a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        @click="open = !open"
        :aria-expanded="open ? 'true' : 'false'"
        aria-label="Otevřít menu"
      >
        <svg v-if="!open" class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <svg v-else class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <!-- Mobile panel -->
    <div v-show="open" class="md:hidden border-t border-white/10">
      <nav class="section py-3 grid gap-2">
        <NuxtLink v-for="item in topItems" :key="item.to + '-m'" :to="item.to" class="block rounded-lg px-3 py-2 text-neutral-200 hover:bg-white/5">
          {{ item.label }}
        </NuxtLink>
        <!-- Mobile: Týmy toggle -->
        <button
          class="rounded-lg px-3 py-2 text-left text-neutral-200 hover:bg-white/5 inline-flex items-center justify-between"
          @click="teamsOpen = !teamsOpen"
          :aria-expanded="teamsOpen ? 'true' : 'false'"
          aria-controls="mobile-teams"
        >
          <span>Týmy</span>
          <svg class="size-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div id="mobile-teams" v-show="teamsOpen" class="mt-1 grid">
          <NuxtLink v-for="t in teamItems" :key="t.to + '-m'" :to="t.to" class="block rounded-lg px-3 py-2 text-neutral-200 hover:bg-white/5" @click="open = false; teamsOpen = false">
            {{ t.label }}
          </NuxtLink>
        </div>
        <div class="flex gap-3 pt-2">
          <!-- <a href="#tickets" class="btn-primary flex-1 justify-center">Vstupenky</a> -->
          <a href="#sponsors" class="btn-ghost flex-1 justify-center">Partneři</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Item { label: string; to: string }
const topItems: Item[] = [
  { label: 'Úvod', to: '/' },
  { label: 'Historie', to: '/historie' },
  // { label: 'Aktuality', to: '/#news' },
  // { label: 'Kontakt', to: '/#contact' }
]

const teamItems: Item[] = [
  { label: 'Muži', to: '/team/mens' },
  { label: 'Mládež', to: '/team/youth' },
  { label: 'Junioři', to: '/team/junior' },
]

const open = ref(false)
const teamsOpen = ref(false)

// Close teams menu on outside click or Escape
const teamsMenu = ref<HTMLElement | null>(null)
if (import.meta.client) {
  window.addEventListener('click', (e) => {
    if (!teamsOpen.value) return
    const target = e.target as Node
    if (teamsMenu.value && !teamsMenu.value.contains(target)) {
      teamsOpen.value = false
    }
  })
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') teamsOpen.value = false
  })
}

</script>

