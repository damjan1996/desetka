import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Schema Generator Funktion
export const generateSchema = (t: (key: string, options?: any) => string) => ({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t('schema.page.name'),
    description: t('schema.page.description'),
    mainEntity: {
        '@type': 'Person',
        name: 'Damjan Savić',
        jobTitle: t('schema.person.jobTitle'),
        description: t('schema.person.description'),
        knowsLanguage: Object.values(t('schema.person.languages', { returnObjects: true })),
        hasSkill: Object.values(t('schema.person.skills', { returnObjects: true }))
    }
});

const Schema = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const schema = generateSchema(t);

        // Entferne vorhandenes Schema
        const existingSchema = document.querySelector('script[data-schema="about"]');
        if (existingSchema) {
            existingSchema.remove();
        }

        // Füge neues Schema hinzu
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', 'about');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);

        // Cleanup beim Unmount
        return () => {
            const script = document.querySelector('script[data-schema="about"]');
            if (script) {
                script.remove();
            }
        };
    }, [t]);

    return null; // Schema-Komponente rendert nichts sichtbares
};

export default Schema;