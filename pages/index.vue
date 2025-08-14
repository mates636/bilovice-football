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
  { date: 'So 24. srp', time: '15:00', opponent: 'FK Riverton', venue: 'Domácí stadion' },
  { date: 'Ne 1. zář', time: '17:30', opponent: 'TJ Southbridge', venue: 'Southbridge Arena' }
]
const upcomingYouth = [
  { date: 'So 24. srp', time: '11:00', opponent: 'U-18 Northfield', venue: 'Tréninkové centrum' }
]

const recentMen = [
  { date: 'Ne 18. srp', opponent: 'AC Lakeside', venue: 'Lakeside Park', result: '2–1' },
  { date: 'So 10. srp', opponent: 'SK Meadow', venue: 'Domácí stadion', result: '0–0' }
]
const recentYouth = [
  { date: 'So 17. srp', opponent: 'U-18 Eastwood', venue: 'Eastwood Field', result: '1–3' }
]

useHead({
  htmlAttrs: { lang: 'cs' },
  meta: [{ name: 'theme-color', content: '#065f46' }]
})
</script>
