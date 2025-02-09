import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    schema?: object;
}

const SEO: React.FC<SEOProps> = ({
                                     title,
                                     description = 'JTL Integration Expert and Digital Commerce Specialist with extensive experience in e-commerce solutions and warehouse management systems.',
                                     image = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                     article = false,
                                     schema,
                                 }) => {
    // Nur i18n wird benötigt – t wurde entfernt, da es nicht genutzt wird.
    const { i18n } = useTranslation();
    const siteTitle = 'Damjan Savić';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = 'https://damjan-savic.com';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;
    const currentLanguage = i18n.language;

    // Default schema für die Website
    const defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Damjan Savić',
        url: siteUrl,
        image: image,
        description: description,
        sameAs: [
            'https://linkedin.com/in/damjansavic',
            'https://github.com/damjansavic'
        ],
        jobTitle: 'JTL Integration Expert',
        worksFor: {
            '@type': 'Organization',
            name: 'Independent Consultant'
        },
        knowsAbout: [
            'JTL-Wawi',
            'E-commerce',
            'Warehouse Management Systems',
            'Digital Commerce',
            'System Integration'
        ]
    };

    // Sicherstellen, dass supportedLngs ein Array ist, bevor .filter verwendet wird
    const alternateUrls: Array<{ hrefLang: string; href: string }> = Array.isArray(i18n.options.supportedLngs)
        ? i18n.options.supportedLngs
            .filter((lng: string) => lng !== 'cimode')
            .map((lng: string) => ({
                hrefLang: lng,
                href: `${siteUrl}/${lng}${window.location.pathname}`,
            }))
        : [];

    return (
        <Helmet>
            {/* Basic meta tags */}
            <html lang={currentLanguage} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={currentUrl} />

            {/* Language alternates */}
            {alternateUrls?.map(
                ({ hrefLang, href }: { hrefLang: string; href: string }) => (
                    <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
                )
            )}
            <link rel="alternate" hrefLang="x-default" href={siteUrl} />

            {/* Open Graph meta tags */}
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content={currentLanguage} />
            {alternateUrls?.map(
                ({ hrefLang }: { hrefLang: string; href: string }) => (
                    <meta key={hrefLang} property="og:locale:alternate" content={hrefLang} />
                )
            )}

            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional meta tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="keywords"
                content="JTL, E-commerce, Warehouse Management, Digital Commerce, System Integration, JTL-Wawi, WMS"
            />
            <meta name="author" content="Damjan Savić" />

            {/* Schema.org markup */}
            <script type="application/ld+json">
                {JSON.stringify(schema || defaultSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
