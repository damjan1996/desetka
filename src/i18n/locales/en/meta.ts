export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Fullstack Developer | Python, JavaScript, AI',
        subtitle: 'Python, JavaScript & AI Specialist for Modern Web Applications',
        description: 'Experienced Fullstack Developer specializing in Python, JavaScript, React, Next.js, TypeScript, Electron Desktop Apps, AI/ML with OLLAMA, ERP systems, e-commerce, and process automation.',
        keywords: [
            'Damjan Savić',
            'Fullstack Developer',
            'Python Development',
            'JavaScript Development',
            'React.js',
            'Next.js',
            'TypeScript',
            'Electron Desktop Applications',
            'Artificial Intelligence AI',
            'OLLAMA AI ML',
            'ERP Integration',
            'E-Commerce Development',
            'Process Automation',
            'Backend Development',
            'Frontend Development',
            'Web Development',
            'Software Engineering'
        ].join(', ')
    },
    company: {
        name: 'Damjan Savić',
        shortName: 'Damjan Savić',
        description: 'Your partner for modern software development, AI integration, and process automation.',
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
        role: 'Fullstack Developer & AI Specialist',
        company: 'CoderConda',
        location: 'Cologne, Germany',
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
            'Python Backend Development',
            'JavaScript/TypeScript Frontend',
            'AI/ML Integration with OLLAMA',
            'Process Automation',
            'E-Commerce Development',
            'ERP System Integration',
            'Electron Desktop Apps',
            'React & Next.js Applications'
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
        defaultLanguage: 'en',
        alternateLanguages: ['de', 'sr'],
        robots: 'index, follow',
        googleSiteVerification: '', // If needed
        og: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Damjan Savić - Fullstack Developer Portfolio',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Fullstack Developer | Python, JavaScript, AI/OLLAMA'
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
