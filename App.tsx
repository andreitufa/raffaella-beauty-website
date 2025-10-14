import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { Analytics } from "./components/Analytics";
import { GoogleAds } from "./components/GoogleAds";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";
import { EpilareDefinitiva } from "./pages/EpilareDefinitiva";
import { ExtensiiGene } from "./pages/ExtensiiGene";
import { TratamenteFaciale } from "./pages/TratamenteFaciale";
import { LaminareGene } from "./pages/LaminareGene";
import { ScanareTen } from "./pages/ScanareTen";
import { TermeniConditii } from "./pages/TermeniConditii";
import { PoliticaConfidentialitate } from "./pages/PoliticaConfidentialitate";
import { ANPC } from "./pages/ANPC";
import { SolutionareLitigii } from "./pages/SolutionareLitigii";

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
  const isPricingPage = location.pathname.startsWith('/preturi/');
  const isLegalPage = ['/termeni-conditii', '/politica-confidentialitate', '/anpc', '/solutionare-litigii', '/contact'].includes(location.pathname);

  return (
    <>
      {!isPricingPage && !isLegalPage && <Navigation />}
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
        {/* Catch-all route for any unmatched paths */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

function HomePage() {
  return (
    <>
      <SEO
        title="Salon Înfrumusețare Premium București - Raffaella Beauty Studio"
        description="Salon de înfrumusețare premium în București. Epilare definitivă Infinity Laser Pro, extensii gene, laminare gene și sprâncene, tratamente faciale Oxigenera Pro, scanare ten Skin Doctor. Programări: 0765 315 537"
        keywords="salon infrumusetare bucuresti, epilare definitiva bucuresti, extensii gene bucuresti, laminare gene bucuresti, tratamente faciale bucuresti, infinity laser pro, oxigenera pro, skin doctor, raffaella beauty"
        canonical="/"
      />
      <StructuredData type="LocalBusiness" />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white text-gray-900">
          <Analytics />
          <GoogleAds />
          <ScrollToTop />
          <AppLayout />
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}
