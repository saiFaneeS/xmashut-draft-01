import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DiscoverChalets3D from "@/components/DiscoverChalets3d";

export default function Home() {
  return (
    <>
      <Head>
        <title>first draft | Xmas Hut</title>
        <meta
          name="description"
          content="Rent or buy collapsible Christmas chalets for your events. Easy assembly in minutes!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Navbar />
        <Hero />
        <Products />
        <DiscoverChalets3D />
        <Features />
        <Contact />
        <Footer />
        <div className="bg-black/90 text-white fixed px-4 py-2 right-4 bottom-4 z-50 text-base">
          draft 01
        </div>
      </div>
    </>
  );
}
