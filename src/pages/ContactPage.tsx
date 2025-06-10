import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1e1e2f] mt-6 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-[#cd8500] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Ayyappa Swamy Temple
        </motion.h1>

        {/* Contact Info & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl text-[#cd8500] font-semibold">Temple Address</h2>
            <p>123, Swamy Ayyappa Street,<br />Your Local Area, City - 123456</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> ayyappatemple@example.com</p>
          </motion.div>

          <motion.div
            className="w-full h-64 md:h-full rounded-xl overflow-hidden border-2 border-[#cd8500]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <iframe
              title="Temple Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!4v1745408472215!6m8!1m7!1sd0D-vIviigXBCRKziq7cxg!2m2!1d15.12442204715547!2d75.45816429661764!3f0!4f0!5f1.1924812503605782"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <label className="block mb-1 text-[#cd8500]">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#cd8500]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-[#cd8500]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#cd8500]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-[#cd8500]">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#cd8500]"
              required
            ></textarea>
          </div>
          <Button
              variant="contained"
              className="bg-gold text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Send Message
            </Button>
        </motion.form>
      </div>
    </div>
  );
}
