<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section id="engagements" class="relative bg-white py-28 sm:py-36 overflow-hidden">
    <div class="section-container">
      <!-- En-tête -->
      <div class="max-w-2xl mx-auto text-center mb-20">
        <p class="text-navy-700 text-xs font-semibold tracking-[0.4em] uppercase mb-8">
          Nos engagements
        </p>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 uppercase tracking-tight leading-[1.05]">
          Le contrat<br/>
          <span class="text-navy-700">de confiance</span>
        </h2>
        <div class="mx-auto mt-10 w-12 h-px bg-electric-500"></div>
        <p class="mt-10 text-steel-600 text-base sm:text-lg leading-relaxed">
          Chaque projet est encadré par un contrat de maîtrise d'œuvre clair,
          avec les engagements suivants&nbsp;:
        </p>
      </div>

      <!-- Grille engagements -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-200 max-w-6xl mx-auto">
        <article
          v-for="(eng, idx) in config.engagements"
          :key="eng.titre"
          class="bg-white p-10 group transition-colors duration-300 hover:bg-navy-50/40"
        >
          <!-- Numéro -->
          <div class="text-electric-500 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            {{ String(idx + 1).padStart(2, '0') }}
          </div>

          <!-- Titre -->
          <h3 class="text-2xl font-bold text-navy-900 uppercase tracking-tight mb-4">
            {{ eng.titre }}
          </h3>

          <!-- Filet -->
          <div class="w-8 h-px bg-electric-500 mb-5 transition-all duration-300 group-hover:w-14"></div>

          <!-- Texte -->
          <p class="text-steel-600 text-sm leading-relaxed">
            {{ eng.texte }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
