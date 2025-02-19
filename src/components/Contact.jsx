import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-32 bg-white">
      <div className="">
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
                <h2 className="text-3xl mb-4 font-yellow-tail">Get In Touch</h2>
                <p className="text-base text-gray-600 max-w-2xl">
                  Ready to transform your Christmas market? We're here to help!
                </p>
              </motion.div>
              <div>
                <h3 className="text-lg font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+3227810229"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#E53E3E] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +32 2 781 02 29
                  </a>
                  <a
                    href="mailto:info@xmashut.eu"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#E53E3E] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@xmashut.eu
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    46 Boulevard de la Woluwe, 1200 Brussels
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Opening Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
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
                    Name
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
                    Email
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
                  Subject
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
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
