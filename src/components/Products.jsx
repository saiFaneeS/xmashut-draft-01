import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Maximize } from "lucide-react";

const products = {
  EN: [
    {
      title: "Chalet 3x2m",
      image: "/c1.png",
      features: [
        "Perfect for small vendors",
        "Easy transport & storage",
        "Setup in 8 minutes",
        "Optional heating system",
      ],
      price: "€2,999",
    },
    {
      title: "Chalet 4x2m",
      image: "/c2.png",
      features: [
        "Ideal for larger displays",
        "Enhanced storage space",
        "Setup in 10 minutes",
        "Integrated lighting system",
      ],
      price: "€3,999",
    },
  ],
  FR: [
    {
      title: "Chalet 3x2m",
      image: "/c1.png",
      features: [
        "Parfait pour les petits vendeurs",
        "Transport et stockage faciles",
        "Installation en 8 minutes",
        "Système de chauffage en option",
      ],
      price: "2 999 €",
    },
    {
      title: "Chalet 4x2m",
      image: "/c2.png",
      features: [
        "Idéal pour les grandes expositions",
        "Espace de stockage amélioré",
        "Installation en 10 minutes",
        "Système d'éclairage intégré",
      ],
      price: "3 999 €",
    },
  ],
};

export default function Products({ currentLang }) {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-28 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-xl font-bold mb-4">
          {currentLang === "EN"
            ? "2 FORMATS OF KIOSKS AVAILABLE"
            : "2 FORMATS DE KIOSQUES DISPONIBLES"}
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          {currentLang === "EN"
            ? "2 kiosk formats available for Christmas markets, fairs, and events"
            : "2 formats de kiosques disponibles pour les marchés de Noël, foires et événements"}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {products[currentLang]?.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative w-full aspect-video border-b">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <button className="bg-green-800/20 p-2 rounded-full shadow-lg hover:bg-green-700/10 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-4">{product.title}</h3>
              <ul className="space-y-3 mb-6 grid grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <ArrowRight className="w-4 h-4 text-[#E53E3E]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="btn btn-primary">
                  {currentLang === "EN" ? "Learn More" : "En savoir plus"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
