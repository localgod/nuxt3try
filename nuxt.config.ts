// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    sanity: {
      dataset: process.env.SANITY_DATASET,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/leaflet',
    'usebootstrap',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: 'uy0ayswl',
    apiVersion: new Date().toISOString().split('T')[0]
  }
})