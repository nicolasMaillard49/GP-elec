<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section id="services" class="bg-navy-950">
    <!-- Bande titre haute -->
    <div class="py-28 sm:py-36 px-6 text-center">
      <p class="text-electric-400 text-xs font-semibold tracking-[0.4em] uppercase mb-8">
        Nos métiers
      </p>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05]">
        Notre <span class="text-electric-400">savoir-faire</span>
      </h2>
      <div class="mx-auto mt-10 w-12 h-px bg-electric-400/60"></div>
    </div>

    <!-- Grille 2×2 -->
    <div class="grid grid-cols-1 md:grid-cols-2">
      <article
        v-for="service in config.servicesGrid"
        :key="service.id"
        class="group relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden cursor-pointer"
      >
        <!-- Image -->
        <img
          :src="service.image"
          :alt="service.titre"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          loading="lazy"
        />

        <!-- Overlay sombre permanent -->
        <div class="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/40 transition-colors duration-500"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent"></div>

        <!-- Contenu -->
        <div class="relative h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16">
          <!-- Sous-titre -->
          <p class="text-electric-400 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3 opacity-90">
            {{ service.sousTitre }}
          </p>

          <!-- Titre -->
          <h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-none mb-5">
            {{ service.titre }}
          </h3>

          <!-- Filet animé -->
          <div class="w-10 h-px bg-electric-400 mb-5 transition-all duration-500 group-hover:w-20"></div>

          <!-- Texte -->
          <p class="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mb-6">
            {{ service.texte }}
          </p>

          <!-- Flèche -->
          <div class="inline-flex items-center gap-3 text-white/60 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 group-hover:text-electric-400 group-hover:gap-5">
            En savoir plus
            <span>→</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Bande basse -->
    <div class="py-20 text-center px-6 border-t border-white/5">
      <p class="text-white/60 text-sm mb-6">Un projet ? Un conseil ? Une intervention rapide ?</p>
      <a
        href="#contact"
        class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-electric-400 text-white hover:text-electric-400 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:gap-5"
      >
        Parlons-en
        <span>→</span>
      </a>
    </div>
  </section>
</template>
