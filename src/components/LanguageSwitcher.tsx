import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'sr', name: 'Srpski' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language)?.name || 'Language';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <div className="relative" ref={dropdownRef}>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-zinc-400 hover:text-white
                   px-4 py-2 rounded-full transition-colors duration-200
                   hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label="Select language"
        >
          <Globe className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm">{currentLanguage}</span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden
                     border border-zinc-800 bg-zinc-900/95 backdrop-blur-sm
                     shadow-lg"
                  role="listbox"
                  aria-label="Languages"
                  onKeyDown={handleKeyDown}
              >
                <div className="py-1">
                  {languages.map((lang) => (
                      <motion.button
                          key={lang.code}
                          whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.5)' }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200
                    ${i18n.language === lang.code
                              ? 'bg-zinc-800 text-white'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setIsOpen(false);
                          }}
                          role="option"
                          aria-selected={i18n.language === lang.code}
                      >
                        {lang.name}
                      </motion.button>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

export default LanguageSwitcher;