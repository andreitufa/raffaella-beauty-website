@echo off
echo ========================================
echo  GITHUB SETUP AUTOMAT - RAFFAELLA BEAUTY
echo ========================================
echo.

echo Pasul 1: Pregatire fisiere...
echo.

REM Creează .gitignore
echo # Dependencies > .gitignore
echo node_modules/ >> .gitignore
echo dist/ >> .gitignore
echo .vercel/ >> .gitignore
echo .env >> .gitignore
echo .env.local >> .gitignore
echo .env.production >> .gitignore
echo .env.development >> .gitignore
echo *.log >> .gitignore
echo .DS_Store >> .gitignore
echo Thumbs.db >> .gitignore
echo.

REM Creează README.md
echo # Raffaella Beauty Studio Website > README.md
echo. >> README.md
echo Professional beauty services website built with React, TypeScript, and Vite. >> README.md
echo. >> README.md
echo ## Features >> README.md
echo - Responsive design >> README.md
echo - SEO optimized >> README.md
echo - Google Analytics integration >> README.md
echo - Google Ads conversion tracking >> README.md
echo - Structured data for search engines >> README.md
echo. >> README.md
echo ## Services >> README.md
echo - Epilare Definitiva >> README.md
echo - Extensii Gene >> README.md
echo - Tratamente Faciale >> README.md
echo - Laminare Gene >> README.md
echo - Scanare Ten >> README.md
echo. >> README.md
echo ## Tech Stack >> README.md
echo - React 18 >> README.md
echo - TypeScript >> README.md
echo - Vite >> README.md
echo - Tailwind CSS >> README.md
echo - Framer Motion >> README.md
echo. >> README.md
echo ## Deployment >> README.md
echo Deployed on Vercel: https://raffaellabeauty.ro >> README.md
echo.

echo Pasul 2: Deschidere GitHub...
echo.

REM Deschide GitHub în browser
start https://github.com/new

echo.
echo ========================================
echo  INSTRUCTIUNI PENTRU GITHUB:
echo ========================================
echo.
echo 1. Repository name: raffaella-beauty-website
echo 2. Description: Raffaella Beauty Studio Website - Professional beauty services
echo 3. Visibility: Private (recomandat)
echo 4. Initialize repository: NU bifa nimic
echo 5. Click "Create repository"
echo.
echo 6. Dupa ce creezi repository-ul:
echo    - Click "uploading an existing file"
echo    - Trage TOATE fisierele din acest folder
echo    - Commit message: "Initial website upload - Raffaella Beauty Studio"
echo    - Click "Commit changes"
echo.
echo 7. Dupa upload, revino aici si apasa ENTER
echo.
pause

echo.
echo Pasul 3: Deschidere Vercel pentru conectare...
echo.

REM Deschide Vercel în browser
start https://vercel.com/dashboard

echo.
echo ========================================
echo  INSTRUCTIUNI PENTRU VERCEL:
echo ========================================
echo.
echo 1. Click "Import Project"
echo 2. Select "From GitHub"
echo 3. Alege "raffaella-beauty-website" repository
echo 4. Framework Preset: Vite
echo 5. Root Directory: ./
echo 6. Build Command: npm run build
echo 7. Output Directory: dist
echo 8. Click "Deploy"
echo.
echo 9. Dupa deploy, revino aici si apasa ENTER
echo.
pause

echo.
echo ========================================
echo  SETUP COMPLET!
echo ========================================
echo.
echo Acum ai:
echo - GitHub repository cu toate fisierele
echo - Vercel deploy automat
echo - Acces de pe orice computer
echo - Backup automat
echo.
echo Pentru modificari rapide:
echo - Vercel Dashboard ^> Edit with Vercel
echo.
echo Pentru modificari complexe:
echo - Clone repository-ul pe alt computer
echo - Modifica local si push la GitHub
echo.
echo Site live: https://raffaellabeauty.ro
echo.
pause
