import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Journey from './components/Journey';
import { generateSchema } from './components/Schema';

const AboutPage = () => {
    const { t } = useTranslation();

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <SEO
                title={t('pages.about.seo.title')}
                description={t('pages.about.seo.description')}
                schema={generateSchema(t)}
            />

            <div className="relative min-h-screen">
                {/* Hero Section */}
                <section className="min-h-screen relative">
                    <Hero />
                </section>

                {/* Skills Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                    className="py-24 relative"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                {t('pages.about.skills.title')}
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                {t('pages.about.skills.description')}
                            </p>
                        </motion.div>
                        <Skills />
                    </div>
                </motion.section>

                {/* Workflow Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                    className="py-24 relative"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                {t('pages.about.workflow.title')}
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                {t('pages.about.workflow.description')}
                            </p>
                        </motion.div>
                        <Workflow />
                    </div>
                </motion.section>

                {/* Journey Section */}
                <Journey />
            </div>
        </>
    );
};

export default AboutPage;