import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PageTransition from '../../components/PageTransition';
import PortfolioGrid from './components/PortfolioGrid';

const PortfolioPage = () => {
    const { t } = useTranslation();

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Get categories from translations
    const categories = Object.entries(t('portfolio.filters.categories', { returnObjects: true }));
    const sortOptions = Object.entries(t('portfolio.sort', { returnObjects: true }));

    return (
        <PageTransition>
            <SEO
                title={t('portfolio.seo.title')}
                description={t('portfolio.seo.description')}
            />

            <div className="relative min-h-screen bg-zinc-900">
                {/* Decorative Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl" />
                </div>

                {/* Main Content */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                    className="py-24"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-3xl font-bold text-white mb-4">
                                {t('portfolio.sections.title')}
                            </h1>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                {t('portfolio.sections.subtitle')}
                            </p>
                        </motion.div>

                        {/* Filter and Sort Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-12"
                        >
                            <div className="flex flex-wrap justify-center gap-12">
                                {/* Categories */}
                                <div className="flex flex-col items-center space-y-4">
                                    <h2 className="text-sm font-medium text-zinc-400">
                                        {t('portfolio.sections.filterTitle')}
                                    </h2>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <button className="px-4 py-2 text-sm text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 rounded-full transition-colors">
                                            {t('portfolio.filters.all')}
                                        </button>
                                        {categories.map(([key, value]) => (
                                            <button
                                                key={key}
                                                className="px-4 py-2 text-sm text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 rounded-full transition-colors"
                                            >
                                                {value}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Sort Options */}
                                <div className="flex flex-col items-center space-y-4">
                                    <h2 className="text-sm font-medium text-zinc-400">
                                        {t('portfolio.sections.sortTitle')}
                                    </h2>
                                    <div className="flex justify-center gap-2">
                                        {sortOptions.map(([key, value]) => (
                                            <button
                                                key={key}
                                                className="px-4 py-2 text-sm text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 rounded-full transition-colors"
                                            >
                                                {value}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Portfolio Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <PortfolioGrid />
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </PageTransition>
    );
};

export default PortfolioPage;