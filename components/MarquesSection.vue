<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section class="py-16 bg-white border-y border-steel-100">
    <div class="section-container">
      <div class="text-center mb-8">
        <p class="text-steel-500 font-semibold text-sm uppercase tracking-widest">
          Installateur agréé des meilleures marques
        </p>
      </div>

      <!-- Logos marques -->
      <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        <div
          v-for="marque in config.marques"
          :key="marque"
          class="flex items-center justify-center h-14 px-6 bg-steel-50 hover:bg-navy-50 border border-steel-200 hover:border-navy-200 rounded-xl transition-all duration-200 min-w-[120px]"
        >
          <!-- SVG placeholder brand logo -->
          <svg
            class="w-auto h-7 text-steel-500"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="10" width="10" height="10" rx="2" fill="currentColor" opacity="0.7"/>
            <text x="16" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">{{ marque }}</text>
          </svg>
        </div>
      </div>

      <p class="text-center text-steel-400 text-xs mt-6">
        Pièces détachées disponibles 10 ans minimum — Garanties fabricant maintenues
      </p>
    </div>
  </section>
</template>
