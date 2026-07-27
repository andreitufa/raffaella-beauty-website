import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { trackWhatsAppClick } from "./Analytics";
import { trackBookingConversion, trackWhatsAppConversion } from "./GoogleAds";

const WHATSAPP_PHONE = "40765315537";

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const SERVICES = [
  "Epilare Definitivă",
  "Extensii de Gene",
  "Laminare Gene / Sprâncene",
  "Tratament Facial Oxigenera Pro",
  "Scanare Ten Skin Doctor",
];

function openWhatsApp(service?: string) {
  trackWhatsAppClick(service);
  trackBookingConversion(1);
  trackWhatsAppConversion(1);
  const text = service
    ? `Bună ziua! Aș dori o programare pentru *${service}*. Când aveți disponibilitate?`
    : "Bună ziua! Aș dori mai multe informații despre serviciile dumneavoastră.";
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
}

// Fereastra de selecție a serviciului: clienta alege, iar conversația WhatsApp
// se deschide cu mesajul deja scris pentru serviciul respectiv.
function ServicePickerModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white w-full max-w-md p-8 shadow-2xl border border-[var(--gold)]/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Închide"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
            </div>
            <h3 className="elegant-title text-2xl text-gray-900 mb-2">Programare pe WhatsApp</h3>
            <div className="w-12 h-px bg-[var(--gold)] mx-auto mb-3" />
            <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
              Alege serviciul, iar mesajul se scrie singur:
            </p>
          </div>

          <div className="space-y-3">
            {SERVICES.map((service) => (
              <button
                key={service}
                onClick={() => {
                  openWhatsApp(service);
                  onClose();
                }}
                className="block w-full border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 text-gray-800 py-3.5 px-5 text-sm tracking-wider transition-all duration-200 text-left"
                style={{ fontWeight: 300 }}
              >
                {service}
              </button>
            ))}
            <button
              onClick={() => {
                openWhatsApp();
                onClose();
              }}
              className="block w-full border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 text-gray-500 py-3.5 px-5 text-sm tracking-wider transition-all duration-200 text-left"
              style={{ fontWeight: 300 }}
            >
              Altceva / Am o întrebare
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Buton de programare WhatsApp cu selector de servicii (pentru pagina de
// contact și alte locuri generice).
export function WhatsAppBookingButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          className ||
          "group relative block w-full overflow-hidden border-2 border-[#25D366]/50 hover:border-[#25D366] transition-colors duration-300"
        }
      >
        <div className="flex items-center justify-center gap-3 text-gray-800 group-hover:text-[#25D366] text-center py-5 px-8 text-sm tracking-[0.2em] uppercase transition-colors duration-300">
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          Programare WhatsApp
        </div>
      </button>
      {open && <ServicePickerModal onClose={() => setOpen(false)} />}
    </>
  );
}

// Buton WhatsApp cu serviciul precompletat (pentru paginile de servicii:
// nu mai e nevoie de selector, mesajul se referă direct la serviciul paginii).
export function WhatsAppServiceButton({ service }: { service: string }) {
  return (
    <button
      onClick={() => openWhatsApp(service)}
      className="inline-flex items-center justify-center gap-3 border-2 border-[#25D366]/50 text-gray-800 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white px-12 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
    >
      <WhatsAppIcon className="w-4 h-4" />
      Programare WhatsApp
    </button>
  );
}

// Bulină WhatsApp plutitoare, vizibilă pe toate paginile.
export function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Programare pe WhatsApp"
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 flex items-center justify-center"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </button>
      {open && <ServicePickerModal onClose={() => setOpen(false)} />}
    </>
  );
}
