export const hero = {
    // Navigation/Header
    aboutMe: 'ÜBER MICH',
    // Main Section
    title: 'Digital Solutions Experte',
    description: 'Mit einem Hintergrund in Softwareentwicklung und Expertise in digitaler Transformation helfe ich Unternehmen ihre Prozesse durch innovative Lösungen zu optimieren und zu automatisieren.',
    // Expertise Areas
    expertise: {
        processAutomation: {
            title: 'Prozessautomatisierung',
            description: 'Entwicklung effizienter automatisierter Workflows'
        },
        systemIntegration: {
            title: 'Systemintegration',
            description: 'Verbindung und Optimierung von Geschäftssystemen'
        },
        customDevelopment: {
            title: 'Individuelle Entwicklung',
            description: 'Erstellung maßgeschneiderter Softwarelösungen'
        }
    },
    // Languages
    languages: {
        english: 'Englisch',
        serbian: 'Serbisch',
        german: 'Deutsch',
        french: 'Französisch',
        spanish: 'Spanisch',
        russian: 'Russisch'
    }
} as const;
// Type für Typsicherheit
export type HeroTranslations = typeof hero;
