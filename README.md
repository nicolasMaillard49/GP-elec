# GP elec — Site vitrine électricien

> Site vitrine **GP elec**, entreprise familiale d'électricité (40 ans d'expérience).
> Stack : **Nuxt 3 + Vue 3 + TypeScript + TailwindCSS**. SSG, déploiement Vercel.

Basé sur `template-technique` (NMF Agence) — palette adaptée jaune électrique.

---

## Services couverts

- Installation électrique complète (NF C 15-100, Consuel)
- Rénovation et mise aux normes
- Borne de recharge IRVE (3,7 → 22 kW)
- Aménagement cuisine (circuits dédiés)
- Dépannage

## Identité visuelle

- **Bleu nuit** `#1E3A5F` (sérieux, technique)
- **Jaune électrique** `#FACC15` (CTA, signal "courant")
- **Gris acier** `#64748B`
- Typo : Inter (Google Fonts)

## Personnalisation

Tout est dans `config.ts` :
- Identité, contact, SIRET
- Certifications (Qualifelec, RGE, IRVE)
- Aides financières (MaPrimeRénov', CEE, TVA 5,5 %)
- Services, marques, témoignages, FAQ
- SEO + légal

Palette dans `tailwind.config.ts` (clé `orange` swappée en jaune électrique pour conserver la compatibilité avec les composants du template).

## Dev local

```bash
cd D:/projets/gp-elec
npm install
npm run dev   # http://localhost:3000
```

## Build / Deploy

```bash
npm run generate   # SSG
# Déploiement Vercel : vercel --prod
```

## TODO avant prod

- [ ] Remplacer `[À COMPLÉTER]` (contact, SIRET, adresse, zone) dans `config.ts`
- [ ] Remplacer témoignages placeholders par vrais avis Google
- [ ] Ajouter le vrai logo GP elec dans `public/`
- [ ] Photos hero + équipe + chantiers (WebP, optimisées)
- [ ] Connecter le formulaire de devis (Formspree / Netlify / EmailJS)
- [ ] Décider du domaine final (`gp-elec.fr` ?) et MAJ `nuxt.config.ts` (canonical) + `sitemap.xml`
- [ ] Coordonnées GPS dans le JSON-LD `LocalBusiness`
- [ ] Vérifier mentions légales (assurance décennale, RCS)

## Liens

- Note Obsidian : `D:/obsidian/MonCerveau/Projets/gp-elec.md`
- Template source : `D:/projets/template-technique`
- Agence : NMF Agence (Bordeaux)
