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
  description: "Fort de 40 ans d'expérience, GP elec est une entreprise familiale qui propose des services d'électricité allant du neuf à la rénovation : installation électrique complète, dépannage urgence, mises aux normes, aménagement de cuisine.",

  // Contact
  telephone: "06 18 96 57 36",
  telephoneHref: "tel:+33618965736",
  email: "pierreguille011@gmail.com",
  adresse: "6 rue de l'Yser",
  ville: "Brissac Loire Aubance",
  codePostal: "49320",
  departement: "Maine-et-Loire",
  region: "Pays de la Loire",
  siret: "990 872 129 00012",
  geo: { latitude: 47.3522, longitude: -0.4444 },

  // Certifications — laissé vide (pas de certif client pour le moment)
  certifications: [] as string[],
  certificationDetails: [
    {
      nom: "Qualifelec",
      nomComplet: "Qualification Électricité",
      couleur: "#FACC15",
      description: "Qualification professionnelle de référence pour les électriciens. Atteste de notre maîtrise technique, de notre conformité aux normes NF C 15-100 et de notre engagement qualité. Renouvelée tous les 4 ans après audit.",
      benefice: "Expertise reconnue",
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
      description: "Certificats d'Économies d'Énergie. Primes versées par les fournisseurs d'énergie pour vos travaux d'efficacité énergétique.",
      montantMax: "Jusqu'à 960 €",
      conditions: "Travaux d'efficacité énergétique",
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
      marques: ["Legrand", "Schneider Electric", "Hager"],
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
  marques: ["Legrand", "Schneider Electric", "Hager", "Siemens", "Niko", "Eaton"],

  // ⚡ Grille services (DA Anthony Frides — 4 cartes hero)
  servicesGrid: [
    {
      id: "neuf",
      titre: "Neuf",
      sousTitre: "Installation complète",
      texte: "Conception et réalisation d'installations électriques neuves aux normes NF C 15-100. Du tableau aux prises, certificat Consuel inclus.",
      image: "/images/services/neuf.webp",
    },
    {
      id: "renovation",
      titre: "Rénovation",
      sousTitre: "Mise aux normes & cuisine",
      texte: "Diagnostic, dépose, pose neuve. Sécurisation des logements anciens avec attestation Consuel à la livraison. Aménagement de cuisines : circuits dédiés plaque, four, prises plan de travail.",
      image: "/images/services/renovation.webp",
    },
    {
      id: "depannage-urgence",
      titre: "Dépannage Urgence",
      sousTitre: "Intervention rapide",
      texte: "Disjoncteur qui saute, court-circuit, panne totale ou partielle : intervention rapide pour remettre votre installation en service en toute sécurité.",
      image: "/images/services/depannage.jpg",
    },
    {
      id: "domotique",
      titre: "Domotique",
      sousTitre: "Maison connectée",
      texte: "Pilotage centralisé éclairage, volets, chauffage, sécurité. Intégration KNX, Somfy, Legrand With Netatmo.",
      image: "/images/services/domotique.webp",
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
      titre: "Sécurité",
      texte: "Travaux réalisés dans le strict respect des normes NF C 15-100. La sécurité de votre installation est notre priorité.",
    },
  ],

  // 🏷️ Tagline hero (DA épurée)
  heroTagline: "Entreprise familiale — 40 ans d'expérience",
  heroBaseline: "Électricien à Brissac Loire Aubance et Angers — Installation, rénovation, dépannage urgence, domotique",
  heroImage: "/images/hero/hero.webp",

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
      texte: "Disjoncteur principal qui sautait sans arrêt un dimanche soir. Appel passé, intervention le lendemain matin. Diagnostic rapide, défaut identifié et réparé proprement. Service sérieux et réactif, exactement ce qu'on attend en cas de panne.",
      travaux: "Dépannage électrique",
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
      question: "Êtes-vous certifié Qualifelec ?",
      reponse: "Oui, GP elec est certifié Qualifelec. Cette qualification professionnelle atteste de notre maîtrise technique et de notre conformité aux normes NF C 15-100. Elle est renouvelée tous les 4 ans après audit.",
    },
    {
      question: "Mon installation a 30 ans, dois-je tout refaire ?",
      reponse: "Pas forcément. Une installation ancienne n'est pas systématiquement à refaire intégralement, mais elle doit respecter 6 points clés (mise à la terre, disjoncteur différentiel, protection adaptée des circuits, etc.). Nous proposons un diagnostic gratuit pour identifier précisément ce qui doit être mis aux normes — souvent une rénovation partielle suffit.",
    },
    {
      question: "Intervenez-vous en urgence en cas de panne ?",
      reponse: "Oui, nous intervenons rapidement en cas de panne électrique : disjoncteur qui saute, court-circuit, panne totale ou partielle, prise hors service. Appelez le 06 18 96 57 36 pour décrire le problème — nous évaluons l'urgence et organisons l'intervention au plus vite, avec un devis transparent avant remise en état importante.",
    },
    {
      question: "Délivrez-vous le Consuel à la livraison ?",
      reponse: "Oui, pour toute installation neuve ou rénovation totale, nous délivrons l'attestation Consuel obligatoire pour la mise sous tension Enedis. Pour les rénovations partielles, nous fournissons une attestation de conformité de notre intervention.",
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      reponse: "Nous intervenons sur tout le secteur de Brissac Loire Aubance et d'Angers. Nous nous déplaçons gratuitement pour le devis dans cette zone.",
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
      duree: "Sous 72h",
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
    title: "Électricien Brissac Loire Aubance & Angers — GP elec | 40 ans d'expérience",
    description: "Électricien à Brissac Loire Aubance (49320) et Angers : installation, rénovation, mise aux normes NF C 15-100, dépannage urgence. GP elec, entreprise familiale Maine-et-Loire, 40 ans d'expérience. Devis gratuit.",
    keywords: [
      // Cœur cible — Brissac
      "électricien Brissac Loire Aubance",
      "électricien Brissac",
      "électricien 49320",
      "dépannage électrique Brissac Loire Aubance",
      "urgence électricien Brissac",
      "rénovation électrique Brissac Loire Aubance",
      "installation électrique Brissac",
      "mise aux normes électricité Brissac",
      "tableau électrique Brissac Loire Aubance",
      // Cœur cible — Angers
      "électricien Angers",
      "électricien Angers pas cher",
      "dépannage électrique Angers",
      "urgence électricien Angers",
      "rénovation électrique Angers",
      "installation électrique Angers",
      "mise aux normes Angers",
      "tableau électrique Angers",
      "électricien artisan Angers",
      // Maine-et-Loire / 49
      "électricien Maine-et-Loire",
      "électricien 49",
      "dépannage urgence électricien 49",
      "entreprise électricité Maine-et-Loire",
      "rénovation électrique 49",
      // Métier / certifs / normes
      "Qualifelec",
      "Qualifelec Maine-et-Loire",
      "Consuel",
      "Consuel Angers",
      "NF C 15-100",
      "mise aux normes NF C 15-100",
      "diagnostic électrique",
      "garantie décennale électricité",
      // Services
      "aménagement cuisine électricité Angers",
      "circuits dédiés cuisine",
      "domotique Angers",
      "domotique Brissac",
      "électricité maison neuve Angers",
      "électricité rénovation maison ancienne",
      // Marque / personne
      "GP elec",
      "Guille Pierre électricien",
      "Pierre Guille électricien Angers",
      "entreprise familiale électricité Angers",
    ],
    ogImage: "/og-image.jpg",
  },

  // Légal — TODO remplacer
  legal: {
    siret: "990 872 129 00012",
    tva: "[À COMPLÉTER — TVA intracom]",
    formeJuridique: "[À COMPLÉTER]",
    capital: "[À COMPLÉTER]",
    rcs: "[À COMPLÉTER — RCS]",
    hebergeur: "Vercel Inc., 340 Pine Street, Suite 1002, San Francisco, CA 94104",
    assurance: "[À COMPLÉTER — Décennale + N° contrat]",
  },
}

export type Config = typeof config
