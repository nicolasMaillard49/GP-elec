<script setup lang="ts">
</script>

<template>
  <section id="apropos-moi" class="relative bg-navy-950 py-16 sm:py-20 overflow-hidden">
    <div class="section-container">
      <div class="max-w-4xl mx-auto">
        <!-- Eyebrow -->
        <p class="text-electric-400 text-xs font-semibold tracking-[0.4em] uppercase mb-8 text-center">
          À propos de moi
        </p>

        <!-- Bloc horizontal -->
        <div class="relative bg-navy-900/40 border border-white/5 px-8 sm:px-14 py-12 sm:py-14">
          <!-- Guillemet haut-gauche -->
          <span
            aria-hidden="true"
            class="absolute -top-6 left-4 sm:left-8 text-electric-400/80 text-7xl sm:text-8xl font-serif leading-none select-none"
          >
            &ldquo;
          </span>

          <!-- Guillemet bas-droite -->
          <span
            aria-hidden="true"
            class="absolute -bottom-16 right-4 sm:right-8 text-electric-400/80 text-7xl sm:text-8xl font-serif leading-none select-none"
          >
            &rdquo;
          </span>

          <div class="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <!-- Avatar -->
            <div class="shrink-0">
              <div class="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center text-navy-950 text-4xl sm:text-5xl font-bold border-2 border-electric-400/40 shadow-lg">
                PG
              </div>
            </div>

            <!-- Présentation -->
            <div class="text-center sm:text-left">
              <h2 class="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-2">
                Pierre Guille
              </h2>
              <div class="w-10 h-px bg-electric-500 mb-4 mx-auto sm:mx-0"></div>
              <p class="text-white/70 text-base sm:text-lg leading-relaxed">
                <span class="font-semibold text-white">Électricien diplômé</span>,
                passionné par mon métier et au service des particuliers
                et professionnels de la région.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
