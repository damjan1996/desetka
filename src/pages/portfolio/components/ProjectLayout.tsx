import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectLayoutProps {
    children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-zinc-900 relative overflow-x-hidden"
        >
            {/* Header */}
            <motion.div
                variants={itemVariants}
                className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900 to-transparent z-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex items-center gap-4 h-full">
                        <ArrowRight className="h-5 w-5 text-zinc-500" />
                        <h2 className="text-white text-sm tracking-wider">
                            {t('portfolio.ui.projectDetails', 'PROJECT DETAILS')}
                        </h2>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <article className="prose prose-invert max-w-none
                                  prose-headings:text-white prose-headings:font-semibold
                                  prose-headings:tracking-tight

                                  prose-h1:text-3xl sm:prose-h1:text-4xl lg:prose-h1:text-5xl
                                  prose-h1:mb-6 sm:prose-h1:mb-8

                                  prose-h2:text-2xl sm:prose-h2:text-3xl lg:prose-h2:text-4xl
                                  prose-h2:mt-12 sm:prose-h2:mt-16

                                  prose-h3:text-xl sm:prose-h3:text-2xl lg:prose-h3:text-3xl
                                  prose-h3:mt-8 sm:prose-h3:mt-12

                                  prose-p:text-zinc-300 prose-p:leading-relaxed
                                  prose-p:text-base sm:prose-p:text-lg

                                  prose-a:text-white prose-a:no-underline
                                  hover:prose-a:text-zinc-300
                                  prose-a:transition-colors duration-300

                                  prose-strong:text-white

                                  prose-code:text-zinc-300 prose-code:bg-zinc-800/50
                                  prose-code:rounded prose-code:px-1.5 prose-code:py-0.5

                                  prose-pre:bg-zinc-800/50 prose-pre:border
                                  prose-pre:border-zinc-800 prose-pre:rounded-lg
                                  prose-pre:p-4 sm:prose-pre:p-6

                                  prose-img:rounded-lg
                                  prose-img:my-8

                                  prose-ul:pl-6
                                  prose-ol:pl-6
                                  prose-li:marker:text-zinc-500
                                  prose-li:text-zinc-300

                                  prose-blockquote:border-l-2 prose-blockquote:border-zinc-700
                                  prose-blockquote:pl-6 prose-blockquote:text-zinc-400"
                >
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8 sm:space-y-12"
                    >
                        {children}
                    </motion.div>
                </article>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 hidden sm:block">
                    <div className="grid grid-cols-3 gap-1 opacity-20">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-zinc-600"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Decoration */}
            <div className="fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none z-20" />
        </motion.div>
    );
};

export default ProjectLayout;