<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section id="apropos" class="relative bg-white py-28 sm:py-36 overflow-hidden">
    <!-- Filet décoratif latéral -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-electric-400/40"></div>

    <div class="section-container">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Eyebrow -->
        <p class="text-navy-700 text-xs font-semibold tracking-[0.4em] uppercase mb-8">
          Qui sommes-nous
        </p>

        <!-- Titre -->
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 uppercase tracking-tight leading-[1.05] mb-10">
          Une entreprise<br/>
          <span class="text-navy-700">familiale</span>
        </h2>

        <!-- Filet -->
        <div class="mx-auto w-12 h-px bg-electric-500 mb-10"></div>

        <!-- Corps -->
        <div class="space-y-6 text-steel-600 text-base sm:text-lg leading-relaxed">
          <p>
            <span class="font-semibold text-navy-900">{{ config.nom }}</span>, c'est avant tout
            <span class="font-semibold text-navy-900">{{ config.gerant }}</span> — héritier d'un
            savoir-faire familial transmis sur <span class="font-semibold text-navy-900">40 années</span>
            d'expérience. Proximité, écoute et exigence sont les fondations
            de chaque chantier mené sur le secteur de Brissac Loire Aubance et d'Angers.
          </p>
          <p>
            De l'installation neuve à la borne de recharge, de la rénovation
            complète à la mise aux normes, nous accompagnons particuliers et
            professionnels dans tous leurs projets électriques —
            avec la rigueur de la certification Qualifelec.
          </p>
        </div>

        <!-- Chiffres -->
        <div class="mt-20 grid grid-cols-3 gap-px bg-steel-200 max-w-2xl mx-auto">
          <div class="bg-white py-8 px-4">
            <div class="text-4xl sm:text-5xl font-bold text-navy-900">40</div>
            <div class="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-steel-500 mt-2">Années</div>
          </div>
          <div class="bg-white py-8 px-4">
            <div class="text-4xl sm:text-5xl font-bold text-navy-900">3</div>
            <div class="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-steel-500 mt-2">Certifs</div>
          </div>
          <div class="bg-white py-8 px-4">
            <div class="text-4xl sm:text-5xl font-bold text-navy-900">{{ config.noteGoogle }}</div>
            <div class="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-steel-500 mt-2">Google</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
