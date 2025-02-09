export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Digital Solutions & JTL Integration',
        subtitle: 'Entwickler individueller Lösungen zur Automatisierung von Prozessen',
        description: 'Mit einem Hintergrund in der Softwareentwicklung und Expertise in der digitalen Transformation unterstütze ich Unternehmen bei der Optimierung und Automatisierung ihrer Geschäftsprozesse.',
        keywords: [
            'JTL Integration',
            'E-Commerce Lösungen',
            'Prozessautomatisierung',
            'Digitale Beratung',
            'ERP Systeme',
            'Python Entwicklung',
            'Systemintegration',
            'Digitales Marketing'
        ].join(', ')
    },
    company: {
        name: 'CoderConda',
        shortName: 'CoderConda',
        description: 'Ihr JTL-Servicepartner für schnelle, verbindliche und kosteneffiziente Lösungen.',
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
        role: 'Consultant Digital Solutions',
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
            'JTL Integration & Beratung',
            'Prozessautomatisierung',
            'E-Commerce Entwicklung',
            'Systemintegration',
            'ERP-Systeme',
            'Digitale Transformation'
        ],
        technologies: [
            'Python',
            'React/Next.js',
            'MariaDB',
            'Docker',
            'JTL-WaWi',
            'Shopify',
            'Shopware'
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
            siteName: 'Damjan Savić - Digital Solutions',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Digital Solutions & JTL Integration'
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
