<script setup lang="ts">
import { config } from '~/config'

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
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
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
          <p class="text-white/40 text-sm mt-3">Lun-Ven, 8h-18h</p>
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
        </div>

        <div class="pt-10 border-t border-white/10">
          <p class="text-electric-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Certifications</p>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="cert in config.certifications"
              :key="cert"
              class="px-4 py-2 border border-white/15 text-xs tracking-[0.2em] uppercase text-white/70"
            >
              {{ cert }}
            </span>
          </div>
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
            <h3 class="text-2xl font-bold uppercase tracking-wide mb-4">Message envoyé</h3>
            <p class="text-white/60 leading-relaxed max-w-sm mx-auto">
              Nous revenons vers vous sous 48&nbsp;heures pour planifier votre diagnostic gratuit.
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
              <label class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-3">
                Nom*
              </label>
              <input
                v-model="form.nom"
                type="text"
                class="contact-input"
                :class="errors.nom && 'border-error'"
              />
              <p v-if="errors.nom" class="mt-2 text-xs text-error">{{ errors.nom }}</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-3">
                  Téléphone*
                </label>
                <input
                  v-model="form.telephone"
                  type="tel"
                  class="contact-input"
                  :class="errors.telephone && 'border-error'"
                />
                <p v-if="errors.telephone" class="mt-2 text-xs text-error">{{ errors.telephone }}</p>
              </div>
              <div>
                <label class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-3">
                  Email*
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="contact-input"
                  :class="errors.email && 'border-error'"
                />
                <p v-if="errors.email" class="mt-2 text-xs text-error">{{ errors.email }}</p>
              </div>
            </div>

            <div>
              <label class="block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-3">
                Votre projet
              </label>
              <textarea
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
              <span class="text-xs text-white/50 leading-relaxed">
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
