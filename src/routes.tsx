// routes.tsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteErrorBoundary from './components/RouteErrorBoundary';
import PageContainer from './components/PageContainer';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/home'));
const AboutPage = React.lazy(() => import('./pages/about'));
const PortfolioPage = React.lazy(() => import('./pages/portfolio'));
const ProjectPage = React.lazy(() => import('./pages/portfolio/ProjectPage'));
const BlogPage = React.lazy(() => import('./pages/blog'));
const BlogPostPage = React.lazy(() => import('./pages/blog/components/BlogPost'));
const ContactPage = React.lazy(() => import('./pages/contact'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <HomePage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/about"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <AboutPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            {/* Rest of the routes follow the same pattern */}
            <Route
                path="/portfolio"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <PortfolioPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/portfolio/:slug"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <ProjectPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/blog"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <BlogPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/blog/:slug"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <BlogPostPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/contact"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <ContactPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/login"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <LoginPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/dashboard"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <DashboardPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/privacy"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <PrivacyPolicyPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
            <Route
                path="/terms"
                element={
                    <PageContainer>
                        <Suspense fallback={null}>
                            <TermsPage />
                        </Suspense>
                    </PageContainer>
                }
                errorElement={<RouteErrorBoundary />}
            />
        </Routes>
    );
};

export default AppRoutes;