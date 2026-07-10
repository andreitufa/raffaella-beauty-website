import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ServiceFaq } from "../components/ServiceFaq";
import { trackPriceListView } from "../components/Analytics";
const extensiiGeneImg = "/assets/extensii-gene.jpeg";

export function ExtensiiGene() {
  React.useEffect(() => {
    trackPriceListView("Extensii de Gene");
  }, []);

  const pricingItems = [
    {
      name: "Aplicare 1D-2D",
      price: "290",
      duration: "2 ore"
    },
    {
      name: "Întreținere 1D-2D",
      price: "240",
      duration: "2 ore"
    },
    {
      name: "Aplicare 2D-3D",
      price: "320",
      duration: "2 ore"
    },
    {
      name: "Întreținere 2D-3D",
      price: "270",
      duration: "2 ore"
    },
    {
      name: "Aplicare 3D-4D",
      price: "350",
      duration: "2 ore"
    },
    {
      name: "Întreținere 3D-4D",
      price: "300",
      duration: "2 ore"
    },
    {
      name: "Aplicare 6D",
      price: "380",
      duration: "2 ore"
    },
    {
      name: "Întreținere 6D",
      price: "330",
      duration: "2 ore"
    },
    {
      name: "Aplicare WET LOOK",
      price: "350",
      duration: "2 ore"
    },
    {
      name: "Întreținere WET LOOK",
      price: "300",
      duration: "2 ore"
    },
    {
      name: "Aplicare SOLISSE",
      price: "400",
      duration: "2 ore"
    },
    {
      name: "Întreținere SOLISSE",
      price: "350",
      duration: "2 ore"
    },
    {
      name: "Efecte Speciale",
      price: "+50",
      duration: "La aplicare sau întreținere",
      description: "Se adaugă la prețul aplicării sau întreținerii"
    },
    {
      name: "Îndepărtare Extensii",
      price: "50",
      duration: "30 minute"
    },
    {
      name: "Îndepărtare Extensii Cazuri Speciale",
      price: "100",
      duration: "1 oră"
    }
  ];

  return (
    <>
      <SEO
        title="Extensii de Gene - Prețuri București | Raffaella Beauty"
        description="Extensii de gene profesionale în București. Tehnici avansate pentru o privire magnetică și naturală. Volume Russian, Mega Volume, Hollywood. Vezi prețuri complete. Programări: 0765 315 537"
        keywords="extensii gene bucuresti, extensii gene pret, volume russian, mega volume, hollywood lashes, gene bucuresti"
        canonical="/preturi/extensii-gene"
      />
      <StructuredData
        type="Service"
        service={{
          name: "Extensii de Gene",
          description: "Extensii de gene profesionale realizate cu tehnici avansate și materiale premium pentru o privire magnetică",
          priceRange: "50-400 RON"
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Servicii", url: "/#servicii" },
          { name: "Extensii de Gene", url: "/preturi/extensii-gene" }
        ]}
      />
      <ServicePricing
        serviceName="Extensii de Gene"
        subtitle="Privire Magnetică"
        image={extensiiGeneImg}
        items={pricingItems}
      />
      <ServiceFaq
        intro="Extensiile de gene la Raffaella Beauty Studio sunt aplicate fir cu fir, cu materiale premium, în tehnici de la efectul natural 1D-2D până la volum intens 6D, Wet Look sau Solisse. Salonul se află pe Strada Vaselor nr. 56, București, iar aplicarea durează aproximativ 2 ore."
        faqs={[
          {
            question: "Cât costă extensiile de gene în București, la Raffaella Beauty Studio?",
            answer:
              "Aplicarea pornește de la 290 RON pentru efectul natural 1D-2D și ajunge la 400 RON pentru tehnica Solisse. Volumele intermediare costă 320 RON (2D-3D), 350 RON (3D-4D sau Wet Look) și 380 RON (6D). Întreținerea este cu aproximativ 50 RON mai ieftină decât aplicarea.",
          },
          {
            question: "Cât durează aplicarea extensiilor de gene?",
            answer:
              "O aplicare completă durează aproximativ 2 ore, indiferent de tehnică. Îndepărtarea extensiilor durează 30 de minute și costă 50 RON.",
          },
          {
            question: "La cât timp se face întreținerea extensiilor de gene?",
            answer:
              "Întreținerea se recomandă la 3-4 săptămâni de la aplicare, în funcție de ciclul natural de creștere a genelor și de modul de îngrijire. La întreținere se completează genele căzute și se reface uniformitatea aspectului.",
          },
          {
            question: "Ce tehnici de extensii gene sunt disponibile?",
            answer:
              "Oferim toate tehnicile populare: 1D-2D pentru un aspect natural, 2D-3D și 3D-4D pentru volum mediu, 6D pentru volum intens, plus stilurile Wet Look și Solisse. Efectele speciale (de exemplu colorate) se pot adăuga cu 50 RON.",
          },
          {
            question: "Cum mă programez pentru extensii de gene?",
            answer:
              "Programările se fac telefonic la 0765 315 537 sau online prin platforma Notino. Salonul este deschis de luni până vineri între 09:00 și 19:00, iar sâmbăta între 09:00 și 15:00.",
          },
        ]}
      />
    </>
  );
}
