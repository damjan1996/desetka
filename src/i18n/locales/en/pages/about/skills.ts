// en/pages/about/skills.ts
export const skills = {
    title: 'Skills',
    skillGroups: [
        {
            category: 'Development',
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
            category: 'System Administration',
            items: [
                { name: 'JTL WAWI', level: 85 },
                { name: 'Server', level: 75 },
                { name: 'AirFlow', level: 60 }
            ]
        }
    ],
    ui: {
        percentage: 'percent',
        levelLabel: 'Level',
        skillLevel: '{{level}}% proficiency in {{skill}}'
    },
    aria: {
        skillGroup: 'Skill group for {{category}}',
        skillBar: 'Progress bar for {{skill}}',
        skillIcon: 'Icon for {{category}}',
        selectSkill: 'Select skill'
    },
    screenReader: {
        skillProgress: '{{skill}} with a level of {{level}} percent'
    }
} as const;

export type SkillsTranslations = typeof skills;
