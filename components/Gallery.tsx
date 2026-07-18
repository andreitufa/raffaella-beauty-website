import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const loadedRef = useRef(false);

  // Feed-ul Instagram (Curator.io) se încarcă abia când vizitatorul se apropie
  // de secțiune — scriptul + cele ~25 de imagini nu mai blochează încărcarea paginii.
  useEffect(() => {
    const loadCurator = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;
      const script = document.createElement("script");
      script.async = true;
      script.charset = "UTF-8";
      script.src = "https://cdn.curator.io/published/ca4e9991-eee4-410c-857e-25f57c7e74e8.js";
      document.body.appendChild(script);
    };

    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      loadCurator();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          loadCurator();
          observer.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="galerie" ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Decorative Top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>

          <h2 className="elegant-title text-4xl md:text-6xl mb-6 text-gray-900">
            Galerie
          </h2>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Urmăriți-ne pe Instagram pentru cele mai recente transformări și știri
          </p>
        </motion.div>

        {/* Instagram Feed Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          {/* Curator.io Instagram Feed */}
          <div id="curator-feed-default-feed-layout" className="min-h-[600px]">
            <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">Powered by Curator.io</a>
          </div>

          {/* Instagram Button */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/raffaella__beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <svg 
                className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Urmărește-ne pe Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
