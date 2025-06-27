# Script de mise à jour automatique pour Windows PowerShell
Write-Host "🔄 Mise à jour automatique du portfolio" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# 1. Ajouter tous les changements
Write-Host "📝 Ajout des changements..." -ForegroundColor Yellow
git add .

# 2. Demander le message de commit
$commit_message = Read-Host "💬 Message de commit (ex: Ajout de nouveaux projets)"

# 3. Faire le commit
Write-Host "💾 Commit des changements..." -ForegroundColor Yellow
git commit -m $commit_message

# 4. Pousser sur GitHub
Write-Host "⬆️ Push vers GitHub..." -ForegroundColor Yellow
git push origin main

# 5. Déployer sur GitHub Pages
Write-Host "🌐 Déploiement sur GitHub Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host "✅ Mise à jour terminée !" -ForegroundColor Green
Write-Host "🌍 Ton portfolio sera mis à jour dans quelques minutes sur :" -ForegroundColor Cyan
Write-Host "   https://ELfouri-AI-Solution.github.io/portfolio-elfouri" -ForegroundColor Cyan 