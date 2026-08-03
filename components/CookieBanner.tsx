import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          // Bară jos, compactă (~15vh max); pr-20 lasă loc bulinei WhatsApp (dreapta)
          className="fixed bottom-0 left-0 right-0 z-50 pr-20 sm:pr-24"
          role="dialog"
          aria-label="Consimțământ cookie-uri"
        >
          <div className="mx-2 mb-2 max-h-[15vh] overflow-hidden rounded-lg border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm">
            <div className="flex max-h-[15vh] flex-wrap items-center gap-2 px-3 py-2.5 sm:flex-nowrap sm:gap-3 sm:px-4">
              <p className="min-w-0 flex-1 text-[11px] leading-snug text-gray-600 sm:text-xs" style={{ fontWeight: 300 }}>
                Folosim cookie-uri pentru statistici și experiență. Detalii în politica de confidențialitate.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={declineCookies}
                  className="rounded border border-gray-300 px-3 py-1.5 text-[11px] uppercase tracking-wider text-gray-600 hover:border-gray-400 sm:text-xs"
                >
                  Refuză
                </button>
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="rounded bg-[var(--gold)] px-3 py-1.5 text-[11px] uppercase tracking-wider text-white hover:bg-[var(--gold-dark)] sm:text-xs"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
