import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { trackBookingConversion } from "./GoogleAds";
import { WhatsAppServiceButton } from "./WhatsAppBooking";
const logoFull = "/assets/logo-raffaella.png";

interface PricingItem {
  name: string;
  price: string;
  duration?: string;
  description?: string;
}

interface ServicePricingProps {
  serviceName: string;
  subtitle: string;
  image: string;
  items: PricingItem[];
  imageContain?: boolean;
}

export function ServicePricing({ serviceName, subtitle, image, items, imageContain = false }: ServicePricingProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo Section - Sticky Header */}
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

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
        <Link 
          to="/#servicii"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--gold)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wider uppercase" style={{ fontWeight: 300 }}>Înapoi la Servicii</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>

          <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-4 uppercase">
            {subtitle}
          </p>
          
          <h1 className="elegant-title text-4xl md:text-6xl mb-6 text-gray-900">
            {serviceName}
          </h1>
          
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Lista de prețuri pentru tratamente premium
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-white">
              <div className="absolute inset-0 border border-[var(--gold)]/20 z-10" />
              <img
                src={image}
                alt={serviceName}
                className={`w-full h-full ${imageContain ? 'object-contain p-4' : 'object-cover'}`}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[var(--gold)]/30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[var(--gold)]/30" />
          </motion.div>

          {/* Pricing List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50/50 to-white border border-gray-200/50 hover:border-[var(--gold)]/30 p-6 transition-all duration-300"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[var(--gold)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg mb-2 text-gray-900" style={{ fontWeight: 400, letterSpacing: '0.05em' }}>
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-500 mb-2" style={{ fontWeight: 300 }}>
                        {item.description}
                      </p>
                    )}
                    {item.duration && (
                      <p className="text-xs text-[var(--gold)] uppercase tracking-wider" style={{ fontWeight: 300 }}>
                        {item.duration}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-gray-900 elegant-title">
                      {item.price}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1" style={{ fontWeight: 300 }}>
                      RON
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-600 mb-8" style={{ fontWeight: 300 }}>
            Programează-te acum pentru o experiență de înfrumusețare de excepție
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppServiceButton service={serviceName} />
            <a
              href="https://www.notino.ro/saloane/raffaella-beauty-studio/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackBookingConversion(1);
              }}
              className="inline-block border-2 border-[var(--gold)] text-gray-800 hover:bg-[var(--gold)] hover:text-white px-12 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
            >
              Programează-te Acum
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
