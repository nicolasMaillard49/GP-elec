<script setup lang="ts">
import { config } from '~/config'

useHead({
  title: `Mentions légales — ${config.nom}`,
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />

    <main class="pt-32 pb-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 class="text-4xl font-bold text-navy-700 mb-8">Mentions légales</h1>

        <div class="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Éditeur du site</h2>
            <div class="bg-steel-50 rounded-xl p-6 font-mono text-sm space-y-1">
              <p><strong>Raison sociale :</strong> {{ config.nom }}</p>
              <p><strong>Forme juridique :</strong> {{ config.legal.formeJuridique }} au capital de {{ config.legal.capital }}</p>
              <p><strong>SIRET :</strong> {{ config.legal.siret }}</p>
              <p><strong>RCS :</strong> {{ config.legal.rcs }}</p>
              <p><strong>N° TVA intracommunautaire :</strong> {{ config.legal.tva }}</p>
              <p><strong>Adresse :</strong> {{ config.adresse }}, {{ config.codePostal }} {{ config.ville }}</p>
              <p><strong>Email :</strong> {{ config.email }}</p>
              <p><strong>Téléphone :</strong> {{ config.telephone }}</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Hébergement</h2>
            <div class="bg-steel-50 rounded-xl p-6 text-sm">
              <p>{{ config.legal.hebergeur }}</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Activité professionnelle</h2>
            <p class="text-steel-600 mb-4">
              {{ config.nom }} est un artisan {{ config.metier.toLowerCase() }} immatriculé et qualifié.
              Nos certifications professionnelles sont vérifiables sur les registres officiels :
            </p>
            <ul class="space-y-2">
              <li v-for="cert in config.certifications" :key="cert" class="flex items-center gap-2 text-steel-700">
                <svg class="size-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                {{ cert }} — Vérifiable sur <a href="https://www.qualite-energie.gouv.fr" target="_blank" class="text-orange-500 hover:underline">qualite-energie.gouv.fr</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Assurance professionnelle</h2>
            <p class="text-steel-600">
              {{ config.legal.assurance }}
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Propriété intellectuelle</h2>
            <p class="text-steel-600">
              L'ensemble du contenu de ce site (textes, images, graphiques, logo) est la propriété exclusive de
              {{ config.nom }}. Toute reproduction est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Protection des données (RGPD)</h2>
            <p class="text-steel-600 mb-3">
              Les données collectées via le formulaire de contact (nom, email, téléphone) sont utilisées
              uniquement pour traiter vos demandes de devis. Elles ne sont jamais revendues à des tiers.
            </p>
            <p class="text-steel-600 mb-3">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès,
              de rectification et de suppression de vos données. Pour l'exercer :
              <a :href="`mailto:${config.email}`" class="text-orange-500 hover:underline">{{ config.email }}</a>
            </p>
            <p class="text-steel-600">
              En cas de réclamation : <a href="https://www.cnil.fr" target="_blank" class="text-orange-500 hover:underline">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-navy-700 mb-4">Médiation de la consommation</h2>
            <p class="text-steel-600">
              Conformément aux articles L612-1 et suivants du Code de la consommation, en cas de litige
              non résolu à l'amiable, vous pouvez saisir gratuitement un médiateur de la consommation.
              Coordonnées disponibles sur simple demande à l'adresse email ci-dessus.
            </p>
          </section>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
