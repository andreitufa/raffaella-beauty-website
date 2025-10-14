import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import { SEO } from "../components/SEO";

export function ANPC() {
  return (
    <>
      <SEO
        title="ANPC - Protecția Consumatorilor | Raffaella Beauty Studio"
        description="Informații despre drepturile consumatorilor și contact ANPC pentru Raffaella Beauty Studio București. Proceduri de reclamații și protecție consumatori."
        canonical="/anpc"
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
              ANPC - Protecția Consumatorilor
            </h1>
            <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-gray-500" style={{ fontWeight: 300 }}>
              Informații despre drepturile dumneavoastră ca consumator
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Drepturile Consumatorilor</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Conform legislației române și europene privind protecția consumatorilor, beneficiați de următoarele drepturi:
            </p>
            <ul className="text-gray-600 space-y-3 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li>Dreptul la informare corectă și completă despre serviciile oferite</li>
              <li>Dreptul la protecția sănătății și siguranței</li>
              <li>Dreptul la protecția intereselor economice</li>
              <li>Dreptul de a fi despăgubit pentru prejudiciile cauzate de servicii neconforme</li>
              <li>Dreptul la educație și informare în vederea protejării intereselor</li>
              <li>Dreptul de a fi reprezentat și consultat în procesul decizional</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Informații despre Prestator</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                <p><strong>Denumire:</strong> SC RAFFAELLA BEAUTY STUDIO SRL</p>
                <p><strong>CUI:</strong> 38209960</p>
                <p><strong>Nr. Registrul Comerțului:</strong> J40/15707/12.09.2017</p>
                <p><strong>Capital social:</strong> 200 lei</p>
                <p><strong>Adresa:</strong> Strada Vaselor nr. 56 ap 2, București (intrare din Str. Aprodul Purice)</p>
                <p><strong>Telefon:</strong> +40 765 315 537</p>
                <p><strong>Email:</strong> raffaellabeauty@yahoo.com</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Cum Depuneți o Reclamație</h2>
            <div className="text-gray-600 space-y-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                Dacă aveți o nemulțumire legată de serviciile noastre, vă rugăm să ne contactați mai întâi direct:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-[var(--gold)]" size={20} />
                  <span>+40 765 315 537</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[var(--gold)]" size={20} />
                  <span>raffaellabeauty@yahoo.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[var(--gold)] mt-1" size={20} />
                  <span>Strada Vaselor nr. 56 ap 2, București</span>
                </div>
              </div>
              <p className="mt-4">
                Ne angajăm să răspundem reclamațiilor în termen de maximum 15 zile lucrătoare și să găsim o soluție 
                amiabilă care să satisfacă ambele părți.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Contact ANPC</h2>
            <p className="text-gray-600 mb-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Dacă nu reușim să rezolvăm problema în mod amiabil, puteți contacta Autoritatea Națională pentru 
              Protecția Consumatorilor:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>Autoritatea Națională pentru Protecția Consumatorilor (ANPC)</h3>
                <div className="text-gray-600 space-y-2" style={{ fontWeight: 300 }}>
                  <p>📍 B-dul Aviatorilor nr. 72, Sector 1, București</p>
                  <p>📞 Telefon: 021.9551 (Luni-Vineri: 08:00-20:00)</p>
                  <p>📧 Email: office@anpc.gov.ro</p>
                  <p>🌐 Website: 
                    <a 
                      href="https://anpc.ro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--gold)] hover:underline ml-2 inline-flex items-center gap-1"
                    >
                      www.anpc.ro
                      <ExternalLink size={14} />
                    </a>
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>Comisariatul Județean București</h4>
                <div className="text-gray-600 space-y-2" style={{ fontWeight: 300 }}>
                  <p>📍 Str. Batiștei nr. 13, Sector 1, București</p>
                  <p>📞 Telefon: 021.318.56.93</p>
                  <p>📧 Email: cjpc.bucuresti@anpc.gov.ro</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Soluționarea Online a Litigiilor (SOL)</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Conform Regulamentului UE nr. 524/2013, consumatorii pot soluționa litigiile online prin platforma 
              europeană SOL (Soluționarea Online a Litigiilor):
            </p>
            
            <div className="bg-[var(--gold)]/5 border border-[var(--gold)]/20 p-6 rounded-lg">
              <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                🌐 Platformă SOL: 
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline ml-2 inline-flex items-center gap-1"
                >
                  https://ec.europa.eu/consumers/odr
                  <ExternalLink size={14} />
                </a>
              </p>
              <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                Această platformă facilitează soluționarea independentă, imparțială, transparentă, eficace, 
                rapidă și echitabilă a litigiilor online dintre consumatori și comercianți.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Entități Alternative de Soluționare a Litigiilor (SAL)</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Pentru soluționarea alternativă a litigiilor, puteți apela la entități autorizate SAL:
            </p>
            <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                📋 Lista completă a entităților SAL autorizate: 
                <a 
                  href="https://anpc.ro/ce-este-sal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline ml-2 inline-flex items-center gap-1"
                >
                  www.anpc.ro/ce-este-sal
                  <ExternalLink size={14} />
                </a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">Informații Utile</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>📱 Aplicația ANPC Mobile</h4>
                <p className="text-gray-600 text-sm" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  Descărcați aplicația mobilă ANPC pentru a depune reclamații și a primi informații utile direct pe telefon.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>📞 Telefon Consumer</h4>
                <p className="text-gray-600 text-sm" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  Sunați la <strong>021.9551</strong> (tarif normal) pentru asistență și informații despre drepturile consumatorilor.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
      </div>
    </>
  );
}
