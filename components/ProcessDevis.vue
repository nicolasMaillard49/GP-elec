<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section class="py-20 bg-steel-50">
    <div class="section-container">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-semibold mb-4">
          📋 Processus simple
        </div>
        <h2 class="section-title">De la demande à l'installation</h2>
        <p class="section-subtitle text-center mx-auto">
          Trois étapes claires, sans surprise. Vous êtes informé à chaque étape.
        </p>
      </div>

      <!-- Étapes -->
      <div class="grid md:grid-cols-3 gap-8 relative">
        <!-- Ligne de connexion (desktop) -->
        <div class="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-orange-200 -translate-y-1/2 z-0"></div>

        <div
          v-for="(etape, index) in config.etapesDevis"
          :key="etape.numero"
          class="relative"
        >
          <!-- Card étape -->
          <div class="card p-8 text-center hover:shadow-xl transition-all duration-300 relative z-10 group">
            <!-- Numéro -->
            <div class="w-16 h-16 bg-navy-700 group-hover:bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 shadow-navy">
              <span class="text-2xl font-black text-white">{{ etape.numero }}</span>
            </div>

            <!-- Icone -->
            <div class="text-4xl mb-4">{{ etape.icone }}</div>

            <h3 class="text-xl font-bold text-navy-700 mb-3">{{ etape.titre }}</h3>
            <p class="text-steel-600 text-sm leading-relaxed mb-4">{{ etape.description }}</p>

            <!-- Durée -->
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-steel-100 rounded-full text-xs font-semibold text-steel-600">
              <svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ etape.duree }}
            </div>
          </div>

          <!-- Flèche (mobile) -->
          <div v-if="index < config.etapesDevis.length - 1" class="md:hidden flex justify-center my-4">
            <svg class="size-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <!-- CTA central -->
      <div class="text-center mt-12">
        <a href="#contact" class="btn-primary text-lg px-10 py-4">
          Démarrer mon projet gratuitement →
        </a>
        <p class="text-steel-400 text-sm mt-4">
          Diagnostic et devis 100% gratuits — Aucun engagement
        </p>
      </div>
    </div>
  </section>
</template>
