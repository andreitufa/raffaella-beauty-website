# Acces Remote Website - De pe orice computer

## 🎯 Ce vei avea:
- **Acces complet** la toate fișierele
- **Modificări** în timp real
- **Deploy automat** la Vercel
- **Backup automat** pe GitHub
- **Istoric complet** al modificărilor

## 🔧 Setup pe computer nou:

### Pasul 1: Instalează Cursor
1. Mergi la https://cursor.sh
2. Download Cursor pentru sistemul tău
3. Instalează și login cu același cont

### Pasul 2: Clone Repository-ul
1. **Deschide Cursor**
2. **Click**: "Clone Repository"
3. **URL**: `https://github.com/andreitufa/raffaella-beauty-website.git`
4. **Alege folderul** unde vrei să salvezi proiectul
5. **Click**: "Clone"

### Pasul 3: Instalează Dependențele
1. **Deschide terminal** în Cursor (`Ctrl + `` ` ``)
2. **Rulează**:
```bash
npm install
```

### Pasul 4: Rulează Site-ul Local
```bash
npm run dev
```
- Site-ul va fi disponibil la: http://localhost:5173
- Modificările se vor vedea instant

## 📝 Modificări și Deploy:

### Pentru modificări rapide (prețuri, text, contact):
1. **Deschide fișierul** în Cursor
2. **Modifică** conținutul
3. **Save** (`Ctrl + S`)
4. **Commit și Push**:
```bash
git add .
git commit -m "Descriere modificare"
git push origin main
```
5. **Deploy automat** la Vercel în ~30 secunde

### Pentru modificări complexe (cod, stiluri):
1. **Clone** repository-ul (prima dată)
2. **Pull** ultimele modificări:
```bash
git pull origin main
```
3. **Modifică** fișierele
4. **Testează** local: `npm run dev`
5. **Commit și Push**:
```bash
git add .
git commit -m "Descriere modificare"
git push origin main
```

## 🔄 Workflow Zilnic:

### Când lucrezi de pe computer nou:
1. **Deschide Cursor**
2. **Open Folder** → selectează proiectul
3. **Pull** ultimele modificări:
```bash
git pull origin main
```
4. **Modifică** ce vrei
5. **Push** modificările:
```bash
git add .
git commit -m "Descriere"
git push origin main
```

### Când revii la computerul principal:
1. **Pull** ultimele modificări:
```bash
git pull origin main
```
2. **Continuă** să lucrezi normal

## 📁 Fișiere importante de modificat:

### Conținut (ușor de modificat):
- `components/About.tsx` → textul despre salon
- `components/Contact.tsx` → informațiile de contact
- `components/Services.tsx` → descrierile serviciilor
- `pages/*.tsx` → prețurile serviciilor

### Stiluri (dacă știi CSS):
- `globals.css` → culori, fonturi, stiluri
- `components/*.tsx` → className-uri Tailwind

### SEO (important):
- `components/SEO.tsx` → meta tags
- `components/StructuredData.tsx` → date structurate
- `public/sitemap.xml` → sitemap

## 🎨 Modificări comune:

### Schimbă textul:
1. Deschide `components/About.tsx`
2. Găsește textul pe care vrei să-l schimbi
3. Modifică între ghilimele
4. Save → commit → push

### Schimbă prețurile:
1. Deschide `pages/EpilareDefinitiva.tsx`
2. Găsește array-ul `femeiItems` sau `barbatiItems`
3. Modifică valorile din `price`
4. Save → commit → push

### Schimbă informațiile de contact:
1. Deschide `components/Contact.tsx`
2. Găsește `phoneNumber`, `email`, `address`
3. Modifică valorile
4. Save → commit → push

### Schimbă imaginile:
1. Copiază imaginea nouă în `public/assets/`
2. Modifică numele în fișierul corespunzător
3. Save → commit → push

## 🔒 Securitate:

### Backup automat:
- **GitHub**: toate modificările sunt salvate
- **Vercel**: deploy automat la fiecare push
- **Istoric**: vezi toate modificările în GitHub

### Acces controlat:
- **Doar tu** poți modifica (cu contul tău)
- **Repository public**: oricine poate vedea codul
- **Deploy automat**: doar tu poți face push

## 💡 Tips pentru eficiență:

### Cursor Shortcuts:
- `Ctrl + P` → deschide fișier rapid
- `Ctrl + F` → caută în fișier
- `Ctrl + Shift + F` → caută în tot proiectul
- `Ctrl + `` ` `` → deschide terminal
- `Ctrl + S` → save rapid

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

### Organizare:
- **Comentează** modificările în commit messages
- **Folosește** branch-uri pentru funcționalități mari
- **Testează** local înainte de push

## 🌍 Acces din orice loc:

### De acasă:
- Cursor + Git + Node.js
- Modificări complete
- Deploy automat

### De la birou:
- Cursor + Git + Node.js
- Acces complet la proiect
- Sincronizare automată

### De în vacanță:
- Cursor + Git (fără Node.js)
- Modificări de bază
- Deploy prin GitHub

### De pe telefon:
- GitHub Mobile App
- Vezi modificările
- Editare fișiere simple

## 🚀 Deploy Automat:

### Când push-ezi:
1. **GitHub** primește modificările
2. **Vercel** detectează push-ul
3. **Build automat** în ~30 secunde
4. **Deploy live** pe https://raffaellabeauty.ro
5. **Notificare** când e gata

### Preview URLs:
- **Production**: https://raffaellabeauty.ro
- **Preview**: https://website-raffaella-beauty-xxx.vercel.app
- **Deploy history**: vezi toate versiunile

---

**Rezultat**: Vei avea acces complet la site de pe orice computer, oriunde în lume, cu Cursor și deploy automat.

