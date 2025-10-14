import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { trackPriceListView } from "../components/Analytics";
const tratamenteFacialeImg = "/assets/tratamente-faciale.jpeg";

export function TratamenteFaciale() {
  React.useEffect(() => {
    trackPriceListView("Tratamente Faciale");
  }, []);

  const pricingItems = [
    {
      name: "Tratament Oxigenera Pro Basic",
      price: "300",
      duration: "90 minute"
    },
    {
      name: "Tratament Oxigenera Pro Advance",
      price: "350",
      duration: "90 minute"
    },
    {
      name: "Tratament Oxigenera Pro Cocktail",
      price: "400",
      duration: "90 minute"
    },
    {
      name: "Tratament Oxigenera Pro Before Sun",
      price: "250",
      duration: "60 minute"
    },
    {
      name: "Tratament Oxigenera Pro After Sun",
      price: "250",
      duration: "60 minute"
    },
    {
      name: "Pachet Oxigenera Pro After & Before Sun",
      price: "400",
      duration: "120 minute"
    }
  ];

  return (
    <>
      <SEO
        title="Tratamente Faciale Oxigenera Pro - Prețuri București"
        description="Tratamente faciale premium cu Oxigenera Pro în București. Oxigenare, hidratare profundă, anti-aging cu oxigen activ. Ten luminos și revigorat. Vezi prețuri complete. Programări: 0765 315 537"
        keywords="tratamente faciale bucuresti, oxigenera pro, tratament facial oxigen, hidratare faciala, anti-aging bucuresti, tratament ten bucuresti"
        canonical="/preturi/tratamente-faciale"
      />
      <StructuredData
        type="Service"
        service={{
          name: "Tratamente Faciale Oxigenera Pro",
          description: "Tratamente faciale premium cu oxigen activ pentru luminozitate, fermitate și hidratare perfectă",
          priceRange: "250-350 RON"
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Servicii", url: "/#servicii" },
          { name: "Tratamente Faciale", url: "/preturi/tratamente-faciale" }
        ]}
      />
      <ServicePricing
        serviceName="Tratamente Faciale"
        subtitle="Oxigenera Pro"
        image={tratamenteFacialeImg}
        items={pricingItems}
      />
    </>
  );
}
