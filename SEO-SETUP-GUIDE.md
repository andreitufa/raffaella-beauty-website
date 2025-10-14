# SEO & Google Ads Setup Guide - Raffaella Beauty

## 🎯 Optimizări SEO Implementate

### 1. Meta Tags & Structured Data
- ✅ Title tags optimizate pentru fiecare pagină
- ✅ Meta descriptions cu cuvinte cheie relevante
- ✅ Open Graph tags pentru social media
- ✅ Twitter Card tags
- ✅ Schema.org structured data (LocalBusiness, Service, BreadcrumbList)
- ✅ Business contact information în meta tags

### 2. Performance & Technical SEO
- ✅ Robots.txt cu sitemap
- ✅ Sitemap.xml cu toate paginile importante
- ✅ Manifest.json pentru PWA
- ✅ Preconnect/DNS prefetch pentru performance
- ✅ Mobile optimization meta tags
- ✅ Canonical URLs

### 3. Google Ads Integration
- ✅ Google Ads conversion tracking setup
- ✅ Phone call conversion tracking
- ✅ Booking conversion tracking
- ✅ Enhanced conversions cu customer data

## 🔧 Setup Required - Google Analytics & Ads

### Google Analytics 4
1. Creează cont Google Analytics 4
2. Obține Measurement ID (format: G-XXXXXXXXXX)
3. Înlocuiește în `components/Analytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Înlocuiește cu ID-ul tău
```

### Google Ads
1. Creează cont Google Ads
2. Obține Conversion ID (format: AW-123456789)
3. Creează conversii pentru:
   - Apeluri telefonice
   - Rezervări online
4. Înlocuiește în `components/GoogleAds.tsx`:
```typescript
const GOOGLE_ADS_CONVERSION_ID = "AW-123456789"; // Înlocuiește cu ID-ul tău
const GOOGLE_ADS_PHONE_CONVERSION_LABEL = "abc123"; // Label conversie apeluri
const GOOGLE_ADS_BOOKING_CONVERSION_LABEL = "def456"; // Label conversie rezervări
```

### Facebook Pixel (Optional)
1. Creează Facebook Business Manager
2. Obține Pixel ID
3. Înlocuiește în `components/Analytics.tsx`:
```typescript
const FB_PIXEL_ID = "1234567890123456"; // Înlocuiește cu ID-ul tău
```

## 📊 Conversion Tracking Events

### Automatice (implementate)
- ✅ Click pe telefon → `trackPhoneCallConversion()`
- ✅ Click pe "Programează-te cu Notino" → `trackBookingConversion()`
- ✅ Vizualizare pagini servicii → `trackServiceView()`
- ✅ Vizualizare liste prețuri → `trackPriceListView()`

### Manuale (dacă e nevoie)
```typescript
import { trackGoogleAdsConversion } from './components/GoogleAds';

// Conversie personalizată
trackGoogleAdsConversion('your-label', 100, 'RON');
```

## 🎯 Keywords Target pentru Google Ads

### Primary Keywords
- salon infrumusetare bucuresti
- epilare definitiva bucuresti
- extensii gene bucuresti
- laminare gene bucuresti
- tratamente faciale bucuresti

### Long-tail Keywords
- salon infrumusetare premium bucuresti
- epilare definitiva laser bucuresti
- extensii gene profesionale bucuresti
- laminare gene si sprancene bucuresti
- tratamente faciale oxigenera pro bucuresti

### Local Keywords
- salon beauty sector 2 bucuresti
- epilare definitiva zona pipera
- extensii gene centru bucuresti
- salon infrumusetare aproape de mine

## 📱 Landing Pages Optimizate

### Homepage
- Title: "Salon Înfrumusețare Premium București - Raffaella Beauty Studio"
- Focus: servicii principale, localizare, contact

### Service Pages
- Epilare Definitivă: "Epilare Definitivă Infinity Laser Pro - Prețuri București"
- Extensii Gene: "Extensii de Gene Profesionale - Prețuri București"
- Tratamente Faciale: "Tratamente Faciale Oxigenera Pro - Prețuri București"

## 🚀 Next Steps

1. **Conectează domeniul** `raffaellabeauty.ro` la Vercel
2. **Configurează Google Analytics** cu ID-ul real
3. **Configurează Google Ads** cu conversion tracking
4. **Testează conversiile** pe site-ul live
5. **Lansează campaniile** Google Ads cu keywords target

## 📈 Performance Monitoring

### Metrics importante
- Conversion Rate (apeluri + rezervări)
- Cost per Conversion
- Click-through Rate (CTR)
- Quality Score
- Local Search Rankings

### Tools recomandate
- Google Analytics 4
- Google Search Console
- Google Ads Dashboard
- Google My Business (pentru local SEO)

---

**Status**: ✅ SEO optimizat, 🔧 Setup tracking required
**Ready for**: Google Ads campaigns, Local SEO, Performance monitoring