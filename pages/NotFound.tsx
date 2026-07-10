import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <SEO
        title="Pagina nu a fost găsită"
        description="Pagina căutată nu există. Descoperă serviciile Raffaella Beauty Studio: epilare definitivă, extensii gene, laminare gene, tratamente faciale în București."
        noindex
      />
      <div className="text-center max-w-lg">
        <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-4 uppercase">Eroare 404</p>
        <h1 className="elegant-title text-4xl md:text-5xl mb-6 text-gray-900">
          Pagina nu a fost găsită
        </h1>
        <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
        <p className="text-gray-500 mb-10" style={{ fontWeight: 300 }}>
          Pagina pe care o cauți nu există sau a fost mutată. Te invităm să descoperi
          serviciile noastre de înfrumusețare.
        </p>
        <Link
          to="/"
          className="inline-block border-2 border-[var(--gold)] text-gray-800 hover:bg-[var(--gold)] hover:text-white px-12 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
        >
          Înapoi Acasă
        </Link>
      </div>
    </div>
  );
}
