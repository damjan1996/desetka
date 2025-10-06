'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, DEFAULT_LANGUAGE, STORAGE_KEY } from '@/lib/i18n/config';
import { TranslationKeys, translations } from '@/lib/i18n/translations';

interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: TranslationKeys;
  isClient: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [isClient, setIsClient] = useState(false);

  // Load saved language from localStorage on client-side
  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language;
      if (savedLanguage && savedLanguage in translations) {
        setCurrentLanguage(savedLanguage);
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.slice(0, 2) as Language;
        if (browserLang in translations) {
          setCurrentLanguage(browserLang);
        }
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, language);
      // Update document language
      document.documentElement.lang = language;
    }
  };

  // Get current translations
  const t = translations[currentLanguage];

  const value: LanguageContextType = {
    language: currentLanguage,
    currentLanguage,
    setLanguage,
    t,
    isClient
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Convenience hook for just translations
export function useTranslations(): TranslationKeys {
  const { t } = useLanguage();
  return t;
}