// components/ProjectContentTemplate.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Building2, Clock, Tag } from 'lucide-react';

interface Section {
    title: string;
    description?: string;
    content?: string;
    points?: string[];
    code?: string;
    image?: string;
}

interface ProjectTranslation {
    meta: {
        title: string;
        description: string;
        date: string;
        client: string;
        duration: string;
        technologies: string[];
    };
    content: {
        intro: string;
        challenge: Section;
        solution: Section;
        technical: Section;
        implementation: Section;
        results: Section;
        conclusion: string;
    };
}

interface ProjectContentTemplateProps {
    translationKey: string;
    fallbackData?: ProjectTranslation;
}

const ProjectContentTemplate: React.FC<ProjectContentTemplateProps> = ({
                                                                           translationKey,
                                                                           fallbackData
                                                                       }) => {
    // Nur 't' aus dem Hook extrahieren, da 'i18n' nicht verwendet wird
    const { t } = useTranslation();

    // Übersetzten Inhalt abrufen
    const translatedContent = t(`${translationKey}`, {
        returnObjects: true,
        defaultValue: fallbackData
    }) as ProjectTranslation;

    const renderSection = (section: Section) => {
        if (!section) return null;

        return (
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                </h2>
                {section.description && (
                    <p className="text-zinc-400 mb-6">
                        {section.description}
                    </p>
                )}
                {section.content && (
                    <div className="prose prose-invert max-w-none mb-6">
                        {section.content}
                    </div>
                )}
                {section.points && (
                    <ul className="list-disc list-inside text-zinc-300 space-y-2">
                        {section.points.map((point, index) => (
                            <li key={index} className="ml-4">
                                {point}
                            </li>
                        ))}
                    </ul>
                )}
                {section.code && (
                    <pre className="bg-zinc-800/50 p-4 rounded-lg overflow-x-auto border border-zinc-800">
            <code className="text-zinc-300">
              {section.code}
            </code>
          </pre>
                )}
                {section.image && (
                    <div className="mt-6">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="rounded-lg w-full"
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <article className="max-w-4xl mx-auto">
            {/* Project Meta Information */}
            <div className="mb-12">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-zinc-400">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time>{translatedContent.meta.date}</time>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{translatedContent.meta.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{translatedContent.meta.duration}</span>
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {translatedContent.meta.title}
                </h1>

                <p className="text-xl text-zinc-400">
                    {translatedContent.meta.description}
                </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-invert max-w-none mb-12">
                <p>{translatedContent.content.intro}</p>
            </div>

            {/* Main Sections */}
            {renderSection(translatedContent.content.challenge)}
            {renderSection(translatedContent.content.solution)}
            {renderSection(translatedContent.content.technical)}
            {renderSection(translatedContent.content.implementation)}
            {renderSection(translatedContent.content.results)}

            {/* Conclusion */}
            {translatedContent.content.conclusion && (
                <div className="prose prose-invert max-w-none mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        {t('portfolio.sections.conclusion')}
                    </h2>
                    <p>{translatedContent.content.conclusion}</p>
                </div>
            )}

            {/* Technologies */}
            <div className="mt-12 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-4">
                    <Tag className="h-4 w-4 text-zinc-400" />
                    <div className="flex flex-wrap gap-2">
                        {translatedContent.meta.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-zinc-800/50 border border-zinc-800 rounded-full text-sm text-zinc-300"
                            >
                {t(`technologies.${tech}`, tech)}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectContentTemplate;
