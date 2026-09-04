import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ServiceFaq } from "../components/ServiceFaq";
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
      <ServiceFaq
        intro="Scanarea tenului la Raffaella Beauty Studio se face cu aparatul Skin Doctor, care analizează în profunzime starea pielii: hidratare, sebum, pori, riduri și pete pigmentare. Ședința durează 30 de minute și costă 100 RON, la salonul de pe Strada Locotenent Sachelarie Visarion nr. 59, Sector 2, București."
        faqs={[
          {
            question: "Cât costă o scanare a tenului în București?",
            answer:
              "Scanarea facială Skin Doctor costă 100 RON și durează 30 de minute. Este gratuită dacă achiziționezi un tratament facial sau produse cosmetice Bruno Vassari în valoare de minimum 200 RON.",
          },
          {
            question: "Ce arată scanarea tenului cu Skin Doctor?",
            answer:
              "Analiza oferă o imagine detaliată a stării pielii: nivel de hidratare, exces de sebum, dimensiunea porilor, riduri fine, pete pigmentare și alte particularități invizibile cu ochiul liber. Pe baza raportului primești recomandări personalizate de tratament și îngrijire.",
          },
          {
            question: "De ce e utilă o scanare înainte de un tratament facial?",
            answer:
              "Scanarea identifică exact nevoile tenului tău, astfel încât tratamentul ales (de exemplu Oxigenera Pro) să fie personalizat și eficient, în loc de o abordare generală. Este pasul recomandat înaintea oricărei cure de tratamente.",
          },
          {
            question: "Cum mă programez la scanarea tenului?",
            answer:
              "Programările se fac telefonic la 0765 315 537 sau online prin platforma Notino. Salonul este deschis de luni până vineri între 09:00 și 19:00, iar sâmbăta între 09:00 și 15:00.",
          },
        ]}
      />
    </>
  );
}
