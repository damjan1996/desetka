import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Building2, Clock, ArrowLeft, Tag, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import project data direkt
import deAiDataReader from '../../i18n/locales/de/portfolio/projects/ai-data-reader';
import enAiDataReader from '../../i18n/locales/en/portfolio/projects/ai-data-reader';
import srAiDataReader from '../../i18n/locales/sr/portfolio/projects/ai-data-reader';

import deKamenpro from '../../i18n/locales/de/portfolio/projects/kamenpro';
import enKamenpro from '../../i18n/locales/en/portfolio/projects/kamenpro';
import srKamenpro from '../../i18n/locales/sr/portfolio/projects/kamenpro';

import deSmartWarehouse from '../../i18n/locales/de/portfolio/projects/smart-warehouse';
import enSmartWarehouse from '../../i18n/locales/en/portfolio/projects/smart-warehouse';
import srSmartWarehouse from '../../i18n/locales/sr/portfolio/projects/smart-warehouse';

import dePowerPlatform from '../../i18n/locales/de/portfolio/projects/power-platform-governance';
import enPowerPlatform from '../../i18n/locales/en/portfolio/projects/power-platform-governance';
import srPowerPlatform from '../../i18n/locales/sr/portfolio/projects/power-platform-governance';

// Interfaces für den Projektinhalt
interface ProjectMeta {
    date?: string;
    client?: string;
    duration?: string;
    title: string;
    description: string;
    technologies?: string[];
}

interface ProjectContent {
    intro: string;
    challenge: {
        title: string;
        description: string;
        points?: string[];
    };
    solution: {
        title: string;
        description: string;
        content?: string;
        points?: string[];
    };
    technical?: {
        title: string;
        description: string;
        points?: string[];
        code?: string;
    };
    implementation?: {
        title: string;
        description: string;
        points?: string[];
    };
    results: {
        title: string;
        description: string;
        points?: string[];
    };
    conclusion?: string;
}

export interface TranslatedProject {
    meta: ProjectMeta;
    content: ProjectContent;
}

// Typalias für die Übersetzungen, ohne any zu verwenden
type ProjectTranslations = {
    [slug: string]: {
        [lang: string]: TranslatedProject;
    };
};

// Map der verfügbaren Übersetzungen mit explizitem Typ
const projectTranslations: ProjectTranslations = {
    'ai-data-reader': {
        de: deAiDataReader,
        en: enAiDataReader,
        sr: srAiDataReader,
    },
    'kamenpro': {
        de: deKamenpro,
        en: enKamenpro,
        sr: srKamenpro,
    },
    'smart-warehouse': {
        de: deSmartWarehouse,
        en: enSmartWarehouse,
        sr: srSmartWarehouse,
    },
    'power-platform-governance': {
        de: dePowerPlatform,
        en: enPowerPlatform,
        sr: srPowerPlatform,
    },
};

const TranslatedProjectPage = () => {
    // Typisiere useParams, damit slug als string erwartet wird
    const { slug } = useParams<{ slug: string }>();
    const { t, i18n } = useTranslation();
    const [project, setProject] = useState<TranslatedProject | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadProject = () => {
            setLoading(true);
            if (!slug) {
                setError(new Error("No project slug provided"));
                setLoading(false);
                return;
            }
            try {
                // Hole die Übersetzungen für das aktuelle Projekt
                const projectData = projectTranslations[slug];
                if (!projectData) {
                    throw new Error(`Project ${slug} not found`);
                }
                // Versuche, die Übersetzung für die aktuelle Sprache zu laden, ansonsten Fallback auf Englisch
                const translation: TranslatedProject = projectData[i18n.language] || projectData.en;
                if (!translation) {
                    throw new Error('No translation available');
                }
                setProject(translation);
                setError(null);
            } catch (err) {
                console.error('Error loading project:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        loadProject();
    }, [slug, i18n.language]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <Loader2 className="h-8 w-8 text-zinc-400 animate-spin" />
                    <p className="text-zinc-400 text-sm">
                        {t('pages.portfolio.project.loading')}
                    </p>
                </motion.div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center space-y-6 px-4 text-center"
                >
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">
                            {t('pages.portfolio.project.notFound.title')}
                        </h3>
                        <p className="text-zinc-400 text-sm max-w-md">
                            {(error && error.message) || t('pages.portfolio.project.notFound.description')}
                        </p>
                    </div>
                    <Link
                        to="/portfolio"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>{t('pages.portfolio.project.backToPortfolio')}</span>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <main className="min-h-screen">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                {/* Back Navigation */}
                <div className="mb-8">
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>{t('pages.portfolio.project.backToPortfolio')}</span>
                    </Link>
                </div>

                {/* Project Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-zinc-400">
                        {project.meta.date && (
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <time>{project.meta.date}</time>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span>{project.meta.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{project.meta.duration}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                        {project.meta.title}
                    </h1>

                    <p className="text-xl text-zinc-400">
                        {project.meta.description}
                    </p>
                </div>

                {/* Cover Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800">
                        <img
                            src={`/images/projects/${slug}/cover.jpg`}
                            alt={project.meta.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                                console.error('Image failed to load:', e.currentTarget.src);
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-50" />
                    </div>
                </motion.div>

                {/* Project Content */}
                <div className="prose prose-invert max-w-none">
                    {/* Intro */}
                    <div className="mb-12 p-6 bg-zinc-800/30 rounded-lg border border-zinc-800">
                        <p className="text-lg text-zinc-300 m-0">
                            {project.content.intro}
                        </p>
                    </div>

                    {/* Challenge Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">{project.content.challenge.title}</h2>
                        <p className="text-zinc-300 mb-4">{project.content.challenge.description}</p>
                        {project.content.challenge.points && (
                            <ul className="space-y-2">
                                {project.content.challenge.points.map((point: string, index: number) => (
                                    <li key={index} className="text-zinc-300">{point}</li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* Solution Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">{project.content.solution.title}</h2>
                        <p className="text-zinc-300 mb-4">{project.content.solution.description}</p>
                        {project.content.solution.content && (
                            <p className="text-zinc-300 mb-4">{project.content.solution.content}</p>
                        )}
                        {project.content.solution.points && (
                            <ul className="space-y-2">
                                {project.content.solution.points.map((point: string, index: number) => (
                                    <li key={index} className="text-zinc-300">{point}</li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* Technical Section */}
                    {project.content.technical && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">{project.content.technical.title}</h2>
                            <p className="text-zinc-300 mb-4">{project.content.technical.description}</p>
                            {project.content.technical.points && (
                                <ul className="space-y-2">
                                    {project.content.technical.points.map((point: string, index: number) => (
                                        <li key={index} className="text-zinc-300">{point}</li>
                                    ))}
                                </ul>
                            )}
                            {project.content.technical.code && (
                                <pre className="bg-zinc-800/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{project.content.technical.code}</code>
                </pre>
                            )}
                        </section>
                    )}

                    {/* Implementation Section */}
                    {project.content.implementation && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">{project.content.implementation.title}</h2>
                            <p className="text-zinc-300 mb-4">{project.content.implementation.description}</p>
                            {project.content.implementation.points && (
                                <ul className="space-y-2">
                                    {project.content.implementation.points.map((point: string, index: number) => (
                                        <li key={index} className="text-zinc-300">{point}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}

                    {/* Results Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">{project.content.results.title}</h2>
                        <p className="text-zinc-300 mb-4">{project.content.results.description}</p>
                        {project.content.results.points && (
                            <ul className="space-y-2">
                                {project.content.results.points.map((point: string, index: number) => (
                                    <li key={index} className="text-zinc-300">{point}</li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* Conclusion */}
                    {project.content.conclusion && (
                        <section className="mb-12 p-6 bg-zinc-800/30 rounded-lg border border-zinc-800">
                            <p className="text-lg text-zinc-300 m-0">
                                {project.content.conclusion}
                            </p>
                        </section>
                    )}
                </div>

                {/* Technologies */}
                {project.meta.technologies && (
                    <div className="mt-12 pt-6 border-t border-zinc-800">
                        <div className="flex items-center gap-4">
                            <Tag className="h-4 w-4 text-zinc-400" />
                            <div className="flex flex-wrap gap-2">
                                {project.meta.technologies.map((tech: string, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-zinc-800/50 border border-zinc-800 rounded-full text-sm text-zinc-300"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </main>
    );
};

export default TranslatedProjectPage;
