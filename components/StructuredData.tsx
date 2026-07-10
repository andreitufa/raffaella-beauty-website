import { Helmet } from "react-helmet-async";

interface Service {
  name: string;
  description: string;
  priceRange?: string;
}

interface StructuredDataProps {
  type: "LocalBusiness" | "Service" | "BreadcrumbList";
  service?: Service;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function StructuredData({ type, service, breadcrumbs }: StructuredDataProps) {
  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://www.raffaellabeauty.ro/#organization",
    name: "Raffaella Beauty Studio",
    alternateName: "Raffaella Beauty",
    url: "https://www.raffaellabeauty.ro",
    logo: "https://www.raffaellabeauty.ro/logo.png",
    image: "https://www.raffaellabeauty.ro/og-image.jpg",
    description: "Salon de înfrumusețare premium în București. Oferim epilare definitivă cu Infinity Laser Pro, extensii de gene, laminare gene și sprâncene, tratamente faciale Oxigenera Pro și scanare ten Skin Doctor.",
    priceRange: "$$",
    telephone: "+40765315537",
    email: "raffaellabeauty@yahoo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Vaselor nr. 56 ap 2",
      addressLocality: "București",
      addressRegion: "București",
      postalCode: "020257",
      addressCountry: "RO"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.4268,
      longitude: 26.1025
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00"
      }
    ],
    sameAs: [
      "https://www.instagram.com/raffaella__beauty/",
      "https://www.facebook.com/raffaellalashstudio/",
      "https://www.tiktok.com/@raffaella__beauty"
    ],
    areaServed: {
      "@type": "City",
      name: "București"
    },
    paymentAccepted: "Cash, Card",
    currenciesAccepted: "RON",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii de înfrumusețare",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Epilare Definitivă Infinity Laser Pro",
            description: "Epilare definitivă cu tehnologie laser de ultimă generație"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Extensii de Gene",
            description: "Extensii de gene profesionale pentru o privire magnetică"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laminare Gene și Sprâncene",
            description: "Laminare profesională pentru gene și sprâncene perfecte"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tratamente Faciale Oxigenera Pro",
            description: "Tratamente faciale premium cu oxigen activ"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Scanare Ten Skin Doctor",
            description: "Analiză completă și profesională a tenului"
          }
        }
      ]
    }
  });

  const getServiceSchema = () => {
    if (!service) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.name,
      description: service.description,
      provider: {
        "@type": "BeautySalon",
        name: "Raffaella Beauty Studio",
        telephone: "+40765315537",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Vaselor nr. 56 ap 2",
          addressLocality: "București",
          addressCountry: "RO"
        }
      },
      areaServed: {
        "@type": "City",
        name: "București"
      },
      ...(service.priceRange && { 
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: service.priceRange,
            priceCurrency: "RON"
          }
        }
      })
    };
  };

  const getBreadcrumbSchema = () => {
    if (!breadcrumbs) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `https://www.raffaellabeauty.ro${crumb.url}`
      }))
    };
  };

  let schema;
  switch (type) {
    case "LocalBusiness":
      schema = getLocalBusinessSchema();
      break;
    case "Service":
      schema = getServiceSchema();
      break;
    case "BreadcrumbList":
      schema = getBreadcrumbSchema();
      break;
    default:
      schema = null;
  }

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
