<script setup lang="ts">
import { config } from '~/config'

const SITE_URL = 'https://www.gp-elec.fr'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'Electrician'],
      '@id': `${SITE_URL}/#business`,
      name: config.nom,
      legalName: `${config.nom} — ${config.gerant}`,
      alternateName: ['GP elec Angers', 'GP elec Brissac Loire Aubance', 'Électricien GP elec', 'Pierre Guille Électricien'],
      description: config.description,
      slogan: config.slogan,
      url: SITE_URL,
      telephone: config.telephone,
      email: config.email,
      image: `${SITE_URL}${config.seo.ogImage}`,
      logo: `${SITE_URL}/favicon.ico`,
      foundingDate: '1986',
      founder: { '@type': 'Person', name: config.gerant },
      knowsLanguage: ['fr-FR'],
      currenciesAccepted: 'EUR',
      paymentAccepted: ['Cash', 'Check', 'Bank transfer'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.adresse,
        addressLocality: config.ville,
        postalCode: config.codePostal,
        addressRegion: config.region,
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: config.geo.latitude,
        longitude: config.geo.longitude,
      },
      areaServed: [
        { '@type': 'City', name: 'Brissac Loire Aubance', '@id': 'https://www.wikidata.org/wiki/Q55670923' },
        { '@type': 'City', name: 'Angers', '@id': 'https://www.wikidata.org/wiki/Q6486' },
        { '@type': 'AdministrativeArea', name: config.departement },
        { '@type': 'AdministrativeArea', name: config.region },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: config.geo.latitude,
          longitude: config.geo.longitude,
        },
        geoRadius: '30000',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: config.noteGoogle,
        reviewCount: config.nombreAvis,
        bestRating: 5,
        worstRating: 1,
      },
      hasCredential: config.certificationDetails.map(c => ({
        '@type': 'EducationalOccupationalCredential',
        name: c.nom,
        description: c.description,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Services électricien — ${config.ville} & Angers`,
        itemListElement: config.services.map(s => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.nom,
            description: s.description,
            serviceType: s.nom,
            areaServed: [
              { '@type': 'City', name: 'Brissac Loire Aubance' },
              { '@type': 'City', name: 'Angers' },
            ],
            provider: { '@id': `${SITE_URL}/#business` },
          },
        })),
      },
      makesOffer: config.services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nom },
      })),
      priceRange: '€€',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '12:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '13:00',
          closes: '17:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: config.nom,
      description: config.seo.description,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: config.faq.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.reponse },
      })),
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }],
})
</script>

<template>
  <div class="min-h-screen bg-navy-950">
    <SiteHeader />

    <main>
      <HeroSection />
      <AProposSection />
      <AProposMoiSection />
      <ServicesGridSection />
      <EngagementsSection />
      <ContactSection />
    </main>

    <SiteFooter />

    <a
      :href="config.telephoneHref"
      class="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-electric-500 hover:bg-electric-600 rounded-full flex items-center justify-center shadow-electric text-navy-900 transition-all duration-200 active:scale-95"
      aria-label="Appeler maintenant"
    >
      <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>
  </div>
</template>
