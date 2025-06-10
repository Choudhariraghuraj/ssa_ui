import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white mt-3 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-[#cd8500]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Ayyappa Swamy Temple
        </motion.h1>

        <motion.p
          className="text-lg leading-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nestled in the heart of our community, the Ayyappa Swamy Temple is a divine sanctuary
          dedicated to Lord Ayyappa, the embodiment of dharma, devotion, and discipline. This
          sacred space was envisioned as a spiritual haven where devotees can connect with
          Swamy Ayyappa through daily poojas, festivals, and meditation.
        </motion.p>

        <motion.p
          className="text-lg leading-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Lord Ayyappa, the son of Lord Shiva and Mohini (an incarnation of Lord Vishnu), is known
          as the protector of dharma and a symbol of unity between Shaivites and Vaishnavites.
          The chant “Swamiye Saranam Ayyappa” echoes devotion, surrender, and strength.
        </motion.p>

        <motion.p
          className="text-lg leading-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          This temple stands as a beacon of light for spiritual seekers, a center for religious
          learning, and a unifying space for community. With your continued support, we aim to
          complete the temple's construction and host vibrant poojas and festivals that uplift the soul.
        </motion.p>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-[#cd8500] text-xl font-semibold">
            Swamiye Saranam Ayyappa 🙏
          </span>
        </motion.div>
      </div>
    </div>
  );
}
