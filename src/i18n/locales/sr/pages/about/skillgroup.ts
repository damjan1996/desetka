export const skillgroup = {
    // Kategorije
    categories: {
        development: 'Razvoj',
        ecommerce: 'E-Commerce',
        marketing: 'Marketing',
        automation: 'Automatizacija',
        languages: 'Programski jezici',
        databases: 'Baze podataka'
    },
    // Veštine po kategorijama
    skills: {
        development: {
            frontend: 'Frontend razvoj',
            backend: 'Backend razvoj',
            fullstack: 'Full-Stack razvoj',
            api: 'API razvoj',
            testing: 'Testiranje softvera'
        },
        ecommerce: {
            jtl: 'JTL WaWi',
            shopware: 'Shopware',
            shopify: 'Shopify',
            woocommerce: 'WooCommerce',
            magento: 'Magento'
        },
        marketing: {
            seo: 'Optimizacija za pretraživače',
            sea: 'Marketing na pretraživačima',
            analytics: 'Web analitika',
            googleAds: 'Google Ads',
            metaAds: 'Meta Ads'
        },
        automation: {
            rpa: 'Robotska automatizacija procesa',
            workflow: 'Automatizacija radnih tokova',
            cicd: 'CI/CD',
            testing: 'Automatizacija testiranja',
            deployment: 'Automatizacija razvoja'
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
    // Pristupačnost
    ariaLabels: {
        skillGroup: 'Grupa veština',
        skillList: 'Lista veština u ovoj kategoriji'
    }
} as const;
// Tip za tipsku sigurnost
export type SkillGroupTranslations = typeof skillgroup;
