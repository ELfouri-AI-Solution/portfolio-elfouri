# Portfolio IA – Abdessamad ELFOURI

Ce projet est un portfolio web moderne, responsive et animé, conçu pour présenter le parcours, les compétences et les projets d’un étudiant ingénieur en Intelligence Artificielle.

## 🚀 Aperçu

- **Technos** : React.js, TypeScript, Tailwind CSS, Framer Motion, API GitHub
- **Fonctionnalités** :
  - Mode sombre/clair
  - Filtres dynamiques sur les projets
  - Intégration automatique des projets publics GitHub
  - Téléchargement du CV
  - Formulaire de contact
  - SEO (balises meta, Open Graph)

## 📦 Installation & Développement

1. **Cloner le repo**

```bash
git clone https://github.com/ELfouri-AI-Solution/portfolio-ia.git
cd portfolio-ia
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement

### Sur Vercel (recommandé)
1. Crée un compte sur [vercel.com](https://vercel.com/)
2. Clique sur "New Project" et connecte ton repo GitHub
3. Vercel détecte automatiquement React (Create React App)
4. Clique sur "Deploy" : ton portfolio sera en ligne en quelques secondes !

### Sur GitHub Pages
1. Installe le package de déploiement :
   ```bash
   npm install --save gh-pages
   ```
2. Ajoute dans `package.json` :
   ```json
   "homepage": "https://<ton-utilisateur>.github.io/<nom-du-repo>"
   ```
3. Ajoute les scripts suivants :
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Déploie :
   ```bash
   npm run deploy
   ```

## 📁 Personnalisation
- Remplace ta photo dans `public/photo.jpg`
- Remplace ton CV dans `public/cv.pdf`
- Modifie les données des projets dans `src/data/projects.json`
- Personnalise les couleurs, textes, liens, etc.

## ✨ Crédits
Développé par Abdessamad ELFOURI – Étudiant ingénieur en Intelligence Artificielle

---

> *"L'intelligence artificielle n'est pas le futur, c'est le présent qui façonne demain."*
