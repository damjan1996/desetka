// routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteErrorBoundary from './components/RouteErrorBoundary';

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
            <Route path="/" element={<HomePage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/about" element={<AboutPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/portfolio" element={<PortfolioPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/portfolio/:slug" element={<ProjectPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/blog" element={<BlogPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/contact" element={<ContactPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/login" element={<LoginPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/dashboard" element={<DashboardPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} errorElement={<RouteErrorBoundary />} />
            <Route path="/terms" element={<TermsPage />} errorElement={<RouteErrorBoundary />} />
        </Routes>
    );
};

export default AppRoutes;