import { MoveUpRight, Rotate3D } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const translations = {
  EN: {
    title: "DISCOVER OUR CHALETS IN 3D",
    explore: "Explore All Chalets",
  },
  FR: {
    title: "DÉCOUVREZ NOS CHALETS EN 3D",
    explore: "Explorer Tous les Chalets",
  },
};

const DiscoverChalets3D = ({ currentLang }) => {
  const text = translations[currentLang] || translations["EN"];

  return (
    <section className="py-16 bg-gradient-to-t from-green-700 to-green-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg1.png')] bg-no-repeat bg-cover opacity-10 contrast-150"></div>
      <Image
        src="/grid.png"
        alt=""
        height="1000"
        width="1000"
        className="h-full w-full object-cover contrast-200 brightness-50 scale-125 absolute inset-0 opacity-20"
      />
      <div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-center mb-8 text-white flex gap-4 items-center justify-center">
            {text.title}
            <Rotate3D size={30} />
          </h2>
        </motion.div>
        <div className="relative h-[60vh] max-sm:h-[50vh] rounded-lg ring-[1px] ring-white flex items-center justify-center border-neutral-400 lg:aspect-video overflow-hidden shadow-2xl mx-auto">
          <iframe
            src="https://kuula.co/share/collection/7Fp0G?logo=1&info=1&fs=1&vr=0&thumbs=1&inst=0&iosfs=1"
            className="absolute w-full h-full p-2 rounded-xl"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#"
            className="btn btn-secondary flex items-center gap-2 hover:gap-4 transition-all duration-75"
          >
            {text.explore} <MoveUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverChalets3D;
