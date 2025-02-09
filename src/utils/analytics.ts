import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-N0PZBL7X18';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export const trackConversion = (value?: number) => {
  ReactGA.event({
    category: 'Conversion',
    action: 'Complete',
    value
  });
};

export const trackTiming = (category: string, variable: string, value: number) => {
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
  initGA();
  logPageView();
};