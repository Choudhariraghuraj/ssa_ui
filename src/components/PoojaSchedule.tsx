import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PoojaSchedule: React.FC = () => {
  const { t } = useTranslation();

  const poojaSchedule = [
    {
      title: t('pooja.suprabhatha.title'),
      time: t('pooja.suprabhatha.time'),
      description: t('pooja.suprabhatha.description'),
    },
    {
      title: t('pooja.abhishekam.title'),
      time: t('pooja.abhishekam.time'),
      description: t('pooja.abhishekam.description'),
    },
    {
      title: t('pooja.archana.title'),
      time: t('pooja.archana.time'),
      description: t('pooja.archana.description'),
    },
    {
      title: t('pooja.maha.title'),
      time: t('pooja.maha.time'),
      description: t('pooja.maha.description'),
    },
    {
      title: t('pooja.deeparadhana.title'),
      time: t('pooja.deeparadhana.time'),
      description: t('pooja.deeparadhana.description'),
    },
    {
      title: t('pooja.harathi.title'),
      time: t('pooja.harathi.time'),
      description: t('pooja.harathi.description'),
    },
  ];

  return (
    <div className="bg-[#1e1e2f] text-white py-16 px-4">
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold text-gold mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {t('pooja.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {poojaSchedule.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-xl bg-primary/80 border border-gold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-transparent text-white shadow-none">
              <CardContent>
                <Typography variant="h6" className="text-gold font-semibold">
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" className="text-sm text-gray-300 mt-1">
                  {item.time}
                </Typography>
                <Typography className="text-sm text-gray-200 mt-2">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PoojaSchedule;
