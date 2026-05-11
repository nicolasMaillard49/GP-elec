<script setup lang="ts">
import { config } from '~/config'

const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Colonne gauche: intro -->
        <div class="lg:sticky lg:top-24">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-semibold mb-4">
            ❓ FAQ Technique
          </div>
          <h2 class="section-title text-left mb-6">
            Questions fréquentes de nos clients
          </h2>
          <p class="text-steel-600 mb-8">
            Vous avez des questions avant de vous lancer ? Nous avons compilé les plus fréquentes.
            Pour une situation spécifique, contactez-nous directement.
          </p>

          <!-- Contact rapide -->
          <div class="bg-navy-700 rounded-2xl p-6">
            <h3 class="text-white font-bold mb-2">Une question précise ?</h3>
            <p class="text-white/60 text-sm mb-4">
              Nos experts répondent dans les 2 heures ouvrées.
            </p>
            <div class="space-y-3">
              <a
                :href="config.telephoneHref"
                class="flex items-center gap-3 text-white hover:text-orange-400 transition-colors"
              >
                <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs text-white/50">Appeler</div>
                  <div class="font-semibold">{{ config.telephone }}</div>
                </div>
              </a>
              <a
                :href="`mailto:${config.email}`"
                class="flex items-center gap-3 text-white hover:text-orange-400 transition-colors"
              >
                <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs text-white/50">Email</div>
                  <div class="font-semibold text-sm">{{ config.email }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Colonne droite: accordéon FAQ -->
        <div class="space-y-3">
          <div
            v-for="(item, index) in config.faq"
            :key="index"
            class="accordion-item"
          >
            <button
              class="accordion-trigger"
              @click="toggleFaq(index)"
              :aria-expanded="openFaq === index"
              :aria-controls="`faq-answer-${index}`"
            >
              <span class="text-left flex-1 pr-4">{{ item.question }}</span>
              <div
                class="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                :class="openFaq === index ? 'bg-orange-500 rotate-45' : 'bg-steel-100'"
              >
                <svg
                  class="size-4 transition-colors"
                  :class="openFaq === index ? 'text-white' : 'text-steel-500'"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>

            <div
              :id="`faq-answer-${index}`"
              class="accordion-content"
              :style="openFaq === index ? 'max-height: 400px; opacity: 1' : 'max-height: 0; opacity: 0'"
              role="region"
            >
              <div class="px-5 pb-5 pt-1 text-steel-600 text-sm leading-relaxed border-t border-steel-100">
                {{ item.reponse }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
