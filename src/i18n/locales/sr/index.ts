// src/i18n/locales/sr/index.ts

// Prevodi blog postova
import { erpIntegrationBreuninger } from './blog/posts/erp-integration-breuninger';
import { fullstackDevelopmentTimetracking } from './blog/posts/fullstack-development-timetracking';
import { rfidAutomation as blogRfidAutomation } from './blog/posts/rfid-automation';
import { blog } from './blog';

// Prevodi stranica
import { about } from './pages/about/index';
import { contact } from './pages/contact/index';
import { dashboard } from './pages/dashboard';
import { home } from './pages/home/index';
import { login } from './pages/login';
import { notfound } from './pages/notfound';
import { portfolio as portfolioPage } from './pages/portfolio';
import { privacy } from './pages/privacy';
import { terms } from './pages/terms';

// Prevodi portfolio projekata
import { aiDataReader } from './portfolio/projects/ai-data-reader';
import { portfolio } from './portfolio';

// Zajednički prevodi i konfiguracije
import { common } from './common';
import { meta } from './meta';
import { navigation } from './navigation';

// Footer prevodi
import footer from './footer';

// Objedinjavanje svih prevoda
const translations = {
    // Stranice
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
    // Zajedničke konfiguracije
    common: {
        ...common,
        cookies: {
            message: "Ovaj sajt koristi kolačiće kako bi poboljšao vaše iskustvo pretraživanja i pružio personalizovan sadržaj. Prikupljeni podaci neće biti deljeni sa trećim licima.",
            accept: "Prihvati kolačiće",
            decline: "Odbij",
            necessary: "Neophodni kolačići",
            necessaryDesc: "Za osnovne funkcije sajta",
            analytics: "Analitički kolačići",
            analyticsDesc: "Za analizu korišćenja sajta",
            learnMore: "Saznajte više"
        }
    },
    meta,
    navigation,
} as const;

// Default izvoz: kompletan objekat prevoda
export default translations;

// Definicija tipa za prevode
export type Translations = typeof translations;

// Re-izvoz za direktan pristup pojedinačnim modulima
export {
    // Stranice
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
    // Zajedničko
    common,
    meta,
    navigation,
};