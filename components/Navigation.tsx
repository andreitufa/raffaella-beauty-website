import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
const logoFull = "/assets/logo-raffaella.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-sm py-3' 
            : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Combined Icon + Text */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logoFull}
              alt="Raffaella Beauty"
              className={`transition-all duration-500 ${
                isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
              }`}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group text-gray-800 hover:text-[var(--gold)]"
            >
              Despre Noi
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 bg-[var(--gold)]" />
            </button>
            <button
              onClick={() => scrollToSection('servicii')}
              className="text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group text-gray-800 hover:text-[var(--gold)]"
            >
              Servicii
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 bg-[var(--gold)]" />
            </button>
            <button
              onClick={() => scrollToSection('servicii')}
              className="text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group text-gray-800 hover:text-[var(--gold)]"
            >
              Listă Prețuri
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 bg-[var(--gold)]" />
            </button>
            <button
              onClick={() => scrollToSection('galerie')}
              className="text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group text-gray-800 hover:text-[var(--gold)]"
            >
              Galerie
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 bg-[var(--gold)]" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group text-gray-800 hover:text-[var(--gold)]"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 bg-[var(--gold)]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-gray-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 px-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-[var(--gold)] text-lg tracking-[0.2em] uppercase transition-colors"
              >
                Despre Noi
              </button>
              <button
                onClick={() => scrollToSection('servicii')}
                className="text-gray-800 hover:text-[var(--gold)] text-lg tracking-[0.2em] uppercase transition-colors"
              >
                Servicii
              </button>
              <button
                onClick={() => scrollToSection('servicii')}
                className="text-gray-800 hover:text-[var(--gold)] text-lg tracking-[0.2em] uppercase transition-colors"
              >
                Listă Prețuri
              </button>
              <button
                onClick={() => scrollToSection('galerie')}
                className="text-gray-800 hover:text-[var(--gold)] text-lg tracking-[0.2em] uppercase transition-colors"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 hover:text-[var(--gold)] text-lg tracking-[0.2em] uppercase transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
