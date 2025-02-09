// C:\Development\Damjan Savic\Portfolio\src\i18n\locales\en\navigation.ts
export const navigation = {
    // Main navigation
    main: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Contact'
    },
    // Dashboard and Admin
    admin: {
        login: 'Login',
        dashboard: 'Dashboard',
        logout: 'Logout'
    },
    // Footer Navigation
    footer: {
        legal: {
            privacy: 'Privacy Policy',
            terms: 'Terms & Conditions',
            imprint: 'Imprint'
        },
        sections: {
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Contact'
        }
    },
    // Page sections
    sections: {
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        about: 'About'
    },
    // Breadcrumbs and back navigation
    navigation: {
        backTo: {
            home: 'Back to Home',
            portfolio: 'Back to Portfolio',
            blog: 'Back to Blog'
        },
        breadcrumbs: {
            home: 'Home',
            portfolio: 'Portfolio',
            blog: 'Blog',
            about: 'About',
            contact: 'Contact'
        }
    },
    // Mobile Navigation
    mobile: {
        menu: 'Menu',
        close: 'Close',
        open: 'Open Menu'
    },
    // URLs (for dynamic route generation)
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
    // Meta information for navigation
    meta: {
        main: 'Main Navigation',
        footer: 'Footer Navigation',
        social: 'Social Media Navigation',
        legal: 'Legal Navigation'
    }
} as const;

export type NavigationConfig = typeof navigation;
