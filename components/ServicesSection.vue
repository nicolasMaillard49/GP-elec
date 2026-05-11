<script setup lang="ts">
import { config } from '~/config'

const openService = ref<string | null>(config.services[0]?.id ?? null)

function toggleService(id: string) {
  openService.value = openService.value === id ? null : id
}
</script>

<template>
  <section id="services" class="py-20 bg-white">
    <div class="section-container">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
          🔧 Nos prestations
        </div>
        <h2 class="section-title">Services & Spécialités</h2>
        <p class="section-subtitle text-center mx-auto">
          Du diagnostic à la mise en service, nous gérons l'intégralité de votre projet.
          Devis détaillé gratuit pour chaque prestation.
        </p>
      </div>

      <!-- Accordéon services -->
      <div class="space-y-4 max-w-4xl mx-auto">
        <div
          v-for="service in config.services"
          :key="service.id"
          class="accordion-item"
          :class="openService === service.id ? 'shadow-md' : ''"
        >
          <!-- Trigger -->
          <button
            class="accordion-trigger"
            :class="openService === service.id ? 'bg-navy-700 text-white' : ''"
            @click="toggleService(service.id)"
            :aria-expanded="openService === service.id"
          >
            <div class="flex items-center gap-4">
              <span class="text-3xl" role="img" :aria-label="service.nom">{{ service.icone }}</span>
              <div class="text-left">
                <div
                  class="font-bold text-lg"
                  :class="openService === service.id ? 'text-white' : 'text-navy-700'"
                >
                  {{ service.nom }}
                </div>
                <div
                  class="text-sm font-normal"
                  :class="openService === service.id ? 'text-white/70' : 'text-steel-500'"
                >
                  {{ service.resume }}
                </div>
              </div>
            </div>
            <svg
              class="size-5 flex-shrink-0 transition-transform duration-300"
              :class="[
                openService === service.id ? 'rotate-180' : '',
                openService === service.id ? 'text-white' : 'text-steel-400'
              ]"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Contenu accordéon -->
          <div
            class="accordion-content"
            :style="openService === service.id ? 'max-height: 600px; opacity: 1' : 'max-height: 0; opacity: 0'"
          >
            <div class="p-6 border-t border-steel-100 bg-steel-50">
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Description + prestations -->
                <div>
                  <p class="text-steel-600 mb-6 leading-relaxed">{{ service.description }}</p>
                  <h4 class="font-bold text-navy-700 mb-3 flex items-center gap-2">
                    <svg class="size-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    Nos prestations
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="prestation in service.prestations"
                      :key="prestation"
                      class="flex items-start gap-2 text-sm text-steel-700"
                    >
                      <svg class="size-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      {{ prestation }}
                    </li>
                  </ul>
                </div>

                <!-- Marques partenaires -->
                <div>
                  <h4 class="font-bold text-navy-700 mb-3 flex items-center gap-2">
                    <svg class="size-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Marques installées
                  </h4>
                  <div class="grid grid-cols-2 gap-3 mb-6">
                    <div
                      v-for="marque in service.marques"
                      :key="marque"
                      class="bg-white border border-steel-200 rounded-lg px-3 py-2 text-center text-sm font-semibold text-steel-700"
                    >
                      {{ marque }}
                    </div>
                  </div>

                  <!-- CTA -->
                  <a
                    href="#contact"
                    class="btn-primary w-full justify-center"
                  >
                    Demander un devis {{ service.nom.toLowerCase() }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
