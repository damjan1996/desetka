// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationDE from './locales/de';
import translationEN from './locales/en';
import translationSR from './locales/sr';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            de: {
                translation: translationDE
            },
            en: {
                translation: translationEN
            },
            sr: {
                translation: translationSR
            }
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'sr'],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;