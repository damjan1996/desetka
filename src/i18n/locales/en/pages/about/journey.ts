export const journey = {
    // Header
    title: 'Professional Journey',
    subtitle: 'From digital media to enterprise solutions',
    // Education Section
    education: {
        title: 'Education',
        degrees: {
            masters: {
                degree: 'M.A. Software Development',
                university: 'Middlesex University, London',
                period: '2020 - 2022'
            },
            bachelors: {
                degree: 'B.A. Cross-Media Production',
                university: 'Middlesex University, London',
                period: '2018 - 2020'
            }
        }
    },
    // Languages Section
    languages: {
        title: 'Languages',
        items: {
            english: {
                name: 'English',
                level: 'C2'
            },
            serbian: {
                name: 'Serbian',
                level: 'C2'
            },
            german: {
                name: 'German',
                level: 'C2'
            },
            french: {
                name: 'French',
                level: 'B2'
            },
            spanish: {
                name: 'Spanish',
                level: 'B2'
            },
            russian: {
                name: 'Russian',
                level: 'A1'
            }
        }
    },
    // Work History
    work: {
        positions: [
            {
                period: '08/2023 - Present',
                company: 'Ritter Digital GmbH',
                title: 'Digital Solutions Consultant',
                location: 'Oberhausen',
                highlights: [
                    'ERP consulting and implementation (JTL WaWi)',
                    'Process automation & full-stack development',
                    'RFID technology & automation',
                    'Lead generation & management',
                    'AI-supported content management'
                ]
            },
            {
                period: '02/2023 - 08/2023',
                company: 'Joyce & Girls Co AG',
                title: 'ERP Integration Specialist',
                location: 'Köln',
                highlights: [
                    'Complex system integration (Apparel Magic, TradeByte)',
                    'Server administration and automation',
                    'Database and API development',
                    'Digital marketing and campaign analysis'
                ]
            },
            {
                period: '08/2022 - 01/2023',
                company: 'Magnarius',
                title: 'RPA Developer & E-Commerce Manager',
                location: 'Bergisch Gladbach',
                highlights: [
                    'Shopware 6 development and JTL integration',
                    'Google Ads automation',
                    'CMS management and optimization',
                    'SEO strategy implementation'
                ]
            }
        ]
    }
} as const;
// Type for type safety
export type JourneyTranslations = typeof journey;
