import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PageTransition from '../../components/PageTransition';
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
        <PageTransition>
            <SEO
                title={t('pages.about.seo.title')}
                description={t('pages.about.seo.description')}
                schema={generateSchema(t)}
            />

            <div className="relative min-h-screen bg-zinc-900">
                {/* Decorative Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl" />
                </div>

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
                    className="py-24 bg-zinc-900/50"
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
                    className="py-24 bg-zinc-900"
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
        </PageTransition>
    );
};

export default AboutPage;