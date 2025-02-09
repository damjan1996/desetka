// src/i18n/locales/de/pages/home/skills.ts
export const skills = {
    title: 'Fähigkeiten',
    skills: [
        {
            name: 'ERP',
            level: 90,
            description: 'Enterprise Resource Planning'
        },
        {
            name: 'Datenbank',
            level: 85,
            description: 'Datenbankentwicklung und -administration'
        },
        {
            name: 'E-Commerce',
            level: 95,
            description: 'Online-Handel und Plattformen'
        },
        {
            name: 'Python',
            level: 80,
            description: 'Programmiersprache Python'
        },
        {
            name: 'React',
            level: 75,
            description: 'Frontend-Entwicklung mit React'
        },
        {
            name: 'Server',
            level: 70,
            description: 'Server-Administration'
        }
    ],
    aria: {
        skillLevel: 'Fähigkeitsniveau',
        selectSkill: 'Fähigkeit auswählen'
    }
} as const;
export type SkillsTranslations = typeof skills;
