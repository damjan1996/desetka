// main.tsx
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './styles/mobile-optimizations.css';
import './styles/minimal-fixes.css';
import './i18n';
import { register as registerServiceWorker } from './utils/serviceWorkerRegistration';
import { reportWebVitals } from './utils/webVitals';
import { initializeFonts } from './utils/fontLoader';

// Typdefinition für Google Analytics
declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (command: string, ...args: unknown[]) => void;
        initializeAnalytics: () => void;
    }
}

// Initialize fonts as early as possible
initializeFonts();

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);

// Mark app as mounted to prevent flicker
requestAnimationFrame(() => {
    document.body.classList.add('app-mounted');
});

// Register service worker
registerServiceWorker();

// Report Web Vitals
reportWebVitals();