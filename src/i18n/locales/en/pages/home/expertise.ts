// src/i18n/locales/en/pages/home/expertise.ts
export const expertise = {
    title: 'Areas of Expertise',
    areas: [
        {
            title: 'ERP Integration',
            description: 'Expert in JTL-Wawi implementation, configuration, and optimization. Specialized in inventory management systems and POS integration.',
            skills: ['JTL-Wawi', 'JTL-WMS', 'JTL-POS', 'Apparel Magic']
        },
        {
            title: 'Development',
            description: 'Full-stack development with focus on Python automation, React frontends, and database design.',
            skills: ['Python', 'React/Next.js', 'MariaDB', 'Docker']
        },
        {
            title: 'E-Commerce',
            description: 'Extensive experience with various e-commerce platforms and marketplace integrations.',
            skills: ['Shopify', 'Shopware', 'WooCommerce', 'API Integration']
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic approach to digital marketing with focus on automation and analytics.',
            skills: ['Google Ads', 'Meta Ads', 'SEO', 'Analytics']
        }
    ]
} as const;
export type ExpertiseTranslations = typeof expertise;
