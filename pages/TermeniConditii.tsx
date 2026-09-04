import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

export function TermeniConditii() {
  return (
    <>
      <SEO
        title="Termeni și Condiții - Raffaella Beauty Studio"
        description="Termeni și condiții de utilizare a serviciilor Raffaella Beauty Studio București. Politică de programări, anulări, prețuri și plată."
        canonical="/termeni-conditii"
        noindex={true}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50/50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--gold)] transition-colors mb-8 text-sm"
            style={{ fontWeight: 300 }}
          >
            <ArrowLeft size={16} />
            Înapoi la pagina principală
          </Link>
          
          <div className="text-center">
            <h1 className="elegant-title text-4xl md:text-6xl mb-6 text-gray-900">
              Termeni și Condiții
            </h1>
            <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-gray-500" style={{ fontWeight: 300 }}>
              Ultima actualizare: 13 octombrie 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">1. Informații despre Prestator</h2>
            <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p><strong>Denumire:</strong> SC RAFFAELLA BEAUTY STUDIO SRL</p>
              <p><strong>CUI:</strong> 38209960</p>
              <p><strong>Nr. Registrul Comerțului:</strong> J40/15707/12.09.2017</p>
              <p><strong>Capital social:</strong> 200 lei</p>
              <p><strong>Adresa:</strong> Strada Locotenent Sachelarie Visarion nr. 59, Sector 2, București</p>
              <p><strong>Telefon:</strong> +40 765 315 537</p>
              <p><strong>Email:</strong> raffaellabeauty@yahoo.com</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">2. Acceptarea Termenilor</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Prin accesarea și utilizarea serviciilor oferite de Raffaella Beauty, acceptați acești termeni și condiții în totalitate. 
              Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciile noastre.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">3. Servicii Oferite</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Raffaella Beauty oferă următoarele servicii de înfrumusețare:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li>Epilare Definitivă cu Infinity Laser Pro</li>
              <li>Extensii de Gene</li>
              <li>Laminare Gene și Sprâncene</li>
              <li>Tratamente Faciale cu Oxigenera Pro</li>
              <li>Scanare Ten cu Skin Doctor</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">4. Programări și Rezervări</h2>
            <div className="text-gray-600 space-y-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                <strong>Modalități de programare:</strong> Puteți face programări prin:
              </p>
              <ul className="ml-6 space-y-2">
                <li>📱 Aplicația Notino</li>
                <li>📞 Telefonic la +40 765 315 537</li>
                <li>💬 WhatsApp la +40 765 315 537</li>
              </ul>
              <p className="mt-4">
                <strong>Întârzieri:</strong> În cazul în care întârzierea este din cauza clientei, aceasta își asumă întârzierea 
                și procedura se efectuează în timpul rămas disponibil. În cazul în care întârzierea este din cauza tehnicianului, 
                acesta își asumă întârzierea și va compensa timpul pierdut.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">5. Politica de Anulare</h2>
            <div className="text-gray-600 space-y-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                <strong>Anulare programare:</strong> Pentru a anula o programare, trebuie să ne anunțați cu minimum 
                <strong> 24 de ore înainte</strong> de ora programată.
              </p>
              <p>
                <strong>Neprezentare:</strong> În cazul neprezentării la programare, pentru a reprograma este necesară 
                achitarea unei taxe de <strong>50 RON</strong>.
              </p>
              <p>
                Pentru anulări, vă rugăm să ne contactați:
              </p>
              <ul className="ml-6 space-y-2">
                <li>📞 Telefonic: +40 765 315 537</li>
                <li>💬 WhatsApp: +40 765 315 537</li>
                <li>📧 Email: raffaellabeauty@yahoo.com</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">6. Prețuri și Modalități de Plată</h2>
            <div className="text-gray-600 space-y-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                Toate prețurile afișate pe site sunt exprimate în RON și includ TVA.
              </p>
              <p>
                <strong>Modalități de plată acceptate:</strong>
              </p>
              <ul className="ml-6 space-y-2">
                <li>💵 Cash la salon</li>
                <li>💳 Card bancar</li>
              </ul>
              <p className="mt-4">
                <strong>Avans:</strong> În general, nu este necesară plata unui avans. Excepție fac clienții noi care vin 
                pentru prima dată la salon, caz în care poate fi solicitat un avans pentru confirmarea programării.
              </p>
              <p>
                Prețurile pot fi modificate fără notificare prealabilă, dar programările deja făcute vor respecta prețul convenit la momentul rezervării.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">7. Politica de Rambursare</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <strong>Nu se oferă rambursări</strong> pentru serviciile prestate sau produsele cosmetice vândute.
            </p>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Toate serviciile sunt efectuate de către specialiști cu experiență, folosind produse și aparatură profesională. 
              Înainte de efectuarea oricărui tratament, veți beneficia de o consultație pentru a evalua compatibilitatea 
              cu tipul dumneavoastră de ten/păr și pentru a stabili așteptările realiste.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">8. Contraindicații și Responsabilități</h2>
            <div className="text-gray-600 space-y-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                Clienții au obligația de a informa specialistul despre:
              </p>
              <ul className="ml-6 space-y-2">
                <li>Alergii la produse cosmetice sau medicale</li>
                <li>Afecțiuni dermatologice</li>
                <li>Medicamente pe care le administrează</li>
                <li>Sarcină sau alăptare</li>
                <li>Intervenții chirurgicale sau tratamente recente</li>
              </ul>
              <p>
                Raffaella Beauty nu își asumă responsabilitatea pentru eventualele reacții adverse cauzate de 
                ascunderea sau omiterea acestor informații.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">9. Proprietate Intelectuală</h2>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Tot conținutul acestui site (texte, imagini, logo, design) este proprietatea exclusivă a Raffaella Beauty 
              și este protejat de legile drepturilor de autor. Reproducerea sau distribuirea acestui conținut fără 
              acordul scris al Raffaella Beauty este interzisă.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">10. Modificarea Termenilor</h2>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Raffaella Beauty își rezervă dreptul de a modifica acești termeni și condiții în orice moment. 
              Modificările vor intra în vigoare imediat după publicarea pe site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">11. Contact</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Pentru orice întrebări referitoare la acești termeni și condiții, ne puteți contacta:
            </p>
            <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p><strong>Telefon:</strong> +40 765 315 537</p>
              <p><strong>WhatsApp:</strong> +40 765 315 537</p>
              <p><strong>Email:</strong> raffaellabeauty@yahoo.com</p>
              <p><strong>Adresa:</strong> Strada Locotenent Sachelarie Visarion nr. 59, Sector 2, București</p>
            </div>
          </section>

        </div>
      </div>
      </div>
    </>
  );
}
