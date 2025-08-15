import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { HreflangTags } from './HreflangTags';
import { seoContent as seoContentDe } from '../i18n/locales/de/seo-content';
import { seoContent as seoContentEn } from '../i18n/locales/en/seo-content';
import { seoContent as seoContentSr } from '../i18n/locales/sr/seo-content';
import { meta as metaDe } from '../i18n/locales/de/meta';
import { meta as metaEn } from '../i18n/locales/en/meta';
import { meta as metaSr } from '../i18n/locales/sr/meta';
import { AutoBreadcrumbs } from './schemas/BreadcrumbSchema';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    schema?: object;
    keywords?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
}

const SEO: React.FC<SEOProps> = ({
                                     title,
                                     description,
                                     image = '/portrait.jpg',
                                     article = false,
                                     schema,
                                     keywords,
                                     author = 'Damjan Savić',
                                     datePublished,
                                     dateModified,
                                 }) => {
    // Nur i18n wird benötigt – t wurde entfernt, da es nicht genutzt wird.
    const { i18n } = useTranslation();
    const siteTitle = 'Damjan Savić';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = 'https://damjan-savic.com';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;
    const currentLanguage = i18n.language;
    
    // SEO-Content basierend auf Sprache auswählen
    const seoContent = currentLanguage === 'de' ? seoContentDe : 
                      currentLanguage === 'sr' ? seoContentSr : 
                      seoContentEn;
    const meta = currentLanguage === 'de' ? metaDe : 
                 currentLanguage === 'sr' ? metaSr : 
                 metaEn;
    const defaultDescription = description || seoContent.hero.description;
    const defaultKeywords = keywords || meta.site.keywords;

    // Default schema für die Website
    const defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Damjan Savić',
        alternateName: 'Damjan Savic',
        url: siteUrl,
        image: `${siteUrl}${image}`,
        description: defaultDescription,
        sameAs: [
            'https://linkedin.com/in/damjansavic',
            'https://github.com/damjansavic'
        ],
        jobTitle: currentLanguage === 'de' ? 
            ['Senior Fullstack Entwickler', 'Digital Solutions Consultant', 'Software Architekt', 'KI/AI Spezialist'] :
            currentLanguage === 'sr' ? 
            ['Старији програмер пуног стека', 'Консултант за дигитална решења', 'Софтверски архитекта'] :
            ['Senior Fullstack Developer', 'Digital Solutions Consultant', 'Software Architect', 'AI Specialist'],
        worksFor: {
            '@type': 'Organization',
            name: 'CoderConda'
        },
        knowsAbout: [
            'Python Development',
            'JavaScript Development',
            'React.js',
            'Next.js',
            'TypeScript',
            'Electron Desktop Applications',
            'Künstliche Intelligenz (KI/AI)',
            'OLLAMA AI/ML',
            'ERP Systems Integration',
            'E-Commerce Development',
            'Process Automation',
            'Backend Development',
            'Frontend Development',
            'Full Stack Development'
        ],
        hasSkill: [
            {
                '@type': 'DefinedTerm',
                name: 'Python Development',
                description: 'Expert-level Python programming for automation, backend development, and AI/ML applications'
            },
            {
                '@type': 'DefinedTerm',
                name: 'JavaScript/TypeScript Development',
                description: 'Full-stack JavaScript development with React, Next.js, Node.js, and TypeScript'
            },
            {
                '@type': 'DefinedTerm',
                name: 'AI/ML with OLLAMA',
                description: 'Implementation of AI solutions using OLLAMA for local language models'
            },
            {
                '@type': 'DefinedTerm',
                name: 'ERP & E-Commerce Integration',
                description: 'Custom ERP system development and e-commerce platform integration'
            }
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'DE',
            addressLocality: 'Köln'
        }
    };

    // Sicherstellen, dass supportedLngs ein Array ist, bevor .filter verwendet wird
    const alternateUrls: Array<{ hrefLang: string; href: string }> = Array.isArray(i18n.options.supportedLngs)
        ? i18n.options.supportedLngs
            .filter((lng: string) => lng !== 'cimode')
            .map((lng: string) => ({
                hrefLang: lng === 'de' ? 'de-DE' : lng === 'sr' ? 'sr-RS' : 'en-US',
                href: lng === 'de' ? 
                    `${siteUrl}${window.location.pathname}` : 
                    `${siteUrl}/${lng}${window.location.pathname}`,
            }))
        : [];

    return (
        <>
            <HreflangTags />
            <AutoBreadcrumbs />
            <Helmet>
                {/* Basic meta tags */}
                <html lang={currentLanguage} />
                <title>{fullTitle}</title>
                <meta name="description" content={defaultDescription} />
                <meta name="image" content={image} />
                <link rel="canonical" href={currentUrl} />

            {/* Open Graph meta tags */}
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={defaultDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content={
                currentLanguage === 'de' ? 'de_DE' : 
                currentLanguage === 'sr' ? 'sr_RS' : 
                'en_US'
            } />
            {alternateUrls?.map(
                ({ hrefLang }: { hrefLang: string; href: string }) => (
                    <meta key={hrefLang} property="og:locale:alternate" content={hrefLang} />
                )
            )}

            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={defaultDescription} />
            <meta name="twitter:image" content={image} />

            {/* Additional meta tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="keywords"
                content={defaultKeywords}
            />
            <meta name="author" content={author} />

            {/* Schema.org markup */}
            <script type="application/ld+json">
                {JSON.stringify(schema || defaultSchema)}
            </script>
        </Helmet>
        </>
    );
};

export default SEO;
