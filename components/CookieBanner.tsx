import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-[var(--gold)]/20 shadow-2xl rounded-lg overflow-hidden">
              {/* Decorative top border */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                          <svg 
                            className="w-6 h-6 text-[var(--gold)]" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="elegant-title text-xl md:text-2xl mb-3 text-gray-900">
                          Cookie-uri și Confidențialitate
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed" style={{ fontWeight: 300 }}>
                          Folosim cookie-uri pentru a îmbunătăți experiența ta pe site-ul nostru, 
                          pentru a analiza traficul și pentru a personaliza conținutul. 
                          Acceptând, ești de acord cu utilizarea cookie-urilor conform{" "}
                          <span className="text-[var(--gold)] hover:underline cursor-pointer">
                            politicii noastre de confidențialitate
                          </span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                    <button
                      onClick={declineCookies}
                      className="px-6 py-3 text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-md transition-all duration-300 text-sm tracking-wider uppercase"
                    >
                      Refuză
                    </button>
                    <button
                      onClick={acceptCookies}
                      className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white rounded-md transition-all duration-300 text-sm tracking-wider uppercase shadow-lg hover:shadow-xl"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={declineCookies}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Închide"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
