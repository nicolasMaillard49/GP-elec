<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section id="aides" class="py-20 bg-gradient-to-br from-navy-700 to-navy-950 relative overflow-hidden">
    <!-- Motif de fond -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="white"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <div class="section-container relative z-10">
      <!-- En-tête avec impact -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-bold mb-6">
          💰 Aides financières 2024
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
          Jusqu'à
          <span class="text-orange-400">{{ config.aidePourcentageMax }}%</span>
          d'aides de l'État
        </h2>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          En tant qu'artisan certifié RGE, vos travaux sont éligibles à toutes les aides de l'État.
          <strong class="text-white">Nous gérons les démarches à votre place.</strong>
        </p>
      </div>

      <!-- Cards aides -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="aide in config.aidesDetails"
          :key="aide.nom"
          class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
        >
          <!-- Icon + titre -->
          <div class="flex items-start gap-4 mb-4">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              :style="`background-color: ${aide.couleur}30; border: 2px solid ${aide.couleur}50`"
            >
              {{ aide.icon }}
            </div>
            <div>
              <h3 class="font-bold text-white text-lg leading-tight">{{ aide.nom }}</h3>
              <div
                class="text-sm font-bold mt-1"
                :style="`color: ${aide.couleur}`"
              >
                Jusqu'à {{ aide.montantMax }}
              </div>
            </div>
          </div>

          <p class="text-white/70 text-sm mb-4 leading-relaxed">{{ aide.description }}</p>

          <div class="bg-white/10 rounded-lg p-3 text-xs text-white/60">
            <strong class="text-white/80">Conditions :</strong> {{ aide.conditions }}
          </div>
        </div>
      </div>

      <!-- Cumul des aides -->
      <div class="bg-white rounded-2xl p-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-navy-700 mb-4">
              Exemple concret : PAC air/eau pour une maison de 120m²
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2 border-b border-steel-100">
                <span class="text-steel-600">Coût total travaux</span>
                <span class="font-bold text-navy-700">12 000€</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-steel-100">
                <span class="text-steel-600">MaPrimeRénov' (revenus intermédiaires)</span>
                <span class="font-bold text-green-600">- 4 000€</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-steel-100">
                <span class="text-steel-600">CEE (prime énergie)</span>
                <span class="font-bold text-green-600">- 2 500€</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-steel-100">
                <span class="text-steel-600">TVA réduite à 5.5%</span>
                <span class="font-bold text-green-600">≈ - 870€</span>
              </div>
              <div class="flex justify-between items-center pt-3">
                <span class="font-bold text-navy-700 text-lg">Votre reste à charge</span>
                <span class="font-black text-orange-500 text-2xl">4 630€</span>
              </div>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
              <div class="text-6xl font-black text-orange-500 mb-2">61%</div>
              <div class="text-navy-700 font-bold text-lg mb-3">pris en charge</div>
              <p class="text-steel-600 text-sm mb-6">
                Sur 12 000€ de travaux, vous ne payez que 4 630€ après toutes les aides cumulées.
              </p>
              <a href="#contact" class="btn-primary w-full justify-center">
                Calculer mes aides →
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Note légale -->
      <p class="text-center text-white/40 text-xs mt-6">
        * Montants indicatifs. Les aides varient selon les revenus, la zone géographique et la nature des travaux.
        Simulation précise lors du diagnostic gratuit.
      </p>
    </div>
  </section>
</template>
