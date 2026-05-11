// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from './config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 3010,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
    ]
  },

  app: {
    head: {
      title: config.seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: config.seo.description },
        { name: 'keywords', content: config.seo.keywords.join(', ') },
        // Open Graph
        { property: 'og:title', content: config.seo.title },
        { property: 'og:description', content: config.seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: config.seo.title },
        { name: 'twitter:description', content: config.seo.description },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: `https://www.gp-elec.fr` },
      ],
    }
  },

  css: ['~/assets/css/main.css'],

  // Vercel ready — static generation
  nitro: {
    preset: 'vercel-static',
  },

  // Disable SSR for static export
  ssr: false,
})
