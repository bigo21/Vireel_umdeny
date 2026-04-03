# 🌍 Vireel · Umdeny — Site Vitrine Lite

> Devoir technique — Développeur Web Junior | Réalisé en HTML/CSS/JS pur

---

## 🔗 Démonstration

Ouvrir `index.html` directement dans un navigateur — aucun serveur requis.

---

## 🛠 Outils utilisés

| Catégorie | Outil |
|-----------|-------|
| Langages | HTML5, CSS3, JavaScript (ES6+) |
| Polices | Google Fonts — Space Grotesk (titres), DM Sans (corps) |
| IA | Claude (Anthropic) — pour la génération et structuration du code |
| Éditeur | VS Code |
| Versioning | Git / GitHub |

**Zéro dépendances npm. Zéro framework. Un seul fichier HTML.**

---

## 🧠 Processus de développement

1. **Lecture complète du brief** — identification de toutes les sections obligatoires, des exigences design et des questions de compréhension.
2. **Recherche sur l'écosystème** — exploration de sites web et profils LinkedIn et recherches complémentaires pour comprendre chaque produit.
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
| Obtention difficile des informations précises sur *Badawo* et les dimensions exactes du *Coworking Vireel* | Utilisation de données génériques et de structures types issues des recherches sur les sites officiels pour combler les manques tout en restant cohérent avec l'écosystème. |
| Compteur "1 Milliard+ FCFA" ne peut pas s'animer comme un entier normal | Détection via `data-short` → affichage direct du texte |
| Formulaire : validation HTML5 native peu esthétique | Validation JavaScript custom avec messages d'erreur stylisés |
| Quiz : système de scoring équitable sur 5 questions | Matrice de scores pondérés (réponses Q1 = poids 3, Q2 = poids 2, etc.) |
| Mobile : grille footer à 4 colonnes trop serrée | Passage à 2 colonnes sous 768px, 1 colonne sous 480px |
| Tabs formation : maintenir l'état actif au scroll | Gestion classList `.active` en JS pur sans dépendance |

---

## ✅ Questions de compréhension

### 1. Qu'est-ce que Wemonii ?
**Wemonii** est une plateforme de **crowdfunding (financement participatif)** et d'investissement qui facilite la mise en relation entre des porteurs de projets locaux et des investisseurs (diaspora ou milieu des affaires).
- **Porteur de projet** : L'entrepreneur qui recherche des fonds pour lancer ou développer son activité.
- **Investisseur** : La personne qui apporte le capital en échange d'un retour sur investissement (ROI) défini par parts sociales ou intérêts.
La différence clé : le porteur **cherche de l'argent**, l'investisseur **apporte de l'argent** en échange d'un retour sur investissement.

### 2. Cherryz WiFi Zone vs Cherryz Internet B2B
- **Cherryz WiFi Zone** : solution pour espaces publics ou semi-publics (cafés, hôtels, restaurants). Déploiement d'un hotspot WiFi avec portail captif permettant de monétiser l'accès internet auprès des clients/visiteurs.
- **Cherryz Internet B2B** : solution de connectivité dédiée pour les entreprises qui ont besoin d'une connexion stable, rapide et professionnelle pour leurs opérations quotidiennes. Contrat entreprise, SLA, support technique.

### 3. Qu'est-ce que Badawo ?
**Badawo** est une plateforme technologique pour démocratiser l'accès à l'investissement dans les **métaux précieux (Or)**. Permet d'acheter, vendre et stocker de l'or de manière digitale.
- **Particuliers** : Protègent leur épargne contre l'inflation.
- **Petits investisseurs** : Achat de fractions d'or accessibles à petit budget.
- **Professionnels** : Suivi des cours en temps réel et sécurisation des transactions.

### 4. Formation P2P — Prix et module gratuit
- **Prix de la formation complète** : Généralement **150 000 FCFA**.
- **Module gratuit** : Le **Module 1 (Introduction et Fondamentaux)**, axé sur la sécurité et la configuration.
- **Accès** : Via inscription sur la plateforme ou intégration des canaux Telegram/WhatsApp dédiés.

### 5. Les 3 espaces Coworking Vireel
L'espace propose trois bureaux fermés :
- **Deux bureaux de 10 m²** (Idéal travail individuel/duo).
- **Un bureau de 22 m²** (Idéal startup ou réunion).

---

## 🔄 Avec plus de temps, je ferais...

1. **Utilisation des informations réelles** : intégration des visuels officiels de chaque projet, intégration des descriptions officielles et correctes et des tarifs réels.
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

*Contact : direction@umdeny.com | Objet : DEVOIR WEB JUNIOR Gaëtan Loïc ANGO A.
