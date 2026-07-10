import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://www.raffaellabeauty.ro/assets/logo-raffaella.png",
  noindex = false,
}: SEOProps) {
  const siteName = "Raffaella Beauty Studio";
  // evită dublarea brandului în titlu (ex. „... | Raffaella Beauty | Raffaella Beauty Studio")
  const fullTitle = title.includes("Raffaella Beauty") ? title : `${title} | ${siteName}`;
  // domeniul canonic este www (apex-ul redirecționează 307 către www)
  const siteUrl = "https://www.raffaellabeauty.ro";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="author" content="Raffaella Beauty Studio" />
      <meta name="geo.region" content="RO-B" />
      <meta name="geo.placename" content="București" />
      <meta name="geo.position" content="44.4268;26.1025" />
      <meta name="ICBM" content="44.4268, 26.1025" />
      
      {/* Business Information */}
      <meta name="business.contact_data.street_address" content="Strada Vaselor nr. 56 ap 2" />
      <meta name="business.contact_data.locality" content="București" />
      <meta name="business.contact_data.region" content="București" />
      <meta name="business.contact_data.postal_code" content="020257" />
      <meta name="business.contact_data.country_name" content="România" />
      <meta name="business.contact_data.phone_number" content="+40765315537" />
      <meta name="business.contact_data.email" content="raffaellabeauty@yahoo.com" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
}
