import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ServiceFaq } from "../components/ServiceFaq";
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
          priceRange: "120-400 RON"
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
      <ServiceFaq
        intro="Laminarea de gene și sprâncene la Raffaella Beauty Studio oferă un aspect îngrijit și natural, fără extensii, cu rezultate care durează în medie 6-8 săptămâni. O ședință durează aproximativ o oră și jumătate, la salonul de pe Strada Vaselor nr. 56, București."
        faqs={[
          {
            question: "Cât costă laminarea de gene sau sprâncene în București?",
            answer:
              "La Raffaella Beauty Studio, laminarea de gene costă 250 RON, laminarea de sprâncene 250 RON, iar pachetul combinat gene + sprâncene costă 400 RON. Stilizarea și vopsirea sprâncenelor costă 120 RON.",
          },
          {
            question: "Ce este laminarea genelor și cum funcționează?",
            answer:
              "Laminarea este un tratament care curbează, ridică și fixează genele naturale, dându-le un aspect mai lung și mai des, fără extensii. Include de obicei și vopsire, pentru un efect vizibil imediat.",
          },
          {
            question: "Cât durează efectul laminării?",
            answer:
              "Rezultatul laminării durează în medie 6-8 săptămâni, în funcție de ritmul natural de regenerare a firelor și de îngrijire. Procedura durează aproximativ 1 oră și 30 de minute.",
          },
          {
            question: "Laminare sau extensii de gene — ce aleg?",
            answer:
              "Laminarea pune în valoare genele naturale și cere întreținere minimă, fiind ideală pentru un look natural. Extensiile oferă volum și lungime suplimentare, cu întreținere la 3-4 săptămâni. În salon le oferim pe amândouă, iar specialistul te poate ghida la fața locului.",
          },
          {
            question: "Cum mă programez la laminare?",
            answer:
              "Programările se fac telefonic la 0765 315 537 sau online prin platforma Notino. Salonul este deschis de luni până vineri între 09:00 și 19:00, iar sâmbăta între 09:00 și 15:00.",
          },
        ]}
      />
    </>
  );
}
