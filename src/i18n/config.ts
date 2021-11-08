import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import plTranslation from './pl/translation.json';
import enTranslation from './en/translation.json';

const resources = {
  pl: {
    translation: plTranslation,
  },
  en: {
    translation: enTranslation,
  },
} as const;

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: 'pl',
  resources,
});

export default resources;
