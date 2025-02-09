export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Digital Solutions & JTL Integration',
        subtitle: 'Developer of custom solutions for process automation',
        description: 'With a background in software development and expertise in digital transformation, I help companies optimize and automate their business processes.',
        keywords: [
            'JTL Integration',
            'E-Commerce Solutions',
            'Process Automation',
            'Digital Consulting',
            'ERP Systems',
            'Python Development',
            'System Integration',
            'Digital Marketing'
        ].join(', ')
    },
    company: {
        name: 'Damjan Savić',
        shortName: 'Damjan Savić',
        description: 'Your software development partner for fast, reliable, and cost-efficient solutions.',
        address: 'Rotdornallee',
        city: 'Köln',
        postalCode: '50999',
        country: 'Germany',
        phone: '+49 175 695 0979',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com'
    },
    author: {
        name: 'Damjan Savić',
        role: 'Consultant Digital Solutions',
        company: 'Ritter Digital GmbH',
        location: 'Oberhausen, Germany',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com',
        languages: [
            { code: 'en', level: 'C2', name: 'English' },
            { code: 'sr', level: 'C2', name: 'Serbian' },
            { code: 'de', level: 'C2', name: 'German' },
            { code: 'fr', level: 'B2', name: 'French' },
            { code: 'es', level: 'B2', name: 'Spanish' },
            { code: 'ru', level: 'A1', name: 'Russian' }
        ]
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/damjansavic/',
        github: 'https://github.com/damjansavic',
        email: 'info@damjan-savic.com'
    },
    expertise: {
        areas: [
            'JTL Integration & Consulting',
            'Process Automation',
            'E-Commerce Development',
            'System Integration',
            'ERP Systems',
            'Digital Transformation'
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
        defaultLanguage: 'en',
        alternateLanguages: ['de', 'sr'],
        robots: 'index, follow',
        googleSiteVerification: '', // If needed
        og: {
            type: 'website',
            locale: 'en_US',
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
