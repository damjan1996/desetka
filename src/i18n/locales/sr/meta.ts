export const meta = {
    site: {
        name: 'Damjan Savić | Дамјан Савић',
        title: 'Damjan Savić - Старији програмер пуног стека | Консултант за дигитална решења',
        subtitle: 'Експерт за софтвер за предузећа и облак архитектуру у Немачкој',
        description: 'Дамјан Савић - искусни старији програмер пуног стека и консултант за дигитална решења из Келна, Немачка. Специјализован за софтвер за предузећа, облак архитектуру и интеграцију вештачке интелигенције за компаније у Европи.',
        keywords: [
            'Damjan Savić',
            'Дамјан Савић',
            'Старији програмер пуног стека',
            'Консултант за дигитална решења',
            'Софтвер за предузећа',
            'Облак архитектура',
            'Интеграција вештачке интелигенције',
            'JTL интеграција Немачка',
            'Е-трговина решења Европа',
            'Аутоматизација процеса',
            'ERP системи',
            'Python развој',
            'React програмирање',
            'Дигитална трансформација Келн',
            'Програмер Немачка',
            'IT консултант Европа'
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
        name: 'Damjan Savić | Дамјан Савић',
        role: 'Старији програмер пуног стека | Консултант за дигитална решења',
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
            siteName: 'Damjan Savić - Старији програмер пуног стека | Консултант за дигитална решења',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić (Дамјан Савић) - Старији програмер пуног стека и консултант за дигитална решења у Немачкој'
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
