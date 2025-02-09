export const schema = {
    page: {
        name: 'O Damjanu Saviću',
        description: 'Saznajte više o Damjanu Saviću, sertifikovanom JTL ekspertu sa velikim iskustvom u e-trgovini i sistemima za upravljanje robom.'
    },
    person: {
        jobTitle: 'JTL integracioni ekspert',
        description: 'Sa bogatim iskustvom u integraciji i optimizaciji e-commerce sistema, pomažem kompanijama u digitalnoj transformaciji njihovih poslovnih procesa.',
        languages: {
            english: 'Engleski',
            serbian: 'Srpski',
            german: 'Nemački',
            french: 'Francuski',
            spanish: 'Španski',
            russian: 'Ruski'
        },
        skills: {
            python: 'Python',
            googleAds: 'Google Ads',
            metaAds: 'Meta Ads',
            shopware: 'Shopware',
            shopify: 'Shopify',
            wooCommerce: 'WooCommerce',
            jtlWawi: 'JTL WAWI',
            serverAdmin: 'Administracija servera',
            airflow: 'AirFlow'
        }
    }
} as const;
// Tip za tipsku sigurnost
export type SchemaTranslations = typeof schema;
