<template>
  <section aria-label="Featured highlights" class="relative mt-5">
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
          class="relative w-full flex-none aspect-[16/9] sm:aspect-[21/9] bg-neutral-800"
        >
          <img
            :src="slide.src"
            :alt="slide.alt"
            class="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            width="1920" height="864"
          />
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
}

// Images served from public/images/carousel
const carouselImages = [
  '/images/carousel/0I4A7561.jpg',
  '/images/carousel/0I4A8756.jpg',
  '/images/carousel/_MG_7843.jpg'
]

const slides = ref<Slide[]>(
  carouselImages.map((src) => ({ src, alt: 'Carousel photo' }))
)

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

