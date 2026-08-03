import { Helmet } from "react-helmet-async";

export interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  // paragraf-definiție extras ușor de motoarele de căutare și AI
  intro?: string;
  faqs: FaqItem[];
  title?: string;
}

const luniRo = [
  "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
  "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie",
];

// Deterministică: aceeași valoare în prerender (Node) și în bundle-ul client.
// Evită `new Date()` la încărcarea modulului (poate diferi între build și vizită).
const BUILD_REF = new Date("2026-08-03T12:00:00Z");
const dataActualizare = `${luniRo[BUILD_REF.getUTCMonth()]} ${BUILD_REF.getUTCFullYear()}`;

export function ServiceFaq({ intro, faqs, title = "Întrebări frecvente" }: ServiceFaqProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {intro && (
        <p className="text-gray-600 text-lg leading-relaxed mb-14 text-center" style={{ fontWeight: 300 }}>
          {intro}
        </p>
      )}

      <div className="text-center mb-10">
        <h2 className="elegant-title text-3xl text-gray-900 mb-4">{title}</h2>
        <div className="w-16 h-px bg-[var(--gold)] mx-auto" />
      </div>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200/70 pb-8">
            <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: "0.03em" }}>
              {faq.question}
            </h3>
            <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-10 text-center uppercase tracking-wider" style={{ fontWeight: 300 }}>
        Informații și prețuri actualizate: {dataActualizare}
      </p>
    </section>
  );
}
