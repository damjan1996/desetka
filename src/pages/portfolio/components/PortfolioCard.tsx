import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

    return (
        <Link
            to={`/portfolio/${project.slug}`}
            className="group relative block overflow-hidden bg-zinc-800/30 border border-zinc-800
                     rounded-lg hover:bg-zinc-800/50 hover:border-zinc-700
                     transition-all duration-300 focus:outline-none focus:ring-2
                     focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
            <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{
                    transform: 'translateZ(0)',
                    willChange: 'opacity, transform'
                }}
            >
                {/* Image Container */}
                <div className="aspect-[16/9] w-full relative overflow-hidden">
                    <img
                        src={imagePath}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500
                                 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent
                                  opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                    {/* Project Info */}
                    <div className="flex items-center gap-4 mb-4 text-zinc-400">
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
                    <h3 className="text-xl font-semibold text-white mb-2
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
                                className="px-3 py-1 bg-zinc-800/50 border border-zinc-800
                                         text-sm text-zinc-300 rounded-full
                                         group-hover:border-zinc-700 group-hover:bg-zinc-800
                                         transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                        {displayTags.length > 3 && (
                            <span className="text-sm text-zinc-500">
                                {t('portfolio.ui.moreTechnologies', {
                                    count: displayTags.length - 3,
                                    defaultValue: '+{{count}} more'
                                })}
                            </span>
                        )}
                    </div>

                    {/* Link Icon */}
                    <div className="absolute top-6 right-6 p-2 rounded-full
                                  bg-zinc-800/80 backdrop-blur-sm
                                  opacity-0 group-hover:opacity-100
                                  transform translate-y-2 group-hover:translate-y-0
                                  transition-all duration-300">
                        <ExternalLink className="h-4 w-4 text-zinc-300" />
                    </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-zinc-700 opacity-0
                              group-hover:opacity-100 rounded-lg pointer-events-none
                              transition-opacity duration-300" />
            </motion.div>
        </Link>
    );
};

export default PortfolioCard;