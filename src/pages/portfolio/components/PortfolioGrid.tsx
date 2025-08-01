import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PortfolioCard from './PortfolioCard';
import type { Project } from '../utils';
import { getAllProjects } from '../utils';

// Neuer Typ, der die originale Project-Schnittstelle erweitert
type ProjectWithId = Project & { id: string };

const PortfolioGrid = () => {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState<ProjectWithId[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projectsData = await getAllProjects();

                // Ergänze das fehlende 'id'-Feld (verwende als Fallback den 'slug')
                const projectsDataWithId = projectsData.map((project) => ({
                    ...project,
                    id: project.slug,
                })) as ProjectWithId[];

                try {
                    const localeModule = await import(
                        `../../../i18n/locales/${i18n.language}/portfolio/index.ts`
                        );

                    // Mische die Projekte mit lokalisierten Inhalten, sofern verfügbar
                    const localizedProjects = projectsDataWithId.map((project) => {
                        const localizedProject = localeModule.portfolio.projects[project.slug];
                        if (localizedProject) {
                            return {
                                ...project,
                                ...localizedProject.meta,
                                content: localizedProject.content,
                            };
                        }
                        return project;
                    });

                    setProjects(localizedProjects);
                } catch {
                    // Fallback: Verwende die Originaldaten, wenn keine Übersetzungen vorhanden sind
                    console.warn(
                        `Translations not found for ${i18n.language}, using default content`
                    );
                    setProjects(projectsDataWithId);
                }
            } catch (error) {
                console.error('Error loading projects:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, [i18n.language]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-zinc-900">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <Loader2 className="h-8 w-8 text-zinc-400 animate-spin" />
                    <p className="text-zinc-400 text-sm">
                        {t('portfolio.ui.loading', 'Loading projects...')}
                    </p>
                </motion.div>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-zinc-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center space-y-6 px-4 text-center"
                >
                    <Code2 className="h-12 w-12 text-zinc-400" />
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">
                            {t('portfolio.ui.noProjects', 'No Projects Found')}
                        </h3>
                        <p className="text-zinc-400 text-sm max-w-md">
                            {t(
                                'portfolio.ui.noProjectsDescription',
                                'There are currently no projects to display. Check back later for updates.'
                            )}
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <section className="py-12 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.slug}
                            variants={itemVariants}
                            transition={{ duration: 0.5 }}
                            className="group"
                        >
                            <PortfolioCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
