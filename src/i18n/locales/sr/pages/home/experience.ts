// src/i18n/locales/sr/pages/home/experience.ts
export const experience = {
    title: 'Radno iskustvo',
    navigation: {
        prev: '←',
        next: '→'
    },
    positions: [
        {
            role: 'Consultant Digital Solutions & Developer',
            company: 'RITTER Gesellschaft für digitale Geschäftsprozesse mbH',
            period: '08/2023 - DANAS',
            highlights: [
                'JTL WaWi, WMS i POS konsalting i implementacija',
                'Python-bazirana automatizaciona rešenja',
                'RFID sistemi i GUI razvoj',
                'AI i poslovna inteligencija'
            ]
        },
        {
            role: 'ERP integracioni specijalista i E-Commerce developer',
            company: 'Joyce & Girls',
            period: '01/2023 - 08/2023',
            highlights: [
                'ApparelMagic i TradeByte integracija',
                'MariaDB middleware razvoj',
                'Windows Server administracija',
                'Shopify optimizacija'
            ]
        },
        {
            role: 'RPA Developer & E-Commerce Manager',
            company: 'C&S Marketing',
            period: '08/2022 - 01/2023',
            highlights: [
                'Shopware 6 i JTL integracija',
                'Python automatizacija',
                'Google Ads optimizacija',
                'CMS menadžment'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Brands Club GmbH',
            period: '08/2021 - 07/2022',
            highlights: [
                'Shopify i JTL integracija',
                'Server administracija',
                'Produkcija sadržaja',
                'Marketing automatizacija'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Feine Uhren Eupen',
            period: '01/2021 - 08/2021',
            highlights: [
                'Shopware 5 razvoj',
                'Fotografija proizvoda',
                'Prodaja u segmentu luksuznih satova',
                'E-Commerce menadžment'
            ]
        },
        {
            role: 'Online Marketing Manager',
            company: 'Ufer8, Ambis, Teatro & Die Halle Tor 2',
            period: '01/2018 - 12/2020',
            highlights: [
                'Social Media sadržaj',
                'Event marketing',
                'Organizacija događaja',
                'Marketing automatizacija'
            ]
        }
    ]
} as const;
export type ExperienceTranslations = typeof experience;
