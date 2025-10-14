import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

export function PoliticaConfidentialitate() {
  return (
    <>
      <SEO
        title="Politica de Confidențialitate GDPR - Raffaella Beauty Studio"
        description="Politica de confidențialitate și protecție date personale conform GDPR pentru Raffaella Beauty Studio București. Informații despre colectare, utilizare și protecție date."
        canonical="/politica-confidentialitate"
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
              Politica de Confidențialitate
            </h1>
            <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-gray-500" style={{ fontWeight: 300 }}>
              Conformă cu GDPR - Ultima actualizare: 13 octombrie 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">1. Introducere</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Raffaella Beauty respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze 
              în conformitate cu Regulamentul General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și 
              legislația română în vigoare.
            </p>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Această politică explică ce date personale colectăm, cum le utilizăm, cui le transmitem și care sunt drepturile dumneavoastră.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">2. Operator de Date cu Caracter Personal</h2>
            <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p><strong>Denumire:</strong> SC RAFFAELLA BEAUTY STUDIO SRL</p>
              <p><strong>CUI:</strong> 38209960</p>
              <p><strong>Nr. Registrul Comerțului:</strong> J40/15707/12.09.2017</p>
              <p><strong>Adresa:</strong> Strada Vaselor nr. 56 ap 2, București, România</p>
              <p><strong>Email:</strong> raffaellabeauty@yahoo.com</p>
              <p><strong>Telefon:</strong> +40 765 315 537</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">3. Ce Date Personale Colectăm</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Colectăm următoarele categorii de date personale:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li><strong>Date de identificare:</strong> Nume și prenume</li>
              <li><strong>Date de contact:</strong> Număr de telefon, email</li>
              <li><strong>Date legate de servicii:</strong> Istoric programări, servicii solicitate, preferințe</li>
              <li><strong>Date medicale relevante:</strong> Alergii, contraindicații, afecțiuni dermatologice (doar cu consimțământul explicit și doar dacă sunt relevante pentru serviciile solicitate)</li>
              <li><strong>Date de comunicare:</strong> Mesaje, feedback, comunicări prin telefon, WhatsApp, Instagram, Facebook, aplicația Notino</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">4. Cum Colectăm Datele</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Colectăm date personale prin:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li>📱 Aplicația Notino pentru programări online</li>
              <li>📞 Apeluri telefonice pentru programări</li>
              <li>💬 Mesaje prin WhatsApp</li>
              <li>📸 Mesaje prin Instagram și Facebook</li>
              <li>🏪 În timpul consultațiilor și tratamentelor la salon</li>
              <li>📧 Email pentru comunicări și programări</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">5. Scopul Prelucrării Datelor</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Utilizăm datele dumneavoastră personale pentru:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li>Gestionarea programărilor și prestarea serviciilor</li>
              <li>Comunicare cu clienții (confirmări, reminder-e, informații)</li>
              <li>Îmbunătățirea serviciilor noastre</li>
              <li>Respectarea obligațiilor legale (fiscale, contabile)</li>
              <li>[Marketing și newsletter - doar cu consimțământ explicit]</li>
              <li>[Analiza traficului pe website - cu cookie-uri]</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">6. Temeiurile Legale</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Prelucrăm datele dumneavoastră pe baza:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li><strong>Executarea contractului:</strong> pentru prestarea serviciilor solicitate</li>
              <li><strong>Obligație legală:</strong> pentru respectarea legislației fiscale și contabile</li>
              <li><strong>Consimțământ:</strong> pentru marketing, newsletter, cookie-uri de marketing</li>
              <li><strong>Interes legitim:</strong> pentru îmbunătățirea serviciilor și comunicări relevante</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">7. Cui Transmitem Datele</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Datele dumneavoastră pot fi transmise către:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li>Furnizori de servicii IT (hosting website)</li>
              <li>Platforme de comunicare și social media: Notino, Instagram, Facebook, WhatsApp</li>
              <li>Furnizori de servicii de email</li>
              <li>Autorități publice (la cerere, conform legii - ANAF, ANPC, etc.)</li>
            </ul>
            <p className="text-gray-600 mt-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <strong>Important:</strong> Nu vindem și nu închiriem datele dumneavoastră către terți pentru scopuri de marketing sau comerciale.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">8. Cât Timp Păstrăm Datele</h2>
            <div className="text-gray-600 space-y-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p>Păstrăm datele dumneavoastră pentru:</p>
              <ul className="ml-6 space-y-2">
                <li><strong>Date de programări și servicii:</strong> 3 ani de la ultima prestare a serviciilor</li>
                <li><strong>Date contabile și facturi:</strong> Minimum 10 ani (conform Legii Contabilității nr. 82/1991)</li>
                <li><strong>Date de marketing:</strong> Până la retragerea consimțământului sau maximum 3 ani de la ultima interacțiune</li>
                <li><strong>Cookie-uri:</strong> Conform politicii de cookie-uri (vezi banner-ul de cookie-uri)</li>
              </ul>
              <p className="mt-4">
                După expirarea perioadelor menționate, datele vor fi șterse sau anonimizate, cu excepția cazurilor în care 
                legea impune păstrarea acestora pentru o perioadă mai lungă.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">9. Drepturile Dumneavoastră GDPR</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              În conformitate cu GDPR, aveți următoarele drepturi:
            </p>
            <ul className="text-gray-600 space-y-3 ml-6" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <li><strong>Dreptul de acces:</strong> Să solicitați o copie a datelor pe care le deținem despre dumneavoastră</li>
              <li><strong>Dreptul la rectificare:</strong> Să corectați datele inexacte sau incomplete</li>
              <li><strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Să solicitați ștergerea datelor (cu anumite excepții legale)</li>
              <li><strong>Dreptul la restricționare:</strong> Să limitați prelucrarea datelor în anumite condiții</li>
              <li><strong>Dreptul la portabilitate:</strong> Să primiți datele într-un format structurat</li>
              <li><strong>Dreptul de opoziție:</strong> Să vă opuneți prelucrării datelor pentru marketing</li>
              <li><strong>Dreptul de a depune plângere:</strong> La Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">10. Cum Vă Exercitați Drepturile</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Pentru a vă exercita drepturile GDPR, ne puteți contacta:
            </p>
            <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p><strong>Email:</strong> raffaellabeauty@yahoo.com</p>
              <p><strong>Telefon:</strong> +40 765 315 537</p>
              <p><strong>WhatsApp:</strong> +40 765 315 537</p>
              <p><strong>Adresa:</strong> Strada Vaselor nr. 56 ap 2, București (intrare din Str. Aprodul Purice)</p>
            </div>
            <p className="text-gray-600 mt-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Vom răspunde solicitării dumneavoastră în termen de maximum 30 de zile calendaristice de la primirea cererii.
              În cazuri excepționale de complexitate, această perioadă poate fi prelungită cu încă 60 de zile, despre care 
              veți fi informat.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">11. Cookie-uri</h2>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Website-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența utilizatorului și pentru analiză. 
              Pentru detalii despre cum utilizăm cookie-urile, consultați banner-ul de cookie-uri de pe site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">12. Securitatea Datelor</h2>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor dumneavoastră împotriva 
              accesului neautorizat, pierderii sau distrugerii. Totuși, nicio transmitere pe internet nu este 100% sigură.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">13. Modificări ale Politicii</h2>
            <p className="text-gray-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Modificările vor fi publicate 
              pe această pagină cu data actualizării.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="elegant-title text-2xl mb-4 text-gray-900">14. Contact ANSPDCP</h2>
            <p className="text-gray-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Dacă aveți nelămuriri sau doriți să depuneți o plângere, puteți contacta autoritatea de supraveghere:
            </p>
            <div className="text-gray-600 space-y-2" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              <p><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal</strong></p>
              <p>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</p>
              <p>Telefon: +40 318 059 211</p>
              <p>Email: anspdcp@dataprotection.ro</p>
              <p>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">www.dataprotection.ro</a></p>
            </div>
          </section>

        </div>
      </div>
      </div>
    </>
  );
}
