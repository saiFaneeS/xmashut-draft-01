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
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "#", label: "TARIFFS" },
  { href: "#", label: "GALLERY" },
  { href: "#", label: "OUR CHALETS" },
  { href: "#", label: "MOUNTING" },
  {
    href: "#",
    label: "MORE",
    dropdownItems: [
      { href: "#", label: "About Us" },
      { href: "#", label: "FAQ" },
      { href: "#", label: "Contact" },
    ],
  },
];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
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
        {/* Logo */}
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
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
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
            <button className="flex items-center space-x-2 text-gray-600 hover:text-[#E53E3E] transition-colors">
              <Globe className="w-5 h-5" />
              <span>{currentLang}</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-24 bg-white rounded-lg shadow-lg py-2">
              <button
                onClick={() => changeLanguage("EN")}
                className={`block w-full px-4 py-2 text-left ${
                  currentLang === "EN"
                    ? "font-bold text-[#E53E3E]"
                    : "text-gray-600"
                } hover:bg-gray-100`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("FR")}
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-gray-600 hover:text-[#E53E3E] transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar */}
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
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdownItems ? (
                      <div
                        className="flex flex-col px-5 py-2 cursor-pointer text-gray-600 hover:text-[#E53E3E] transition-colors"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <div className="flex items-center gap-2">
                          <span>{link.label}</span>
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </div>

                        {/* Dropdown Menu */}
                        <div
                          className={`mt-2 w-48 bg-white rounded-md border shadow-lg py-2 transition-all duration-200 ${
                            isDropdownOpen
                              ? "opacity-100 scale-100 visible"
                              : "opacity-0 scale-0 invisible absolute"
                          }`}
                        >
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2 text-gray-600 hover:text-[#E53E3E] hover:bg-gray-50"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-5 py-3 text-gray-600 hover:text-[#E53E3E] hover:bg-gray-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 w-full px-5 py-3 text-gray-600 hover:text-[#E53E3E] hover:bg-gray-50 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>{currentLang === "EN" ? "English" : "Français"}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
