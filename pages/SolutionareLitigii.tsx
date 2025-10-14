import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, AlertCircle } from "lucide-react";
import { SEO } from "../components/SEO";

export function SolutionareLitigii() {
  return (
    <>
      <SEO
        title="Soluționarea Litigiilor - SAL, SOL, ANPC"
        description="Proceduri alternative de soluționare a litigiilor pentru Raffaella Beauty Studio. Informații SAL, SOL și contact autorități."
        canonical="/solutionare-litigii"
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
              Soluționarea Litigiilor
            </h1>
            <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-gray-500" style={{ fontWeight: 300 }}>
              Proceduri alternative de rezolvare a litigiilor dintre consumatori și comercianți
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-[var(--gold)]/5 border border-[var(--gold)]/20 p-6 rounded-lg mb-12 flex gap-4">
            <AlertCircle className="text-[var(--gold)] flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                Raffaella Beauty este dedicat oferirii de servicii de calitate și satisfacției clienților. 
                Dacă aveți o nemulțumire, vă încurajăm să ne contactați mai întâi pentru a găsi o soluție amiabilă.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">1. Soluționare Amiabilă Directă</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Primul pas în rezolvarea oricărei probleme este contactarea directă a salonului nostru:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                <p><strong>📞 Telefon:</strong> +40 765 315 537</p>
                <p><strong>💬 WhatsApp:</strong> +40 765 315 537</p>
                <p><strong>📧 Email reclamații:</strong> raffaellabeauty@yahoo.com</p>
                <p><strong>📍 Adresa:</strong> Strada Vaselor nr. 56 ap 2, București (intrare din Str. Aprodul Purice)</p>
                <p><strong>⏰ Program:</strong> Luni-Vineri 09:00-19:00, Sâmbătă 09:00-15:00</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <strong>Termen de răspuns:</strong> Ne angajăm să investigăm și să răspundem reclamației dumneavoastră 
              în termen de maximum 15 zile lucrătoare de la primirea acesteia.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">2. Soluționarea Alternativă a Litigiilor (SAL)</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Dacă nu reușim să ajungem la o înțelegere, puteți apela la entități autorizate SAL (Soluționarea Alternativă a Litigiilor), 
              care oferă proceduri de mediere și conciliere:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-gray-900 mb-3" style={{ fontWeight: 400 }}>Ce este SAL?</h3>
                <p className="text-gray-600 mb-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  SAL reprezintă o alternativă la instanțele judecătorești, oferind:
                </p>
                <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  <li>✅ Proceduri mai rapide (maximum 90 zile)</li>
                  <li>✅ Costuri reduse sau gratuite</li>
                  <li>✅ Proces mai simplu și accesibil</li>
                  <li>✅ Confidențialitate</li>
                  <li>✅ Soluții consensuale</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-gray-900 mb-3" style={{ fontWeight: 400 }}>Listă Entități SAL Autorizate</h3>
                <p className="text-gray-600 mb-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  Lista completă și actualizată a entităților autorizate SAL în România este disponibilă pe:
                </p>
                <a 
                  href="https://anpc.ro/ce-este-sal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline inline-flex items-center gap-2"
                >
                  www.anpc.ro/ce-este-sal
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">3. Platforma Europeană SOL (Soluționarea Online a Litigiilor)</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Pentru litigii care rezultă din contracte de vânzare sau servicii online, consumatorii pot utiliza 
              Platforma Europeană de Soluționare Online a Litigiilor (SOL):
            </p>
            
            <div className="bg-[var(--gold)]/5 border border-[var(--gold)]/20 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-3" style={{ fontWeight: 400 }}>🌐 Platforma SOL</h3>
                  <p className="text-gray-600 mb-3" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                    Accesați platforma oficială la:
                  </p>
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline inline-flex items-center gap-2 text-lg"
                  >
                    https://ec.europa.eu/consumers/odr
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-3" style={{ fontWeight: 400 }}>Cum funcționează Platforma SOL?</h4>
              <ol className="text-gray-600 space-y-3 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                <li><strong>1. Depunerea plângerii:</strong> Completați formularul online pe platforma SOL</li>
                <li><strong>2. Alegerea entității SAL:</strong> Platforma vă sugerează entități SAL competente</li>
                <li><strong>3. Procesul de mediere:</strong> Entitatea SAL mediază între părți</li>
                <li><strong>4. Soluționarea:</strong> Decizia este comunicată în maximum 90 de zile</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">4. Autoritatea Națională pentru Protecția Consumatorilor (ANPC)</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Puteți, de asemenea, să sesizați ANPC pentru nerespectarea drepturilor consumatorilor:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                <p><strong>📞 Telefon:</strong> 021.9551 (tarif normal, Luni-Vineri 08:00-20:00)</p>
                <p><strong>📧 Email:</strong> office@anpc.gov.ro</p>
                <p><strong>📍 Adresa:</strong> B-dul Aviatorilor nr. 72, Sector 1, București</p>
                <p><strong>🌐 Website:</strong> 
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

            <p className="text-gray-600 mt-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Puteți depune reclamații online prin:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6 mt-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li>📱 Aplicația mobilă ANPC (disponibilă pe iOS și Android)</li>
              <li>💻 Website-ul oficial ANPC</li>
              <li>📧 Email direct</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">5. Comisariatul Județean pentru Protecția Consumatorilor București</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                <p><strong>📍 Adresa:</strong> Str. Batiștei nr. 13, Sector 1, București</p>
                <p><strong>📞 Telefon:</strong> 021.318.56.93</p>
                <p><strong>📧 Email:</strong> cjpc.bucuresti@anpc.gov.ro</p>
                <p><strong>⏰ Program:</strong> Luni-Joi 08:30-16:30, Vineri 08:30-14:00</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">6. Proceduri Judiciare</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Dacă metodele alternative nu duc la o soluție satisfăcătoare, aveți dreptul de a vă adresa instanțelor judecătorești competente, 
              conform legislației în vigoare.
            </p>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <strong>Important:</strong> Apelarea la SAL sau SOL nu vă împiedică să vă adresați ulterior instanțelor judecătorești 
              dacă nu sunteți mulțumit de rezultat.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">7. Informații Utile</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>📋 Documente necesare pentru reclamație</h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  <li>Factura sau chitanța pentru serviciul prestat</li>
                  <li>Descrierea problemei și a prejudiciului suferit</li>
                  <li>Corespondenţa cu prestatorul (email-uri, mesaje)</li>
                  <li>Fotografii sau alte dovezi relevante</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-gray-900 mb-2" style={{ fontWeight: 400 }}>⏱️ Termene</h4>
                <p className="text-gray-600 text-sm" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  • SAL: Maximum 90 de zile pentru soluționare<br />
                  • ANPC: Răspuns în maximum 30 de zile<br />
                  • Instanțe: Variabil, în funcție de complexitatea cauzei
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
