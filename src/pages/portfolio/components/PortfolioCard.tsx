import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackProjectClick } from '../../../services/gtm';

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    slug: string;
    date?: string;
    excerpt?: string;
    technologies?: string[];
    category?: string;
}

interface PortfolioCardProps {
    project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
    const { t } = useTranslation();

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const imagePath = `/images/projects/${project.slug}/cover.jpg`;

    // Verwende technologies anstelle von tags wenn verfügbar
    const displayTags = project.technologies || project.tags;

    const handleClick = () => {
        trackProjectClick(project.title, project.category);
    };

    return (
        <Link
            to={`/portfolio/${project.slug}`}
            onClick={handleClick}
            className="group relative block bg-zinc-900/50 backdrop-blur-sm
                     rounded-xl shadow-lg hover:shadow-2xl
                     ring-1 ring-zinc-800 hover:ring-zinc-700
                     transition-all duration-500 focus:outline-none focus:ring-2
                     focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-950
                     transform hover:-translate-y-1"
        >
            <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl"
                style={{
                    transform: 'translateZ(0)',
                    willChange: 'opacity, transform'
                }}
            >
                {/* Image Container */}
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-zinc-900">
                    <img
                        src={imagePath}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700
                                 group-hover:scale-110"
                        loading="lazy"
                        style={{ transformOrigin: 'center center' }}
                    />
                    {/* Gradient overlay that extends beyond the image */}
                    <div className="absolute inset-x-0 -bottom-20 top-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent
                                  opacity-95" />
                </div>

                {/* Content - with relative positioning to overlap the gradient */}
                <div className="relative -mt-2 p-6 bg-zinc-900 z-10">
                    {/* Project Info */}
                    <div className="flex items-center gap-4 mb-4 text-zinc-500">
                        {project.date && (
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4" />
                                <span>{project.date}</span>
                            </div>
                        )}
                        {displayTags && displayTags.length > 0 && (
                            <div className="flex items-center gap-2 text-sm">
                                <Tag className="h-4 w-4" />
                                <span>
                                    {t('portfolio.ui.technologiesCount', {
                                        count: displayTags.length,
                                        defaultValue: '{{count}} Technologies'
                                    })}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-white mb-3
                                 group-hover:text-zinc-100 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4
                                group-hover:text-zinc-300 transition-colors duration-300">
                        {project.excerpt || project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {displayTags.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-zinc-800/50
                                         text-sm text-zinc-400 rounded-full
                                         ring-1 ring-zinc-700/50 group-hover:ring-zinc-600/50
                                         group-hover:bg-zinc-800/70 group-hover:text-zinc-300
                                         transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                        {displayTags.length > 3 && (
                            <span className="text-sm text-zinc-600">
                                {t('portfolio.ui.moreTechnologies', {
                                    count: displayTags.length - 3,
                                    defaultValue: '+{{count}} more'
                                })}
                            </span>
                        )}
                    </div>

                    {/* Link Icon */}
                    <div className="absolute top-6 right-6 p-2.5 rounded-full
                                  bg-zinc-800/60 backdrop-blur-sm ring-1 ring-zinc-700/50
                                  opacity-0 group-hover:opacity-100
                                  transform translate-y-2 group-hover:translate-y-0
                                  transition-all duration-300">
                        <ExternalLink className="h-4 w-4 text-zinc-400" />
                    </div>
                </div>

                {/* Subtle Hover Border */}
                <div className="absolute inset-0 rounded-xl pointer-events-none
                              ring-1 ring-zinc-600/0 group-hover:ring-zinc-600/30
                              transition-all duration-500" />
            </motion.div>
        </Link>
    );
};

export default PortfolioCard;