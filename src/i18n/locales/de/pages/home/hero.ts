// src/i18n/locales/de/pages/home/hero.ts
export const hero = {
    title: 'SENIOR FULLSTACK ENTWICKLER & DIGITAL SOLUTIONS CONSULTANT KÖLN',
    name: 'DAMJAN SAVIĆ',
    subtitle: 'ENTERPRISE SOFTWARE | KI-INTEGRATION | CLOUD ARCHITECTURE',
    cta: 'MIT DAMJAN SAVIĆ ZUSAMMENARBEITEN',
    image: {
        alt: 'Damjan Savić - Senior Fullstack Entwickler & Digital Solutions Consultant Köln | Enterprise Software, KI & Cloud Expert'
    },
    social: {
        getInTouch: 'Kontaktieren Sie Damjan Savić',
        linkedin: {
            title: 'LinkedIn Profil von Damjan Savić besuchen'
        },
        github: {
            title: 'GitHub Profil von Damjan Savić besuchen'
        },
        email: {
            title: 'E-Mail an Damjan Savić senden'
        }
    },
    navigation: {
        experience: 'ERFAHRUNG',
        skills: 'FÄHIGKEITEN',
        projects: 'PROJEKTE',
        about: 'ÜBER MICH'
    }
} as const;

export type HeroTranslations = typeof hero;