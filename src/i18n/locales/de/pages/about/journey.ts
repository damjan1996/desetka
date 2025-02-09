export const journey = {
    // Header
    title: 'Beruflicher Werdegang',
    subtitle: 'Von digitalen Medien zu Unternehmenslösungen',
    // Education Section
    education: {
        title: 'Ausbildung',
        degrees: {
            masters: {
                degree: 'M.A. Softwareentwicklung',
                university: 'Middlesex University, London',
                period: '2020 - 2022'
            },
            bachelors: {
                degree: 'B.A. Cross-Media Produktion',
                university: 'Middlesex University, London',
                period: '2018 - 2020'
            }
        }
    },
    // Languages Section
    languages: {
        title: 'Sprachen',
        items: {
            english: {
                name: 'Englisch',
                level: 'C2'
            },
            serbian: {
                name: 'Serbisch',
                level: 'C2'
            },
            german: {
                name: 'Deutsch',
                level: 'C2'
            },
            french: {
                name: 'Französisch',
                level: 'B2'
            },
            spanish: {
                name: 'Spanisch',
                level: 'B2'
            },
            russian: {
                name: 'Russisch',
                level: 'A1'
            }
        }
    },
    // Work History
    work: {
        positions: [
            {
                period: '08/2023 - Heute',
                company: 'Ritter Digital GmbH',
                title: 'Digital Solutions Consultant',
                location: 'Oberhausen',
                highlights: [
                    'ERP-Beratung und -Implementierung (JTL WaWi)',
                    'Prozessautomatisierung & Full-Stack-Entwicklung',
                    'RFID-Technologie & Automatisierung',
                    'Lead-Generierung & -Management',
                    'KI-gestütztes Content-Management'
                ]
            },
            {
                period: '02/2023 - 08/2023',
                company: 'Joyce & Girls Co AG',
                title: 'ERP Integration Specialist',
                location: 'Köln',
                highlights: [
                    'Komplexe Systemintegration (Apparel Magic, TradeByte)',
                    'Server-Administration und Automatisierung',
                    'Datenbank- und API-Entwicklung',
                    'Digitales Marketing und Kampagnenanalyse'
                ]
            },
            {
                period: '08/2022 - 01/2023',
                company: 'Magnarius',
                title: 'RPA Developer & E-Commerce Manager',
                location: 'Bergisch Gladbach',
                highlights: [
                    'Shopware 6 Entwicklung und JTL-Integration',
                    'Google Ads Automatisierung',
                    'CMS-Management und -Optimierung',
                    'SEO-Strategieumsetzung'
                ]
            }
        ]
    }
} as const;
// Type für Typsicherheit
export type JourneyTranslations = typeof journey;
