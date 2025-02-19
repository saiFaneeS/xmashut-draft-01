import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";

const translations = {
  EN: {
    home: "HOME",
    tariffs: "TARIFFS",
    gallery: "GALLERY",
    chalets: "OUR CHALETS",
    mounting: "MOUNTING",
    more: "MORE",
    about: "About Us",
    faq: "FAQ",
    contact: "Contact",
  },
  FR: {
    home: "ACCUEIL",
    tariffs: "TARIFS",
    gallery: "GALERIE",
    chalets: "NOS CHALETS",
    mounting: "MONTAGE",
    more: "PLUS",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
  },
};

export default function Navbar({ currentLang, changeLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-6 sm:px-12 md:px-16 lg:px-28 bg-white/95 backdrop-blur-sm shadow-lg transition-transform duration-300 text-xs ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center h-16">
        <Link href={"/"} className="h-10 invert">
          <Image
            className="h-full w-full object-contain"
            src={"/logo.png"}
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-[#E53E3E] transition-colors"
          >
            {translations[currentLang].home}
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#E53E3E] transition-colors"
          >
            {translations[currentLang].tariffs}
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#E53E3E] transition-colors"
          >
            {translations[currentLang].gallery}
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#E53E3E] transition-colors"
          >
            {translations[currentLang].chalets}
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#E53E3E] transition-colors"
          >
            {translations[currentLang].mounting}
          </Link>

          {/* More Dropdown */}
          <div className="relative group">
            <div
              className="flex items-center cursor-pointer text-gray-600 hover:text-[#E53E3E] transition-colors"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span>{translations[currentLang].more}</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                >
                  {translations[currentLang].about}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                >
                  {translations[currentLang].faq}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                >
                  {translations[currentLang].contact}
                </Link>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-600 hover:text-[#E53E3E] transition-colors"
              onClick={() => setLangDropdown(!langDropdown)}
            >
              <Globe className="w-5 h-5" />
              <span>{currentLang}</span>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-24 bg-white rounded-lg shadow-lg py-2 ${
                langDropdown ? "visible" : "hidden"
              }`}
            >
              <button
                onClick={() => [
                  changeLanguage("EN"),
                  setLangDropdown(!langDropdown),
                ]}
                className={`block w-full px-4 py-2 text-left ${
                  currentLang === "EN"
                    ? "font-bold text-[#E53E3E]"
                    : "text-gray-600"
                } hover:bg-gray-100`}
              >
                English
              </button>
              <button
                onClick={() => [
                  changeLanguage("FR"),
                  setLangDropdown(!langDropdown),
                ]}
                className={`block w-full px-4 py-2 text-left ${
                  currentLang === "FR"
                    ? "font-bold text-[#E53E3E]"
                    : "text-gray-600"
                } hover:bg-gray-100`}
              >
                Français
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 hover:text-[#E53E3E] transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 w-[320px] h-screen bg-white shadow-2xl lg:hidden"
            >
              <div className="flex justify-between items-center p-5 border-b">
                <span className="text-lg font-bold text-[#E53E3E]">MENU</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-[#E53E3E] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4">
                {Object.entries(translations[currentLang]).map(
                  ([key, label]) => (
                    <Link
                      key={key}
                      href="#"
                      className="block px-5 py-3 text-gray-600 hover:text-[#E53E3E] hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  )
                )}

                <button
                  onClick={() =>
                    changeLanguage(currentLang === "EN" ? "FR" : "EN")
                  }
                  className="flex items-center space-x-2 w-full px-5 py-3 text-gray-600 hover:text-[#E53E3E] hover:bg-gray-50 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>{currentLang === "EN" ? "Français" : "English"}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
