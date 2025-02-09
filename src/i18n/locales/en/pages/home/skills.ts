// src/i18n/locales/en/pages/home/skills.ts
export const skills = {
    title: 'Skills',
    skills: [
        {
            name: 'ERP',
            level: 90,
            description: 'Enterprise Resource Planning'
        },
        {
            name: 'Database',
            level: 85,
            description: 'Database development and administration'
        },
        {
            name: 'E-Commerce',
            level: 95,
            description: 'Online commerce and platforms'
        },
        {
            name: 'Python',
            level: 80,
            description: 'Python programming language'
        },
        {
            name: 'React',
            level: 75,
            description: 'Frontend development with React'
        },
        {
            name: 'Server',
            level: 70,
            description: 'Server administration'
        }
    ],
    aria: {
        skillLevel: 'Skill level',
        selectSkill: 'Select skill'
    }
} as const;
export type SkillsTranslations = typeof skills;
