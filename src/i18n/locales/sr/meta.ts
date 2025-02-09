export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Digital Solutions & JTL Integration',
        subtitle: 'Programer individualnih rešenja za automatizaciju procesa',
        description: 'Sa iskustvom u razvoju softvera i ekspertizom u digitalnoj transformaciji, podržavam kompanije u optimizaciji i automatizaciji njihovih poslovnih procesa.',
        keywords: [
            'JTL integracija',
            'E-commerce rešenja',
            'Automatizacija procesa',
            'Digitalno savetovanje',
            'ERP sistemi',
            'Python razvoj',
            'Sistemska integracija',
            'Digitalni marketing'
        ].join(', ')
    },
    company: {
        name: 'CoderConda',
        shortName: 'CoderConda',
        description: 'Vaš JTL-servisni partner za brza, pouzdana i ekonomična rešenja.',
        address: 'Rotdornallee',
        city: 'Köln',
        postalCode: '50999',
        country: 'Nemačka',
        phone: '+49 175 695 0979',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com'
    },
    author: {
        name: 'Damjan Savić',
        role: 'Konsultant za digitalna rešenja',
        company: 'CoderCond',
        location: 'Oberhausen, Nemačka',
        email: 'info@damjan-savic.com',
        website: 'https://www.damjan-savic.com',
        languages: [
            { code: 'en', level: 'C2', name: 'Engleski' },
            { code: 'sr', level: 'C2', name: 'Srpski' },
            { code: 'de', level: 'C2', name: 'Nemački' },
            { code: 'fr', level: 'B2', name: 'Francuski' },
            { code: 'es', level: 'B2', name: 'Španski' },
            { code: 'ru', level: 'A1', name: 'Ruski' }
        ]
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/damjansavic/',
        github: 'https://github.com/damjansavic',
        email: 'info@damjan-savic.com'
    },
    expertise: {
        areas: [
            'JTL integracija i savetovanje',
            'Automatizacija procesa',
            'E-commerce razvoj',
            'Sistemska integracija',
            'ERP sistemi',
            'Digitalna transformacija'
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
        googleSiteVerification: '', // Po potrebi
        og: {
            type: 'website',
            locale: 'sr_RS',
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
