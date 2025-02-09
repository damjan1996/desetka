
export const journey = {
    // Header
    title: 'Profesionalni razvoj',
    subtitle: 'Od digitalnih medija do poslovnih rešenja',
    // Education Section
    education: {
        title: 'Obrazovanje',
        degrees: {
            masters: {
                degree: 'M.A. Razvoj softvera',
                university: 'Middlesex University, London',
                period: '2020 - 2022'
            },
            bachelors: {
                degree: 'B.A. Cross-Media produkcija',
                university: 'Middlesex University, London',
                period: '2018 - 2020'
            }
        }
    },
    // Languages Section
    languages: {
        title: 'Jezici',
        items: {
            english: {
                name: 'Engleski',
                level: 'C2'
            },
            serbian: {
                name: 'Srpski',
                level: 'C2'
            },
            german: {
                name: 'Nemački',
                level: 'C2'
            },
            french: {
                name: 'Francuski',
                level: 'B2'
            },
            spanish: {
                name: 'Španski',
                level: 'B2'
            },
            russian: {
                name: 'Ruski',
                level: 'A1'
            }
        }
    },
    // Work History
    work: {
        positions: [
            {
                period: '08/2023 - Danas',
                company: 'Ritter Digital GmbH',
                title: 'Digital Solutions Consultant',
                location: 'Oberhausen',
                highlights: [
                    'ERP konsalting i implementacija (JTL WaWi)',
                    'Automatizacija procesa i Full-Stack razvoj',
                    'RFID tehnologija i automatizacija',
                    'Generisanje i upravljanje Lead-ovima',
                    'Content menadžment podržan AI tehnologijom'
                ]
            },
            {
                period: '02/2023 - 08/2023',
                company: 'Joyce & Girls Co AG',
                title: 'ERP Integration Specialist',
                location: 'Köln',
                highlights: [
                    'Kompleksna integracija sistema (Apparel Magic, TradeByte)',
                    'Administracija servera i automatizacija',
                    'Razvoj baza podataka i API-ja',
                    'Digitalni marketing i analiza kampanja'
                ]
            },
            {
                period: '08/2022 - 01/2023',
                company: 'Magnarius',
                title: 'RPA Developer & E-Commerce Manager',
                location: 'Bergisch Gladbach',
                highlights: [
                    'Shopware 6 razvoj i JTL integracija',
                    'Google Ads automatizacija',
                    'CMS menadžment i optimizacija',
                    'Implementacija SEO strategije'
                ]
            }
        ]
    }
} as const;
// Tip za tipsku sigurnost
export type JourneyTranslations = typeof journey;
