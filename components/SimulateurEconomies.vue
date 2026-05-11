<script setup lang="ts">
// Simulateur économies simplifié
const surface = ref(100)
const typeLogement = ref<'maison' | 'appartement'>('maison')
const ancienChauffage = ref<'fioul' | 'gaz' | 'electrique'>('fioul')
const resultat = ref<null | { economiesAn: number; pourcentage: number; roi: number }>(null)
const showResultat = ref(false)

// Coûts énergétiques moyens (€/kWh)
const couts = {
  fioul: 0.12,
  gaz: 0.11,
  electrique: 0.22,
}

// Consommation selon surface et type (kWh/m²/an)
const consommation = {
  maison: 150, // avant travaux
  appartement: 120,
}

// COP PAC air/eau : 3.5 en moyenne
const COP_PAC = 3.5
const PRIX_ELECTRICITE = 0.22

function calculer() {
  const consoAnnuelle = surface.value * consommation[typeLogement.value]
  const coutActuel = consoAnnuelle * couts[ancienChauffage.value]
  const coutAvecPAC = (consoAnnuelle / COP_PAC) * PRIX_ELECTRICITE
  const economies = coutActuel - coutAvecPAC
  const pourcentage = Math.round((economies / coutActuel) * 100)

  // ROI : coût installation PAC - aides
  const coutInstallation = surface.value * 80 // ~80€/m² en moyenne
  const aidesMoyennes = coutInstallation * 0.5 // 50% d'aides en moyenne
  const resteACharge = coutInstallation - aidesMoyennes
  const roi = Math.round(resteACharge / economies)

  resultat.value = { economiesAn: Math.round(economies), pourcentage, roi }
  showResultat.value = true
}
</script>

<template>
  <div>
    <div class="space-y-4">
      <!-- Surface -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">
          Surface chauffée : {{ surface }} m²
        </label>
        <input
          v-model="surface"
          type="range"
          min="30"
          max="400"
          step="10"
          class="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-orange-500"
        />
        <div class="flex justify-between text-white/40 text-xs mt-1">
          <span>30 m²</span>
          <span>400 m²</span>
        </div>
      </div>

      <!-- Type logement -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">Type de logement</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            :class="[
              'px-3 py-2 rounded-lg text-sm font-medium transition-all border min-h-[44px]',
              typeLogement === 'maison'
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
            ]"
            @click="typeLogement = 'maison'"
          >
            🏠 Maison
          </button>
          <button
            :class="[
              'px-3 py-2 rounded-lg text-sm font-medium transition-all border min-h-[44px]',
              typeLogement === 'appartement'
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
            ]"
            @click="typeLogement = 'appartement'"
          >
            🏢 Appartement
          </button>
        </div>
      </div>

      <!-- Ancien chauffage -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">Chauffage actuel</label>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="[key, label] in [['fioul', '🛢️ Fioul'], ['gaz', '🔥 Gaz'], ['electrique', '⚡ Élec.']]"
            :key="key"
            :class="[
              'px-2 py-2 rounded-lg text-xs font-medium transition-all border min-h-[44px]',
              ancienChauffage === key
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
            ]"
            @click="ancienChauffage = key as any"
          >
            {{ label }}
          </button>
        </div>
      </div>

      <button
        class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-orange min-h-[44px]"
        @click="calculer"
      >
        Calculer mes économies →
      </button>
    </div>

    <!-- Résultat -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="showResultat && resultat" class="mt-6 p-4 bg-white/15 rounded-xl border border-white/30">
        <div class="text-center mb-3">
          <div class="text-4xl font-bold text-orange-400">
            {{ resultat.economiesAn }}€<span class="text-xl font-normal text-white/60">/an</span>
          </div>
          <div class="text-white/80 text-sm mt-1">d'économies estimées</div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="text-center bg-white/10 rounded-lg p-3">
            <div class="text-xl font-bold text-green-400">{{ resultat.pourcentage }}%</div>
            <div class="text-white/60 text-xs">de réduction</div>
          </div>
          <div class="text-center bg-white/10 rounded-lg p-3">
            <div class="text-xl font-bold text-blue-400">{{ resultat.roi }} ans</div>
            <div class="text-white/60 text-xs">de retour invest.</div>
          </div>
        </div>
        <p class="text-white/50 text-xs text-center mt-3">
          *Estimation indicative. Simulation précise lors du diagnostic gratuit.
        </p>
        <a href="#contact" class="block w-full mt-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold text-center rounded-lg transition-colors">
          Confirmer avec un expert →
        </a>
      </div>
    </Transition>
  </div>
</template>
