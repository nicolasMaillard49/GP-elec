<script setup lang="ts">
import { config } from '~/config'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy-950 text-white border-t border-white/5">
    <div class="section-container py-20">
      <div class="grid md:grid-cols-3 gap-12 items-start">
        <!-- Identité -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 border border-electric-400/40 flex items-center justify-center text-electric-400">
              <svg class="size-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3L4 12h5l-1 5 7-9h-5l1-5z" />
              </svg>
            </div>
            <div>
              <div class="font-bold text-lg leading-none tracking-[0.15em] uppercase">{{ config.nom }}</div>
              <div class="text-white/40 text-[10px] tracking-[0.25em] uppercase mt-1">Électricien Qualifelec</div>
            </div>
          </div>
          <p class="text-white/50 text-sm leading-relaxed max-w-sm">
            Entreprise familiale, 40 ans d'expertise.
            Installation, rénovation, borne de recharge, domotique.
          </p>
          <div class="flex flex-wrap gap-2 mt-6">
            <span
              v-for="cert in config.certifications"
              :key="cert"
              class="px-3 py-1 border border-white/15 text-[10px] tracking-[0.2em] uppercase text-white/60"
            >
              {{ cert }}
            </span>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">Plan du site</h3>
          <ul class="space-y-3">
            <li><a href="#apropos" class="text-white/60 hover:text-white text-sm transition-colors">À propos</a></li>
            <li><a href="#services" class="text-white/60 hover:text-white text-sm transition-colors">Services</a></li>
            <li><a href="#engagements" class="text-white/60 hover:text-white text-sm transition-colors">Engagements</a></li>
            <li><a href="#contact" class="text-white/60 hover:text-white text-sm transition-colors">Contact</a></li>
            <li><a href="/mentions-legales" class="text-white/60 hover:text-white text-sm transition-colors">Mentions légales</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">Contact</h3>
          <ul class="space-y-4 text-sm">
            <li>
              <a :href="config.telephoneHref" class="text-white hover:text-electric-400 transition-colors font-medium">
                {{ config.telephone }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${config.email}`" class="text-white/60 hover:text-white transition-colors">
                {{ config.email }}
              </a>
            </li>
            <li class="text-white/60 leading-relaxed">
              {{ config.adresse }}<br/>{{ config.codePostal }} {{ config.ville }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Barre légale -->
    <div class="border-t border-white/5">
      <div class="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/30 tracking-wider">
        <p>© {{ currentYear }} {{ config.nom }} — Tous droits réservés</p>
        <p>SIRET : {{ config.legal.siret }}</p>
      </div>
    </div>
  </footer>
</template>
