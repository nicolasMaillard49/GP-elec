<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
  <section id="apropos" class="relative bg-navy-950 text-white py-28 sm:py-36 overflow-hidden">
    <!-- 🏰 Fond panoramique Angers + masque assombrissant -->
    <div class="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      <img
        src="/images/villes/angers-pano.webp"
        alt=""
        width="1500"
        height="530"
        class="w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
      <!-- Masque assombrissant principal -->
      <div class="absolute inset-0 bg-navy-950/75"></div>
      <!-- Vignette / dégradés pour profondeur -->
      <div class="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/60"></div>
      <div class="absolute inset-0 bg-gradient-to-tr from-navy-900/30 via-transparent to-transparent mix-blend-overlay"></div>
      <!-- Fade haut/bas pour intégrer dans le flux -->
      <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950 to-transparent"></div>
      <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent"></div>
    </div>

    <!-- Filet décoratif latéral -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-electric-400/60 z-10"></div>

    <div class="relative z-10 section-container">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Eyebrow -->
        <p class="text-electric-400 text-xs font-semibold tracking-[0.4em] uppercase mb-8">
          Qui sommes-nous
        </p>

        <!-- Titre -->
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05] mb-10">
          Une entreprise<br/>
          <span class="text-electric-400">familiale</span>
        </h2>

        <!-- Filet -->
        <div class="mx-auto w-12 h-px bg-electric-400/60 mb-10"></div>

        <!-- Corps -->
        <div class="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed">
          <p>
            <span class="font-semibold text-white">{{ config.nom }}</span>, c'est avant tout
            <span class="font-semibold text-white">{{ config.gerant }}</span> — héritier d'un
            savoir-faire familial transmis sur <span class="font-semibold text-white">40 années</span>
            d'expérience. Proximité, écoute et exigence sont les fondations
            de chaque chantier mené sur le secteur de Brissac Loire Aubance et d'Angers.
          </p>
          <p>
            De l'installation neuve au dépannage en urgence, de la rénovation
            complète à la mise aux normes, nous accompagnons particuliers et
            professionnels dans tous leurs projets électriques —
            avec la rigueur d'un savoir-faire transmis et affiné sur quatre décennies.
          </p>
        </div>

        <!-- Chiffres -->
        <div class="mt-20 grid grid-cols-3 gap-px bg-white/10 max-w-2xl mx-auto backdrop-blur-sm">
          <div class="bg-navy-900/70 py-8 px-4">
            <div class="text-4xl sm:text-5xl font-bold text-white">40</div>
            <div class="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mt-2">Années</div>
          </div>
          <div class="bg-navy-900/70 py-8 px-4">
            <div class="text-4xl sm:text-5xl font-bold text-white">2</div>
            <div class="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mt-2">Générations</div>
          </div>
          <div class="bg-navy-900/70 py-8 px-4">
            <div class="text-4xl sm:text-5xl font-bold text-white">{{ config.noteGoogle }}</div>
            <div class="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mt-2">Google</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
