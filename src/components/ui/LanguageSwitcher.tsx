'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SUPPORTED_LANGUAGES, Language } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage, isClient } = useLanguage();

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsOpen(false);
  };

  // Don't render on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="w-24 h-10 bg-gray-100 rounded-lg animate-pulse" />
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors rounded-lg hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <span>{SUPPORTED_LANGUAGES[currentLanguage].name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 py-2 bg-white rounded-xl border border-zinc-200 shadow-lg z-50 min-w-[160px]"
            >
              {Object.entries(SUPPORTED_LANGUAGES).map(([code, { name }]) => {
                const lang = code as Language;
                return (
                  <button
                    key={code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-50 transition-colors flex items-center gap-3 ${
                      lang === currentLanguage 
                        ? 'text-primary font-medium bg-primary/5' 
                        : 'text-zinc-700'
                    }`}
                  >
                    <span>{name}</span>
                    {lang === currentLanguage && (
                      <span className="ml-auto text-primary">✓</span>
                    )}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}