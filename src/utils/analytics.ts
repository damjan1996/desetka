import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-N0PZBL7X18';
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXXXX'; // Ersetze mit deiner Facebook Pixel ID

// Prüft, ob eine bestimmte Cookie-Kategorie aktiviert ist
export const isCookieCategoryEnabled = (category: string): boolean => {
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

// Entfernt alle Google Analytics Cookies
const removeGACookies = (): void => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const cookieName = cookie.split('=')[0];

    // Entferne alle GA-Cookies
    if (cookieName.startsWith('_ga') ||
        cookieName.startsWith('_gid') ||
        cookieName.startsWith('_gat')) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }
};

// Google Analytics Initialisierung - mit strikter Zustimmungsprüfung
export const initGA = (): void => {
  if (!isCookieCategoryEnabled('analytics')) {
    // Entferne bestehende GA-Cookies, falls keine Zustimmung
    removeGACookies();
    return;
  }

  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true, // DSGVO-konform
      cookieFlags: 'SameSite=None;Secure'
    }
  });
};

export const logPageView = (): void => {
  if (!isCookieCategoryEnabled('analytics')) {
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    anonymizeIp: true
  });
};

export const trackEvent = (category: string, action: string, label?: string): void => {
  if (!isCookieCategoryEnabled('analytics')) {
    return;
  }

  ReactGA.event({
    category,
    action,
    label
  });
};

export const trackConversion = (value?: number): void => {
  if (!isCookieCategoryEnabled('analytics')) {
    return;
  }

  ReactGA.event({
    category: 'Conversion',
    action: 'Complete',
    value
  });
};

export const trackTiming = (category: string, variable: string, value: number): void => {
  if (!isCookieCategoryEnabled('analytics')) {
    return;
  }

  ReactGA.event({
    category,
    action: 'timing',
    label: variable,
    value
  });
};

// Facebook Pixel Initialisierung - nur mit Zustimmung
export const initFBPixel = (): void => {
  if (!isCookieCategoryEnabled('marketing')) {
    return;
  }

  if (typeof window !== 'undefined' && !window.fbq) {
    // fbq ist nicht Teil des Window-Interfaces und wird zur Laufzeit hinzugefügt
    window.fbq = function(...args: unknown[]): void {
      window._fbq = window._fbq || [];
      window._fbq.push(args);
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
export const trackFBEvent = (event: string, params?: Record<string, unknown>): void => {
  if (!isCookieCategoryEnabled('marketing') || typeof window === 'undefined' || !window.fbq) {
    return;
  }

  window.fbq('track', event, params);
};

// Google Fonts Handling - nur mit funktionaler Cookie-Zustimmung
export const initGoogleFonts = (): void => {
  if (!isCookieCategoryEnabled('functional')) {
    // Entferne bestehende Google Fonts
    const linkElements = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    linkElements.forEach(link => {
      link.parentNode?.removeChild(link);
    });
    return;
  }

  // Vermeide Duplikate beim Laden
  if (document.querySelector('link[href*="fonts.googleapis.com"]')) {
    return;
  }

  // Lokales Laden von Google Fonts als Alternative
  // Code hier zur lokalen Einbindung der Schriftarten
};

// Funktionale Cookies initialisieren
export const initFunctionalCookies = (): void => {
  if (!isCookieCategoryEnabled('functional')) {
    return;
  }

  // Initialisiere Google Fonts wenn zugestimmt wurde
  initGoogleFonts();

  // Weitere funktionale Dienste könnten hier initialisiert werden
};

// Typdefinitionen für globale Objekte
declare global {
  interface Window {
    initializeAnalytics: () => void;
    fbq: (...args: unknown[]) => void;
    _fbq: unknown[];
  }
}

// Analytics-Funktionen global verfügbar machen (für den Cookie-Banner)
if (typeof window !== 'undefined') {
  window.initializeAnalytics = (): void => {
    // Prüfe die einzelnen Cookie-Kategorien und initialisiere entsprechend
    if (isCookieCategoryEnabled('analytics')) {
      initGA();
      logPageView();
    } else {
      removeGACookies();
    }

    if (isCookieCategoryEnabled('marketing')) {
      initFBPixel();
    }

    if (isCookieCategoryEnabled('functional')) {
      initFunctionalCookies();
    }
  };
}

// Export für TypeScript
export {};