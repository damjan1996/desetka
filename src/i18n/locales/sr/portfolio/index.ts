// src/i18n/locales/sr/portfolio/index.ts
import { aiDataReader } from './projects/ai-data-reader';
import kamenpro from './projects/kamenpro';
import smartWarehouse from './projects/smart-warehouse';
import powerPlatformGovernance from './projects/power-platform-governance';
export const portfolio = {
    // Meta informacije za portfolio stranicu
    seo: {
        title: 'Portfolio - Damjan Savić',
        description: 'Otkrijte moje projekte u oblasti JTL integracije, e-commerce-a i digitalne transformacije.'
    },
    // Portfolio naslovi i filteri
    sections: {
        title: 'Portfolio',
        subtitle: 'Odabrani projekti i reference',
        filterTitle: 'Kategorije',
        sortTitle: 'Sortiranje'
    },
    // Opcije filtera
    filters: {
        all: 'Sve',
        categories: {
            'Data Science': 'Data Science',
            'AI Development': 'AI razvoj',
            'Integration': 'Integracija',
            'Full-Stack Development': 'Full-Stack razvoj',
            'Data Processing': 'Obrada podataka',
            'Content Production': 'Produkcija sadržaja',
            'Machine Learning': 'Machine Learning',
            'Automation': 'Automatizacija',
            'Web Development': 'Web razvoj',
            'AI & Automation': 'AI & Automatizacija',
            'Enterprise Software': 'Enterprise Software'
        }
    },
    // Opcije sortiranja
    sort: {
        date: 'Datum',
        title: 'Naslov',
        category: 'Kategorija'
    },
    // UI tekstovi
    ui: {
        loading: 'Učitavanje projekata...',
        noProjects: 'Nije pronađen nijedan projekat',
        viewProject: 'Pogledaj projekat',
        backToPortfolio: 'Nazad na portfolio',
        technologies: 'Tehnologije',
        client: 'Klijent',
        duration: 'Trajanje',
        visitWebsite: 'Poseti sajt',
        viewRepository: 'Pogledaj repozitorijum',
        viewDocumentation: 'Dokumentacija'
    },
    // Svi projekti
    projects: {
        'ai-data-reader': aiDataReader,
        'kamenpro': kamenpro,
        'smart-warehouse': smartWarehouse,
        'power-platform-governance': powerPlatformGovernance,
    }
};
