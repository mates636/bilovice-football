<template>
  <section aria-label="Featured highlights" class="relative">
    <div class="section">
      <div
        class="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
        tabindex="0"
        @keydown.left.prevent="prev"
        @keydown.right.prevent="next"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <!-- Slides wrapper -->
        <div
          ref="track"
          class="relative flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(slide, i) in slides"
            :key="i"
            class="relative min-w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-800"
          >
            <img
              :src="slide.src"
              :alt="slide.alt"
              class="absolute inset-0 h-full w-full object-cover scale-105 will-change-transform"
              loading="lazy"
            />
            <!-- Gradient overlay with vignette -->
            <div class="absolute inset-0">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" aria-hidden="true" />
              <div class="absolute inset-0 ring-1 ring-inset ring-black/20" aria-hidden="true" />
            </div>
            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p class="kicker text-emerald-300">{{ slide.kicker }}</p>
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">{{ slide.title }}</h2>
              <p class="muted mt-3 max-w-2xl text-base sm:text-lg">{{ slide.subtitle }}</p>
              <div class="mt-6 flex flex-wrap gap-3">
                <a :href="slide.ctaHref" class="btn-primary shadow-lg shadow-emerald-500/20">{{ slide.cta }}</a>
                <a :href="slide.secondaryHref" class="btn-ghost">{{ slide.secondary }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <button
          class="group absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
          @click="prev"
          aria-label="Previous slide"
        >
          <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          class="group absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
          @click="next"
          aria-label="Next slide"
        >
          <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <!-- Dots -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            v-for="(_, i) in slides"
            :key="i"
            class="h-2 w-2 rounded-full transition-all"
            :class="i === currentIndex ? 'w-6 bg-white' : 'bg-white/60 hover:bg-white/80'"
            @click="goTo(i)"
            :aria-label="`Go to slide ${i + 1}`"
            :aria-current="i === currentIndex ? 'true' : 'false'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Slide {
  src: string
  alt: string
  title: string
  subtitle: string
  kicker: string
  cta: string
  ctaHref: string
  secondary: string
  secondaryHref: string
}

const slides = ref<Slide[]>([
  {
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000&auto=format&fit=crop',
    alt: 'Stadium under lights',
    title: 'Under the Lights',
    subtitle: 'Feel the roar of the crowd at our home ground.',
    kicker: 'Matchday',
    cta: 'Buy Tickets',
    ctaHref: '#tickets',
    secondary: 'Learn More',
    secondaryHref: '#about'
  },
  {
    src: 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2000&auto=format&fit=crop',
    alt: 'Team celebration',
    title: 'Together We Rise',
    subtitle: 'A decade of passion, skill, and community.',
    kicker: 'Our Team',
    cta: 'Meet the Squad',
    ctaHref: '#team',
    secondary: 'Club History',
    secondaryHref: '#history'
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop',
    alt: 'Player in action',
    title: 'Relentless Pursuit',
    subtitle: 'We play with heart and purpose every minute.',
    kicker: 'Philosophy',
    cta: 'Join the Academy',
    ctaHref: '#academy',
    secondary: 'Watch Highlights',
    secondaryHref: '#highlights'
  }
])

const currentIndex = ref(0)
let intervalId: number | undefined
const isPaused = ref(false)

function next() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}
function prev() {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}
function goTo(i: number) {
  currentIndex.value = i
}
function pause() { isPaused.value = true }
function resume() { isPaused.value = false }

onMounted(() => {
  intervalId = window.setInterval(() => {
    if (!isPaused.value) next()
  }, 6000)
})

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>

