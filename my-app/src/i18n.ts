import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
};

const defaultLanguage = localStorage.getItem('language') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;