// src/i18n/locales/en/pages/home/hero.ts
export const hero = {
    title: 'SENIOR FULLSTACK DEVELOPER & DIGITAL SOLUTIONS CONSULTANT',
    name: 'DAMJAN SAVIĆ',
    subtitle: 'ENTERPRISE SOFTWARE | AI INTEGRATION | CLOUD ARCHITECTURE',
    cta: 'WORK WITH DAMJAN SAVIĆ',
    image: {
        alt: 'Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant | Enterprise Software Expert'
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
