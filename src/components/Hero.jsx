import { Phone, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 brightness-50 bg-green-700">
        <Image
          src="/bg1.png"
          alt="Christmas Market Chalet"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-screen pt-20 flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-28">
        <div className="">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-2 max-sm:mb-1 text-[#E53E3E] text-xl font-yellow-tail"
              >
                Rent and Purchase
              </motion.div>
              <motion.h1
                className="text-2xl font-bold mb-6 leading-tight text-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Collapsible Christmas Chalets
              </motion.h1>
              <motion.p
                className="text-base mb-8 text-gray-200 max-sm:text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Transform your event with our easy-to-assemble Christmas market
                chalets. Setup in minutes, create memories for a lifetime.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button className="btn btn-primary group">
                  Claim Free Offer{" "}
                  <ArrowRight className="ml-2 group-hover:ml-3 transition-all" />
                </button>
                <button className="btn btn-secondary">View Our Chalets</button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block"
            >
              <div className="relative -bottom-12 -right-28 scale-105 h-full aspect-square">
                <Image
                  src="/main7.png"
                  alt="Christmas Chalet"
                  fill
                  className="object-fit h-full w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
