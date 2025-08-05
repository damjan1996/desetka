// src/i18n/locales/de/portfolio/index.ts
import aiDataReader from './projects/ai-data-reader';
import kamenpro from './projects/kamenpro';
import smartWarehouse from './projects/smart-warehouse';
import powerPlatformGovernance from './projects/power-platform-governance';
export const portfolio = {
    // Meta-Informationen für die Portfolio-Seite
    seo: {
        title: 'Portfolio - Damjan Savić',
        description: 'Entdecken Sie meine Projekte im Bereich JTL-Integration, E-Commerce und digitale Transformation.'
    },
    // Portfolio-Überschriften und Filter
    sections: {
        title: 'Portfolio',
        subtitle: 'Ausgewählte Projekte und Referenzen',
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
