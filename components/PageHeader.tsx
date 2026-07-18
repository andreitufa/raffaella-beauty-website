import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const logoFull = "/assets/logo-raffaella.png";

interface PageHeaderProps {
  backTo?: string;
  backLabel?: string;
}

// Antet comun pentru paginile de sine stătătoare (blog, pagini locale):
// logo sticky + link de întoarcere, în stilul paginilor de prețuri.
export function PageHeader({ backTo = "/", backLabel = "Înapoi Acasă" }: PageHeaderProps) {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--gold)]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5">
          <Link to="/" className="inline-block">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={logoFull}
              alt="Raffaella Beauty"
              className="h-12 md:h-14 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--gold)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wider uppercase" style={{ fontWeight: 300 }}>{backLabel}</span>
        </Link>
      </div>
    </>
  );
}
