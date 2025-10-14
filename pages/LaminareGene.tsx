import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { trackPriceListView } from "../components/Analytics";
const laminareImg = "/assets/laminare-gene.jpeg";

export function LaminareGene() {
  React.useEffect(() => {
    trackPriceListView("Laminare Gene și Sprâncene");
  }, []);

  const pricingItems = [
    {
      name: "Laminare Gene",
      price: "250",
      duration: "1 oră 30 minute"
    },
    {
      name: "Laminare Sprâncene",
      price: "250",
      duration: "1 oră 30 minute"
    },
    {
      name: "Pachet Laminare Gene + Sprâncene",
      price: "400",
      duration: "1 oră 30 minute"
    },
    {
      name: "Stilizat și Vopsit Sprâncene",
      price: "120",
      duration: "1 oră"
    }
  ];

  return (
    <>
      <SEO
        title="Laminare Gene și Sprâncene - Prețuri București"
        description="Laminare gene și sprâncene profesională în București. Rezultate naturale și de durată pentru o privire expresivă. Vezi prețuri complete pentru laminare și brown lamination. Programări: 0765 315 537"
        keywords="laminare gene bucuresti, laminare sprancene bucuresti, brown lamination, lash lift bucuresti, laminare gene pret"
        canonical="/preturi/laminare-gene"
      />
      <StructuredData
        type="Service"
        service={{
          name: "Laminare Gene și Sprâncene",
          description: "Laminare profesională pentru gene și sprâncene perfect aranjate, cu rezultate naturale și de durată",
          priceRange: "130-220 RON"
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Servicii", url: "/#servicii" },
          { name: "Laminare Gene și Sprâncene", url: "/preturi/laminare-gene" }
        ]}
      />
      <ServicePricing
        serviceName="Laminare Gene & Sprâncene"
        subtitle="Definiție Perfectă"
        image={laminareImg}
        items={pricingItems}
      />
    </>
  );
}
