// ============================================================
// CONFIG — GP elec — Toutes les infos personnalisables ici
// ⚠️ TODO: remplacer tous les "[À COMPLÉTER]" avant mise en prod
// ============================================================

export const config = {
  // Identité
  nom: "GP elec",
  nomCourt: "GP elec",
  gerant: "Pierre Guille",
  metier: "Électricien",
  metierPluriel: "Électriciens",
  slogan: "40 ans d'expertise familiale au service de votre installation électrique",
  description: "Fort de 40 ans d'expérience, GP elec est une entreprise familiale qui propose des services d'électricité allant du neuf à la rénovation : installation électrique complète, dépannage, mises aux normes, aménagement de cuisine, borne de recharge pour véhicule électrique.",

  // Contact
  telephone: "06 18 96 57 36",
  telephoneHref: "tel:+33618965736",
  email: "contact@gp-elec.fr",
  adresse: "6 rue de l'Yser",
  ville: "Brissac Loire Aubance",
  codePostal: "49320",
  departement: "Maine-et-Loire",
  region: "Pays de la Loire",
  siret: "[À COMPLÉTER]",
  geo: { latitude: 47.3522, longitude: -0.4444 },

  // Certifications
  certifications: ["Qualifelec", "RGE", "IRVE"],
  certificationDetails: [
    {
      nom: "Qualifelec",
      nomComplet: "Qualification Électricité",
      couleur: "#FACC15",
      description: "Qualification professionnelle de référence pour les électriciens. Atteste de notre maîtrise technique, de notre conformité aux normes NF C 15-100 et de notre engagement qualité. Renouvelée tous les 4 ans après audit.",
      benefice: "Expertise reconnue",
    },
    {
      nom: "RGE",
      nomComplet: "Reconnu Garant de l'Environnement",
      couleur: "#22C55E",
      description: "Certification indispensable pour que vos travaux ouvrent droit aux aides de l'État (MaPrimeRénov', CEE, TVA 5,5 %). Nous la renouvelons chaque année pour vous garantir l'accès aux dispositifs en vigueur.",
      benefice: "Obligatoire pour vos aides",
    },
    {
      nom: "IRVE",
      nomComplet: "Infrastructure de Recharge Véhicule Électrique",
      couleur: "#3B82F6",
      description: "Habilitation obligatoire pour l'installation de bornes de recharge supérieures à 3,7 kW. Nous installons toutes les marques (Legrand, Schneider, Hager, Wallbox) avec garantie installation et SAV.",
      benefice: "Bornes IRVE éligibles aux aides",
    },
  ],

  // Aides financières
  aides: ["MaPrimeRénov'", "CEE", "TVA 5,5 %"],
  aidePourcentageMax: 50,
  aidesDetails: [
    {
      nom: "MaPrimeRénov'",
      description: "Aide de l'ANAH pour la rénovation énergétique. Mobilisable sur les travaux de rénovation électrique liés à l'efficacité énergétique du logement.",
      montantMax: "Selon revenus",
      conditions: "Propriétaires occupants, logements > 15 ans",
      couleur: "#22C55E",
      icon: "🏠",
    },
    {
      nom: "CEE",
      description: "Certificats d'Économies d'Énergie. Primes versées par les fournisseurs d'énergie pour vos travaux d'efficacité énergétique et l'installation de bornes de recharge.",
      montantMax: "Jusqu'à 960 €",
      conditions: "Travaux d'efficacité énergétique ou IRVE",
      couleur: "#FACC15",
      icon: "⚡",
    },
    {
      nom: "TVA 5,5 %",
      description: "Taux réduit de TVA sur les travaux de rénovation électrique dans le cadre d'amélioration énergétique. Au lieu de 20 %, vous ne payez que 5,5 % de TVA.",
      montantMax: "-14,5 % de TVA",
      conditions: "Logements de plus de 2 ans",
      couleur: "#F97316",
      icon: "💰",
    },
  ],

  // Services
  services: [
    {
      id: "installation",
      nom: "Installation électrique complète",
      icone: "⚡",
      resume: "Installation neuve aux normes NF C 15-100 — du tableau aux prises.",
      description: "Réalisation d'installations électriques complètes en construction neuve ou en extension. Étude de charge, dimensionnement des circuits, tableau électrique, câblage, prises, éclairage. Conformité totale à la norme NF C 15-100 et certificat Consuel délivré à la livraison.",
      prestations: [
        "Tableau électrique sur mesure",
        "Câblage neuf NF C 15-100",
        "Éclairage intérieur et extérieur",
        "Prises et interrupteurs",
        "Mise à la terre et protection différentielle",
        "Certificat Consuel inclus",
      ],
      marques: ["Legrand", "Schneider Electric", "Hager", "ABB"],
    },
    {
      id: "renovation",
      nom: "Rénovation & mise aux normes",
      icone: "🔧",
      resume: "Mise en conformité NF C 15-100 — sécurité et valorisation de votre bien.",
      description: "Rénovation totale ou partielle de votre installation électrique vétuste. Diagnostic, dépose de l'ancien, pose neuf aux normes, attestation Consuel. Indispensable pour vendre, louer ou simplement sécuriser un logement de plus de 15 ans.",
      prestations: [
        "Diagnostic électrique complet",
        "Remplacement tableau ancien",
        "Mise à la terre",
        "Sécurisation circuits salle de bain / cuisine",
        "Remplacement disjoncteurs obsolètes",
        "Attestation de conformité Consuel",
      ],
      marques: ["Legrand", "Schneider Electric", "Hager", "Siemens"],
    },
    {
      id: "irve",
      nom: "Borne de recharge véhicule électrique",
      icone: "🔌",
      resume: "Installation IRVE certifiée — éligible aux aides CEE et crédit d'impôt.",
      description: "Installation certifiée IRVE de bornes de recharge pour véhicule électrique à domicile ou en copropriété. Étude de l'arrivée électrique, dimensionnement, pose, mise en service, déclaration au gestionnaire de réseau. Bornes 3,7 à 22 kW selon votre véhicule et votre installation.",
      prestations: [
        "Borne murale 3,7 / 7,4 / 11 / 22 kW",
        "Étude de l'arrivée électrique",
        "Pose et raccordement sécurisé",
        "Mise en service et configuration",
        "Garantie installation et SAV",
        "Crédit d'impôt jusqu'à 500 €",
      ],
      marques: ["Legrand", "Schneider", "Hager", "Wallbox"],
    },
    {
      id: "cuisine",
      nom: "Aménagement cuisine",
      icone: "🍳",
      resume: "Électricité de cuisine — prises plan de travail, hotte, plaque, four.",
      description: "Conception et installation électrique adaptée aux besoins spécifiques d'une cuisine moderne : circuits dédiés (plaque, four, lave-vaisselle), prises plan de travail conformes, éclairage sous meubles, alimentation hotte. Coordination avec votre cuisiniste si besoin.",
      prestations: [
        "Circuits dédiés appareils (plaque, four)",
        "Prises plan de travail aux normes",
        "Éclairage LED sous meubles",
        "Alimentation hotte aspirante",
        "Boîtes encastrées invisibles",
        "Coordination avec cuisiniste",
      ],
      marques: ["Legrand", "Schneider Electric", "Hager"],
    },
    {
      id: "depannage",
      nom: "Dépannage électrique",
      icone: "🛠️",
      resume: "Intervention rapide pour panne, court-circuit, disjoncteur défaillant.",
      description: "Diagnostic et résolution rapide de pannes électriques : disjoncteur qui saute, prise hors service, court-circuit, panne partielle. Intervention sur rendez-vous selon urgence — devis avant intervention pour les remises en état importantes.",
      prestations: [
        "Diagnostic panne",
        "Réparation court-circuit",
        "Remplacement disjoncteur",
        "Remise en service tableau",
        "Recherche de défaut d'isolement",
        "Devis transparent avant travaux",
      ],
      marques: ["Legrand", "Schneider Electric", "Hager"],
    },
  ],

  // Marques partenaires
  marques: ["Legrand", "Schneider Electric", "Hager", "ABB", "Siemens", "Wallbox", "Niko", "Eaton"],

  // ⚡ Grille services (DA Anthony Frides — 4 cartes hero)
  servicesGrid: [
    {
      id: "neuf",
      titre: "Neuf",
      sousTitre: "Installation complète",
      texte: "Conception et réalisation d'installations électriques neuves aux normes NF C 15-100. Du tableau aux prises, certificat Consuel inclus.",
      image: "/images/services/neuf.jpg",
    },
    {
      id: "renovation",
      titre: "Rénovation",
      sousTitre: "Mise aux normes",
      texte: "Diagnostic, dépose, pose neuve. Sécurisation des logements anciens, attestation Consuel à la livraison.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "irve",
      titre: "IRVE",
      sousTitre: "Borne de recharge",
      texte: "Installation certifiée IRVE de bornes 3,7 à 22 kW. Éligible aux aides CEE et crédit d'impôt jusqu'à 500 €.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "domotique",
      titre: "Domotique",
      sousTitre: "Maison connectée",
      texte: "Pilotage centralisé éclairage, volets, chauffage, sécurité. Intégration KNX, Somfy, Legrand With Netatmo.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
    },
  ],

  // 🤝 Engagements (DA Anthony Frides)
  engagements: [
    {
      titre: "Proximité",
      texte: "Une entreprise familiale, des interlocuteurs uniques, une réponse rapide. 40 ans de relations humaines avec nos clients.",
    },
    {
      titre: "Transparence",
      texte: "Devis clair et détaillé, aides chiffrées avant signature, aucun coût caché. Le prix annoncé est le prix payé.",
    },
    {
      titre: "Qualité",
      texte: "Marques premium uniquement (Legrand, Schneider, Hager). Garantie décennale sur toutes nos installations.",
    },
    {
      titre: "Conformité",
      texte: "Certifications Qualifelec, RGE et IRVE renouvelées. Attestation Consuel systématique pour la mise sous tension.",
    },
  ],

  // 🏷️ Tagline hero (DA épurée)
  heroTagline: "Entreprise familiale — 40 ans d'expérience",
  heroBaseline: "Électricien à Brissac Loire Aubance — Installation, rénovation, IRVE, domotique",
  heroImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2400&q=85",

  // Témoignages — TODO remplacer par vrais avis
  noteGoogle: 4.9,
  nombreAvis: 84,
  temoignages: [
    {
      nom: "Marie D.",
      ville: "[À COMPLÉTER]",
      note: 5,
      date: "Mars 2026",
      texte: "Rénovation électrique complète d'une maison ancienne. Travail soigné, équipe ponctuelle, devis respecté à l'euro près. Le tableau a été refait proprement et le Consuel obtenu sans aucune réserve. Je recommande sans hésiter.",
      travaux: "Rénovation électrique complète",
    },
    {
      nom: "Patrick M.",
      ville: "[À COMPLÉTER]",
      note: 5,
      date: "Février 2026",
      texte: "Installation d'une borne de recharge 11 kW pour ma voiture électrique. Diagnostic clair, pose impeccable en une demi-journée, démarches CEE prises en charge. Très professionnels, je rappellerai pour la rénovation du tableau.",
      travaux: "Borne de recharge IRVE",
    },
    {
      nom: "Sophie L.",
      ville: "[À COMPLÉTER]",
      note: 5,
      date: "Janvier 2026",
      texte: "Aménagement électrique de notre nouvelle cuisine. Conseils précieux pour la disposition des prises et circuits dédiés. Travail propre, dans les temps. L'expérience de 40 ans se sent dans la qualité du travail.",
      travaux: "Cuisine + circuits dédiés",
    },
  ],

  // FAQ
  faq: [
    {
      question: "Êtes-vous certifié pour les aides MaPrimeRénov' et CEE ?",
      reponse: "Oui, GP elec est certifié RGE et Qualifelec. Ces certifications sont obligatoires pour que vos travaux ouvrent droit aux aides de l'État (MaPrimeRénov', CEE, TVA réduite à 5,5 %). Vous pouvez vérifier nos qualifications sur le site gouvernemental qualite-energie.gouv.fr.",
    },
    {
      question: "Mon installation a 30 ans, dois-je tout refaire ?",
      reponse: "Pas forcément. Une installation ancienne n'est pas systématiquement à refaire intégralement, mais elle doit respecter 6 points clés (mise à la terre, disjoncteur différentiel, protection adaptée des circuits, etc.). Nous proposons un diagnostic gratuit pour identifier précisément ce qui doit être mis aux normes — souvent une rénovation partielle suffit.",
    },
    {
      question: "Combien coûte l'installation d'une borne de recharge ?",
      reponse: "Pour une borne murale 7,4 kW à domicile, comptez entre 1 200 € et 1 800 € TTC tout compris (matériel + pose), avant aides. Avec la prime CEE Coup de Pouce (jusqu'à 960 €) et le crédit d'impôt borne de recharge (jusqu'à 500 €), votre reste à charge peut descendre sous 500 €. Nous établissons un devis précis après visite.",
    },
    {
      question: "Délivrez-vous le Consuel à la livraison ?",
      reponse: "Oui, pour toute installation neuve ou rénovation totale, nous délivrons l'attestation Consuel obligatoire pour la mise sous tension Enedis. Pour les rénovations partielles, nous fournissons une attestation de conformité de notre intervention.",
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      reponse: "[À COMPLÉTER — préciser département(s) et villes principales d'intervention]. Nous nous déplaçons gratuitement pour le devis dans cette zone.",
    },
    {
      question: "Quelle est la garantie sur vos installations ?",
      reponse: "Toutes nos installations bénéficient de la garantie décennale obligatoire. Le matériel posé est couvert par la garantie fabricant (2 à 5 ans selon les marques). Nous travaillons exclusivement avec des marques premium françaises et européennes (Legrand, Schneider Electric, Hager) pour vous garantir des pièces disponibles à long terme.",
    },
  ],

  // Process devis
  etapesDevis: [
    {
      numero: 1,
      titre: "Diagnostic gratuit",
      description: "Un électricien se déplace pour évaluer votre installation, mesurer les besoins et calculer précisément les aides auxquelles vous avez droit.",
      duree: "1h à votre domicile",
      icone: "🔍",
    },
    {
      numero: 2,
      titre: "Devis détaillé",
      description: "Vous recevez un devis transparent avec le coût total, les aides déduites et le reste à charge. Aucun coût caché.",
      duree: "Sous 48h",
      icone: "📋",
    },
    {
      numero: 3,
      titre: "Installation & Consuel",
      description: "Nos électriciens certifiés réalisent les travaux. Nous gérons les démarches Consuel et vos aides.",
      duree: "Selon chantier",
      icone: "🔧",
    },
  ],

  // SEO
  seo: {
    title: "GP elec — Électricien Brissac Loire Aubance | 40 ans d'expérience",
    description: "GP elec, électricien familial à Brissac Loire Aubance (49320). 40 ans d'expérience : installation neuve, rénovation, mise aux normes, borne de recharge IRVE, aménagement cuisine, dépannage. Devis gratuit.",
    keywords: [
      "électricien Brissac Loire Aubance",
      "électricien 49320",
      "électricien Maine-et-Loire",
      "GP elec",
      "Guille Pierre électricien",
      "installation électrique Brissac",
      "rénovation électrique 49",
      "mise aux normes NF C 15-100",
      "borne de recharge IRVE Anjou",
      "Qualifelec",
      "RGE électricien",
      "Consuel",
    ],
    ogImage: "/og-image.jpg",
  },

  // Légal — TODO remplacer
  legal: {
    siret: "[À COMPLÉTER — SIRET]",
    tva: "[À COMPLÉTER — TVA intracom]",
    formeJuridique: "[À COMPLÉTER]",
    capital: "[À COMPLÉTER]",
    rcs: "[À COMPLÉTER — RCS]",
    hebergeur: "Vercel Inc., 340 Pine Street, Suite 1002, San Francisco, CA 94104",
    assurance: "[À COMPLÉTER — Décennale + N° contrat]",
  },
}

export type Config = typeof config
