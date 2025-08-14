<template>
  <section aria-labelledby="recent-matches-heading" class="section py-6 sm:py-8">
    <article class="card p-6 sm:p-8">
      <p class="kicker">Výsledky</p>
      <h2 id="recent-matches-heading" class="h2 mt-2">Nedávné zápasy</h2>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- Men's team -->
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">Mužský tým</h3>
            <span class="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">A-tým</span>
          </div>

          <ul v-if="men?.length" class="mt-3 divide-y divide-white/10">
            <li v-for="(m, i) in men" :key="`men-${i}`" class="py-3 flex items-start justify-between gap-4">
              <div>
                <p class="font-medium">{{ m.result }} vs {{ m.opponent }}</p>
                <p class="muted text-sm">{{ m.venue }}</p>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium">{{ m.date }}</p>
              </div>
            </li>
          </ul>
          <p v-else class="muted mt-3 text-sm">Žádné nedávné zápasy.</p>
        </div>

        <!-- Youth (Dorost) -->
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">Dorost</h3>
            <span class="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10">U-18</span>
          </div>

          <ul v-if="youth?.length" class="mt-3 divide-y divide-white/10">
            <li v-for="(m, i) in youth" :key="`youth-${i}`" class="py-3 flex items-start justify-between gap-4">
              <div>
                <p class="font-medium">{{ m.result }} vs {{ m.opponent }}</p>
                <p class="muted text-sm">{{ m.venue }}</p>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium">{{ m.date }}</p>
              </div>
            </li>
          </ul>
          <p v-else class="muted mt-3 text-sm">Žádné nedávné zápasy.</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
export interface RecentMatchInfo {
  date: string
  opponent: string
  venue: string
  result: string // e.g., "2–1"
}

const props = defineProps<{ men: RecentMatchInfo[]; youth: RecentMatchInfo[] }>()
// Expose for TS intellisense
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { men, youth } = props
</script>

