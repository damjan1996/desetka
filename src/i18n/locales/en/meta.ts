export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant | Cologne, Germany',
        subtitle: 'Enterprise Software Development, AI Integration & Cloud Architecture by Damjan Savić',
        description: 'Damjan Savić is a Senior Fullstack Developer and Digital Solutions Consultant based in Cologne, Germany. Specializing in Enterprise Software Development, Cloud-native solutions, and AI integration. Damjan Savić delivers custom solutions using Python, React, TypeScript, OLLAMA, and modern web technologies for digital transformation.',
        keywords: [
            'Damjan Savić',
            'Damjan Savic',
            'Senior Fullstack Developer Cologne',
            'Digital Solutions Consultant Germany',
            'Software Architect Cologne',
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
            'Software Engineering',
            'Cloud Native Development',
            'Microservices Architecture',
            'DevOps Engineer Germany',
            'Enterprise Software Solutions',
            'Digital Transformation Consultant',
            'SAP Integration Specialist',
            'E-Commerce Developer Germany',
            'Machine Learning Engineer',
            'Large Language Models LLM',
            'Docker Kubernetes Expert',
            'AWS Cloud Architect',
            'Agile Software Development',
            'Remote Developer Europe'
        ].join(', ')
    },
    company: {
        name: 'Damjan Savić',
        shortName: 'Damjan Savić',
        description: 'Damjan Savić and CoderConda - Your partner for Enterprise Software Development, digital transformation, and innovative IT solutions.',
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
        role: 'Senior Fullstack Developer & Digital Solutions Consultant',
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
            'Enterprise Software Development',
            'Cloud-native Architecture',
            'Python Backend Development',
            'JavaScript/TypeScript Frontend',
            'AI/ML Integration with OLLAMA & LLMs',
            'Business Process Automation',
            'E-Commerce Platforms',
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
        defaultLanguage: 'en',
        alternateLanguages: ['de', 'sr'],
        robots: 'index, follow',
        googleSiteVerification: '', // If needed
        og: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Damjan Savić - Senior Developer & IT Consultant Portfolio',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant | Enterprise Software, AI Integration, Cloud Architecture'
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
