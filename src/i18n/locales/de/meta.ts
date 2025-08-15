export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Senior Fullstack Entwickler & Digital Solutions Consultant Köln',
        subtitle: 'Enterprise Software Development, KI-Integration & Cloud Architecture von Damjan Savić',
        description: 'Damjan Savić ist Senior Fullstack Entwickler und Digital Solutions Consultant in Köln. Spezialisiert auf Enterprise Software mit Python, React, TypeScript, Cloud-native Lösungen und KI-Integration. Damjan Savić bietet maßgeschneiderte IT-Lösungen für digitale Transformation, E-Commerce, ERP-Integration und Business Process Automation.',
        keywords: [
            'Damjan Savić',
            'Damjan Savic',
            'Senior Fullstack Entwickler Köln',
            'Digital Solutions Consultant Köln',
            'Software Architect Köln',
            'Fullstack Entwickler Köln',
            'Python Entwickler Köln',
            'React Entwickler Köln',
            'Freelance Developer Köln',
            'Software Entwickler Köln',
            'Python Automatisierung Entwickler Köln',
            'OLLAMA KI Integration Entwickler',
            'ERP System Integration Köln',
            'Electron Desktop App Entwicklung',
            'Next.js Entwickler Deutschland',
            'TypeScript React Entwickler',
            'E-Commerce Integration Spezialist',
            'Prozessautomatisierung Python Köln',
            'B2B Software Entwicklung',
            'Enterprise Software Developer',
            'Custom Software Entwicklung Köln',
            'API Entwicklung Python FastAPI',
            'Microservices Entwickler',
            'Backend Entwickler Köln',
            'Frontend Entwickler Köln',
            'Full Stack Developer Köln',
            'JavaScript Entwickler Köln',
            'Node.js Entwickler Köln',
            'Django Entwickler Deutschland',
            'FastAPI Entwicklung',
            'React Native Entwickler',
            'Progressive Web App Entwicklung',
            'Cloud Developer AWS',
            'DevOps Engineer Köln',
            'Software Architekt Köln'
        ].join(', ')
    },
    company: {
        name: 'CoderConda',
        shortName: 'CoderConda',
        description: 'Damjan Savić und CoderConda - Ihr Partner für Enterprise Software Development, digitale Transformation und innovative IT-Lösungen.',
        address: 'Rotdornallee',
        city: 'Köln',
        postalCode: '50999',
        country: 'Deutschland',
        phone: '+49 175 695 0979',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com'
    },
    author: {
        name: 'Damjan Savić',
        role: 'Senior Fullstack Developer & Digital Solutions Consultant',
        company: 'CoderConda',
        location: 'Köln, Deutschland',
        email: 'info@damjan-savic.com',
        website: 'https://www.damjan-savic.com',
        languages: [
            { code: 'en', level: 'C2', name: 'Englisch' },
            { code: 'sr', level: 'C2', name: 'Serbisch' },
            { code: 'de', level: 'C2', name: 'Deutsch' },
            { code: 'fr', level: 'B2', name: 'Französisch' },
            { code: 'es', level: 'B2', name: 'Spanisch' },
            { code: 'ru', level: 'A1', name: 'Russisch' }
        ]
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/damjansavic/',
        github: 'https://github.com/damjansavic',
        email: 'info@damjan-savic.com'
    },
    expertise: {
        areas: [
            'Enterprise Software Development',
            'Cloud-native Architecture',
            'Python Backend Entwicklung',
            'JavaScript/TypeScript Frontend',
            'KI/ML Integration mit OLLAMA & LLMs',
            'Business Process Automation',
            'E-Commerce Plattformen',
            'SAP & ERP System Integration',
            'Microservices & API Development',
            'DevOps & CI/CD Pipelines',
            'Progressive Web Apps (PWA)',
            'Electron Desktop Applications',
            'React & Next.js Enterprise Apps',
            'Digital Transformation Consulting'
        ],
        technologies: [
            'Python',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'OLLAMA',
            'Electron',
            'FastAPI',
            'Django',
            'PostgreSQL',
            'MongoDB',
            'Docker',
            'Kubernetes',
            'AWS'
        ]
    },
    seo: {
        defaultLanguage: 'de',
        alternateLanguages: ['en', 'sr'],
        robots: 'index, follow',
        googleSiteVerification: '', // Falls benötigt
        og: {
            type: 'website',
            locale: 'de_DE',
            siteName: 'Damjan Savić - Senior Developer & IT Consultant Portfolio',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant | Enterprise Software, KI-Integration, Cloud Architecture'
            }
        },
        twitter: {
            card: 'summary_large_image',
            site: '@damjansavic',
            creator: '@damjansavic'
        }
    }
} as const;
export type MetaConfig = typeof meta;
