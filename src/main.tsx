// Umbenennen zu main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n';
import { register as registerServiceWorker } from './utils/serviceWorkerRegistration';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
);

// Register service worker
registerServiceWorker();