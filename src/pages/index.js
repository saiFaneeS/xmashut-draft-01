import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DiscoverChalets3D from "@/components/DiscoverChalets3d";
import { useState } from "react";

const translations = {
  EN: {
    title: "first draft | Xmas Hut",
    description:
      "Rent or buy collapsible Christmas chalets for your events. Easy assembly in minutes!",
  },
  FR: {
    title: "premier brouillon | Chalet de Noël",
    description:
      "Louez ou achetez des chalets de Noël pliables pour vos événements. Assemblage facile en quelques minutes !",
  },
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState("FR");

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <>
      <Head>
        <title>{translations[currentLang].title}</title>
        <meta
          name="description"
          content={translations[currentLang].description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
        <Hero currentLang={currentLang} />
        <Products currentLang={currentLang} />
        <DiscoverChalets3D currentLang={currentLang} />
        <Features currentLang={currentLang} />
        <Contact currentLang={currentLang} />
        <Footer currentLang={currentLang} />
        <div className="bg-black/90 text-white fixed px-4 py-2 right-4 bottom-4 z-50 text-base">
          draft 01
        </div>
      </div>
    </>
  );
}
