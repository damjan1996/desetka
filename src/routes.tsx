// routes.tsx
import React from 'react';
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
            <Route path="/" element={<PageContainer><HomePage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/about" element={<PageContainer><AboutPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/portfolio" element={<PageContainer><PortfolioPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/portfolio/:slug" element={<PageContainer><ProjectPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/blog" element={<PageContainer><BlogPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/blog/:slug" element={<PageContainer><BlogPostPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/contact" element={<PageContainer><ContactPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/login" element={<PageContainer><LoginPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/dashboard" element={<PageContainer><DashboardPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/privacy" element={<PageContainer><PrivacyPolicyPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
            <Route path="/terms" element={<PageContainer><TermsPage /></PageContainer>} errorElement={<RouteErrorBoundary />} />
        </Routes>
    );
};

export default AppRoutes;