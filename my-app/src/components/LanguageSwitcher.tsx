import { CiGlobe } from "react-icons/ci"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
  };

  return (
        <CiGlobe 
            onClick={() => handleLanguageChange('en' === language ? 'ru' : 'en')}
            className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"
            />
  );
};

export default LanguageSwitcher;