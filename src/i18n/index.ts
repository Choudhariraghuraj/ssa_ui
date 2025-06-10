import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import kn from './locales/kn.json';
import ml from './locales/ml.json';
import te from './locales/te.json';
import ta from './locales/ta.json';
import hi from './locales/hi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kn: { translation: kn },
      ml: { translation: ml },
      te: { translation: te },
      ta: { translation: ta },
      hi: { translation: hi },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
