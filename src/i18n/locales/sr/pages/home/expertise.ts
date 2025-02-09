// src/i18n/locales/sr/pages/home/expertise.ts
export const expertise = {
    title: 'Oblasti ekspertize',
    areas: [
        {
            title: 'ERP Integracija',
            description: 'Ekspert za JTL-Wawi implementaciju, konfiguraciju i optimizaciju. Specijalizovan za sisteme za upravljanje robom i POS integraciju.',
            skills: ['JTL-Wawi', 'JTL-WMS', 'JTL-POS', 'Apparel Magic']
        },
        {
            title: 'Razvoj',
            description: 'Full-Stack razvoj sa fokusom na Python automatizaciju, React frontende i dizajn baza podataka.',
            skills: ['Python', 'React/Next.js', 'MariaDB', 'Docker']
        },
        {
            title: 'E-Commerce',
            description: 'Obimno iskustvo sa različitim e-commerce platformama i integracijama sa marketplace-ima.',
            skills: ['Shopify', 'Shopware', 'WooCommerce', 'API Integration']
        },
        {
            title: 'Digitalni Marketing',
            description: 'Strateški pristup u digitalnom marketingu sa fokusom na automatizaciju i analitiku.',
            skills: ['Google Ads', 'Meta Ads', 'SEO', 'Analytics']
        }
    ]
} as const;
export type ExpertiseTranslations = typeof expertise;
