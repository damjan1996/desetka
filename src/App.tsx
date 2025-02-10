// App.tsx
import { useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
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

function App() {
  useEffect(() => {
    logPageView();
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