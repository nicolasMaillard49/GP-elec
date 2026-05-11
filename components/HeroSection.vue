<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section class="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
    <!-- Image de fond -->
    <div class="absolute inset-0">
      <img
        :src="config.heroImage"
        alt=""
        class="w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
      />
    </div>

    <!-- Overlay bleu profond -->
    <div class="absolute inset-0 bg-navy-950/70"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-900/60 to-navy-950"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-navy-700/40 via-transparent to-transparent mix-blend-overlay"></div>

    <!-- Grain subtil -->
    <div class="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>

    <!-- Contenu centré -->
    <div class="relative z-10 text-center px-6 max-w-5xl">
      <!-- Tagline -->
      <p class="text-electric-400 text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase mb-8 opacity-90">
        {{ config.heroTagline }}
      </p>

      <!-- Titre principal -->
      <h1 class="hero-title font-bold text-white uppercase leading-[0.92] tracking-tight">
        <span class="block">GP elec</span>
        <span class="block text-white/90 mt-3 sm:mt-5 text-[0.5em] font-medium tracking-[0.18em]">
          {{ config.gerant }}
        </span>
        <span class="block text-electric-400/95 mt-4 sm:mt-6 text-[0.3em] font-light tracking-[0.4em]">
          Électricien
        </span>
      </h1>

      <!-- Filet -->
      <div class="mx-auto mt-10 sm:mt-12 w-16 h-px bg-electric-400/60"></div>

      <!-- Baseline -->
      <p class="mt-8 sm:mt-10 text-white/75 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        {{ config.heroBaseline }}
      </p>

      <!-- CTA discrets -->
      <div class="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="#contact"
          class="group inline-flex items-center gap-3 px-8 py-4 bg-electric-400 hover:bg-electric-300 text-navy-950 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:gap-5"
        >
          Devis gratuit
          <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <a
          :href="config.telephoneHref"
          class="inline-flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white text-sm font-medium tracking-[0.15em] border border-white/20 hover:border-white/50 transition-all duration-300"
        >
          {{ config.telephone }}
        </a>
      </div>
    </div>

    <!-- Indicateur scroll -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white/40">
      <span class="text-[10px] font-semibold tracking-[0.3em] uppercase">Découvrir</span>
      <div class="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse-slow"></div>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(3.5rem, 12vw, 9rem);
}
</style>
