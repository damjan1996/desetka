export const hero = {
    // Navigation/Header
    aboutMe: 'O MENI',
    // Main Section
    title: 'Ekspert za digitalna rešenja',
    description: 'Sa iskustvom u razvoju softvera i ekspertizom u digitalnoj transformaciji, pomažem kompanijama da optimizuju i automatizuju svoje procese kroz inovativna rešenja.',
    // Expertise Areas
    expertise: {
        processAutomation: {
            title: 'Automatizacija procesa',
            description: 'Razvoj efikasnih automatizovanih tokova rada'
        },
        systemIntegration: {
            title: 'Integracija sistema',
            description: 'Povezivanje i optimizacija poslovnih sistema'
        },
        customDevelopment: {
            title: 'Individualni razvoj',
            description: 'Izrada prilagođenih softverskih rešenja'
        }
    },
    // Languages
    languages: {
        english: 'Engleski',
        serbian: 'Srpski',
        german: 'Nemački',
        french: 'Francuski',
        spanish: 'Španski',
        russian: 'Ruski'
    }
} as const;
// Type for type safety
export type HeroTranslations = typeof hero;
