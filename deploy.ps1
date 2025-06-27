# Script de déploiement automatique pour Windows PowerShell
Write-Host "🚀 Déploiement automatique du portfolio sur GitHub Pages" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green

# 1. Installer les dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install

# 2. Installer gh-pages
Write-Host "📦 Installation de gh-pages..." -ForegroundColor Yellow
npm install --save gh-pages

# 3. Configurer package.json pour GitHub Pages
Write-Host "⚙️ Configuration du package.json..." -ForegroundColor Yellow
npm pkg set homepage="https://ELfouri-AI-Solution.github.io/portfolio-elfouri"
npm pkg set scripts.predeploy="npm run build"
npm pkg set scripts.deploy="gh-pages -d build"

# 4. Initialiser git si nécessaire
if (-not (Test-Path ".git")) {
    Write-Host "🔧 Initialisation de Git..." -ForegroundColor Yellow
    git init
}

# 5. Ajouter les fichiers et faire un commit
Write-Host "📝 Ajout des fichiers..." -ForegroundColor Yellow
git add .
git commit -m "Déploiement initial du portfolio"

# 6. Ajouter le remote GitHub
Write-Host "🔗 Ajout du remote GitHub..." -ForegroundColor Yellow
try {
    git remote add origin https://github.com/ELfouri-AI-Solution/portfolio-elfouri.git
} catch {
    Write-Host "Remote déjà configuré" -ForegroundColor Blue
}

# 7. Pousser sur GitHub
Write-Host "⬆️ Push vers GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

# 8. Déployer sur GitHub Pages
Write-Host "🌐 Déploiement sur GitHub Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host "✅ Déploiement terminé !" -ForegroundColor Green
Write-Host "🌍 Ton portfolio sera disponible sur : https://ELfouri-AI-Solution.github.io/portfolio-elfouri" -ForegroundColor Cyan
Write-Host "⏰ Attends quelques minutes pour que le site soit en ligne." -ForegroundColor Yellow 