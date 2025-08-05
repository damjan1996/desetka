// src/i18n/locales/en/portfolio/index.ts
import { aiDataReader } from './projects/ai-data-reader';
import kamenpro from './projects/kamenpro';
import smartWarehouse from './projects/smart-warehouse';
import powerPlatformGovernance from './projects/power-platform-governance';
export const portfolio = {
    // Meta information for the portfolio page
    seo: {
        title: 'Portfolio - Damjan Savić',
        description: 'Discover my projects in JTL integration, e-commerce, and digital transformation.'
    },
    // Portfolio headings and filters
    sections: {
        title: 'Portfolio',
        subtitle: 'Selected projects and references',
        filterTitle: 'Categories',
        sortTitle: 'Sort'
    },
    // Filter options
    filters: {
        all: 'All',
        categories: {
            'Data Science': 'Data Science',
            'AI Development': 'AI Development',
            'Integration': 'Integration',
            'Full-Stack Development': 'Full-Stack Development',
            'Data Processing': 'Data Processing',
            'Content Production': 'Content Production',
            'Machine Learning': 'Machine Learning',
            'Automation': 'Automation',
            'Web Development': 'Web Development',
            'AI & Automation': 'AI & Automation',
            'Enterprise Software': 'Enterprise Software'
        }
    },
    // Sort options
    sort: {
        date: 'Date',
        title: 'Title',
        category: 'Category'
    },
    // UI texts
    ui: {
        loading: 'Loading projects...',
        noProjects: 'No projects found',
        viewProject: 'View project',
        backToPortfolio: 'Back to portfolio',
        technologies: 'Technologies',
        client: 'Client',
        duration: 'Duration',
        visitWebsite: 'Visit website',
        viewRepository: 'View repository',
        viewDocumentation: 'Documentation'
    },
    // All projects
    projects: {
        'ai-data-reader': aiDataReader,
        'kamenpro': kamenpro,
        'smart-warehouse': smartWarehouse,
        'power-platform-governance': powerPlatformGovernance,
    }
};
