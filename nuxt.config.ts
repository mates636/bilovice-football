// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: '.',
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: 'SK Bílovice nad Svitavou',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'SK Bílovice nad Svitavou' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/Znak_obce_Bilovice_nad_Svitavou.png' }
      ]
    }
  },
  tailwindcss: {
    viewer: false,
    cssPath: false
  }
})
