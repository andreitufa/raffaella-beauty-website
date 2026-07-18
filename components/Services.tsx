import { motion } from "motion/react";
import { Link } from "react-router-dom";
const epilareImg = "/assets/epilare-definitiva.jpeg";
const extensiiGeneImg = "/assets/extensii-gene.jpeg";
const tratamenteFacialeImg = "/assets/tratamente-faciale.jpeg";
const laminareImg = "/assets/laminare-gene.jpeg";
const scanareTenImg = "/assets/scanare-ten.jpeg";

const services = [
  {
    title: "Epilare Definitivă",
    subtitle: "Infinity Laser Pro",
    description: "Tehnologie laser de ultimă generație pentru rezultate sigure pe toate tipurile de ten. O investiție în frumusețea ta de durată.",
    image: epilareImg,
    link: "/preturi/epilare-definitiva"
  },
  {
    title: "Extensii de Gene",
    subtitle: "Privire Magnetică",
    description: "Extensii de gene realizate cu tehnici avansate și materiale de top, pentru o privire intensă și perfect echilibrată între naturalețe și rafinament.",
    image: extensiiGeneImg,
    link: "/preturi/extensii-gene"
  },
  {
    title: "Tratamente Faciale",
    subtitle: "Oxigenera Pro",
    description: "Tratamente faciale premium cu oxigen activ, ce redau pielii luminozitatea, fermitatea și hidratarea perfectă. O experiență de revitalizare completă pentru un ten impecabil.",
    image: tratamenteFacialeImg,
    link: "/preturi/tratamente-faciale"
  },
  {
    title: "Laminare Gene & Sprâncene",
    subtitle: "Definiție Perfectă",
    description: "Rezultate naturale și de durată pentru gene și sprâncene impecabil aranjate. Privire expresivă fără efort zilnic.",
    image: laminareImg,
    link: "/preturi/laminare-gene"
  },
  {
    title: "Scanare Ten",
    subtitle: "Skin Doctor",
    description: "Analiză completă și precisă a tenului cu tehnologie avansată. Diagnosticare profesională pentru tratamente personalizate.",
    image: scanareTenImg,
    link: "/preturi/scanare-ten"
  }
];

export function Services() {
  return (
    <section id="servicii" className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
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
            Servicii Premium
          </h2>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Tratamente personalizate cu tehnologie de ultimă generație
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className={`flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <Link 
                to={service.link}
                className={`relative group order-2 md:order-none ${index % 2 === 1 ? 'md:col-start-2' : ''} cursor-pointer`}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-white">
                  {/* Golden Frame Effect */}
                  <div className="absolute inset-0 border border-[var(--gold)]/20 z-10" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full transition-transform duration-700 ${
                      index === services.length - 1 
                        ? 'object-contain p-4 group-hover:scale-100' 
                        : 'object-cover group-hover:scale-105'
                    }`}
                  />
                  
                  {/* Elegant Overlay with "Vezi Prețuri" */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <span className="text-white text-sm tracking-[0.2em] uppercase border border-white/50 px-6 py-3 backdrop-blur-sm">
                      Vezi Prețuri
                    </span>
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[var(--gold)]/30" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[var(--gold)]/30" />
              </Link>

              {/* Content */}
              <div className={`order-1 md:order-none ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="max-w-lg"
                >
                  {/* Number Badge */}
                  <div className="inline-block mb-6">
                    <span className="text-[var(--gold)] text-7xl elegant-title">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-4 uppercase">
                    {service.subtitle}
                  </p>
                  
                  <h3 className="elegant-title text-3xl md:text-5xl mb-8 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <div className="w-16 h-px bg-[var(--gold)] mb-8" />
                  
                  <p className="text-gray-600 text-lg leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
