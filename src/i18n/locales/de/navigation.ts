// C:\Development\Damjan Savic\Portfolio\src\i18n\locales\de\navigation.ts
export const navigation = {
    // Hauptnavigation
    main: {
        home: 'Startseite',
        about: 'Über mich',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Kontakt'
    },
    // Dashboard und Admin
    admin: {
        login: 'Anmelden',
        dashboard: 'Dashboard',
        logout: 'Abmelden'
    },
    // Footer Navigation
    footer: {
        legal: {
            privacy: 'Datenschutz',
            terms: 'AGB',
            imprint: 'Impressum'
        },
        sections: {
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Kontakt'
        }
    },
    // Seitennavigation
    sections: {
        experience: 'Erfahrung',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        about: 'Über mich'
    },
    // Breadcrumbs und zurück-Navigation
    navigation: {
        backTo: {
            home: 'Zurück zur Startseite',
            portfolio: 'Zurück zum Portfolio',
            blog: 'Zurück zum Blog'
        },
        breadcrumbs: {
            home: 'Startseite',
            portfolio: 'Portfolio',
            blog: 'Blog',
            about: 'Über mich',
            contact: 'Kontakt'
        }
    },
    // Mobile Navigation
    mobile: {
        menu: 'Menü',
        close: 'Schließen',
        open: 'Menü öffnen'
    },
    // URLs (für dynamische Route-Generierung)
    urls: {
        home: '/',
        about: '/about',
        portfolio: '/portfolio',
        blog: '/blog',
        contact: '/contact',
        login: '/login',
        dashboard: '/dashboard',
        privacy: '/privacy',
        terms: '/terms'
    },
    // Meta-Informationen für Navigation
    meta: {
        main: 'Hauptnavigation',
        footer: 'Footer Navigation',
        social: 'Social Media Navigation',
        legal: 'Rechtliche Navigation'
    }
} as const;

export type NavigationConfig = typeof navigation;
