 **ZENO - Application de Suivi de Projets Clients**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

## 📋 **Table des matières**

- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Architecture du projet](#-architecture-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Structure des pages](#-structure-des-pages)
- [Composants UI](#-composants-ui)
- [Guide d'utilisation](#-guide-dutilisation)
- [Améliorations futures](#-améliorations-futures)
- [Auteur](#-auteur)

---

## 🎯 **Présentation**

**ZENO** est une application de gestion et de suivi de projets clients conçue pour les professionnels qui gèrent plusieurs projets simultanément. L'application permet de visualiser, organiser et suivre l'évolution des projets à travers différentes phases via un tableau Kanban intuitif.

Chaque projet peut être associé à des documents essentiels :

- 📄 Devis
- 📋 Contrats
- 💶 Factures
- 📦 Livrables

---

## ✨ **Fonctionnalités**

### **Tableau de bord Kanban**

- Visualisation des projets en 3 colonnes : **Futur**, **En cours**, **Terminé**
- Glisser-déposer pour changer le statut des projets
- Barres de progression visuelles pour chaque projet
- Indicateurs de documents associés (D, C, F, L)

### **Gestion documentaire**

- **Devis** : Création, consultation et suivi des devis
- **Contrats** : Gestion des contrats clients avec dates d'échéance
- **Factures** : Suivi des paiements et facturation
- **Livrables** : Gestion des fichiers et documents à livrer

### **Interface utilisateur**

- Design épuré et moderne (Blanc, Noir, Bleu #3B82F6)
- **Mode sombre/clair** avec persistance
- **Responsive** : Adaptation mobile, tablette et desktop
- Barre latérale rétractable sur desktop
- Menu hamburger sur mobile

### **Recherche et filtrage**

- Recherche en temps réel sur toutes les pages
- Filtres par statut (En attente, Accepté, Refusé, etc.)
- Statistiques globales en haut de chaque page

---

## 🏗 **Architecture du projet**

```
Zeno/
├── app/                    # Pages de l'application (Next.js App Router)
│   ├── contrats/           # Page des contrats
│   ├── devis/              # Page des devis
│   ├── factures/           # Page des factures
│   ├── livrables/          # Page des livrables
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil (Kanban)
│   └── globals.css         # Styles globaux
│
├── components/             # Composants React réutilisables
│   ├── ui/                 # Composants d'interface utilisateur
│   │   ├── badge.tsx       # Badge pour les statuts/types
│   │   ├── button.tsx      # Bouton personnalisé
│   │   ├── card.tsx        # Carte de contenu
│   │   ├── input.tsx       # Champ de saisie
│   │   ├── progress.tsx    # Barre de progression
│   │   └── scroll-area.tsx # Zone défilante
│   │
│   ├── sidebar.tsx         # Barre latérale de navigation
│   ├── kanban.tsx          # Composant Kanban personnalisé
│   ├── navlink.tsx         # Liens de navigation
│   └── create.tsx          # Formulaire de création
│
├── lib/                    # Utilitaires et fonctions
│   └── utils.ts            # Fonctions utilitaires (cn)
│
├── public/                 # Assets statiques
└── ...                     # Fichiers de configuration
```

---

## 🛠 **Technologies utilisées**

- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[TailwindCSS](https://tailwindcss.com/)** - Stylisation utility-first
- **[Lucide Icons](https://lucide.dev/)** - Icônes modernes et légères
- **[@faker-js/faker](https://fakerjs.dev/)** - Génération de données de démonstration
- **[date-fns](https://date-fns.org/)** - Manipulation de dates

---

## 🚀 **Installation**

### **Prérequis**

- Node.js 18.17 ou supérieur
- npm ou yarn

### **Étapes d'installation**

1. **Cloner le repository**

```bash
git clone https://github.com/Serena-png/Zeno
cd zeno
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Lancer l'application en développement**

```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir l'application**

```
http://localhost:3000
```

### **Scripts disponibles**

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Compile l'application pour la production
npm run start    # Lance l'application en production
npm run lint     # Vérifie le code avec ESLint
```

---

## 📱 **Structure des pages**

### **Page d'accueil (`/`)**

Tableau Kanban avec :

- 3 colonnes (Futur, En cours, Terminé)
- Glisser-déposer des projets
- Statistiques globales
- Barre de recherche

### **Page Devis (`/devis`)**

- Liste des devis avec statuts
- Création de nouveaux devis
- Téléchargement/consultation des documents
- Filtrage par statut

### **Page Contrats (`/contrats`)**

- Gestion des contrats clients
- Dates de début et fin
- Types de contrats (Standard, Premium, Enterprise)
- Statuts (Actif, Expiré, En attente)

### **Page Factures (`/factures`)**

- Suivi des factures
- Montants et échéances
- Statuts (Payée, En attente, En retard)
- Marquer comme payée

### **Page Livrables (`/livrables`)**

- Gestion des fichiers à livrer
- Barres de progression
- Types de fichiers (Document, Code, Design, Rapport)
- Téléchargement direct

---

## 🎨 **Composants UI**

### **Composants personnalisés**

| Composant  | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `Button`   | Bouton avec variantes (default, outline, ghost, secondary) |
| `Card`     | Conteneur avec header, contenu et footer                   |
| `Input`    | Champ de saisie stylisé                                    |
| `Badge`    | Indicateur de statut ou type                               |
| `Progress` | Barre de progression                                       |
| `Sidebar`  | Barre latérale responsive avec menu                        |

### **Palette de couleurs**

- **Blanc pur** : `#FFFFFF` (fond principal)
- **Noir profond** : `#0A0A0A` (texte principal)
- **Bleu vif** : `#3B82F6` (accent, actions principales)
- **Gris** : Variations pour les textes secondaires

### **Responsive Design**

- **Mobile** : Sidebar masquée (menu hamburger), 1 colonne
- **Tablette** : 2 colonnes pour les grilles
- **Desktop** : 3-4 colonnes, sidebar visible

---

## 📖 **Guide d'utilisation**

### **Navigation**

1. **Barre latérale** : Accès aux différentes sections
2. **Menu mobile** : Bouton en haut à gauche sur mobile
3. **Mode sombre** : Bouton en bas de la sidebar

### **Gestion des projets (Kanban)**

1. **Ajouter un projet** : Bouton "Nouveau projet"
2. **Déplacer un projet** : Glisser-déposer entre les colonnes
3. **Voir les détails** : Cliquer sur "Voir détails" d'une carte
4. **Rechercher** : Utiliser la barre de recherche

### **Gestion des documents**

1. **Ajouter un document** : Bouton "Nouveau" sur chaque page
2. **Télécharger** : Bouton "Télécharger" sur chaque élément
3. **Filtrer** : Utiliser les filtres par statut
4. **Consulter** : Bouton "Voir" pour prévisualiser

---

## 🔮 **Améliorations futures**

- [ ] **Authentification** - Système de connexion utilisateur
- [ ] **Base de données** - Persistance des données avec PostgreSQL/MongoDB
- [ ] **API REST** - Backend complet avec Next.js API Routes
- [ ] **Notifications** - Alertes pour les échéances
- [ ] **Export PDF** - Génération de documents PDF
- [ ] **Graphiques** - Statistiques avancées avec Recharts
- [ ] **Drag & Drop avancé** - Réorganisation des colonnes
- [ ] **Multi-utilisateurs** - Gestion d'équipe
- [ ] **Upload de fichiers** - Intégration Cloudinary/S3
- [ ] **Mode hors ligne** - PWA pour utilisation sans connexion

---

## 👨‍💻 **Auteur**

**ZENO** - Application développée pour le suivi de projets clients.

- **Développeur** : Doumer Serena
- **Version** : 1.0.0
- **Licence** : MIT

---

## 📝 **Note de version**

### **Version 1.0.0** (10 Mars 2026)

- ✅ Tableau Kanban avec drag & drop
- ✅ Gestion des devis, contrats, factures, livrables
- ✅ Design responsive et mode sombre
- ✅ Recherche et filtres en temps réel
- ✅ Composants UI personnalisés

---

<div align="center">
  <p>Fait avec ❤️ pour une gestion de projets simplifiée</p>
  <p>© 2026 ZENO - Tous droits réservés</p>
</div>
