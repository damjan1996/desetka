export const schema = {
    page: {
        name: 'Über Damjan Savić',
        description: 'Erfahren Sie mehr über Damjan Savić, einen zertifizierten JTL-Experten mit umfassender Erfahrung in E-Commerce und Warenwirtschaftslösungen.'
    },
    person: {
        jobTitle: 'JTL Integrations-Experte',
        description: 'Mit umfangreicher Erfahrung in der Integration und Optimierung von E-Commerce-Systemen unterstütze ich Unternehmen bei der digitalen Transformation ihrer Geschäftsprozesse.',
        languages: {
            english: 'Englisch',
            serbian: 'Serbisch',
            german: 'Deutsch',
            french: 'Französisch',
            spanish: 'Spanisch',
            russian: 'Russisch'
        },
        skills: {
            python: 'Python',
            googleAds: 'Google Ads',
            metaAds: 'Meta Ads',
            shopware: 'Shopware',
            shopify: 'Shopify',
            wooCommerce: 'WooCommerce',
            jtlWawi: 'JTL WAWI',
            serverAdmin: 'Server-Administration',
            airflow: 'AirFlow'
        }
    }
} as const;
// Type für Typsicherheit
export type SchemaTranslations = typeof schema;
