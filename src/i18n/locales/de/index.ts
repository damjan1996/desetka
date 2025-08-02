// src/i18n/locales/de/index.ts

// Blog post translations
import { erpIntegrationBreuninger } from './blog/posts/erp-integration-breuninger';
import { fullstackDevelopmentTimetracking } from './blog/posts/fullstack-development-timetracking';
import { rfidAutomation as blogRfidAutomation } from './blog/posts/rfid-automation';
import { blog } from './blog/index';

// Page translations
import { about } from './pages/about/index';
import { contact } from './pages/contact/index';
import { dashboard } from './pages/dashboard';
import { home } from './pages/home';
import { login } from './pages/login';
import { notfound } from './pages/notfound';
import { portfolio as portfolioPage } from './pages/portfolio';
import { privacy } from './pages/privacy';
import { terms } from './pages/terms';

// Portfolio project translations
import { aiDataReader } from './portfolio/projects/ai-data-reader';
import { portfolio } from './portfolio/index';

// Common translations and configurations
import { common } from './common';
import { meta } from './meta';
import { navigation } from './navigation';

// Footer translations
import footer from './footer';

// FAQ translations
import { faq } from './faq';

// Zusammenführung aller Übersetzungsobjekte
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
    // Gemeinsame Konfigurationen
    common: {
        ...common,
        cookies: {
            message: "Diese Website verwendet Cookies, um Ihr Browsing-Erlebnis zu verbessern. Die Daten werden nicht an Dritte weitergegeben.",
            accept: "Cookies akzeptieren",
            decline: "Ablehnen",
            necessary: "Notwendige Cookies",
            necessaryDesc: "Für grundlegende Funktionen der Website",
            analytics: "Analyse-Cookies",
            analyticsDesc: "Für Analysen zur Verbesserung der Website",
            learnMore: "Mehr erfahren"
        }
    },
    meta,
    navigation,
    faq,
} as const;

// Default-Export: komplettes Übersetzungsobjekt
export default translations;

// Typdefinition der Übersetzungen
export type Translations = typeof translations;

// Re-Exports für den direkten Zugriff auf einzelne Module
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