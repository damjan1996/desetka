// src/i18n/locales/sr/pages/home/skills.ts
export const skills = {
    title: 'Veštine',
    skills: [
        {
            name: 'ERP',
            level: 90,
            description: 'Enterprise Resource Planning'
        },
        {
            name: 'Baze podataka',
            level: 85,
            description: 'Razvoj i administracija baza podataka'
        },
        {
            name: 'E-Commerce',
            level: 95,
            description: 'Online trgovina i platforme'
        },
        {
            name: 'Python',
            level: 80,
            description: 'Programski jezik Python'
        },
        {
            name: 'React',
            level: 75,
            description: 'Frontend razvoj sa React-om'
        },
        {
            name: 'Server',
            level: 70,
            description: 'Server administracija'
        }
    ],
    aria: {
        skillLevel: 'Nivo veštine',
        selectSkill: 'Izaberite veštinu'
    }
} as const;
export type SkillsTranslations = typeof skills;
