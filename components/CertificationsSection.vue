<script setup lang="ts">
import { config } from '~/config'

const activeTooltip = ref<string | null>(null)
</script>

<template>
  <section id="certifications" class="py-20 bg-steel-50">
    <div class="section-container">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-navy-700 text-white rounded-full text-sm font-semibold mb-4">
          🏆 Certifications officielles
        </div>
        <h2 class="section-title">Vos garanties de qualité</h2>
        <p class="section-subtitle text-center mx-auto">
          Nos certifications sont vérifiables sur les registres officiels. Elles garantissent notre expertise et votre éligibilité aux aides de l'État.
        </p>
      </div>

      <!-- Grid certifications -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div
          v-for="cert in config.certificationDetails"
          :key="cert.nom"
          class="card p-8 text-center relative overflow-hidden group"
        >
          <!-- Fond coloré subtle -->
          <div
            class="absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10"
            :style="`background-color: ${cert.couleur}`"
          ></div>

          <!-- Badge principal -->
          <div
            class="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white mx-auto mb-6 shadow-lg"
            :style="`background-color: ${cert.couleur}`"
          >
            {{ cert.nom.slice(0, 3) }}
          </div>

          <!-- Nom complet -->
          <h3 class="text-lg font-bold text-navy-700 mb-1">{{ cert.nom }}</h3>
          <p class="text-sm text-steel-500 mb-4">{{ cert.nomComplet }}</p>

          <!-- Bénéfice -->
          <div
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white mb-4"
            :style="`background-color: ${cert.couleur}`"
          >
            <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            {{ cert.benefice }}
          </div>

          <!-- Description -->
          <p class="text-steel-600 text-sm leading-relaxed">{{ cert.description }}</p>
        </div>
      </div>

      <!-- Bandeau vérification -->
      <div class="bg-navy-700 rounded-2xl p-8 text-center">
        <h3 class="text-xl font-bold text-white mb-3">
          🔍 Vérifiez nos certifications vous-même
        </h3>
        <p class="text-white/70 mb-6 max-w-2xl mx-auto">
          La certification RGE est publique et vérifiable sur le site officiel du gouvernement.
          Entrez notre SIRET pour confirmer notre statut RGE avant tout engagement.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.qualite-energie.gouv.fr/fr/trouver-un-professionnel"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-700 font-bold rounded-lg hover:bg-steel-100 transition-colors min-h-[44px]"
          >
            <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            qualite-energie.gouv.fr
          </a>
          <div class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg min-h-[44px]">
            <span class="text-white/60 text-sm">SIRET :</span>
            <span class="font-mono font-bold">{{ config.legal.siret }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
