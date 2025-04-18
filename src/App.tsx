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
import { logPageView } from './utils/analytics';
import './styles/scrollbar.css';

// RouteTracker Component für präzises Seiten-Tracking
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add('custom-scrollbar');
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
                      <RouteTracker /> {/* Tracking bei Routenwechsel */}
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