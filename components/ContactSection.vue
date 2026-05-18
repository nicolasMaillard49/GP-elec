<script setup lang="ts">
import { config } from '~/config'

const fullAddress = `${config.adresse}, ${config.codePostal} ${config.ville}`
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`
const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`

const form = reactive({
  nom: '',
  telephone: '',
  email: '',
  message: '',
  acceptRgpd: false,
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const errors = reactive<Record<string, string>>({})

function validate() {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.nom.trim()) errors.nom = 'Requis'
  if (!form.telephone.trim()) errors.telephone = 'Requis'
  if (!form.email.trim()) errors.email = 'Requis'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email invalide'
  if (!form.acceptRgpd) errors.rgpd = 'Acceptation requise'
  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  isSubmitting.value = false
  isSuccess.value = true
  Object.assign(form, { nom: '', telephone: '', email: '', message: '', acceptRgpd: false })
}
</script>

<template>
  <section id="contact" class="relative bg-navy-950 text-white overflow-hidden">
    <!-- Bande titre haute -->
    <div class="py-28 sm:py-36 px-6 text-center border-b border-white/5">
      <p class="text-electric-400 text-xs font-semibold tracking-[0.4em] uppercase mb-8">
        Nous contacter
      </p>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05]">
        Parlons de<br/>
        <span class="text-electric-400">votre projet</span>
      </h2>
      <div class="mx-auto mt-10 w-12 h-px bg-electric-400/60"></div>
    </div>

    <!-- Bloc 2 colonnes -->
    <div class="grid lg:grid-cols-2">
      <!-- Infos -->
      <div class="p-10 sm:p-16 lg:p-20 lg:border-r border-white/5 space-y-12">
        <div>
          <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Téléphone</p>
          <a :href="config.telephoneHref" class="text-2xl sm:text-3xl font-bold hover:text-electric-400 transition-colors tracking-wide">
            {{ config.telephone }}
          </a>
          <p class="text-white/60 text-sm mt-3">Lun-Ven, 8h-12h / 13h-17h</p>
        </div>

        <div>
          <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Email</p>
          <a :href="`mailto:${config.email}`" class="text-lg sm:text-xl font-medium hover:text-electric-400 transition-colors">
            {{ config.email }}
          </a>
        </div>

        <div>
          <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Adresse</p>
          <p class="text-lg leading-relaxed">
            {{ config.adresse }}<br/>
            {{ config.codePostal }} {{ config.ville }}
          </p>

          <!-- Mini Google Maps -->
          <div class="relative mt-5 overflow-hidden border border-white/10 hover:border-white/20 transition-colors group">
            <iframe
              :src="mapEmbedUrl"
              :title="`Carte — ${fullAddress}`"
              class="w-full h-52 sm:h-60 grayscale-[20%] contrast-95"
              style="border:0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
            <a
              :href="mapDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute bottom-3 right-3 inline-flex items-center gap-2 px-4 py-2 bg-navy-950/85 hover:bg-electric-400 hover:text-navy-950 text-white text-[10px] font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-white/10 hover:border-electric-400 transition-all"
            >
              Itinéraire
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div>
          <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Zone d'intervention</p>
          <p class="text-lg leading-relaxed">
            <strong class="font-semibold">Brissac Loire Aubance</strong> (49320)<br/>
            <strong class="font-semibold">Angers</strong> et tout le Maine-et-Loire (49)
          </p>
          <p class="text-white/60 text-sm mt-3">Déplacement gratuit pour le devis dans un rayon de 30&nbsp;km</p>
        </div>

        <div class="pt-10 border-t border-white/10">
          <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">Nos garanties</p>
          <ul class="space-y-4">
            <li class="flex items-start gap-4">
              <span class="shrink-0 mt-1 size-1.5 bg-electric-400 rounded-full"></span>
              <div>
                <div class="text-base font-medium">Devis gratuit & détaillé</div>
                <div class="text-white/60 text-xs mt-1">Diagnostic à domicile, retour sous 72&nbsp;h</div>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="shrink-0 mt-1 size-1.5 bg-electric-400 rounded-full"></span>
              <div>
                <div class="text-base font-medium">Garantie décennale</div>
                <div class="text-white/60 text-xs mt-1">Sur l'ensemble de nos installations</div>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="shrink-0 mt-1 size-1.5 bg-electric-400 rounded-full"></span>
              <div>
                <div class="text-base font-medium">Marques premium</div>
                <div class="text-white/60 text-xs mt-1">Legrand · Schneider · Hager</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Formulaire -->
      <div class="bg-navy-900/40 p-10 sm:p-16 lg:p-20">
        <!-- Succès -->
        <Transition
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
        >
          <div v-if="isSuccess" class="py-20 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 border border-electric-400 text-electric-400 mb-8">
              <svg class="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white uppercase tracking-wide mb-4">Message envoyé</h3>
            <p class="text-white/60 leading-relaxed max-w-sm mx-auto">
              Nous revenons vers vous sous 72&nbsp;heures pour planifier votre diagnostic gratuit.
            </p>
            <button
              @click="isSuccess = false"
              class="mt-10 text-electric-400 hover:text-electric-300 text-xs font-semibold tracking-[0.25em] uppercase"
            >
              Nouvelle demande →
            </button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-8" novalidate>
            <div>
              <label for="contact-nom" class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">
                Nom*
              </label>
              <input
                id="contact-nom"
                v-model="form.nom"
                type="text"
                autocomplete="name"
                class="contact-input"
                :class="errors.nom && 'border-error'"
              />
              <p v-if="errors.nom" class="mt-2 text-xs text-error">{{ errors.nom }}</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="contact-tel" class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">
                  Téléphone*
                </label>
                <input
                  id="contact-tel"
                  v-model="form.telephone"
                  type="tel"
                  autocomplete="tel"
                  class="contact-input"
                  :class="errors.telephone && 'border-error'"
                />
                <p v-if="errors.telephone" class="mt-2 text-xs text-error">{{ errors.telephone }}</p>
              </div>
              <div>
                <label for="contact-email" class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">
                  Email*
                </label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  class="contact-input"
                  :class="errors.email && 'border-error'"
                />
                <p v-if="errors.email" class="mt-2 text-xs text-error">{{ errors.email }}</p>
              </div>
            </div>

            <div>
              <label for="contact-message" class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">
                Votre projet
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="4"
                placeholder="Décrivez brièvement votre besoin…"
                class="contact-input resize-none"
              />
            </div>

            <label class="flex items-start gap-3 cursor-pointer group">
              <input
                v-model="form.acceptRgpd"
                type="checkbox"
                class="mt-1 size-4 accent-electric-400 cursor-pointer"
              />
              <span class="text-xs text-white/65 leading-relaxed">
                J'accepte que mes données soient utilisées pour répondre à ma demande.*
              </span>
            </label>
            <p v-if="errors.rgpd" class="text-xs text-error -mt-6">{{ errors.rgpd }}</p>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-electric-400 hover:bg-electric-300 disabled:opacity-50 text-navy-950 text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300"
            >
              <span v-if="!isSubmitting">Envoyer la demande</span>
              <span v-else class="inline-flex items-center gap-3">
                <svg class="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                </svg>
                Envoi…
              </span>
              <span v-if="!isSubmitting" class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-input {
  @apply w-full bg-transparent border-0 border-b border-white/20
         px-0 py-3 text-white text-base
         placeholder-white/30
         transition-colors duration-200
         focus:outline-none focus:border-electric-400;
}
</style>
