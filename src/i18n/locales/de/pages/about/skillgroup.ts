export const skillgroup = {
    // Kategorien
    categories: {
        development: 'Entwicklung',
        ecommerce: 'E-Commerce',
        marketing: 'Marketing',
        automation: 'Automatisierung',
        languages: 'Programmiersprachen',
        databases: 'Datenbanken'
    },
    // Skills nach Kategorien
    skills: {
        development: {
            frontend: 'Frontend-Entwicklung',
            backend: 'Backend-Entwicklung',
            fullstack: 'Full-Stack-Entwicklung',
            api: 'API-Entwicklung',
            testing: 'Software-Testing'
        },
        ecommerce: {
            jtl: 'JTL WaWi',
            shopware: 'Shopware',
            shopify: 'Shopify',
            woocommerce: 'WooCommerce',
            magento: 'Magento'
        },
        marketing: {
            seo: 'Suchmaschinenoptimierung',
            sea: 'Suchmaschinenwerbung',
            analytics: 'Web-Analyse',
            googleAds: 'Google Ads',
            metaAds: 'Meta Ads'
        },
        automation: {
            rpa: 'Robotergestützte Prozessautomatisierung',
            workflow: 'Workflow-Automatisierung',
            cicd: 'CI/CD',
            testing: 'Test-Automatisierung',
            deployment: 'Deployment-Automatisierung'
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
        skillGroup: 'Fähigkeitsgruppe',
        skillList: 'Liste der Fähigkeiten in dieser Kategorie'
    }
} as const;
// Type für Typsicherheit
export type SkillGroupTranslations = typeof skillgroup;
