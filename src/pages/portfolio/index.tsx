import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PortfolioGrid from './components/PortfolioGrid';

const PortfolioPage = () => {
    const { t } = useTranslation();

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };


    return (
        <>
            <SEO
                title={t('portfolio.seo.title')}
                description={t('portfolio.seo.description')}
            />

            <div className="relative min-h-screen">
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
        </>
    );
};

export default PortfolioPage;