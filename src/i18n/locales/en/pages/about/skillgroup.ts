export const skillgroup = {
    // Categories
    categories: {
        development: 'Development',
        ecommerce: 'E-Commerce',
        marketing: 'Marketing',
        automation: 'Automation',
        languages: 'Programming Languages',
        databases: 'Databases'
    },
    // Skills by category
    skills: {
        development: {
            frontend: 'Frontend Development',
            backend: 'Backend Development',
            fullstack: 'Full-Stack Development',
            api: 'API Development',
            testing: 'Software Testing'
        },
        ecommerce: {
            jtl: 'JTL WaWi',
            shopware: 'Shopware',
            shopify: 'Shopify',
            woocommerce: 'WooCommerce',
            magento: 'Magento'
        },
        marketing: {
            seo: 'Search Engine Optimization',
            sea: 'Search Engine Advertising',
            analytics: 'Web Analytics',
            googleAds: 'Google Ads',
            metaAds: 'Meta Ads'
        },
        automation: {
            rpa: 'Robotic Process Automation',
            workflow: 'Workflow Automation',
            cicd: 'CI/CD',
            testing: 'Test Automation',
            deployment: 'Deployment Automation'
        },
        languages: {
            python: 'Python',
            javascript: 'JavaScript',
            typescript: 'TypeScript',
            php: 'PHP',
            sql: 'SQL'
        },
        databases: {
            mysql: 'MySQL',
            postgresql: 'PostgreSQL',
            mongodb: 'MongoDB',
            redis: 'Redis',
            elasticsearch: 'Elasticsearch'
        }
    },
    // Accessibility
    ariaLabels: {
        skillGroup: 'Skill Group',
        skillList: 'List of skills in this category'
    }
} as const;
// Type for type safety
export type SkillGroupTranslations = typeof skillgroup;
