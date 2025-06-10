import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#1e1e2f] text-white overflow-hidden pt-16 pb-10 px-6 border-t border-[#cd8500] mt-12">
      {/* Mandala Background SVG */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 3 }}
      >
        <img src="/assets/mandala.jpg" alt="Mandala" className="w-full h-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Temple Info */}
        <div>
          <motion.h2
            className="text-2xl font-bold text-[#cd8500]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {t('footer.templeName')}
          </motion.h2>
          <p className="mt-3 text-gray-300">{t('footer.templeDescription')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#cd8500] mb-3">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#cd8500] transition">{t('footer.links.home')}</Link></li>
            <li><Link to="/about" className="hover:text-[#cd8500] transition">{t('footer.links.about')}</Link></li>
            <li><Link to="/donate" className="hover:text-[#cd8500] transition">{t('footer.links.donate')}</Link></li>
            <li><Link to="/contact" className="hover:text-[#cd8500] transition">{t('footer.links.contact')}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#cd8500] mb-3">{t('footer.contact')}</h3>
          <p>
            {t('footer.email')}:
            <a href="mailto:info@ayyappatemple.com" className="hover:text-[#cd8500]"> info@ayyappatemple.com</a>
          </p>
          <p>
            {t('footer.phone')}:
            <a href="tel:+911234567890" className="hover:text-[#cd8500]"> +91 12345 67890</a>
          </p>
          <p>{t('footer.location')}: Sabarimala, Kerala</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-[#cd8500] mb-3">{t('footer.subscribe')}</h3>
          <p className="text-gray-300 mb-3">{t('footer.subscribePrompt')}</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#cd8500] text-black font-bold px-4 py-2 rounded hover:scale-105 transition-transform"
            >
              {t('footer.subscribeBtn')}
            </button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="relative z-10 mt-10 text-center">
        <div className="flex justify-center space-x-6 text-[#cd8500] text-xl">
          <a href="#"><Facebook fontSize="inherit" /></a>
          <a href="#"><Instagram fontSize="inherit" /></a>
          <a href="#"><YouTube fontSize="inherit" /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-6 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
