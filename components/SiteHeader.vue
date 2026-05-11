<script setup lang="ts">
import { config } from '~/config'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#engagements', label: 'Engagements' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 40
  }, { passive: true })
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-navy-950/95 backdrop-blur-md py-3 border-b border-white/5'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="group flex items-center gap-3">
          <div class="w-10 h-10 border border-electric-400/40 flex items-center justify-center text-electric-400 transition-all duration-300 group-hover:border-electric-400 group-hover:rotate-180">
            <svg class="size-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3L4 12h5l-1 5 7-9h-5l1-5z" />
            </svg>
          </div>
          <div>
            <div class="text-white font-bold text-lg leading-none tracking-[0.15em] uppercase">{{ config.nom }}</div>
            <div class="text-white/40 text-[10px] font-medium tracking-[0.25em] uppercase mt-1">Électricien RGE</div>
          </div>
        </a>

        <!-- Nav desktop -->
        <nav class="hidden lg:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="relative px-5 py-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors duration-300 group"
          >
            {{ link.label }}
            <span class="absolute left-5 right-5 -bottom-1 h-px bg-electric-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>

        <!-- CTA + mobile toggle -->
        <div class="flex items-center gap-3">
          <a
            :href="config.telephoneHref"
            class="hidden sm:inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 text-xs font-semibold tracking-[0.15em] uppercase transition-colors"
          >
            <svg class="size-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            {{ config.telephone }}
          </a>

          <button
            class="lg:hidden p-2 text-white hover:text-electric-400 transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Menu"
          >
            <svg v-if="!isMobileMenuOpen" class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-width="1.5" d="M4 8h16M4 16h16" />
            </svg>
            <svg v-else class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden mt-6 pt-6 border-t border-white/10">
          <div class="flex flex-col gap-1">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="px-2 py-3 text-xs font-semibold tracking-[0.25em] uppercase text-white/70 hover:text-electric-400 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ link.label }}
            </a>
            <a
              :href="config.telephoneHref"
              class="mt-4 px-2 py-3 text-electric-400 text-xs font-semibold tracking-[0.25em] uppercase border-t border-white/10 sm:hidden"
            >
              {{ config.telephone }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
