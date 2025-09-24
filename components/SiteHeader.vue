<template>
  <header class="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 ring-1 ring-white/10">
    <div class="section h-20 flex items-center justify-between">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="size-20 rounded-lg grid place-items-center">
          <img class="size-20" src="/images/Znak_obce_Bilovice_nad_Svitavou.png" alt="Znak obce Bílovice nad Svitavou" />
        </div>
        <h2 class="font-extrabold tracking-tight ">SK Bílovice nad Svitavou</h2>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav aria-label="Hlavní menu" class="hidden md:flex items-center gap-6 text-lg">
        <NuxtLink v-for="item in topItems" :key="item.to" :to="item.to" class="text-neutral-300 hover:text-white transition-colors">
          {{ item.label }}
        </NuxtLink>
        <!-- Týmy dropdown (click to toggle, stays open until click outside/Escape) -->
        <!-- <div class="relative" ref="teamsMenu">
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
        </div> -->
      </nav>

      <!-- Actions (desktop) -->
      <div class="hidden md:flex items-center gap-3 text-lg">
        <a href="#sponsors" class="btn-ghost">Partneři</a>
        <a href="#sponsoring" class="btn-ghost">Sponzoring</a>

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
        <!-- <button
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
        </div> -->
        <div class="flex gap-3 pt-2">
          <a href="#sponsors" class="btn-ghost flex-1 justify-center">Partneři</a>
          <a href="#sponsoring" class="btn-ghost flex-1 justify-center">Sponzoring</a>

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
]

const teamItems: Item[] = [
  { label: 'Muži', to: '/team/mens' },
  { label: 'Mládež', to: '/team/youth' },
  { label: 'Junioři', to: '/team/junior' },
]

const open = ref(false)
const teamsOpen = ref(false)

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

