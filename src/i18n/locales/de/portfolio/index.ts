// src/i18n/locales/de/portfolio/index.ts
import aiDataReader from './projects/ai-data-reader';
import kamenpro from './projects/kamenpro';
import smartWarehouse from './projects/smart-warehouse';
import powerPlatformGovernance from './projects/power-platform-governance';
export const portfolio = {
    // Meta-Informationen für die Portfolio-Seite
    seo: {
        title: 'Portfolio - Fullstack Entwickler Köln Damjan Savić | Python & React Projekte',
        description: 'Portfolio von Freelance Developer Köln Damjan Savić: Python Automatisierung, OLLAMA KI Integration, ERP System Integration, E-Commerce Entwicklung. Custom Software Entwicklung Köln für B2B Enterprise.'
    },
    // Portfolio-Überschriften und Filter
    sections: {
        title: 'Software Entwickler Köln - Portfolio Damjan Savić',
        subtitle: 'Python Entwickler Köln & React Developer - Erfolgreiche Projekte',
        filterTitle: 'Kategorien',
        sortTitle: 'Sortierung'
    },
    // Filter-Optionen
    filters: {
        all: 'Alle',
        categories: {
            'Data Science': 'Data Science',
            'AI Development': 'KI-Entwicklung',
            'Integration': 'Integration',
            'Full-Stack Development': 'Full-Stack Entwicklung',
            'Data Processing': 'Datenverarbeitung',
            'Content Production': 'Content-Produktion',
            'Machine Learning': 'Machine Learning',
            'Automation': 'Automatisierung',
            'Web Development': 'Webentwicklung',
            'AI & Automation': 'KI & Automatisierung',
            'Enterprise Software': 'Enterprise Software'
        }
    },
    // Sortier-Optionen
    sort: {
        date: 'Datum',
        title: 'Titel',
        category: 'Kategorie'
    },
    // UI-Texte
    ui: {
        loading: 'Projekte werden geladen...',
        noProjects: 'Keine Projekte gefunden',
        viewProject: 'Projekt ansehen',
        backToPortfolio: 'Zurück zum Portfolio',
        technologies: 'Technologien',
        client: 'Kunde',
        duration: 'Dauer',
        visitWebsite: 'Website besuchen',
        viewRepository: 'Repository ansehen',
        viewDocumentation: 'Dokumentation'
    },
    // Alle Projekte
    projects: {
        'ai-data-reader': aiDataReader,
        'kamenpro': kamenpro,
        'smart-warehouse': smartWarehouse,
        'power-platform-governance': powerPlatformGovernance,
    }
};
