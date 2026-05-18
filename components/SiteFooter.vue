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
          <a href="#" class="inline-block mb-6" aria-label="GP elec — Accueil">
            <img
              src="/images/logo-gp-elec.webp"
              alt="GP elec — Électricien Angers / Brissac Loire Aubance"
              width="696"
              height="161"
              class="h-9 sm:h-11 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p class="text-white/65 text-sm leading-relaxed max-w-sm">
            Entreprise familiale, 40 ans d'expertise.
            Installation, rénovation, dépannage urgence, domotique.
          </p>
          <div class="mt-8 pt-6 border-t border-white/5">
            <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Horaires</p>
            <p class="text-white/60 text-sm leading-relaxed">
              Lun – Ven<br/>
              8h – 12h&nbsp;·&nbsp;13h – 17h
            </p>
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
      <div class="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/55 tracking-wider">
        <p>© {{ currentYear }} {{ config.nom }} — Tous droits réservés</p>
        <p>SIRET : {{ config.legal.siret }}</p>
      </div>
    </div>
  </footer>
</template>
