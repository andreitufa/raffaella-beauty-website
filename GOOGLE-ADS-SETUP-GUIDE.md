# 🚀 Ghid Pas cu Pas - Setup Google Ads

## 📋 Pași pentru Prima Campanie Google Ads

### **Pasul 1: Creează Cont Google Ads**

1. Mergi la: https://ads.google.com
2. Click pe **"Începe acum"**
3. Conectează-te cu contul tău Google (sau creează unul nou)
4. Selectează **"România"** ca țară
5. Selectează **"RON"** ca monedă
6. Completează informațiile despre business:
   - **Nume business**: Raffaella Beauty Studio
   - **Website**: https://raffaellabeauty.ro
   - **Telefon**: +40 765 315 537
   - **Adresă**: Strada Vaselor nr. 56 ap 2, București

---

### **Pasul 2: Configurează Billing**

1. Mergi la **Settings** → **Billing & payments**
2. Click pe **"Add payment method"**
3. Adaugă cardul tău de credit/debit
4. Setează **"Payment method"** ca principal
5. **Important**: Google Ads nu va cheltui până nu activezi manual o campanie

---

### **Pasul 3: Setup Conversion Tracking**

#### **3.1. Creează Conversion Actions**

1. Mergi la **Tools & Settings** → **Conversions**
2. Click pe **"New conversion action"**
3. Selectează **"Website"**

#### **3.2. Conversia 1: Click pe Telefon**

1. **Category**: Selectează **"Phone calls"**
2. **Conversion name**: "Click Telefon"
3. **Value**: **1 RON** (sau lasă "Don't use a value")
4. **Count**: **One**
5. **Click-through window**: 30 zile
6. **Attribution model**: **Last click**
7. Click **"Create and continue"**
8. **Copiază Conversion ID și Conversion Label** (vei avea nevoie mai târziu)

#### **3.3. Conversia 2: Click pe WhatsApp**

1. **Category**: Selectează **"Website"**
2. **Conversion name**: "Click WhatsApp"
3. **Value**: **1 RON**
4. **Count**: **One**
5. **Click-through window**: 30 zile
6. **Attribution model**: **Last click**
7. Click **"Create and continue"**
8. **Copiază Conversion ID și Conversion Label**

#### **3.4. Conversia 3: Click pe Notino Booking**

1. **Category**: Selectează **"Website"**
2. **Conversion name**: "Booking Notino"
3. **Value**: **5 RON**
4. **Count**: **One**
5. **Click-through window**: 30 zile
6. **Attribution model**: **Last click**
7. Click **"Create and continue"**
8. **Copiază Conversion ID și Conversion Label**

#### **3.5. Instalează Google Ads Tag**

1. După ce ai creat conversiile, Google îți va da un **Global Site Tag**
2. **Copiază codul** (va arăta ceva de genul):
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>
```

3. **Actualizează `components/GoogleAds.tsx`** cu ID-ul tău:
   - Deschide `components/GoogleAds.tsx`
   - Înlocuiește `GOOGLE_ADS_CONVERSION_ID = null` cu ID-ul tău (ex: `"AW-123456789"`)
   - Înlocuiește `GOOGLE_ADS_PHONE_CONVERSION_LABEL = null` cu label-ul pentru telefon
   - Înlocuiește `GOOGLE_ADS_BOOKING_CONVERSION_LABEL = null` cu label-ul pentru booking

**Exemplu**:
```typescript
const GOOGLE_ADS_CONVERSION_ID = "AW-123456789";
const GOOGLE_ADS_PHONE_CONVERSION_LABEL = "abc123";
const GOOGLE_ADS_BOOKING_CONVERSION_LABEL = "def456";
```

4. **Deploy changes**:
   - `git add .`
   - `git commit -m "Add Google Ads conversion tracking"`
   - `git push origin main`

---

### **Pasul 4: Creează Prima Campanie**

#### **4.1. Selectează Tipul de Campanie**

1. Click pe **"Campaigns"** în meniul din stânga
2. Click pe **"+"** (New campaign)
3. Selectează **"Search"** (Căutare)
4. Click **"Continue"**

#### **4.2. Configurează Campania**

**Campaign settings**:
- **Campaign name**: "Raffaella Beauty - Epilare Definitivă"
- **Campaign type**: Search
- **Bidding**: Selectează **"Maximize conversions"** (sau "Target CPA" cu 100 RON)
- **Budget**: **50 RON/zi** (pentru început)
- **Start date**: Astăzi
- **End date**: Lasă necompletat (campanie continuă)

**Networks**:
- ✅ **Google Search** (bifează)
- ❌ **Search partners** (debifează inițial - poți activa mai târziu)
- ❌ **Display Network** (debifează)

**Locations**:
- Click pe **"Enter another location"**
- Caută **"București"**
- Selectează **"București, România"**
- Click **"Advanced search"**
- Selectează **"Radius around location"**
- Setează **15 km** în jurul Bucureștiului
- Click **"Done"**

**Languages**:
- Selectează **"Română"**

**Audience segments** (Opțional - poți adăuga mai târziu):
- Lasă gol pentru început

#### **4.3. Creează Ad Group**

**Ad group name**: "Epilare Definitivă - Keywords"

**Keywords**:
Adaugă următoarele keywords (câte unul pe linie):
```
epilare definitiva bucuresti
"epilare definitiva bucuresti"
[epilare definitiva bucuresti]
epilare laser bucuresti
"epilare laser bucuresti"
laser hair removal bucuresti
epilare definitiva pret bucuresti
"epilare definitiva pret bucuresti"
epilare definitiva sector 1
epilare definitiva fata bucuresti
epilare definitiva axila bucuresti
epilare definitiva picioare bucuresti
infinity laser pro bucuresti
```

**Match types**:
- **Broad match** (fără ghilimele): `epilare definitiva bucuresti`
- **Phrase match** (cu ghilimele): `"epilare definitiva bucuresti"`
- **Exact match** (cu paranteze pătrate): `[epilare definitiva bucuresti]`

**Recomandare**: Începe cu **Phrase match** și **Exact match** pentru control mai bun.

**Negative keywords** (Opțional):
```
gratuit
gratis
ieftin
tutorial
acasa
```

#### **4.4. Creează Anunțuri**

**Anunț 1**:
- **Headline 1**: "Epilare Definitivă București"
- **Headline 2**: "Infinity Laser Pro - Rezultate Sigure"
- **Headline 3**: "Programează-te Acum"
- **Description 1**: "Tehnologie laser de ultimă generație. Rezultate permanente pe toate tipurile de ten. Consultație gratuită. Programări: 0765 315 537"
- **Description 2**: "Epilare definitivă profesională în București. Tehnologie Infinity Laser Pro. Prețuri de la 80 RON. Programează-te online sau telefonic."
- **Final URL**: `https://raffaellabeauty.ro/preturi/epilare-definitiva`
- **Path 1**: "Preturi"
- **Path 2**: "Programare"

**Anunț 2** (Varianta):
- **Headline 1**: "Epilare Laser București"
- **Headline 2**: "Rezultate Permanente - Tehnologie Avansată"
- **Headline 3**: "Consultație Gratuită"
- **Description 1**: "Epilare definitivă cu Infinity Laser Pro. Rezultate sigure pe toate tipurile de ten. Prețuri transparente. Programări: 0765 315 537"
- **Description 2**: "Salon epilare definitivă București. Tehnologie de ultimă generație. Rezultate de durată. Programează-te acum pentru o consultație gratuită."
- **Final URL**: `https://raffaellabeauty.ro/preturi/epilare-definitiva`
- **Path 1**: "Preturi"
- **Path 2**: "Programare"

**Creează 3-4 anunțuri** cu variante diferite pentru testare.

#### **4.5. Selectează Conversiile**

1. În secțiunea **"Conversions"**, selectează:
   - ✅ "Click Telefon"
   - ✅ "Click WhatsApp"
   - ✅ "Booking Notino"

2. Click **"Create campaign"**

---

### **Pasul 5: Review și Activare**

1. **Review campaign settings**:
   - Verifică că toate setările sunt corecte
   - Verifică keywords-urile
   - Verifică anunțurile
   - Verifică landing page-ul

2. **Activează campania**:
   - Click pe **"Enable"** sau **"Save and continue"**
   - Campania va începe să ruleze imediat

---

### **Pasul 6: Monitoring (Primele 3 Zile)**

#### **Zilnic, verifică**:
1. **Impressions** - Câte persoane văd anunțurile
2. **Clicks** - Câte click-uri primești
3. **CTR** - Click-Through Rate (target: >3%)
4. **CPC** - Cost per Click (target: 2-5 RON)
5. **Conversions** - Câte conversii ai
6. **Cost per Conversion** - Target: 50-150 RON

#### **După 3 zile**:
1. **Review search terms report**:
   - Mergi la **Keywords** → **Search terms**
   - Vezi ce căutări au generat click-uri
   - Adaugă keywords noi relevante
   - Adaugă negative keywords pentru căutări irelevante

2. **Optimizează anunțurile**:
   - Pause anunțurile cu CTR <1%
   - Creează variante noi pentru anunțurile performante

3. **Ajustează bids**:
   - Mărește bids pentru keywords performante
   - Scade bids pentru keywords cu cost per conversion ridicat

---

## 🎯 Checklist Final

### **Înainte de a Porni Campania**
- [ ] Cont Google Ads creat
- [ ] Billing configurat
- [ ] Conversion tracking setup (3 conversii)
- [ ] Google Ads tag adăugat în `components/GoogleAds.tsx`
- [ ] Changes deploy-ate pe site
- [ ] Prima campanie creată
- [ ] 15-20 keywords adăugate
- [ ] 3-4 anunțuri create
- [ ] Landing page verificat (`/preturi/epilare-definitiva`)
- [ ] Budget setat (50 RON/zi)
- [ ] Location targeting setat (București + 15km)
- [ ] Campania activată

### **După Primele 3 Zile**
- [ ] Review search terms report
- [ ] Adăugat keywords noi relevante
- [ ] Adăugat negative keywords
- [ ] Optimizat anunțurile (pause low performers
- [ ] Ajustat bids pentru keywords performante
- [ ] Review conversii și cost per conversion

---

## 📞 Suport

Dacă ai întrebări sau probleme:
1. **Google Ads Help**: https://support.google.com/google-ads
2. **Phone Support**: 0800 080 080 (România)
3. **Live Chat**: Disponibil în contul Google Ads

---

## 🚀 Următorii Pași

După ce prima campanie rulează bine (după 1-2 săptămâni):
1. **Adaugă Ad Groups noi** pentru celelalte servicii (Extensii Gene, Tratamente Faciale, etc.)
2. **Creează Performance Max campaign** pentru acoperire maximă
3. **Scale up budget** pentru campaniile performante
4. **Testează ad copy-uri noi** pentru optimizare continuă

**Succes cu prima ta campanie! 🎉**

