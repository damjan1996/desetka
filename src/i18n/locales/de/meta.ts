export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Fullstack Entwickler | Python, JavaScript, KI',
        subtitle: 'Python, JavaScript & KI Spezialist für moderne Webanwendungen und Automatisierung',
        description: 'Erfahrener Fullstack Entwickler spezialisiert auf Python, JavaScript, React, Next.js, TypeScript, Electron Desktop Apps, KI/AI mit OLLAMA, ERP-Systeme, E-Commerce und Prozessautomatisierung.',
        keywords: [
            'Damjan Savić',
            'Fullstack Entwickler',
            'Python Entwicklung',
            'JavaScript Entwicklung',
            'React.js',
            'Next.js',
            'TypeScript',
            'Electron Desktop Apps',
            'Künstliche Intelligenz KI AI',
            'OLLAMA AI ML',
            'ERP Integration',
            'E-Commerce Entwicklung',
            'Prozessautomatisierung',
            'Backend Entwicklung',
            'Frontend Entwicklung',
            'Web Development',
            'Software Engineering'
        ].join(', ')
    },
    company: {
        name: 'CoderConda',
        shortName: 'CoderConda',
        description: 'Ihr Partner für moderne Softwareentwicklung, KI-Integration und Prozessautomatisierung.',
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
        role: 'Fullstack Developer & KI Spezialist',
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
            'Python Backend Entwicklung',
            'JavaScript/TypeScript Frontend',
            'KI/ML Integration mit OLLAMA',
            'Prozessautomatisierung',
            'E-Commerce Entwicklung',
            'ERP System Integration',
            'Electron Desktop Apps',
            'React & Next.js Anwendungen'
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
            siteName: 'Damjan Savić - Fullstack Developer Portfolio',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Fullstack Developer | Python, JavaScript, KI/OLLAMA'
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
