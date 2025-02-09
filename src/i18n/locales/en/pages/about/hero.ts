export const hero = {
    // Navigation/Header
    aboutMe: 'ABOUT ME',
    // Main Section
    title: 'Digital Solutions Expert',
    description: 'With a background in software development and expertise in digital transformation, I help companies optimize and automate their processes through innovative solutions.',
    // Expertise Areas
    expertise: {
        processAutomation: {
            title: 'Process Automation',
            description: 'Development of efficient automated workflows'
        },
        systemIntegration: {
            title: 'System Integration',
            description: 'Connection and optimization of business systems'
        },
        customDevelopment: {
            title: 'Custom Development',
            description: 'Creation of tailored software solutions'
        }
    },
    // Languages
    languages: {
        english: 'English',
        serbian: 'Serbian',
        german: 'German',
        french: 'French',
        spanish: 'Spanish',
        russian: 'Russian'
    }
} as const;
// Type for type safety
export type HeroTranslations = typeof hero;
