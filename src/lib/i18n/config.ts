export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', flag: '' },
  de: { name: 'Deutsch', flag: '' },
  sr: { name: 'Srpski', flag: '' }
} as const;

export type Language = keyof typeof SUPPORTED_LANGUAGES;

export const DEFAULT_LANGUAGE: Language = 'en';

export const STORAGE_KEY = 'desetka-language';