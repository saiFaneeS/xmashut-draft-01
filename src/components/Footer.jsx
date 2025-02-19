import { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const content = {
  EN: {
    company: "X-MAS HUT",
    description:
      "Transform your Christmas market with our innovative collapsible chalets.",
    sections: {
      products: "Products",
      company: "Company",
      support: "Support",
    },
    links: {
      products: [
        "Chalet 3x2m",
        "Chalet 4x2m",
        "Accessories",
        "Custom Solutions",
      ],
      company: ["About Us", "How It Works", "Testimonials", "Contact"],
      support: ["FAQ", "Shipping Policy", "Returns", "Privacy Policy"],
    },
    legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    rights: "© 2024 X-MAS HUT. All rights reserved.",
  },
  FR: {
    company: "X-MAS HUT",
    description:
      "Transformez votre marché de Noël avec nos chalets pliables innovants.",
    sections: {
      products: "Produits",
      company: "Entreprise",
      support: "Support",
    },
    links: {
      products: [
        "Chalet 3x2m",
        "Chalet 4x2m",
        "Accessoires",
        "Solutions personnalisées",
      ],
      company: ["À propos", "Comment ça marche", "Témoignages", "Contact"],
      support: [
        "FAQ",
        "Politique d'expédition",
        "Retours",
        "Politique de confidentialité",
      ],
    },
    legal: [
      "Conditions d'utilisation",
      "Politique de confidentialité",
      "Politique de cookies",
    ],
    rights: "© 2024 X-MAS HUT. Tous droits réservés.",
  },
};

export default function Footer({ currentLang }) {
  const t = content[currentLang];

  return (
    <footer className="bg-gray-950 px-6 sm:px-12 md:px-16 lg:px-28 text-white">
      <div className="grid md:grid-cols-4 gap-12 py-16">
        <div className="space-y-4">
          <h3 className="text-base font-bold">{t.company}</h3>
          <p className="text-gray-400">{t.description}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#E53E3E] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#E53E3E] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#E53E3E] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {["products", "company", "support"].map((section) => (
          <div key={section}>
            <h3 className="text-sm font-semibold mb-4">
              {t.sections[section]}
            </h3>
            <ul className="space-y-2">
              {t.links[section].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {t.legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
