import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const translations = {
  EN: {
    title: "Get In Touch",
    description:
      "Ready to transform your Christmas market? We're here to help!",
    contactInfo: "Contact Information",
    openingHours: "Opening Hours",
    days: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
  },
  FR: {
    title: "Contactez-nous",
    description:
      "Prêt à transformer votre marché de Noël ? Nous sommes là pour vous aider !",
    contactInfo: "Informations de contact",
    openingHours: "Heures d'ouverture",
    days: [
      "Lundi - Vendredi : 9h00 - 18h00",
      "Samedi : 10h00 - 16h00",
      "Dimanche : Fermé",
    ],
    form: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
    },
  },
};

export default function Contact({ currentLang }) {
  const text = translations[currentLang] || translations["EN"];

  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-28 bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl mb-4 font-yellow-tail">{text.title}</h2>
              <p className="text-sm text-gray-600 max-w-2xl">
                {text.description}
              </p>
            </motion.div>
            <div>
              <h3 className="text-base font-bold mb-6">{text.contactInfo}</h3>
              <div className="space-y-4">
                <a
                  href="tel:+3227810229"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#E53E3E] transition-colors"
                >
                  <Phone className="w-5 h-5" /> +32 2 781 02 29
                </a>
                <a
                  href="mailto:info@xmashut.eu"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#E53E3E] transition-colors"
                >
                  <Mail className="w-5 h-5" /> info@xmashut.eu
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" /> 46 Boulevard de la Woluwe, 1200
                  Brussels
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold mb-6">{text.openingHours}</h3>
              <div className="space-y-2 text-gray-600">
                {text.days.map((day, index) => (
                  <p key={index}>{day}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-8 max-sm:p-4 rounded-lg"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {text.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {text.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {text.form.subject}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {text.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn btn-primary">
              {text.form.send}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
