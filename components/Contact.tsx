import { motion } from "motion/react";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { trackPhoneClick, trackBookingClick } from "./Analytics";
import { trackPhoneCallConversion, trackBookingConversion } from "./GoogleAds";
import { WhatsAppBookingButton } from "./WhatsAppBooking";

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

export function Contact() {
  const phoneNumber = "+40765315537";
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handlePhoneClick = () => {
    // Track conversion
    trackPhoneClick();
    trackPhoneCallConversion();
    
    // Detectează dacă este mobil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Pe mobil, deschide aplicația de telefon
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Pe desktop, afișează/ascunde numărul de telefon
      setShowPhoneNumber(!showPhoneNumber);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            Contact
          </h2>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Programează-te pentru o experiență de neuitat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 md:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-10"
          >
            <div className="group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 flex items-center justify-center group-hover:from-[var(--gold)]/30 group-hover:to-[var(--gold)]/10 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    Adresă
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/G7ZyiQTNpEaixUtU8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[var(--gold)] transition-colors leading-relaxed cursor-pointer block"
                    style={{ fontWeight: 300 }}
                  >
                    Strada Vaselor nr. 56 ap 2<br />
                    (intrare din Str. Aprodul Purice)<br />
                    București, România
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 flex items-center justify-center group-hover:from-[var(--gold)]/30 group-hover:to-[var(--gold)]/10 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    Telefon
                  </h3>
                  <button onClick={handlePhoneClick} className="text-gray-600 hover:text-[var(--gold)] transition-colors text-left" style={{ fontWeight: 300 }}>
                    +40 765 315 537
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 flex items-center justify-center group-hover:from-[var(--gold)]/30 group-hover:to-[var(--gold)]/10 transition-all duration-300">
                  <Clock className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    Program
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
                    Luni - Vineri: 09:00 - 19:00<br />
                    Sâmbătă: 09:00 - 15:00<br />
                    Duminică: Închis
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 flex items-center justify-center group-hover:from-[var(--gold)]/30 group-hover:to-[var(--gold)]/10 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    Instagram
                  </h3>
                  <a
                    href="https://www.instagram.com/raffaella__beauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[var(--gold)] transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    @raffaella__beauty
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 flex items-center justify-center group-hover:from-[var(--gold)]/30 group-hover:to-[var(--gold)]/10 transition-all duration-300">
                  <Facebook className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    Facebook
                  </h3>
                  <a
                    href="https://www.facebook.com/raffaellalashstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[var(--gold)] transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    Raffaella Lash Studio
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 flex items-center justify-center group-hover:from-[var(--gold)]/30 group-hover:to-[var(--gold)]/10 transition-all duration-300">
                  <TikTokIcon className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                    TikTok
                  </h3>
                  <a
                    href="https://www.tiktok.com/@raffaella__beauty?_t=ZN-90RfnQFJNeo&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[var(--gold)] transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    @raffaella__beauty
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <div className="relative bg-white border border-[var(--gold)]/20 p-12 md:p-16 shadow-xl">
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[var(--gold)]/40" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[var(--gold)]/40" />
              
              <h3 className="elegant-title text-3xl md:text-4xl mb-8 text-gray-900">
                Programează-te
              </h3>
              
              <div className="w-16 h-px bg-[var(--gold)] mb-8" />
              
              <p className="text-gray-600 text-lg leading-relaxed mb-12" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                Începe călătoria către o versiune mai frumoasă a ta. Contactează-ne pentru o consultație personalizată și descoperă experiența Raffaella Beauty.
              </p>
              
              <div className="space-y-5">
                <WhatsAppBookingButton />

                <button
                  onClick={() => {
                    trackBookingClick('Notino');
                    trackBookingConversion(1);
                    window.open('https://www.notino.ro/saloane/raffaella-beauty-studio/', '_blank');
                  }}
                  className="group relative block w-full overflow-hidden border-2 border-[var(--gold)]/40 hover:border-[var(--gold)] transition-colors duration-300"
                >
                  <div className="text-gray-800 group-hover:text-[var(--gold)] text-center py-5 px-8 text-sm tracking-[0.2em] uppercase transition-colors duration-300">
                    Programează-te cu Notino
                  </div>
                </button>

                <button
                  onClick={handlePhoneClick}
                  className="group relative block w-full overflow-hidden border-2 border-gray-200 hover:border-[var(--gold)] transition-colors duration-300"
                >
                  <div className="text-gray-800 group-hover:text-[var(--gold)] text-center py-5 px-8 text-sm tracking-[0.2em] uppercase transition-colors duration-300">
                    {showPhoneNumber ? phoneNumber : "Sună Acum"}
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
