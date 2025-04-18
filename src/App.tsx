// App.tsx
import { useEffect, Suspense } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import AppRoutes from './routes';
import ErrorBoundary from './components/ErrorBoundary';
import CookieBanner from './components/CookieBanner';
import PageTransition from './components/PageTransition';
import { ScrollProvider } from './components/ScrollContext';
import DebugOverlay from './components/DebugOverlay';
import { logPageView, isCookieCategoryEnabled } from './utils/analytics';
import './styles/scrollbar.css';

// RouteTracker Component für präzises Seiten-Tracking - aber nur mit Zustimmung
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Nur tracken, wenn die Analytics-Cookies akzeptiert wurden
    if (isCookieCategoryEnabled('analytics')) {
      logPageView();
    }
  }, [location]);

  return null;
};

// Funktion zum Blockieren von externen Google Fonts
const blockExternalGoogleFonts = () => {
  // Suche nach allen Google Fonts Link-Elementen und entferne sie
  const linkElements = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  linkElements.forEach(link => {
    link.parentNode?.removeChild(link);
  });
};

function App() {
  useEffect(() => {
    // Benutzerdefiniertes Scrollbar-Styling aktivieren
    document.documentElement.classList.add('custom-scrollbar');

    // Blockiere Google Fonts beim ersten Laden, sofern nicht explizit zugestimmt wurde
    if (!isCookieCategoryEnabled('functional')) {
      blockExternalGoogleFonts();
    }
  }, []);

  return (
      <HelmetProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <ScrollProvider>
              <Suspense fallback={null}>
                <PageTransition>
                  <Layout>
                    <ErrorBoundary>
                      <RouteTracker /> {/* Tracking nur mit Zustimmung */}
                      <AppRoutes />
                    </ErrorBoundary>
                    <CookieBanner />
                    <DebugOverlay />
                  </Layout>
                </PageTransition>
              </Suspense>
            </ScrollProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </HelmetProvider>
  );
}

export default App;