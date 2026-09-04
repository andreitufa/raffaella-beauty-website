import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import type { ComponentType } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { Analytics as GoogleAnalytics } from "./components/Analytics";
import { GoogleAds } from "./components/GoogleAds";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";
import { ServiceFaq } from "./components/ServiceFaq";
import { WhatsAppFloatingButton } from "./components/WhatsAppBooking";

// Code splitting pe rute: paginile secundare se descarcă doar la navigare,
// nu odată cu homepage-ul. Promisiunile de import sunt înregistrate ca
// prerender-ul (SSR) să poată aștepta încărcarea lor — vezi entry-server.tsx.
const lazyImportsInFlight: Promise<unknown>[] = [];

export function waitForLazyImports(): Promise<unknown> {
  return Promise.all(lazyImportsInFlight);
}

export function pendingLazyImportCount(): number {
  return lazyImportsInFlight.length;
}

function lazyPage<P extends object>(
  factory: () => Promise<Record<string, unknown>>,
  exportName: string,
): ComponentType<P> {
  return lazy(() => {
    const promise = factory();
    lazyImportsInFlight.push(promise);
    return promise.then((mod) => ({ default: mod[exportName] as ComponentType<P> }));
  });
}

const EpilareDefinitiva = lazyPage(() => import("./pages/EpilareDefinitiva"), "EpilareDefinitiva");
const ExtensiiGene = lazyPage(() => import("./pages/ExtensiiGene"), "ExtensiiGene");
const TratamenteFaciale = lazyPage(() => import("./pages/TratamenteFaciale"), "TratamenteFaciale");
const LaminareGene = lazyPage(() => import("./pages/LaminareGene"), "LaminareGene");
const ScanareTen = lazyPage(() => import("./pages/ScanareTen"), "ScanareTen");
const TermeniConditii = lazyPage(() => import("./pages/TermeniConditii"), "TermeniConditii");
const PoliticaConfidentialitate = lazyPage(() => import("./pages/PoliticaConfidentialitate"), "PoliticaConfidentialitate");
const ANPC = lazyPage(() => import("./pages/ANPC"), "ANPC");
const SolutionareLitigii = lazyPage(() => import("./pages/SolutionareLitigii"), "SolutionareLitigii");
const NotFound = lazyPage(() => import("./pages/NotFound"), "NotFound");
const EpilareSector2 = lazyPage(() => import("./pages/EpilareSector2"), "EpilareSector2");
const EpilareBarbati = lazyPage(() => import("./pages/EpilareBarbati"), "EpilareBarbati");
const Blog = lazyPage(() => import("./pages/blog/Blog"), "Blog");
const BlogPost = lazyPage(() => import("./pages/blog/BlogPost"), "BlogPost");

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppLayout() {
  const location = useLocation();
  // Vite/browser pot servi ruta cu trailing slash (/path/) — egalitatea strictă
  // eșuează și clientul randează Navigation peste HTML prerendered fără nav → hydration #418/#423.
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const isPricingPage = path.startsWith("/preturi/");
  const isStandalonePage =
    path.startsWith("/blog") ||
    path === "/epilare-definitiva-sector-2" ||
    path === "/epilare-barbati";
  const isLegalPage = [
    "/termeni-conditii",
    "/politica-confidentialitate",
    "/anpc",
    "/solutionare-litigii",
    "/contact",
  ].includes(path);

  return (
    <>
      {!isPricingPage && !isLegalPage && !isStandalonePage && <Navigation />}
      <Suspense fallback={null}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preturi/epilare-definitiva" element={<EpilareDefinitiva />} />
        <Route path="/preturi/extensii-gene" element={<ExtensiiGene />} />
        <Route path="/preturi/tratamente-faciale" element={<TratamenteFaciale />} />
        <Route path="/preturi/laminare-gene" element={<LaminareGene />} />
        <Route path="/preturi/scanare-ten" element={<ScanareTen />} />
        <Route path="/termeni-conditii" element={<TermeniConditii />} />
        <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
        <Route path="/anpc" element={<ANPC />} />
        <Route path="/solutionare-litigii" element={<SolutionareLitigii />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/epilare-definitiva-sector-2" element={<EpilareSector2 />} />
        <Route path="/epilare-barbati" element={<EpilareBarbati />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Pagină 404 reală (noindex) în loc de duplicat al homepage-ului */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

function HomePage() {
  return (
    <>
      <SEO
        title="Raffaella Beauty Studio - Salon Înfrumusețare Premium București"
        description="Salon de înfrumusețare premium în București. Epilare definitivă Infinity Laser Pro, extensii gene, laminare gene și sprâncene, tratamente faciale Oxigenera Pro, scanare ten Skin Doctor. Programări: 0765 315 537"
        keywords="salon infrumusetare bucuresti, epilare definitiva bucuresti, extensii gene bucuresti, laminare gene bucuresti, tratamente faciale bucuresti, infinity laser pro, oxigenera pro, skin doctor, raffaella beauty"
        canonical="/"
        ogDescription="Raffaella Beauty Studio redefinește conceptul de frumusețe prin eleganță, precizie și atenție la detalii. Într-un spațiu modern și rafinat, fiecare serviciu este conceput pentru a oferi o experiență personalizată, folosind produse profesionale și tehnologii de ultimă generație."
      />
      <StructuredData type="LocalBusiness" />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <ServiceFaq
        title="Întrebări frecvente despre salon"
        faqs={[
          {
            question: "Unde se află salonul Raffaella Beauty Studio?",
            answer:
              "Salonul se află în București, pe Strada Locotenent Sachelarie Visarion nr. 59, Sector 2 (cod poștal 021705), în zona Piața Iancului. Ne găsești ușor cu transportul public sau cu mașina.",
          },
          {
            question: "Ce servicii oferă Raffaella Beauty Studio?",
            answer:
              "Oferim epilare definitivă cu Infinity Laser Pro pentru femei și bărbați, extensii de gene (1D-6D, Wet Look, Solisse), laminare de gene și sprâncene, tratamente faciale Oxigenera Pro și scanare a tenului cu Skin Doctor.",
          },
          {
            question: "Care este programul salonului?",
            answer:
              "Suntem deschiși de luni până vineri între 09:00 și 19:00 și sâmbăta între 09:00 și 15:00. Duminica este închis.",
          },
          {
            question: "Cum fac o programare?",
            answer:
              "Cel mai simplu e pe WhatsApp, la 0765 315 537 — apasă butonul verde de WhatsApp de pe site și mesajul se completează automat, iar noi îți răspundem rapid cu intervalele libere. Ne poți suna la același număr, te poți programa online prin Notino sau ne poți scrie pe Instagram la @raffaella__beauty.",
          },
          {
            question: "Cum se plătesc serviciile?",
            answer:
              "Acceptăm plata cash și cu cardul, în RON, direct la salon. Prețurile complete pentru fiecare serviciu sunt publicate pe paginile de prețuri ale site-ului.",
          },
        ]}
      />
    </>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <SEO
        title="Contact și Programări - Salon București"
        description="Contactează Raffaella Beauty Studio: Strada Locotenent Sachelarie Visarion nr. 59, Sector 2, București. Telefon 0765 315 537. Program: L-V 09:00-19:00, S 09:00-15:00. Programări rapide pe WhatsApp sau online prin Notino."
        keywords="contact raffaella beauty, programare salon bucuresti, salon piata iancului, salon sector 2 bucuresti"
        canonical="/contact"
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <Contact />
    </div>
  );
}

// Conținutul aplicației, fără router: e folosit și la prerendering (build),
// unde rulează într-un StaticRouter, și în browser (BrowserRouter).
export function AppContent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Analytics />
      <GoogleAnalytics />
      <GoogleAds />
      <ScrollToTop />
      <AppLayout />
      <Footer />
      <WhatsAppFloatingButton />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
