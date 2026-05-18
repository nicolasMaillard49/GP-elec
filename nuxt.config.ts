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
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'fr-FR' },
      title: config.seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: config.seo.description },
        { name: 'google-site-verification', content: '2exNAUznUrc7Nz9cHlwEUgqOxlsYQOddAlHQaaoIBuM' },
        { name: 'keywords', content: config.seo.keywords.join(', ') },
        { name: 'author', content: `${config.gerant} — ${config.nom}` },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#0a1628' },
        { name: 'format-detection', content: 'telephone=yes' },
        // Géolocalisation (signaux SEO local)
        { name: 'geo.region', content: 'FR-PDL' },
        { name: 'geo.placename', content: `${config.ville}, ${config.departement}` },
        { name: 'geo.position', content: `${config.geo.latitude};${config.geo.longitude}` },
        { name: 'ICBM', content: `${config.geo.latitude}, ${config.geo.longitude}` },
        // Open Graph
        { property: 'og:site_name', content: config.nom },
        { property: 'og:title', content: config.seo.title },
        { property: 'og:description', content: config.seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:url', content: 'https://www.gp-elec-49.com/' },
        { property: 'og:image', content: `https://www.gp-elec-49.com${config.seo.ogImage}` },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: `${config.nom} — Électricien ${config.ville} & Angers` },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: config.seo.title },
        { name: 'twitter:description', content: config.seo.description },
        { name: 'twitter:image', content: `https://www.gp-elec-49.com${config.seo.ogImage}` },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://www.gp-elec-49.com/' },
        { rel: 'alternate', hreflang: 'fr-FR', href: 'https://www.gp-elec-49.com/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://www.gp-elec-49.com/' },
        // Inter Variable — self-hosted woff2 (47 KB, all weights, latin)
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-PEQRYZZM60', async: true },
        { innerHTML: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-PEQRYZZM60');" },
      ],
    }
  },

  css: ['~/assets/css/main.css'],

  // Vercel ready — static generation (prerender)
  nitro: {
    preset: 'vercel-static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // Pre-render at build (SSG). HTML ready → fast LCP, no JS-boot wait.
  ssr: true,
})
