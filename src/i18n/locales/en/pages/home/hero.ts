// src/i18n/locales/en/pages/home/hero.ts
export const hero = {
    title: 'SOFTWARE ENGINEER',
    name: 'DAMJAN SAVIĆ',
    cta: 'GET IN TOUCH',
    image: {
        alt: 'Portrait of Damjan Savić'
    },
    social: {
        getInTouch: 'Get in touch',
        linkedin: {
            title: 'Visit my LinkedIn profile'
        },
        github: {
            title: 'Visit my GitHub profile'
        },
        email: {
            title: 'Send me an email'
        }
    },
    navigation: {
        experience: 'EXPERIENCE',
        skills: 'SKILLS',
        projects: 'PROJECTS',
        about: 'ABOUT'
    }
} as const;
export type HeroTranslations = typeof hero;
