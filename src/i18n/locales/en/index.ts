// src/i18n/locales/en/index.ts

// Blog post translations
import { erpIntegrationBreuninger } from './blog/posts/erp-integration-breuninger';
import { fullstackDevelopmentTimetracking } from './blog/posts/fullstack-development-timetracking';
import { rfidAutomation as blogRfidAutomation } from './blog/posts/rfid-automation';
import { blog } from './blog';

// Page translations
import { about } from './pages/about/index';
import { contact } from './pages/contact/index';
import { dashboard } from './pages/dashboard';
import { home } from './pages/home/index';
import { login } from './pages/login';
import { notfound } from './pages/notfound';
import { portfolio as portfolioPage } from './pages/portfolio';
import { privacy } from './pages/privacy';
import { terms } from './pages/terms';

// Portfolio project translations
import { aiDataReader } from './portfolio/projects/ai-data-reader';
import { portfolio } from './portfolio';

// Common translations and configurations
import { common } from './common';
import { meta } from './meta';
import { navigation } from './navigation';

// Footer translations
import footer from './footer';

// FAQ translations
import { faq } from './faq';

// Merging all translation objects
const translations = {
    // Pages
    pages: {
        about,
        contact,
        dashboard,
        home,
        login,
        notfound,
        portfolio: portfolioPage,
        privacy,
        terms,
    },
    // Blog
    blog: {
        ...blog,
        posts: {
            erpIntegrationBreuninger,
            fullstackDevelopmentTimetracking,
            rfidAutomation: blogRfidAutomation,
        },
    },
    // Portfolio
    portfolio: {
        ...portfolio,
        projects: {
            aiDataReader,
        },
    },
    // Footer
    footer,
    // Common configurations
    common: {
        ...common,
        cookies: {
            message: "This website uses cookies to enhance your browsing experience and provide personalized content. The collected data will not be shared with third parties.",
            accept: "Accept Cookies",
            decline: "Decline",
            necessary: "Necessary Cookies",
            necessaryDesc: "For basic website functions",
            analytics: "Analytics Cookies",
            analyticsDesc: "For analyzing website usage",
            learnMore: "Learn more"
        }
    },
    meta,
    navigation,
    faq,
} as const;

// Default export: complete translations object
export default translations;

// Type definition for translations
export type Translations = typeof translations;

// Re-exports for direct access to individual modules
export {
    // Pages
    about,
    contact,
    dashboard,
    home,
    login,
    notfound,
    portfolioPage as portfolioPageTranslations,
    privacy,
    terms,
    // Blog
    blog,
    erpIntegrationBreuninger,
    fullstackDevelopmentTimetracking,
    blogRfidAutomation as blogRfidAutomationPost,
    // Portfolio
    portfolio,
    aiDataReader,
    // Footer
    footer,
    // Common
    common,
    meta,
    navigation,
    faq,
};