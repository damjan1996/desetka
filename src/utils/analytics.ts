import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-N0PZBL7X18';

// Facebook Pixel ID - ersetze dies durch deine echte Pixel-ID
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXXXX';

// Prüft, ob eine bestimmte Cookie-Kategorie aktiviert ist
const isCookieCategoryEnabled = (category: string): boolean => {
  try {
    const cookieSettings = localStorage.getItem('cookieSettings');
    if (!cookieSettings) return false;

    const settings = JSON.parse(cookieSettings);
    return settings[category] === true;
  } catch (error) {
    console.error('Error checking cookie settings:', error);
    return false;
  }
};

// Google Analytics Initialisierung
export const initGA = () => {
  if (!isCookieCategoryEnabled('analytics')) {
    return; // Keine Analytics-Initialisierung ohne Zustimmung
  }

  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true, // DSGVO-konform
      cookieFlags: 'SameSite=None;Secure'
    }
  });
};

export const logPageView = () => {
  if (!isCookieCategoryEnabled('analytics')) {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    anonymizeIp: true
  });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (!isCookieCategoryEnabled('analytics')) {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.event({
    category,
    action,
    label
  });
};

export const trackConversion = (value?: number) => {
  if (!isCookieCategoryEnabled('analytics')) {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.event({
    category: 'Conversion',
    action: 'Complete',
    value
  });
};

export const trackTiming = (category: string, variable: string, value: number) => {
  if (!isCookieCategoryEnabled('analytics')) {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.event({
    category,
    action: 'timing',
    label: variable,
    value
  });
};

// Facebook Pixel Initialisierung
export const initFBPixel = () => {
  if (!isCookieCategoryEnabled('marketing')) {
    return; // Keine Marketing-Cookie-Initialisierung ohne Zustimmung
  }

  if (typeof window !== 'undefined' && !window.fbq) {
    // @ts-ignore - fbq wird dynamisch hinzugefügt
    window.fbq = function() {
      // @ts-ignore
      window._fbq = window._fbq || [];
      // @ts-ignore
      window._fbq.push(arguments);
    };

    // Facebook Pixel Script laden
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Facebook Event tracking
export const trackFBEvent = (event: string, params?: any) => {
  if (!isCookieCategoryEnabled('marketing') || typeof window === 'undefined' || !window.fbq) {
    return;
  }

  window.fbq('track', event, params);
};

// Funktionale Cookies initialisieren (Beispiel)
export const initFunctionalCookies = () => {
  if (!isCookieCategoryEnabled('functional')) {
    return;
  }

  // Hier könnten Funktionen für funktionale Cookies implementiert werden
  console.log('Funktionale Cookies initialisiert');
};

// Typdefinitionen für globale Objekte
declare global {
  interface Window {
    initializeAnalytics: () => void;
    fbq: (...args: any[]) => void;
    _fbq: any[];
  }
}

// Analytics-Funktionen global verfügbar machen (für den Cookie-Banner)
window.initializeAnalytics = () => {
  initGA();
  logPageView();

  // Wenn die entsprechenden Cookie-Kategorien aktiviert sind,
  // initialisiere auch andere Dienste
  if (isCookieCategoryEnabled('marketing')) {
    initFBPixel();
  }

  if (isCookieCategoryEnabled('functional')) {
    initFunctionalCookies();
  }
};

// Export der Namespace-Erweiterung
export {};