import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import PortfolioCard from '../../portfolio/components/PortfolioCard';
import { getAllProjects } from '../../portfolio/utils';
import type { Project } from '../../portfolio/utils';

// Erweiterter Typ: Wir gehen davon aus, dass jedes Project über einen 'slug' verfügt.
// Falls doch ein 'id'-Feld existieren sollte, wird es beibehalten.
interface ProjectWithId extends Project {
    id: string;
}

const Projects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState<ProjectWithId[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projectsData = await getAllProjects();
                // Ergänze das fehlende 'id'-Feld (als Fallback verwenden wir hier den 'slug')
                const projectsWithId: ProjectWithId[] = projectsData.map((project) => ({
                    ...project,
                    id: project.slug,
                }));
                // Nur die ersten 3 Projekte für die Homepage
                setProjects(projectsWithId.slice(0, 3));
            } catch (error) {
                console.error(t('pages.home.projects.error.loading'), error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, [t]);

    if (loading) {
        return (
            <section className="py-24 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center min-h-[300px] gap-3">
                        <Loader2 className="h-8 w-8 text-zinc-400 animate-spin" />
                        <span className="text-zinc-400">
              {t('pages.home.projects.loading')}
            </span>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-zinc-100">
                            {t('pages.home.projects.title')}
                        </h2>
                        <Link
                            to="/portfolio"
                            className="text-zinc-400 hover:text-white transition-colors duration-300"
                            aria-label={t('pages.home.projects.viewAll')}
                        >
                            {t('pages.home.projects.viewAll')}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <PortfolioCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
