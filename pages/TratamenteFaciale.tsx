import React from "react";
import { ServicePricing } from "../components/ServicePricing";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ServiceFaq } from "../components/ServiceFaq";
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
          priceRange: "250-400 RON"
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
      <ServiceFaq
        intro="Tratamentele faciale la Raffaella Beauty Studio se realizează cu aparatul Oxigenera Pro, care oxigenează, hidratează și revitalizează tenul. O ședință durează 60-90 de minute, iar prețurile sunt între 250 și 400 RON, la salonul de pe Strada Vaselor nr. 56, București."
        faqs={[
          {
            question: "Cât costă un tratament facial la Raffaella Beauty Studio?",
            answer:
              "Tratamentul Oxigenera Pro Basic costă 300 RON, varianta Advance 350 RON, iar Cocktail 400 RON — toate cu durata de 90 de minute. Tratamentele Before Sun și After Sun costă 250 RON fiecare (60 de minute), iar pachetul care le combină pe amândouă costă 400 RON.",
          },
          {
            question: "Ce este tratamentul facial Oxigenera Pro?",
            answer:
              "Oxigenera Pro este un tratament facial cu oxigen activ care hidratează în profunzime, îmbunătățește luminozitatea și fermitatea pielii și susține regenerarea tenului, fără ace și fără durere. Este potrivit inclusiv pentru tenul sensibil.",
          },
          {
            question: "Cât durează un tratament facial și cât de des se recomandă?",
            answer:
              "O ședință durează între 60 și 90 de minute, în funcție de tratamentul ales. Pentru rezultate vizibile și de durată se recomandă de obicei o cură de mai multe ședințe, stabilită împreună cu specialistul după evaluarea tenului.",
          },
          {
            question: "Ce tratament facial e potrivit înainte sau după expunerea la soare?",
            answer:
              "Tratamentul Before Sun pregătește pielea înaintea expunerii la soare, iar After Sun calmează și rehidratează tenul după plajă. Fiecare costă 250 RON, iar pachetul combinat costă 400 RON.",
          },
          {
            question: "Cum mă programez la un tratament facial?",
            answer:
              "Programările se fac telefonic la 0765 315 537 sau online prin platforma Notino. Salonul este deschis de luni până vineri între 09:00 și 19:00, iar sâmbăta între 09:00 și 15:00.",
          },
        ]}
      />
    </>
  );
}
