import React, { createContext, useState, useContext, useEffect, ReactNode} from 'react';
import i18n from '../i18n';

interface LanguageContextType {
    language: string;
    changeLanguage: (lang: string) => void;
  }
  
  const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    changeLanguage: () => {},
  });
  
  interface LanguageProviderProps {
    children: ReactNode;
  }
  
  export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState(i18n.language);
  
    useEffect(() => {
      const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
      };
  
      i18n.on('languageChanged', handleLanguageChange);
  
      return () => {
        i18n.off('languageChanged', handleLanguageChange);
      };
    }, []);
  
    const changeLanguage = (lang: string) => {
      i18n.changeLanguage(lang);
    };
  
    return (
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };
  
  export const useLanguage = () => useContext(LanguageContext);