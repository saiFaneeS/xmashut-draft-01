"use client";

import { motion } from "framer-motion";
import { Clock, Leaf, Shield, CreditCard } from "lucide-react";
import Image from "next/image";

const features = [
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
];

export default function Features() {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-32 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Why Choose XMAS HUT?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the perfect blend of tradition and innovation with our
          collapsible Christmas chalets
        </p>
      </motion.div>

      <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-8xl max-lg:grid-cols-2 max-sm:flex flex-col mx-auto lg:h-[600px]">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl shadow-lg min-h-60 bg-white p-6 
                ${index === 0 ? "col-span-2 row-span-2" : ""}
                ${index === 1 || index === 2 ? "col-span-1 row-span-1 " : ""}
                ${index === 3 ? "col-span-2 row-span-1" : ""}
              `}
          >
            <Image
              src={feature.bgImage || "/placeholder.svg"}
              alt={feature.title}
              layout="fill"
              objectFit="cover"
              className="z-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 p-6 flex flex-col justify-end">
              <div className="w-12 h-12 bg-[#E53E3E] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
