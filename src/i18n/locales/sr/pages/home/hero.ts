// src/i18n/locales/sr/pages/home/hero.ts
export const hero = {
    title: 'SENIOR FULLSTACK DEVELOPER',
    name: 'DAMJAN SAVIĆ',
    cta: 'KONTAKTIRAJTE ME',
    image: {
        alt: 'Damjan Savić (Дамјан Савић) - Старији програмер пуног стека и консултант за дигитална решења'
    },
    social: {
        getInTouch: 'Kontaktirajte me',
        linkedin: {
            title: 'Posetite moj LinkedIn profil'
        },
        github: {
            title: 'Posetite moj GitHub profil'
        },
        email: {
            title: 'Pošaljite mi e-mail'
        }
    },
    navigation: {
        experience: 'ISKUSTVO',
        skills: 'VEŠTINE',
        projects: 'PROJEKTI',
        about: 'O MENI'
    }
} as const;
export type HeroTranslations = typeof hero;
