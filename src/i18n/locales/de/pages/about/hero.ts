export const hero = {
    // Navigation/Header
    aboutMe: 'FULLSTACK ENTWICKLER KÖLN - DAMJAN SAVIĆ',
    // Main Section
    title: 'Python Entwickler Köln & React Developer - Damjan Savić',
    description: 'Als Fullstack Entwickler Köln ist Damjan Savić Ihr Freelance Developer für Python Automatisierung und React Entwicklung. Mit Expertise in OLLAMA KI Integration, ERP System Integration Köln und E-Commerce Entwicklung bietet Software Entwickler Köln Damjan Savić Custom Software Entwicklung für B2B Enterprise Kunden. Von API Entwicklung Python FastAPI bis zu Microservices - Ihr Backend Entwickler Köln.',
    // Expertise Areas
    expertise: {
        processAutomation: {
            title: 'Python Automatisierung Köln',
            description: 'Prozessautomatisierung Python für B2B Unternehmen'
        },
        systemIntegration: {
            title: 'ERP System Integration Köln',
            description: 'Enterprise Software Integration & API Entwicklung'
        },
        customDevelopment: {
            title: 'Custom Software Entwicklung Köln',
            description: 'Freelance Developer für individuelle Lösungen'
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
