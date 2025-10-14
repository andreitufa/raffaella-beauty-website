# Google Ads Monitoring - Raffaella Beauty

## 🎯 Ce vei vedea în Google Ads:

### Campanii & Performanță
- **Câți bani** cheltui zilnic
- **Câte click-uri** primești
- **Câte conversii** (apeluri/rezervări)
- **Cost per conversie** (CPC)
- **ROI**: return on investment

### Audiență & Targeting
- **De unde vin** click-urile (București, România)
- **Ce dispozitive** folosesc (mobile vs desktop)
- **Ce cuvinte cheie** generează conversii
- **Ce ore** sunt cele mai productive

## 🔧 Setup în 10 minute:

### Pas 1: Creează cont Google Ads
1. Mergi la https://ads.google.com
2. Click "Start now"
3. Alege "Get more calls" sau "Get more website sales"
4. Introdu site-ul: https://raffaellabeauty.ro

### Pas 2: Configurează conversiile
1. Tools → Conversions
2. Click "+" → Website
3. Nume: "Phone Calls"
4. Value: 1 RON
5. Copiază Conversion ID și Label

### Pas 3: Activează tracking pe site
Înlocuiește în `components/GoogleAds.tsx`:
```typescript
const GOOGLE_ADS_CONVERSION_ID = "AW-123456789"; // ID-ul tău
const GOOGLE_ADS_PHONE_CONVERSION_LABEL = "abc123"; // Label conversie
```

## 📊 Dashboard-uri importante:

### 1. Campaigns (Campanii)
- **Spend**: bani cheltuiți
- **Clicks**: click-uri primite
- **Impressions**: de câte ori ai apărut
- **CTR**: click-through rate
- **CPC**: cost per click

### 2. Keywords (Cuvinte cheie)
- **Top performers**: ce keywords convertește
- **Search terms**: ce caută oamenii
- **Quality Score**: calitatea keywords
- **Bid adjustments**: ajustări oferte

### 3. Conversions (Conversii)
- **Phone calls**: apeluri generate
- **Bookings**: rezervări făcute
- **Cost per conversion**: cost per conversie
- **Conversion rate**: rata de conversie

### 4. Audience (Audiență)
- **Demographics**: vârstă, gen
- **Interests**: interese
- **Devices**: mobile vs desktop
- **Locations**: București vs alte orașe

## 🎯 Metrics importante:

### Performance
- **Conversions**: conversii reale
- **Cost per conversion**: eficiența
- **ROAS**: return on ad spend
- **Quality Score**: calitatea campaniilor

### Budget
- **Daily budget**: buget zilnic
- **Monthly spend**: cheltuieli lunare
- **Bid strategy**: strategia de ofertă
- **Budget optimization**: optimizarea bugetului

## 📱 Mobile vs Desktop
- **Mobile performance**: cum performează pe telefon
- **Desktop performance**: cum performează pe computer
- **Cross-device**: conversii cross-device
- **Mobile bid adjustments**: ajustări mobile

## 🔍 Ce să urmărești zilnic:

### Dimineața (5 min)
1. Deschide Google Ads
2. Verifică cheltuielile de ieri
3. Urmărește conversiile
4. Verifică Quality Score

### Săptămânal (20 min)
1. Analizează top keywords
2. Optimizează bids
3. Adaugă negative keywords
4. Verifică search terms

### Lunar (45 min)
1. Raport complet performanță
2. Optimizări campanii
3. Testează noi keywords
4. Ajustează bugetul

## 🚨 Alerts importante:
- **Budget exhausted**: buget epuizat
- **Low Quality Score**: calitate scăzută
- **High CPC**: cost per click ridicat
- **No conversions**: fără conversii

## 📊 Rapoarte automate:
- **Daily summary**: sumar zilnic
- **Weekly performance**: performanță săptămânală
- **Monthly ROI**: return on investment lunar

## 💡 Tips pentru optimizare:

### Keywords
- **Exact match**: pentru conversii precise
- **Phrase match**: pentru mai mult trafic
- **Broad match**: pentru descoperire
- **Negative keywords**: pentru a evita click-urile irelevante

### Bidding
- **Target CPA**: pentru cost per conversie fix
- **Maximize conversions**: pentru maxim conversii
- **Manual CPC**: pentru control total
- **Enhanced CPC**: pentru optimizare automată

### Ad Copy
- **Headlines**: titluri atractive
- **Descriptions**: descrieri convingătoare
- **Call-to-action**: apeluri la acțiune clare
- **Extensions**: extensii (telefon, adresă, etc.)

---

**Benefit**: Vei vedea exact ROI-ul campaniilor și cum să optimizezi pentru mai multe conversii.
