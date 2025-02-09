// src/i18n/locales/en/pages/portfolio.ts
export const portfolio = {
    // SEO and meta information
    seo: {
        title: 'Portfolio - Damjan Savić',
        description: 'Discover my projects in JTL integration, e-commerce, and digital transformation.'
    },
    // Main page
    main: {
        title: 'Portfolio',
        loading: 'Loading projects...',
        error: 'Error loading projects',
        noProjects: {
            title: 'No Projects Found',
            description: 'Currently, no projects are available. Please check back later.'
        }
    },
    // Project cards
    projectCard: {
        date: 'Date',
        technologies: 'Technologies',
        moreCount: 'more', // for '+X more'
        readMore: 'Learn More'
    },
    // Project details
    project: {
        navigation: {
            back: 'Back to Portfolio',
            projectDetails: 'PROJECT DETAILS'
        },
        metadata: {
            date: 'Date',
            client: 'Client',
            duration: 'Duration',
            repository: 'Repository',
            documentation: 'Documentation',
            technologies: 'Technologies',
            live: 'Live Version'
        },
        sections: {
            overview: 'Overview',
            challenge: 'Challenge',
            solution: 'Solution',
            results: 'Results',
            systemArchitecture: 'System Architecture',
            implementation: 'Implementation',
            technologies: 'Technologies Used'
        }
    },
    // Categories and filters
    categories: {
        all: 'All',
        'Data Science': 'Data Science',
        'AI Development': 'AI Development',
        'Integration': 'Integration',
        'Full-Stack Development': 'Full-Stack Development',
        'Data Processing': 'Data Processing',
        'Content Production': 'Content Production',
        'Machine Learning': 'Machine Learning',
        'Automation': 'Automation'
    },
    // Specific projects
    projects: {
        'ai-data-reader': {
            title: 'AI-Based Product Data Management from PDF Files',
            description: 'Development of an automated system for extracting and structuring product data from PDF documents'
        },
        'bi-vision': {
            title: 'AI Videos for BI Software',
            description: 'Development of AI-powered explainer videos for business intelligence dashboards'
        },
        'business-intelligence-ai': {
            title: 'AI for Business Intelligence',
            description: 'Integration of AI models into business intelligence systems for process optimization'
        },
        'claude-personal-assistant': {
            title: 'AI-Based Personal Assistant with Claude AI',
            description: 'Development of a personalized AI assistant for professional email communication'
        },
        'e-commerce-integration': {
            title: 'Integration with TradeByte',
            description: 'Integration of a Shopify store with JTL-WaWi for optimized inventory management'
        },
        'jtl-integration-project': {
            title: 'JTL Integration Reference Project',
            description: 'A complete warehouse system in Krefeld based on JTL'
        },
        'local-llm-training': {
            title: 'Training of Local AI Models',
            description: 'Development of a pipeline for training and fine-tuning local AI models'
        },
        'processautomation': {
            title: 'Automation with Python',
            description: 'Development of automation solutions for business processes'
        },
        'rfid-automation': {
            title: 'RFID Automation',
            description: 'Development of an automated system for creating and printing RFID labels'
        },
        'timetracking-software': {
            title: 'Digital Time Tracking',
            description: 'Development of a modern time tracking solution with Next.js, Flask, and MSSQL'
        }
    },
    // Status messages
    status: {
        loading: 'Loading...',
        error: 'An error has occurred',
        success: 'Successfully loaded'
    }
};
