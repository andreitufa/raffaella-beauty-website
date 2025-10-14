import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
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
          priceRange: "150-400 RON"
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
    </>
  );
}
