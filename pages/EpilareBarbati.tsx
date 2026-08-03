import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { PageHeader } from "../components/PageHeader";
import { WhatsAppServiceButton } from "../components/WhatsAppBooking";

/** Pagină nelistată (noindex) — prețuri bărbați, pe bază de recomandare. */
const preturiBarbati = [
  { zona: "Contur Barbă", pret: "200 RON" },
  { zona: "Axilă", pret: "130 RON" },
  { zona: "Piept + Umeri", pret: "150 RON" },
  { zona: "Brațe Lung", pret: "180 RON" },
  { zona: "Spate", pret: "280 RON" },
  { zona: "Abdomen", pret: "150 RON" },
  { zona: "Picioare Integral", pret: "280 RON" },
  { zona: "Coapse", pret: "180 RON" },
  { zona: "Gambe", pret: "180 RON" },
];

export function EpilareBarbati() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Epilare Definitivă Bărbați | Raffaella Beauty"
        description="Epilare definitivă pentru bărbați la Raffaella Beauty Studio — pe bază de recomandare."
        canonical="/epilare-barbati"
        noindex
      />

      <PageHeader />

      <div className="max-w-2xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-6"
        >
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-4 uppercase">
            Pe bază de recomandare
          </p>
          <h1 className="elegant-title text-3xl md:text-4xl mb-4 text-gray-900">
            Epilare Definitivă — Bărbați
          </h1>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
            Serviciu disponibil pe bază de recomandare.
          </p>
        </motion.div>

        <table className="w-full text-sm mb-12">
          <tbody>
            {preturiBarbati.map((r) => (
              <tr key={r.zona} className="border-b border-gray-200/60">
                <td className="py-3 text-gray-700" style={{ fontWeight: 300 }}>{r.zona}</td>
                <td className="py-3 text-right text-gray-900">{r.pret}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center flex flex-col items-center gap-4">
          <WhatsAppServiceButton service="Epilare Definitivă Bărbați" />
          <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
            sau{" "}
            <a href="tel:+40765315537" className="hover:text-[var(--gold)] underline-offset-2 hover:underline">
              0765 315 537
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
