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
              <div className="flex flex-col min-h-screen bg-background text-foreground relative">
                <Layout>
                  <ErrorBoundary>
                    <Suspense fallback={null}>
                      <PageTransition>
                        <AppRoutes />
                      </PageTransition>
                    </Suspense>
                  </ErrorBoundary>
                </Layout>
                <CookieBanner />
                <DebugOverlay />
              </div>
            </ScrollProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </HelmetProvider>
  );
}

export default App;