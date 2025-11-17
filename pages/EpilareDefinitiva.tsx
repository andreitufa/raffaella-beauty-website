import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
const logoFull = "/assets/logo-raffaella.png";
const epilareImg = "/assets/epilare-definitiva.jpeg";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { trackPriceListView } from "../components/Analytics";
import { trackBookingConversion } from "../components/GoogleAds";

interface PricingItem {
  name: string;
  price: string;
  description?: string;
}

export function EpilareDefinitiva() {
  // Track page view
  React.useEffect(() => {
    trackPriceListView("Epilare Definitivă");
  }, []);

  const femeiItems: PricingItem[] = [
    {
      name: "Full Face",
      price: "200"
    },
    {
      name: "Mustață",
      price: "80"
    },
    {
      name: "Bărbie",
      price: "80"
    },
    {
      name: "Perciuni",
      price: "80"
    },
    {
      name: "Axilă",
      price: "110"
    },
    {
      name: "Brațe Integral",
      price: "130"
    },
    {
      name: "Brațe Scurt",
      price: "100"
    },
    {
      name: "Lombar",
      price: "110"
    },
    {
      name: "Linie Abdomen",
      price: "80"
    },
    {
      name: "Interfesieri",
      price: "80"
    },
    {
      name: "Inghinal",
      price: "110"
    },
    {
      name: "Linie Bikini",
      price: "80"
    },
    {
      name: "Picioare Integral",
      price: "190"
    },
    {
      name: "Coapse",
      price: "130"
    },
    {
      name: "Gambe",
      price: "110"
    },
    {
      name: "Full Body",
      price: "450",
      description: "Axilă, inghinal total, picioare lung, interfesieri, brațe lung, degete mâini/picioare"
    }
  ];

  const barbatiItems: PricingItem[] = [
    {
      name: "Contur Barbă",
      price: "200"
    },
    {
      name: "Axilă",
      price: "130"
    },
    {
      name: "Piept + Umeri",
      price: "150"
    },
    {
      name: "Brațe Lung",
      price: "180"
    },
    {
      name: "Spate",
      price: "280"
    },
    {
      name: "Abdomen",
      price: "150"
    },
    {
      name: "Picioare Integral",
      price: "280"
    },
    {
      name: "Coapse",
      price: "180"
    },
    {
      name: "Gambe",
      price: "180"
    }
  ];

  const PricingCard = ({ item, index }: { item: PricingItem; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
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
            <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
              {item.description}
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
  );

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
            Infinity Laser Pro
          </p>
          
          <h1 className="elegant-title text-4xl md:text-6xl mb-6 text-gray-900">
            Epilare Definitivă
          </h1>
          
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Lista de prețuri pentru tratamente premium
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mb-20"
        >
          <div className="relative aspect-[3/2] overflow-hidden bg-white">
            <div className="absolute inset-0 border border-[var(--gold)]/20 z-10" />
            <img
              src={epilareImg}
              alt="Epilare Definitivă"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[var(--gold)]/30" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[var(--gold)]/30" />
        </motion.div>

        {/* Pricing Sections */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* FEMEI Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="elegant-title text-3xl mb-4 text-gray-900">
                Femei
              </h2>
              <div className="w-16 h-px bg-[var(--gold)] mx-auto" />
            </div>
            <div className="space-y-4">
              {femeiItems.map((item, index) => (
                <PricingCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* BARBATI Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="elegant-title text-3xl mb-4 text-gray-900">
                Bărbați
              </h2>
              <div className="w-16 h-px bg-[var(--gold)] mx-auto" />
            </div>
            <div className="space-y-4">
              {barbatiItems.map((item, index) => (
                <PricingCard key={index} item={item} index={index} />
              ))}
            </div>
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
        </motion.div>
      </div>
    </div>
  );
}
