// sr/pages/about/skills.ts
export const skills = {
    title: 'Veštine',
    skillGroups: [
        {
            category: 'Razvoj',
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
            category: 'Administracija sistema',
            items: [
                { name: 'JTL WAWI', level: 85 },
                { name: 'Server', level: 75 },
                { name: 'AirFlow', level: 60 }
            ]
        }
    ],
    ui: {
        percentage: 'procenat',
        levelLabel: 'nivo',
        skillLevel: '{{level}}% ovladanosti za {{skill}}'
    },
    aria: {
        skillGroup: 'Grupa veština za {{category}}',
        skillBar: 'Indikator napretka za {{skill}}',
        skillIcon: 'Ikona za {{category}}',
        selectSkill: 'Izaberi veštinu'
    },
    screenReader: {
        skillProgress: '{{skill}} sa nivoom od {{level}} procenata'
    }
} as const;

export type SkillsTranslations = typeof skills;
