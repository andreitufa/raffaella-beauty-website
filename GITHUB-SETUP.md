# GitHub Setup - Acces Remote Website

## 🎯 Ce vei avea:
- **Acces de pe orice computer** din lume
- **Backup automat** al tuturor fișierelor
- **Istoric modificări** (vezi ce ai schimbat când)
- **Colaborare** cu alți developeri (dacă vrei)
- **Deploy automat** la Vercel când modifici ceva

## 🔧 Setup în 10 minute:

### Pas 1: Creează cont GitHub
1. Mergi la https://github.com
2. Click "Sign up"
3. Alege username (ex: "raffaella-beauty")
4. Confirmă email-ul

### Pas 2: Creează repository
1. Click "New repository"
2. Nume: "raffaella-beauty-website"
3. Description: "Raffaella Beauty Studio Website"
4. Public sau Private (recomand Private)
5. Click "Create repository"

### Pas 3: Upload fișierele actuale
1. În GitHub → "uploading an existing file"
2. Trage toate fișierele din `C:\Users\andre\Desktop\Website Raffaella Beauty`
3. Commit message: "Initial website upload"
4. Click "Commit changes"

### Pas 4: Clone pe orice computer
```bash
git clone https://github.com/your-username/raffaella-beauty-website.git
cd raffaella-beauty-website
npm install
npm run dev
```

## 📱 Acces de pe orice dispozitiv:

### De pe laptop/computer nou:
1. Instalează Git: https://git-scm.com/download
2. Instalează Node.js: https://nodejs.org
3. Clone repository-ul:
```bash
git clone https://github.com/your-username/raffaella-beauty-website.git
```
4. Instalează dependențele:
```bash
cd raffaella-beauty-website
npm install
```
5. Rulează site-ul local:
```bash
npm run dev
```

### De pe telefon/tablet:
- **GitHub Mobile App**: vezi și editezi codul
- **GitHub Codespaces**: editezi direct în browser
- **VS Code Online**: editor complet în browser

## 🔄 Workflow zilnic:

### Când modifici ceva:
1. **Pull** ultimele modificări:
```bash
git pull origin main
```
2. **Modifică** fișierele
3. **Testează** local:
```bash
npm run dev
```
4. **Commit** modificările:
```bash
git add .
git commit -m "Descriere modificare"
git push origin main
```
5. **Vercel** deploy automat (dacă e conectat)

### Când lucrezi de pe alt computer:
1. **Clone** repository-ul (prima dată)
2. **Pull** ultimele modificări (de fiecare dată)
3. **Modifică** și **push** ca de obicei

## 🚀 Deploy Automat cu Vercel:

### Conectează GitHub la Vercel:
1. În Vercel Dashboard → "Import Project"
2. Selectează "From GitHub"
3. Alege repository-ul "raffaella-beauty-website"
4. Vercel va deploy automat la fiecare push

### Beneficii:
- **Deploy automat** când push-ezi
- **Preview URLs** pentru fiecare modificare
- **Rollback** la versiuni anterioare
- **Team collaboration** (dacă vrei)

## 📁 Structura fișierelor în GitHub:

```
raffaella-beauty-website/
├── public/
│   ├── assets/
│   │   ├── logo-raffaella.png
│   │   ├── epilare-definitiva.jpeg
│   │   └── ...
│   ├── sitemap.xml
│   ├── robots.txt
│   └── manifest.json
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Services.tsx
│   └── ...
├── pages/
│   ├── EpilareDefinitiva.tsx
│   ├── ExtensiiGene.tsx
│   └── ...
├── package.json
├── vite.config.ts
├── tailwind.config.cjs
└── README.md
```

## 🔒 Securitate:

### Private Repository:
- **Doar tu** poți vedea codul
- **Invite** alți developeri dacă vrei
- **Control complet** asupra accesului

### Public Repository:
- **Oricine** poate vedea codul
- **Open source** (dacă vrei)
- **Community contributions** (dacă vrei)

## 💡 Tips pentru eficiență:

### Git Commands utile:
```bash
# Vezi statusul modificărilor
git status

# Vezi istoricul commits
git log --oneline

# Revenire la versiunea anterioară
git reset --hard HEAD~1

# Creează branch nou pentru testare
git checkout -b feature/noua-functie
```

### VS Code Extensions recomandate:
- **GitLens**: vizualizează istoricul Git
- **Git Graph**: grafic commits
- **GitHub**: integrare GitHub
- **Prettier**: formatare cod automată

## 🌍 Acces din orice loc:

### De acasă:
- Clone repository-ul
- Modifică local
- Push modificările

### De la birou:
- Pull ultimele modificări
- Modifică și push

### De în vacanță:
- GitHub Mobile App
- GitHub Codespaces (editor în browser)
- VS Code Online

### De pe telefon:
- GitHub Mobile App
- Editează fișiere simple
- Vezi modificările

---

**Rezultat**: Vei avea acces complet la site de pe orice computer, oriunde în lume, cu backup automat și istoric complet al modificărilor.
