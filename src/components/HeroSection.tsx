import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: `url('/assets/background.jpg')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gold drop-shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-2xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Link to="/donate">
            <Button
              variant="contained"
              className="bg-gold text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              {t('hero.donate')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
