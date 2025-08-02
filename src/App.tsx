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
import { useScrollTracking } from './hooks/useScrollTracking';
import './styles/scrollbar.css';

// RouteTracker Component für präzises Seiten-Tracking - aber nur mit Zustimmung
const RouteTracker = () => {
  const location = useLocation();
  
  // Scroll tracking aktivieren
  useScrollTracking();

  useEffect(() => {
    // Nur tracken, wenn die Analytics-Cookies akzeptiert wurden
    if (isCookieCategoryEnabled('analytics')) {
      logPageView();
    }
  }, [location]);

  return null;
};


function App() {
  useEffect(() => {
    // Benutzerdefiniertes Scrollbar-Styling aktivieren
    document.documentElement.classList.add('custom-scrollbar');
  }, []);

  return (
      <HelmetProvider>
        <ErrorBoundary>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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