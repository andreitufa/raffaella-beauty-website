import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { trackPriceListView } from "../components/Analytics";
const scanareTenImg = "/assets/scanare-ten.jpeg";

export function ScanareTen() {
  React.useEffect(() => {
    trackPriceListView("Scanare Ten");
  }, []);

  const pricingItems = [
    {
      name: "Scanare Facială Skin Doctor",
      price: "100",
      duration: "30 minute",
      description: "Analiză completă și profesională a tenului"
    },
    {
      name: "Scanare Facială GRATUITĂ",
      price: "0",
      duration: "30 minute",
      description: "La achiziționarea unui tratament facial sau a produselor cosmetice Bruno Vassari în valoare de 200 RON"
    }
  ];

  return (
    <>
      <SEO
        title="Scanare Ten Skin Doctor - Analiză Completă București"
        description="Scanare facială profesională cu Skin Doctor în București. Analiză completă a tenului cu raport detaliat. Gratuită la achiziție tratament sau produse Bruno Vassari. Programări: 0765 315 537"
        keywords="scanare ten bucuresti, skin doctor, analiza tenului bucuresti, diagnostic ten, skin scanner bucuresti"
        canonical="/preturi/scanare-ten"
      />
      <StructuredData
        type="Service"
        service={{
          name: "Scanare Ten Skin Doctor",
          description: "Analiză completă și profesională a tenului cu tehnologie Skin Doctor pentru diagnosticare precisă",
          priceRange: "0-100 RON"
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Servicii", url: "/#servicii" },
          { name: "Scanare Ten", url: "/preturi/scanare-ten" }
        ]}
      />
      <ServicePricing
        serviceName="Scanare Ten"
        subtitle="Skin Doctor"
        image={scanareTenImg}
        items={pricingItems}
        imageContain={true}
      />
    </>
  );
}
