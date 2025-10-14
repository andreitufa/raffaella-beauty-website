# 📁 Fișiere Necesare în Folderul Public/Root

## 1. robots.txt

Creează un fișier `robots.txt` în folderul public/root al website-ului cu următorul conținut:

```txt
# Raffaella Beauty Studio - robots.txt

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# Sitemap
Sitemap: https://raffaellabeauty.ro/sitemap.xml

# Crawl Delay (optional - doar dacă server-ul este încărcat)
# Crawl-delay: 10
```

### Ce face:
- Permite tuturor roboților (Google, Bing, etc.) să indexeze site-ul
- Blochează accesul la foldere private (dacă există)
- Indică locația sitemap-ului

---

## 2. sitemap.xml

Creează un fișier `sitemap.xml` în folderul public/root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage - Cea mai importantă -->
  <url>
    <loc>https://raffaellabeauty.ro/</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Servicii - Priorități mari -->
  <url>
    <loc>https://raffaellabeauty.ro/preturi/epilare-definitiva</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/preturi/extensii-gene</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/preturi/laminare-gene</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/preturi/tratamente-faciale</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/preturi/scanare-ten</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Contact -->
  <url>
    <loc>https://raffaellabeauty.ro/contact</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Pagini Legale - Priorități mici, noindex în meta tags -->
  <url>
    <loc>https://raffaellabeauty.ro/termeni-conditii</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/politica-confidentialitate</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/anpc</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://raffaellabeauty.ro/solutionare-litigii</loc>
    <lastmod>2025-10-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
```

### Ce face:
- Listează toate paginile importante pentru Google
- Setează priorități (homepage și servicii = prioritate mare)
- Indică frecvența de schimbare (weekly, monthly, yearly)

### Când să actualizezi `lastmod`:
- Homepage: la fiecare actualizare majoră
- Servicii: când schimbi prețurile
- Legal: când actualizezi termenii

---

## 3. favicon.ico & app icons

### Favicon (16x16, 32x32, 48x48 px)
Creează `favicon.ico` în folderul public.

### Apple Touch Icon (180x180 px)
Creează `apple-touch-icon.png` în folderul public.

### Android Icons
Creează `icon-192.png` (192x192) și `icon-512.png` (512x512).

### Cum să le creezi:
1. Folosește logo-ul Raffaella Beauty
2. Tool online: https://realfavicongenerator.net
3. Upload logo → Download pack → Pune fișierele în public/

---

## 4. manifest.json (PWA - Optional dar Recomandat)

Creează `manifest.json` în folderul public:

```json
{
  "name": "Raffaella Beauty Studio",
  "short_name": "Raffaella Beauty",
  "description": "Salon de înfrumusețare premium în București",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#C9A961",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Ce face:
- Permite instalarea site-ului ca "app" pe mobil
- Îmbunătățește experiența utilizatorului
- Bonus SEO pentru mobile

---

## 5. og-image.jpg (Social Media Preview)

### Specificații:
- **Dimensiune:** 1200x630 px
- **Format:** JPG (max 8MB) sau PNG
- **Nume:** `og-image.jpg`
- **Locație:** Public/root

### Conținut:
- Logo Raffaella Beauty (centru sus)
- Text principal: "Salon Premium de Înfrumusețare"
- Subtext: "București | Epilare • Gene • Tratamente Faciale"
- Background elegant (alb/auriu)
- Info contact: 0765 315 537

### Creează aici:
- Canva: Template "Facebook Post" 1200x630
- Photoshop: 1200x630 px, 72 DPI

---

## 6. .htaccess (Dacă folosești Apache server)

Creează `.htaccess` pentru redirects și securitate:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force WWW sau non-WWW (alege unul)
# Pentru non-WWW (raffaellabeauty.ro):
RewriteCond %{HTTP_HOST} ^www\.raffaellabeauty\.ro [NC]
RewriteRule ^(.*)$ https://raffaellabeauty.ro/$1 [L,R=301]

# Sau pentru WWW (www.raffaellabeauty.ro):
# RewriteCond %{HTTP_HOST} ^raffaellabeauty\.ro [NC]
# RewriteRule ^(.*)$ https://www.raffaellabeauty.ro/$1 [L,R=301]

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compress Text Files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## 📋 Checklist Fișiere Public/Root

- [ ] `robots.txt` - Pentru SEO și crawlere
- [ ] `sitemap.xml` - Pentru Google Search Console
- [ ] `favicon.ico` - Icon în tab browser
- [ ] `apple-touch-icon.png` - Icon pentru iOS
- [ ] `icon-192.png` & `icon-512.png` - Icons Android
- [ ] `manifest.json` - PWA support
- [ ] `og-image.jpg` - Social media preview
- [ ] `.htaccess` - Redirects și securitate (dacă Apache)

---

## 🔧 Verificare După Upload

### 1. Robots.txt
Vizitează: `https://raffaellabeauty.ro/robots.txt`
Ar trebui să vezi conținutul fișierului.

### 2. Sitemap.xml
Vizitează: `https://raffaellabeauty.ro/sitemap.xml`
Ar trebui să vezi lista URL-urilor în format XML.

### 3. Favicon
Deschide site-ul → verifică icon în tab-ul browser-ului.

### 4. OG Image
Folosește: https://developers.facebook.com/tools/debug/
Introdu URL-ul → Verifică preview image.

---

## 🎯 După Upload - Next Steps

1. **Trimite Sitemap în Google Search Console:**
   - Intră pe search.google.com/search-console
   - Sitemaps → Add new sitemap: `sitemap.xml`
   - Submit

2. **Verifică Indexarea:**
   - Google: `site:raffaellabeauty.ro`
   - Ar trebui să apară toate paginile importante

3. **Testează Mobile:**
   - Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
   - Introdu URL-ul → Verifică că e mobile-friendly

---

**✅ Odată ce toate aceste fișiere sunt create și uploadate, SEO-ul tău tehnic este 100% complet!**
