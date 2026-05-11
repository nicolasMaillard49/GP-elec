<script setup lang="ts">
import { config } from '~/config'

function renderStars(note: number) {
  return '★'.repeat(note) + '☆'.repeat(5 - note)
}
</script>

<template>
  <section id="temoignages" class="py-20 bg-steel-50">
    <div class="section-container">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
          ⭐ Avis vérifiés
        </div>
        <h2 class="section-title">Ce que disent nos clients</h2>

        <!-- Note globale -->
        <div class="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-md mt-6">
          <div class="text-center">
            <div class="text-5xl font-black text-navy-700">{{ config.noteGoogle }}</div>
            <div class="text-yellow-400 text-xl mt-1">★★★★★</div>
          </div>
          <div class="text-left">
            <div class="font-bold text-navy-700">Excellent</div>
            <div class="text-steel-500 text-sm">{{ config.nombreAvis }} avis Google vérifiés</div>
            <div class="flex items-center gap-1 mt-2">
              <svg class="size-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span class="text-xs text-steel-400">Google My Business</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards témoignages -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="temoignage in config.temoignages"
          :key="temoignage.nom"
          class="card p-6"
        >
          <!-- Note + date -->
          <div class="flex items-center justify-between mb-4">
            <div class="text-yellow-400 text-xl" aria-label="Note {{ temoignage.note }}/5">
              {{ renderStars(temoignage.note) }}
            </div>
            <span class="text-steel-400 text-xs">{{ temoignage.date }}</span>
          </div>

          <!-- Texte -->
          <blockquote class="text-steel-600 text-sm leading-relaxed mb-4 relative">
            <svg class="size-8 text-steel-200 absolute -top-2 -left-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <span class="relative z-10 pl-6">{{ temoignage.texte }}</span>
          </blockquote>

          <!-- Auteur -->
          <div class="flex items-center justify-between pt-4 border-t border-steel-100">
            <div>
              <div class="font-semibold text-navy-700 text-sm">{{ temoignage.nom }}</div>
              <div class="text-steel-400 text-xs">{{ temoignage.ville }}</div>
            </div>
            <span class="px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full">
              {{ temoignage.travaux }}
            </span>
          </div>
        </div>
      </div>

      <!-- Lien Google Reviews -->
      <div class="text-center mt-8">
        <a
          href="#"
          class="inline-flex items-center gap-2 text-navy-700 hover:text-orange-500 font-semibold text-sm transition-colors"
        >
          Voir tous les avis Google
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
