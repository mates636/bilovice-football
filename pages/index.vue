<template>
  <main>
    <HeroCarousel />

    <!-- Upcoming Matches -->
    <UpcomingMatchesCard :men="upcomingMen" :youth="upcomingYouth" />

    <!-- Recent Matches -->
    <RecentMatchesCard :men="recentMen" :youth="recentYouth" />


    <!-- Intro Section temporarily disabled -->

    <!-- Sponsors Section -->
    <SponsorsSection />

  </main>
</template>

<script setup lang="ts">
import HeroCarousel from '@/components/HeroCarousel.vue'
import SponsorsSection from '@/components/SponsorsSection.vue'
import UpcomingMatchesCard from '@/components/UpcomingMatchesCard.vue'
import RecentMatchesCard from '@/components/RecentMatchesCard.vue'



const upcomingMen = [
  { date: 'Ne 17. srp', time: '16:30', opponent: 'Svratka', venue: 'Domácí hřiště' },
  { date: 'Út 19. srp', time: '17:00', opponent: 'Řečkovice', venue: 'Novoměstská' }
]
const upcomingYouth = [
  { date: 'So 16. srp', time: '15:00', opponent: 'TATRAN Kohoutovice', venue: 'Domácí hřiště' }
]

const recentMen = [
  // { date: 'Ne 18. srp', opponent: 'AC Lakeside', venue: 'Lakeside Park', result: '2–1' },
  // { date: 'So 10. srp', opponent: 'SK Meadow', venue: 'Domácí stadion', result: '0–0' }
]
const recentYouth = [
  { date: 'Ne 10. srp', opponent: 'Rousínov/FDK', venue: 'Domácí hřiště', result: '2-0' }
]

useHead({
  htmlAttrs: { lang: 'cs' },
  meta: [{ name: 'theme-color', content: '#065f46' }]
})
</script>
