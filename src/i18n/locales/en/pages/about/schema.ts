export const schema = {
    page: {
        name: 'About Damjan Savić',
        description: 'Learn more about Damjan Savić, a certified JTL expert with extensive experience in e-commerce and warehouse management solutions.'
    },
    person: {
        jobTitle: 'JTL Integration Expert',
        description: 'With extensive experience in integrating and optimizing e-commerce systems, I help companies with the digital transformation of their business processes.',
        languages: {
            english: 'English',
            serbian: 'Serbian',
            german: 'German',
            french: 'French',
            spanish: 'Spanish',
            russian: 'Russian'
        },
        skills: {
            python: 'Python',
            googleAds: 'Google Ads',
            metaAds: 'Meta Ads',
            shopware: 'Shopware',
            shopify: 'Shopify',
            wooCommerce: 'WooCommerce',
            jtlWawi: 'JTL WAWI',
            serverAdmin: 'Server Administration',
            airflow: 'AirFlow'
        }
    }
} as const;
// Type for type safety
export type SchemaTranslations = typeof schema;
