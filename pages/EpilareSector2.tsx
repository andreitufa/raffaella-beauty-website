import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ServiceFaq } from "../components/ServiceFaq";
import { PageHeader } from "../components/PageHeader";
import { trackBookingConversion } from "../components/GoogleAds";

const zone = [
  "Iancului", "Obor", "Pantelimon", "Vatra Luminoasă", "Colentina",
  "Ștefan cel Mare", "Baicului", "Tei", "Floreasca", "Moșilor",
];

const preturiFemei = [
  { zona: "Mustață / Bărbie / Perciuni", pret: "80 RON" },
  { zona: "Axilă", pret: "110 RON" },
  { zona: "Inghinal", pret: "110 RON" },
  { zona: "Gambe", pret: "110 RON" },
  { zona: "Picioare integral", pret: "190 RON" },
  { zona: "Full Body", pret: "450 RON" },
];

const preturiBarbati = [
  { zona: "Axilă", pret: "130 RON" },
  { zona: "Piept + Umeri", pret: "150 RON" },
  { zona: "Abdomen", pret: "150 RON" },
  { zona: "Contur barbă", pret: "200 RON" },
  { zona: "Spate", pret: "280 RON" },
  { zona: "Picioare integral", pret: "280 RON" },
];

export function EpilareSector2() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Epilare Definitivă Sector 2 București - Fără Durere | Raffaella Beauty"
        description="Epilare definitivă fără durere în Sectorul 2, București — zona Iancului, Obor, Pantelimon. Triplu laser Infinity (Diodă + Alexandrite + Nd:YAG), pentru femei și bărbați. Prețuri de la 80 RON. Programări: 0765 315 537"
        keywords="epilare definitiva sector 2, epilare laser sector 2 bucuresti, epilare definitiva fara durere, epilare definitiva iancului, epilare definitiva obor, epilare definitiva pantelimon, triplu laser bucuresti"
        canonical="/epilare-definitiva-sector-2"
      />
      <StructuredData
        type="Service"
        service={{
          name: "Epilare Definitivă Sector 2 București",
          description: "Epilare definitivă fără durere cu triplu laser Infinity (Diodă, Alexandrite, Nd:YAG) în Sectorul 2, București — zona Iancului, Obor, Pantelimon. Pentru femei și bărbați.",
          priceRange: "80-450 RON",
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Epilare Definitivă Sector 2", url: "/epilare-definitiva-sector-2" },
        ]}
      />

      <PageHeader />

      <div className="max-w-4xl mx-auto px-6 pb-8 md:pb-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 mt-8"
        >
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-4 uppercase">
            Triplu Laser · Fără Durere
          </p>
          <h1 className="elegant-title text-4xl md:text-5xl mb-6 text-gray-900">
            Epilare Definitivă în Sectorul 2, București
          </h1>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
            Raffaella Beauty Studio oferă epilare definitivă fără durere în Sectorul 2,
            zona Iancului–Obor, cu aparatul Infinity cu triplu laser — Diodă, Alexandrite
            și Nd:YAG în același tratament. Prețurile pornesc de la 80 RON pe zonă, pentru
            femei și bărbați.
          </p>
        </motion.div>

        {/* USP: fara durere */}
        <section className="mb-16">
          <h2 className="elegant-title text-3xl text-gray-900 text-center mb-4">
            De ce nu doare epilarea la Raffaella Beauty
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-600 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
            Multe cliente vin la noi după experiențe dureroase cu aparate clasice, cu o
            singură lungime de undă. Diferența o face tehnologia: aparatul nostru Infinity
            combină <strong style={{ fontWeight: 500 }}>trei lasere într-un singur tratament</strong> —
            Diodă (810 nm), Alexandrite (755 nm) și Nd:YAG (1064 nm) — și distribuie energia
            treptat, cu răcire continuă a pielii. Senzația e de căldură blândă: majoritatea
            clientelor ne spun că nici nu și-au dat seama când a început ședința.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border border-gray-200/70 p-6">
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>Diodă · 810 nm</h3>
              <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
                Standardul de eficiență pentru majoritatea tipurilor de piele și păr.
              </p>
            </div>
            <div className="border border-gray-200/70 p-6">
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>Alexandrite · 755 nm</h3>
              <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
                Eficient pe firele fine și deschise la culoare, unde alte lasere cedează.
              </p>
            </div>
            <div className="border border-gray-200/70 p-6">
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>Nd:YAG · 1064 nm</h3>
              <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
                Sigur pentru pielea închisă la culoare sau bronzată, fără risc de arsuri.
              </p>
            </div>
          </div>
        </section>

        {/* Zone deservite */}
        <section className="mb-16 text-center">
          <h2 className="elegant-title text-3xl text-gray-900 mb-4">
            Aproape de tine, în Sectorul 2
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-600 mb-8" style={{ fontWeight: 300 }}>
            Salonul se află în zona Iancului–Obor, cu acces rapid din cartierele:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {zone.map((z) => (
              <span
                key={z}
                className="border border-[var(--gold)]/30 text-gray-700 px-5 py-2 text-sm tracking-wider"
                style={{ fontWeight: 300 }}
              >
                {z}
              </span>
            ))}
          </div>
        </section>

        {/* Preturi orientative */}
        <section className="mb-16">
          <h2 className="elegant-title text-3xl text-gray-900 text-center mb-4">
            Prețuri epilare definitivă
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto mb-10" />
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-center text-gray-900 mb-5 uppercase tracking-wider text-sm" style={{ fontWeight: 400 }}>Femei</h3>
              <table className="w-full text-sm">
                <tbody>
                  {preturiFemei.map((r) => (
                    <tr key={r.zona} className="border-b border-gray-200/60">
                      <td className="py-3 text-gray-700" style={{ fontWeight: 300 }}>{r.zona}</td>
                      <td className="py-3 text-right text-gray-900">{r.pret}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-center text-gray-900 mb-5 uppercase tracking-wider text-sm" style={{ fontWeight: 400 }}>Bărbați</h3>
              <table className="w-full text-sm">
                <tbody>
                  {preturiBarbati.map((r) => (
                    <tr key={r.zona} className="border-b border-gray-200/60">
                      <td className="py-3 text-gray-700" style={{ fontWeight: 300 }}>{r.zona}</td>
                      <td className="py-3 text-right text-gray-900">{r.pret}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link
              to="/preturi/epilare-definitiva"
              className="text-[var(--gold)] hover:underline text-sm tracking-wider uppercase"
              style={{ fontWeight: 300 }}
            >
              Vezi lista completă de prețuri →
            </Link>
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mb-6">
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-600 mb-8" style={{ fontWeight: 300 }}>
            Programează o ședință și convinge-te: epilarea definitivă poate fi complet nedureroasă.
          </p>
          <a
            href="https://www.notino.ro/saloane/raffaella-beauty-studio/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingConversion(1)}
            className="inline-block border-2 border-[var(--gold)] text-gray-800 hover:bg-[var(--gold)] hover:text-white px-12 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
          >
            Programează-te Acum
          </a>
          <p className="text-gray-500 text-sm mt-4" style={{ fontWeight: 300 }}>
            sau telefonic: 0765 315 537
          </p>
        </div>
      </div>

      <ServiceFaq
        faqs={[
          {
            question: "Unde pot face epilare definitivă în Sectorul 2, București?",
            answer:
              "La Raffaella Beauty Studio, salon de înfrumusețare premium din Sectorul 2, zona Iancului–Obor. Suntem la câteva minute de Piața Iancului, Obor, Pantelimon și Vatra Luminoasă, cu acces facil cu metroul (M1) și transportul public. Programări la 0765 315 537 sau online prin Notino.",
          },
          {
            question: "Chiar nu doare epilarea definitivă cu triplu laser?",
            answer:
              "Aparatul Infinity cu triplu laser (Diodă, Alexandrite, Nd:YAG) livrează energia progresiv, cu răcire continuă a pielii, iar senzația este de căldură blândă — nu de înțepătură, ca la aparatele clasice. Majoritatea clientelor ne spun că nu și-au dat seama când a început ședința.",
          },
          {
            question: "Cât costă epilarea definitivă în Sectorul 2, la Raffaella Beauty?",
            answer:
              "Prețurile pornesc de la 80 RON pe zonă (mustață, bărbie) și ajung la 450 RON pentru pachetul Full Body la femei. Pentru bărbați, zonele individuale costă între 130 și 280 RON. Lista completă e publicată pe pagina de prețuri a site-ului.",
          },
          {
            question: "Este potrivit triplul laser pentru pielea bronzată sau închisă la culoare?",
            answer:
              "Da. Componenta Nd:YAG (1064 nm) este concepută exact pentru fototipurile închise și pielea bronzată, iar Alexandrite (755 nm) tratează eficient firele fine și deschise. Specialistul alege combinația potrivită pielii tale la începutul fiecărei ședințe.",
          },
          {
            question: "Fac și bărbații epilare definitivă în salon?",
            answer:
              "Da, avem listă de prețuri dedicată bărbaților: contur barbă, piept și umeri, spate, abdomen, brațe și picioare. Tratamentul este la fel de confortabil, indiferent de zonă.",
          },
        ]}
      />
    </div>
  );
}
