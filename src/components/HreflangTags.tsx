import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function HreflangTags() {
  const { i18n } = useTranslation();
  const location = window.location;
  const currentPath = location.pathname;
  
  const siteUrl = 'https://damjan-savic.com';
  const supportedLanguages = ['de', 'en', 'sr'];
  const defaultLanguage = 'de';
  
  // Extract current language from URL
  const pathSegments = currentPath.split('/').filter(Boolean);
  const currentLang = supportedLanguages.includes(pathSegments[0]) ? pathSegments[0] : defaultLanguage;
  
  // Get path without language prefix
  const pathWithoutLang = currentLang === defaultLanguage 
    ? currentPath 
    : currentPath.replace(`/${currentLang}`, '') || '/';
  
  // Generate hreflang URLs
  const generateHreflangUrl = (lang: string) => {
    if (lang === defaultLanguage) {
      return `${siteUrl}${pathWithoutLang}`;
    }
    return `${siteUrl}/${lang}${pathWithoutLang}`;
  };
  
  return (
    <Helmet>
      {/* Hreflang tags for all supported languages */}
      {supportedLanguages.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={generateHreflangUrl(lang)}
        />
      ))}
      
      {/* x-default hreflang */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={generateHreflangUrl(defaultLanguage)}
      />
      
      {/* Additional language meta tags */}
      <html lang={currentLang} />
      <meta property="og:locale" content={currentLang === 'de' ? 'de_DE' : currentLang === 'en' ? 'en_US' : 'sr_RS'} />
      
      {/* Alternate og:locale tags */}
      {supportedLanguages
        .filter(lang => lang !== currentLang)
        .map(lang => (
          <meta
            key={`og-locale-${lang}`}
            property="og:locale:alternate"
            content={lang === 'de' ? 'de_DE' : lang === 'en' ? 'en_US' : 'sr_RS'}
          />
        ))}
    </Helmet>
  );
}