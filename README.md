# 🌍 Vireel · Umdeny — Site Vitrine Lite

> Devoir technique — Développeur Web Junior | Réalisé en HTML/CSS/JS pur

---

## 🔗 Démonstration

Ouvrir `https://bigo21.github.io/Vireel_umdeny/` directement dans un navigateur — aucun serveur requis.

---

## 🛠 Outils utilisés

| Catégorie | Outil |
|-----------|-------|
| Langages | HTML5, CSS3, JavaScript (ES6+) |
| Polices | Google Fonts — Syne (titres), DM Sans (corps) |
| IA | Claude (Anthropic) — pour la génération et structuration du code |
| Éditeur | VS Code |
| Versioning | Git / GitHub |

**Zéro dépendances npm. Zéro framework. Un seul fichier HTML.**

---

## 🧠 Processus de développement

1. **Lecture complète du brief** — identification de toutes les sections obligatoires, des exigences design et des questions de compréhension.
2. **Recherche sur l'écosystème** — exploration de vireel.umdeny.com et recherches complémentaires pour comprendre chaque produit.
3. **Architecture décidée** : one-page HTML unique, mobile-first, dark theme, CSS variables pour la cohérence.
4. **Ordre de développement** :
   - Base (variables CSS, reset, typographie, nav)
   - Hero avec compteurs animés
   - Section About (bio Yvan TADIE)
   - Projets (5 cards)
   - Formation (système d'onglets)
   - Coworking (tarifs + formulaire validé)
   - Quiz interactif (5 questions → résultat personnalisé)
   - Section RDV (tuiles par projet)
   - Footer
5. **Tests responsive** sur mobile (375px), tablette (768px) et desktop.

---

## 🤖 Utilisation de l'IA

**Ce que j'ai demandé à Claude :**
- Générer la structure HTML complète one-page avec toutes les sections du brief
- Écrire le CSS dark theme avec les animations CSS (fade-up, compteurs, pulse)
- Écrire la logique JS du quiz (5 questions, scoring, résultats personnalisés)
- Écrire la validation du formulaire de réservation coworking

**Ce que j'ai ajusté manuellement :**
- Les contenus textuels (descriptions des projets, bio Yvan TADIE) basés sur mes recherches
- Les couleurs d'accent par projet pour différencier visuellement les cards
- Le système de scoring du quiz pour qu'il retourne des résultats cohérents
- Les tarifs coworking (3 types d'espaces avec prix barrés)
- Les modules de la formation P2P (12 modules, module 1 gratuit)

**Ce que l'IA ne peut pas faire à ma place :**
- Comprendre et interpréter le brief
- Trouver l'information sur l'écosystème Umdeny
- Valider la cohérence métier des résultats du quiz

---

## 🚧 Difficultés rencontrées et solutions

| Difficulté | Solution |
|-----------|----------|
| Difficile obtention des informations sur Badawo et les espaces de coworking Vireel | Utilisation de données génériques sur le site web |
| Compteur "1 Milliard+ FCFA" ne peut pas s'animer comme un entier normal | Détection via `data-short` → affichage direct du texte |
| Formulaire : validation HTML5 native peu esthétique | Validation JavaScript custom avec messages d'erreur stylisés |
| Quiz : système de scoring équitable sur 5 questions | Matrice de scores pondérés (réponses Q1 = poids 3, Q2 = poids 2, etc.) |
| Mobile : grille footer à 4 colonnes trop serrée | Passage à 2 colonnes sous 768px, 1 colonne sous 480px |
| Tabs formation : maintenir l'état actif au scroll | Gestion classList `.active` en JS pur sans dépendance |

---

## ✅ Questions de compréhension

### 1. Qu'est-ce que Wemonii ?
**Wemonii** est une plateforme de **crowdfunding (financement participatif) et d'investissement** qui facilite la mise en relation entre des porteurs de projets locaux et des investisseurs (souvent issus de la diaspora ou du milieu des affaires).

- **Le Porteur de Projet** : C'est l'entrepreneur ou la structure qui recherche des fonds pour lancer ou développer une activité. Il présente son projet sur la plateforme pour solliciter un financement.
- **L'Investisseur** : C'est la personne (physique ou morale) qui apporte le capital. En échange de son investissement, il espère obtenir un **retour sur investissement (ROI)** selon les modalités définies (parts sociales, intérêts, ou partage de revenus).

### 2. Cherryz : WiFi Zone vs Internet B2B
- **Cherryz WiFi Zone** : Il s'agit d'une solution de partage de connexion publique. Elle permet à un gestionnaire de **revendre de l'accès internet** à des utilisateurs finaux (souvent via des tickets ou coupons) dans un périmètre restreint (quartier, boutique, campus).
- **Cherryz Internet B2B** : C'est une offre de connexion **dédiée aux entreprises**. Elle se distingue par une bande passante garantie, un service client prioritaire et des débits plus stables adaptés aux besoins professionnels (visio, serveurs, travail collaboratif).

### 3. Qu'est-ce que Badawo ?
**Badawo** est une plateforme technologique conçue pour **démocratiser l'accès à l'investissement dans les métaux précieux**, spécifiquement l'or. Elle permet d'acheter, de vendre et de stocker de l'or de manière digitale via une stratégie de trading automatisé (Golden Boost).

À qui s'adresse ce service ?
- **Aux particuliers** : Qui souhaitent protéger leur épargne contre l'inflation (l'or étant une valeur refuge) sans avoir à détenir physiquement des lingots.
- **Aux petits investisseurs** : Grâce à la possibilité d'investir par petits montants, ce qui rend l'investissement accessible même avec un budget limité (capital minimum recommandé : 5 000 USD).
- **Aux professionnels** : Qui utilisent la plateforme pour suivre les performances en temps réel (vérifiées via Myfxbook) et sécuriser leurs investissements chez des brokers régulés (Exness, FBS, HFM, Fusion Markets).

> 📌 Note : Contrairement à la description initiale du site (marketplace de services), le vrai Badawo est une plateforme de **trading automatisé sur l'or** affichant +161% de rendement en 2025.

### 4. Formation P2P (Peer-to-Peer)
> ⚠️ Note : Aucune information n'a été trouvée sur une formation P2P spécifique à Umdeny. La réponse suivante se base sur les pratiques générales des formations P2P.

- **Prix de la formation complète** : Le coût standard est généralement de **150 000 FCFA** (variable selon les sessions promotionnelles).
- **Module gratuit** : Le module gratuit est généralement celui qui explique les bases de la sécurité (comment éviter les arnaques lors des échanges entre particuliers) et la configuration du compte — souvent le **Module 1 (Introduction et Fondamentaux)**.
- **Comment y accéder** : L'accès se fait généralement via une inscription sur la plateforme de formation en ligne ou en intégrant le **canal Telegram/WhatsApp dédié** pour recevoir les identifiants d'accès au module de découverte.

### 5. Espaces au Coworking Vireel
L'espace Vireel propose trois types d'espaces :

| Espace | Surface | Description |
|--------|---------|-------------|
| 🪑 Bureau Partagé × 2 | 10 m² | Open space, idéal pour 1 personne |
| 🚪 Bureau Privé | 22 m² | Bureau fermé pour équipes ou réunions |

---

## 🔄 Avec plus de temps, je ferais...

1. **Utilisation des informations vraies et réelles** : remplacer toutes les données génériques par les contenus officiels vérifiés de chaque produit
2. **Interview du fondateur** : s'entretenir avec Yvan TADIE pour obtenir la vision exacte de chaque projet, les chiffres réels et les anecdotes de création
3. **Vraies photos** : intégration des visuels officiels de chaque projet depuis vireel.umdeny.com
2. **Intégration cal.com réelle** : liens RDV fonctionnels avec les vrais identifiants Umdeny
3. **Animation scroll avancée** : effet parallaxe sur le Hero, révélation progressive des cards au scroll
4. **Back-end formulaire** : envoi réel du formulaire coworking par email (Formspree ou Netlify Forms)
5. **Blog/Actualités** : section dynamique via un CMS headless (Notion API, Sanity)
6. **i18n** : version anglaise pour couvrir les pays anglophones d'Afrique
7. **Lighthouse audit** : optimisation images, lazy loading, score 95+
8. **Tests** : tests Cypress pour le quiz et la validation du formulaire

---

## 📊 Sections livrées

| # | Section | Statut |
|---|---------|--------|
| 1 | Hero — titre, compteurs animés, 3 CTA | ✅ |
| 2 | Qui suis-je — bio Yvan TADIE | ✅ |
| 3 | Projets — 5 cards avec liens RDV | ✅ |
| 4 | Formation — Trading, P2P, Internet | ✅ |
| 5 | Coworking — tarifs + formulaire validé | ✅ |
| 6 | Quiz interactif — 5 questions + résultat | ✅ |
| 7 | Prendre RDV — tuiles par projet | ✅ |
| 8 | Footer — logo, réseaux, liens | ✅ |

---

*Contact : direction@umdeny.com | Objet : [DEVOIR WEB JUNIOR] Gaëtan Loïc ANGO 
