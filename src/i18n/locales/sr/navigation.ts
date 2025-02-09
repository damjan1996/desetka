// C:\Development\Damjan Savic\Portfolio\src\i18n\locales\sr\navigation.ts
export const navigation = {
    // Glavna navigacija
    main: {
        home: 'Početna',
        about: 'O meni',
        portfolio: 'Portfolio',
        blog: 'Blog',
        contact: 'Kontakt'
    },
    // Dashboard i Admin
    admin: {
        login: 'Prijava',
        dashboard: 'Dashboard',
        logout: 'Odjava'
    },
    // Footer navigacija
    footer: {
        legal: {
            privacy: 'Politika privatnosti',
            terms: 'Uslovi korišćenja',
            imprint: 'Impresum'
        },
        sections: {
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Kontakt'
        }
    },
    // Sekcije stranice
    sections: {
        experience: 'Iskustvo',
        skills: 'Veštine',
        projects: 'Projekti',
        about: 'O meni'
    },
    // Breadcrumbs i navigacija za povratak
    navigation: {
        backTo: {
            home: 'Nazad na početnu',
            portfolio: 'Nazad na portfolio',
            blog: 'Nazad na blog'
        },
        breadcrumbs: {
            home: 'Početna',
            portfolio: 'Portfolio',
            blog: 'Blog',
            about: 'O meni',
            contact: 'Kontakt'
        }
    },
    // Mobile navigacija
    mobile: {
        menu: 'Meni',
        close: 'Zatvori',
        open: 'Otvori meni'
    },
    // URL-ovi (za dinamičko generisanje ruta)
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
    // Meta informacije za navigaciju
    meta: {
        main: 'Glavna navigacija',
        footer: 'Footer navigacija',
        social: 'Navigacija društvenih mreža',
        legal: 'Pravna navigacija'
    }
} as const;

export type NavigationConfig = typeof navigation;
