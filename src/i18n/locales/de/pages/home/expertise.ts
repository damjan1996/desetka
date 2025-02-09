// src/i18n/locales/de/pages/home/expertise.ts
export const expertise = {
    title: 'Bereiche meiner Expertise',
    areas: [
        {
            title: 'ERP Integration',
            description: 'Expert für JTL-Wawi Implementierung, Konfiguration und Optimierung. Spezialisiert auf Warenwirtschaftssysteme und POS-Integration.',
            skills: ['JTL-Wawi', 'JTL-WMS', 'JTL-POS', 'Apparel Magic']
        },
        {
            title: 'Entwicklung',
            description: 'Full-Stack Entwicklung mit Fokus auf Python-Automatisierung, React Frontends und Datenbankdesign.',
            skills: ['Python', 'React/Next.js', 'MariaDB', 'Docker']
        },
        {
            title: 'E-Commerce',
            description: 'Umfangreiche Erfahrung mit verschiedenen E-Commerce-Plattformen und Marktplatz-Integrationen.',
            skills: ['Shopify', 'Shopware', 'WooCommerce', 'API Integration']
        },
        {
            title: 'Digitales Marketing',
            description: 'Strategischer Ansatz im digitalen Marketing mit Fokus auf Automatisierung und Analyse.',
            skills: ['Google Ads', 'Meta Ads', 'SEO', 'Analytics']
        }
    ]
} as const;
export type ExpertiseTranslations = typeof expertise;
