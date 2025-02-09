import { useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import AppRoutes from './routes';
import ErrorBoundary from './components/ErrorBoundary';
import CookieBanner from './components/CookieBanner';
import PageTransition from './components/PageTransition';
import { logPageView } from './utils/analytics';
import './styles/scrollbar.css';

function App() {
  useEffect(() => {
    logPageView();

    // Stellt sicher, dass die Scrollbar von Anfang an konsistent ist
    document.documentElement.classList.add('custom-scrollbar');
  }, []);

  return (
      <HelmetProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-background text-foreground">
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
            </div>
          </BrowserRouter>
        </ErrorBoundary>
      </HelmetProvider>
  );
}

export default App;