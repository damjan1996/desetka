// src/i18n/locales/de/pages/home/experience.ts
export const experience = {
    title: 'Berufserfahrung',
    navigation: {
        prev: '←',
        next: '→'
    },
    positions: [
        {
            role: 'Consultant Digital Solutions & Developer',
            company: 'RITTER Gesellschaft für digitale Geschäftsprozesse mbH',
            period: '08/2023 - HEUTE',
            highlights: [
                'JTL WaWi, WMS und POS Beratung & Implementierung',
                'Python-basierte Automationslösungen',
                'RFID-Systeme und GUI-Entwicklung',
                'KI & Business Intelligence'
            ]
        },
        {
            role: 'ERP-Integrationsspezialist & E-Commerce-Entwickler',
            company: 'Joyce & Girls',
            period: '01/2023 - 08/2023',
            highlights: [
                'ApparelMagic & TradeByte Integration',
                'MariaDB Middleware-Entwicklung',
                'Windows Server Administration',
                'Shopify-Optimierung'
            ]
        },
        {
            role: 'RPA Developer & E-Commerce Manager',
            company: 'C&S Marketing',
            period: '08/2022 - 01/2023',
            highlights: [
                'Shopware 6 & JTL Integration',
                'Python Automatisierung',
                'Google Ads Optimierung',
                'CMS Management'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Brands Club GmbH',
            period: '08/2021 - 07/2022',
            highlights: [
                'Shopify & JTL Integration',
                'Server Administration',
                'Content Production',
                'Marketing Automation'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Feine Uhren Eupen',
            period: '01/2021 - 08/2021',
            highlights: [
                'Shopware 5 Development',
                'Produktfotografie',
                'Sales im Luxusuhrensegment',
                'E-Commerce Management'
            ]
        },
        {
            role: 'Online Marketing Manager',
            company: 'Ufer8, Ambis, Teatro & Die Halle Tor 2',
            period: '01/2018 - 12/2020',
            highlights: [
                'Social Media Content',
                'Event Marketing',
                'Veranstaltungsorganisation',
                'Marketing Automation'
            ]
        }
    ]
} as const;
export type ExperienceTranslations = typeof experience;
