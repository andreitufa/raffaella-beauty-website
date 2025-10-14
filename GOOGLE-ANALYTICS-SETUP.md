# Google Analytics 4 Setup - Raffaella Beauty

## 🎯 Ce vei vedea în Google Analytics:

### Trafic & Vizitatori
- **Câți vizitatori** vin pe site zilnic/săptămânal
- **De unde vin** (Google, Facebook, direct, alte site-uri)
- **Ce pagini** vizitează cel mai mult
- **Cât timp** stau pe site
- **Dispozitive** folosite (mobile vs desktop)

### Comportament & Conversii
- **Cine apasă pe telefon** (conversii apeluri)
- **Cine face rezervări** prin Notino
- **Ce servicii** interesează cel mai mult
- **Din ce orașe** vin vizitatorii
- **Vârsta și genul** audienței

## 🔧 Setup în 5 minute:

### Pas 1: Creează cont Google Analytics
1. Mergi la https://analytics.google.com
2. Click "Start measuring"
3. Nume proprietate: "Raffaella Beauty Website"
4. Fus orar: București
5. Monedă: RON

### Pas 2: Obține Measurement ID
1. În GA4 → Admin → Data Streams
2. Click "Add stream" → Web
3. Website URL: https://raffaellabeauty.ro
4. Stream name: "Raffaella Beauty Main"
5. Copiază Measurement ID (G-XXXXXXXXXX)

### Pas 3: Activează tracking pe site
Înlocuiește în `components/Analytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ID-ul tău real
```

### Pas 4: Redeploy
```bash
npm run build
vercel --prod
```

## 📈 Dashboard-uri importante în GA4:

### 1. Realtime (Timp Real)
- Vezi vizitatori în timp real
- Ce pagini accesează acum
- De unde vin (Google, Facebook, etc.)

### 2. Acquisition (Achiziție)
- **Traffic sources**: Google, Facebook, direct
- **Campaigns**: performanța campaniilor Google Ads
- **Keywords**: ce caută oamenii

### 3. Engagement (Interacțiune)
- **Pages**: cele mai vizitate pagini
- **Events**: click-uri pe telefon, rezervări
- **Conversions**: conversii reale

### 4. Audience (Audiență)
- **Demographics**: vârstă, gen, locație
- **Interests**: interese vizitatorilor
- **Technology**: dispozitive folosite

## 🎯 Metrics importante pentru business:

### Trafic
- **Users**: vizitatori unici
- **Sessions**: sesiuni totale
- **Page views**: vizualizări pagini
- **Bounce rate**: % care pleacă imediat

### Conversii
- **Phone clicks**: click-uri pe telefon
- **Booking clicks**: click-uri pe rezervări
- **Service views**: vizualizări servicii
- **Conversion rate**: % vizitatori care convertește

### Geografie
- **București**: câți din București
- **România**: trafic din țară
- **Internațional**: trafic din străinătate

## 📱 Mobile vs Desktop
- **Mobile**: % trafic de pe telefon
- **Desktop**: % trafic de pe computer
- **Tablet**: % trafic de pe tabletă

## 🔍 Ce să urmărești zilnic:

### Dimineața (5 min)
1. Deschide GA4 → Realtime
2. Verifică traficul de ieri
3. Urmărește conversiile (apeluri/rezervări)

### Săptămânal (15 min)
1. Acquisition → Traffic sources
2. Engagement → Top pages
3. Audience → Demographics
4. Conversions → Goal completions

### Lunar (30 min)
1. Raport complet performanță
2. Analiză trends
3. Optimizări pentru luna următoare

## 🚨 Alerts importante:
- **Trafic scăzut**: dacă scade sub normal
- **Conversii zero**: dacă nu ai conversii
- **Bounce rate ridicat**: dacă oamenii pleacă repede
- **Mobile issues**: probleme pe telefon

## 📊 Rapoarte automate:
- **Email weekly**: raport săptămânal automat
- **Monthly summary**: sumar lunar
- **Conversion alerts**: notificări conversii

---

**Next**: După setup GA4, configurează Google Ads pentru campanii plătite.
