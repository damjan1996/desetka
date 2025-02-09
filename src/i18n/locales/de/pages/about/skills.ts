// de/pages/about/skills.ts
export const skills = {
    title: 'Fähigkeiten',
    skillGroups: [
        {
            category: 'Entwicklung',
            items: [
                { name: 'Python', level: 90 },
                { name: 'Google Ads', level: 85 },
                { name: 'Meta Ads', level: 85 }
            ]
        },
        {
            category: 'E-Commerce',
            items: [
                { name: 'Shopware', level: 85 },
                { name: 'Shopify', level: 85 },
                { name: 'WooCommerce', level: 85 }
            ]
        },
        {
            category: 'Systemadministration',
            items: [
                { name: 'JTL WAWI', level: 85 },
                { name: 'Server', level: 75 },
                { name: 'AirFlow', level: 60 }
            ]
        }
    ],
    ui: {
        percentage: 'Prozent',
        levelLabel: 'Niveau',
        skillLevel: '{{level}}% Beherrschung in {{skill}}'
    },
    aria: {
        skillGroup: 'Fähigkeitsgruppe für {{category}}',
        skillBar: 'Fortschrittsbalken für {{skill}}',
        skillIcon: 'Symbol für {{category}}',
        selectSkill: 'Fähigkeit auswählen'
    },
    screenReader: {
        skillProgress: '{{skill}} mit einem Niveau von {{level}} Prozent'
    }
} as const;

export type SkillsTranslations = typeof skills;
