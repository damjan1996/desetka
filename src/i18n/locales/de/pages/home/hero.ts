// src/i18n/locales/de/pages/home/hero.ts
export const hero = {
    title: 'SOFTWARE ENGINEER',
    name: 'DAMJAN SAVIĆ',
    cta: 'KONTAKT AUFNEHMEN',
    image: {
        alt: 'Portrait von Damjan Savić'
    },
    social: {
        getInTouch: 'Kontaktieren Sie mich',
        linkedin: {
            title: 'Besuchen Sie mein LinkedIn Profil'
        },
        github: {
            title: 'Besuchen Sie mein GitHub Profil'
        },
        email: {
            title: 'Senden Sie mir eine E-Mail'
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