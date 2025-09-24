<template>
  <main>
    <HeroCarousel />

    <!-- Upcoming Matches -->
    <UpcomingMatchesCard :men="upcomingMen" :youth="upcomingYouth" />

    <!-- Recent Matches -->
    <RecentMatchesCard :men="recentMen" :youth="recentYouth" />

    <!-- Sponsors Section -->
    <SponsorsSection />

    <!-- Sponsoring Section -->
    <SponsoringSection />

  </main>
</template>

<script setup lang="ts">
import HeroCarousel from '@/components/HeroCarousel.vue'
import SponsorsSection from '@/components/SponsorsSection.vue'
import SponsoringSection from '@/components/SponsoringSection.vue'
import UpcomingMatchesCard from '@/components/UpcomingMatchesCard.vue'
import RecentMatchesCard from '@/components/RecentMatchesCard.vue'



const upcomingMen = [
  { date: 'So 27. zář', time: '10:00', opponent: 'ČAFC 2011', venue: 'Domácí hřiště' },
  { date: 'Ne 5. říj',  time: '15:00', opponent: 'Slatina B',  venue: 'Prace' },
  { date: 'So 11. říj', time: '15:00', opponent: 'Bosonohy B', venue: 'Domácí hřiště' },
  // { date: 'Ne 19. říj', time: '14:30', opponent: 'Soběšice B', venue: 'Borová' },
  // { date: 'So 25. říj', time: '14:30', opponent: 'Kohoutovice B', venue: 'Domácí hřiště' },
  // { date: 'So 1. lis',  time: '14:00', opponent: 'MCV',        venue: 'Domácí hřiště' },
];

const upcomingYouth = [
  { date: 'So 27. zář', time: '13:00', opponent: 'TJ START Brno',         venue: 'Domácí hřiště' },
  { date: 'So 4. říj',  time: '10:00', opponent: 'SK Slatina',            venue: 'Tuřanka' },
  { date: 'So 11. říj', time: '10:00', opponent: 'FC Medlánky',           venue: 'Domácí hřiště' },
  // { date: 'So 18. říj', time: '10:00', opponent: 'FK Baník Ratíškovice',  venue: 'Ratíškovice' },
  // { date: 'So 25. říj', time: '09:30', opponent: 'SK Krumvíř',            venue: 'Domácí hřiště' },
  // { date: 'Út 28. říj', time: '10:00', opponent: 'TJ Sokol Dambořice',    venue: 'Dambořice' },
  // { date: 'So 1. lis',  time: '09:00', opponent: 'Rajhrad/Žabčice',       venue: 'Domácí hřiště' },
  // { date: 'So 15. lis', time: '10:00', opponent: 'FC Ivančice',           venue: 'Ivančice-tráva' },
];

const recentMen = [
  // { date: 'Ne 17. srp', opponent: 'Svratka', venue: 'Domácí hřiště', result: '1-3' },
  // { date: 'Út 19. srp', opponent: 'Řečkovice', venue: 'Hřiště soupeře', result: '2-5' },
  // { date: 'So 30. srp', opponent: 'Medlánky B', venue: 'Domácí hřiště', result: '2-1' },
  // { date: 'Út 2. zář', opponent: 'Jundrov', venue: 'Hřiště soupeře', result: '1-2' },
  { date: 'Ne 7. zář', opponent: 'Obřany', venue: 'Hřiště soupeře', result: '4-0' },
  { date: 'So 13. zář', opponent: 'Řícmanice', venue: 'Domácí hřiště', result: '1-2' },
  { date: 'Ne 21. zář', opponent: 'MS Brno B', venue: 'Hřiště soupeře', result: '2-2' },
  // { date: 'So 27. zář', opponent: 'ČAFC 2011', venue: 'Domácí hřiště', result: '' },
  // { date: 'Ne 5. říj', opponent: 'Slatina B', venue: 'Hřiště soupeře', result: '' },
  // { date: 'So 11. říj', opponent: 'Bosonohy B', venue: 'Domácí hřiště', result: '' },
  // { date: 'Ne 19. říj', opponent: 'Soběšice B', venue: 'Hřiště soupeře', result: '' },
  // { date: 'So 25. říj', opponent: 'Kohoutovice B', venue: 'Domácí hřiště', result: '' },
  // { date: 'So 1. lis', opponent: 'MCV', venue: 'Domácí hřiště', result: '' },
];
const recentYouth = [
  // { date: 'Ne 10. srp', opponent: 'Rousínov/FKD',                 venue: 'Hřiště soupeře',  result: '2-0' },
  // { date: 'So 16. srp', opponent: 'TATRAN Kohoutovice',           venue: 'Domácí hřiště',   result: '3-2' },
  // { date: 'So 23. srp', opponent: 'FC Dosta Bystrc - Kníničky',   venue: 'Hřiště soupeře',  result: '0-2' },
  // { date: 'St 27. srp', opponent: 'FK Renocar Podolí',            venue: 'Domácí hřiště',   result: '0-1' },
  { date: 'So 30. srp', opponent: 'Veselí/Strážnice',             venue: 'Domácí hřiště',   result: '1-4' },
  { date: 'So 6. zář', opponent: 'TJ Moravan Lednice',            venue: 'Hřiště soupeře',  result: '2-3' },
  { date: 'So 20. zář', opponent: 'FC Hustopeče',                 venue: 'Hřiště soupeře',  result: '4-1' },
];

useHead({
  htmlAttrs: { lang: 'cs' },
  meta: [{ name: 'theme-color', content: '#065f46' }]
})
</script>
