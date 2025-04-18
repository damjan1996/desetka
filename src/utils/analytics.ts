import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-N0PZBL7X18';

export const initGA = () => {
  if (localStorage.getItem('cookieConsent') !== 'true') {
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
  if (localStorage.getItem('cookieConsent') !== 'true') {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    anonymizeIp: true
  });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (localStorage.getItem('cookieConsent') !== 'true') {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.event({
    category,
    action,
    label
  });
};

export const trackConversion = (value?: number) => {
  if (localStorage.getItem('cookieConsent') !== 'true') {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.event({
    category: 'Conversion',
    action: 'Complete',
    value
  });
};

export const trackTiming = (category: string, variable: string, value: number) => {
  if (localStorage.getItem('cookieConsent') !== 'true') {
    return; // Kein Tracking ohne Zustimmung
  }

  ReactGA.event({
    category,
    action: 'timing',
    label: variable,
    value
  });
};

declare global {
  interface Window {
    initializeAnalytics: () => void;
  }
}

// Make analytics initialization available globally for the cookie consent
window.initializeAnalytics = () => {
  localStorage.setItem('cookieConsent', 'true');
  initGA();
  logPageView();
};