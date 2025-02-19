"use client";

import { motion } from "framer-motion";
import { Clock, Leaf, Shield, CreditCard } from "lucide-react";
import Image from "next/image";

const translations = {
  EN: {
    heading: "Why Choose XMAS HUT?",
    subtext:
      "Experience the perfect blend of tradition and innovation with our collapsible Christmas chalets.",
    features: [
      {
        icon: Leaf,
        title: "Eco-Friendly",
        description:
          "1 Chalet Bought = 2 Trees Planted. Supporting sustainable Christmas markets",
        bgImage: "/ef.png",
      },
      {
        icon: Clock,
        title: "Quick Setup",
        description:
          "Assemble your chalet in less than 10 minutes with our innovative design",
        bgImage: "/qs.png",
      },
      {
        icon: Shield,
        title: "Weatherproof",
        description:
          "UV-resistant, fireproof, and built to withstand harsh weather conditions",
        bgImage: "/wp.png",
      },
      {
        icon: CreditCard,
        title: "Flexible Options",
        description:
          "Choose between rental and purchase options to suit your needs",
        bgImage: "/fo.png",
      },
    ],
  },
  FR: {
    heading: "Pourquoi choisir XMAS HUT?",
    subtext:
      "Découvrez le parfait équilibre entre tradition et innovation avec nos chalets de Noël pliables.",
    features: [
      {
        icon: Leaf,
        title: "Écologique",
        description:
          "1 chalet acheté = 2 arbres plantés. Soutenir les marchés de Noël durables",
        bgImage: "/ef.png",
      },
      {
        icon: Clock,
        title: "Installation rapide",
        description:
          "Assemblez votre chalet en moins de 10 minutes grâce à notre conception innovante",
        bgImage: "/qs.png",
      },
      {
        icon: Shield,
        title: "Résistant aux intempéries",
        description:
          "Résistant aux UV, ignifuge et conçu pour faire face aux conditions météorologiques difficiles",
        bgImage: "/wp.png",
      },
      {
        icon: CreditCard,
        title: "Options flexibles",
        description:
          "Choisissez entre la location et l'achat selon vos besoins",
        bgImage: "/fo.png",
      },
    ],
  },
};

export default function Features({ currentLang }) {
  const text = translations[currentLang] || translations["EN"];

  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-28 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-xl font-bold mb-4">{text.heading}</h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          {text.subtext}
        </p>
      </motion.div>

      <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-8xl max-lg:grid-cols-2 max-sm:flex flex-col mx-auto lg:h-[600px]">
        {text.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl shadow-lg min-h-60 w-full bg-white 
                ${index === 0 ? "col-span-2 row-span-2" : ""}
                ${index === 1 || index === 2 ? "col-span-1 row-span-1" : ""}
                ${index === 3 ? "col-span-2 row-span-1" : ""}
              `}
          >
            <Image
              src={feature.bgImage || "/placeholder.svg"}
              alt={feature.title}
              layout="fill"
              objectFit="cover"
              quality={80}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 p-6 flex flex-col justify-end">
              <div className="w-12 h-12 bg-[#E53E3E] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg max-sm:text-base font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
