import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="pt-24 md:pt-28 pb-20 md:pb-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>

          <h2 className="elegant-title text-4xl md:text-6xl mb-6 text-gray-900">
            Bine ai venit la<br />
            <span className="text-gradient">Raffaella Beauty</span>
          </h2>
          
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-12" />
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8" style={{ fontWeight: 300, lineHeight: 1.8 }}>
            Raffaella Beauty Studio redefinește conceptul de frumusețe prin eleganță, precizie și atenție la detalii. 
            Într-un spațiu modern și rafinat, fiecare serviciu este conceput pentru a oferi o experiență personalizată, 
            folosind produse profesionale și tehnologii de ultimă generație.
          </p>
          
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ fontWeight: 300, lineHeight: 1.8 }}>
            Aici, frumusețea devine un ritual al feminității, creat pentru femeia care apreciază calitatea, 
            luxul și rezultatele impecabile.
          </p>

          {/* Decorative Bottom Line */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
