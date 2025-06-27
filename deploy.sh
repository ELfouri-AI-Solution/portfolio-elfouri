#!/bin/bash

echo "🚀 Déploiement automatique du portfolio sur GitHub Pages"
echo "=================================================="

# 1. Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# 2. Installer gh-pages
echo "📦 Installation de gh-pages..."
npm install --save gh-pages

# 3. Configurer package.json pour GitHub Pages
echo "⚙️ Configuration du package.json..."
npm pkg set homepage="https://ELfouri-AI-Solution.github.io/portfolio-elfouri"
npm pkg set scripts.predeploy="npm run build"
npm pkg set scripts.deploy="gh-pages -d build"

# 4. Initialiser git si nécessaire
if [ ! -d ".git" ]; then
    echo "🔧 Initialisation de Git..."
    git init
fi

# 5. Ajouter les fichiers et faire un commit
echo "📝 Ajout des fichiers..."
git add .
git commit -m "Déploiement initial du portfolio"

# 6. Ajouter le remote GitHub (remplace par ton nom d'utilisateur si différent)
echo "🔗 Ajout du remote GitHub..."
git remote add origin https://github.com/ELfouri-AI-Solution/portfolio-elfouri.git 2>/dev/null || echo "Remote déjà configuré"

# 7. Pousser sur GitHub
echo "⬆️ Push vers GitHub..."
git branch -M main
git push -u origin main

# 8. Déployer sur GitHub Pages
echo "🌐 Déploiement sur GitHub Pages..."
npm run deploy

echo "✅ Déploiement terminé !"
echo "🌍 Ton portfolio sera disponible sur : https://ELfouri-AI-Solution.github.io/portfolio-elfouri"
echo "⏰ Attends quelques minutes pour que le site soit en ligne." 