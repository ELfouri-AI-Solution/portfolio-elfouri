#!/bin/bash

echo "🔄 Mise à jour automatique du portfolio"
echo "======================================"

# 1. Ajouter tous les changements
echo "📝 Ajout des changements..."
git add .

# 2. Demander le message de commit
echo "💬 Message de commit (ex: Ajout de nouveaux projets):"
read commit_message

# 3. Faire le commit
echo "💾 Commit des changements..."
git commit -m "$commit_message"

# 4. Pousser sur GitHub
echo "⬆️ Push vers GitHub..."
git push origin main

# 5. Déployer sur GitHub Pages
echo "🌐 Déploiement sur GitHub Pages..."
npm run deploy

echo "✅ Mise à jour terminée !"
echo "🌍 Ton portfolio sera mis à jour dans quelques minutes sur :"
echo "   https://ELfouri-AI-Solution.github.io/portfolio-elfouri" 