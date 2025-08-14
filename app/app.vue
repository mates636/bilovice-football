<template>
  <div>
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>
