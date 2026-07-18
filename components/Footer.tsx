const logoFull = "/assets/logo-raffaella.png";
import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50/50 to-white border-t border-[var(--gold)]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        </div>

        {/* Main Footer Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Left Column - Address & Schedule */}
          <div className="text-center md:text-left">
            <h4 className="text-gray-900 mb-4 text-sm tracking-wider uppercase" style={{ fontWeight: 400 }}>
              Adresă
            </h4>
            <div className="space-y-2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Strada+Vaselor+nr.+56+ap+2+București"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm block"
                style={{ fontWeight: 300 }}
              >
                Strada Vaselor nr. 56 ap 2
              </a>
              <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
                (intrare din Str. Aprodul Purice)
              </p>
              <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
                București, România
              </p>
            </div>
            
            <h4 className="text-gray-900 mb-4 text-sm tracking-wider uppercase mt-6" style={{ fontWeight: 400 }}>
              Program
            </h4>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
                Luni - Vineri: 09:00 - 19:00
              </p>
              <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
                Sâmbătă: 09:00 - 15:00
              </p>
              <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
                Duminică: Închis
              </p>
            </div>
          </div>

          {/* Center Column - Logo, Copyright & Social Media */}
          <div className="flex flex-col items-center">
            <img
              src={logoFull}
              alt="Raffaella Beauty"
              className="h-16 mb-6 opacity-90"
            />
            <p className="text-gray-500 text-sm text-center mb-1" style={{ fontWeight: 300, letterSpacing: '0.05em' }}>
              © 2025 Raffaella Beauty
            </p>
            <p className="text-gray-400 text-xs mb-6 text-center" style={{ fontWeight: 300 }}>
              Toate drepturile rezervate
            </p>

            <h4 className="text-gray-900 mb-4 text-sm tracking-wider uppercase" style={{ fontWeight: 400 }}>
              Social Media
            </h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/raffaella__beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 border border-gray-300 hover:border-[var(--gold)] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-500 group-hover:text-[var(--gold)] transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/raffaellalashstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 border border-gray-300 hover:border-[var(--gold)] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-500 group-hover:text-[var(--gold)] transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@raffaella__beauty?_t=ZN-90RfnQFJNeo&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 border border-gray-300 hover:border-[var(--gold)] flex items-center justify-center transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4 text-gray-500 group-hover:text-[var(--gold)] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Useful Links */}
          <div className="text-center md:text-right">
            <h4 className="text-gray-900 mb-4 text-sm tracking-wider uppercase" style={{ fontWeight: 400 }}>
              Link-uri Utile
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  Contactează-ne
                </Link>
              </li>
              <li>
                <Link 
                  to="/epilare-definitiva-sector-2" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  Epilare Definitivă Sector 2
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/termeni-conditii" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link 
                  to="/politica-confidentialitate" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link 
                  to="/anpc" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  ANPC
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutionare-litigii" 
                  className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  Soluționarea Litigiilor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        </div>
      </div>
    </footer>
  );
}
