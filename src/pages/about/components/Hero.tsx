import { motion } from 'framer-motion';
import { Terminal, Globe2, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    // Sichere Abfrage der Sprachen
    const getLanguages = () => {
        try {
            const languages = t('pages.about.hero.languages', { returnObjects: true });
            return typeof languages === 'object' ? Object.entries(languages) : [];
        } catch (error) {
            console.error('Error loading languages:', error);
            return [];
        }
    };

    return (
        <section className="relative min-h-screen text-white overflow-hidden">
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-3xl font-bold tracking-wider mb-4"
                >
                    {t('pages.about.hero.title')}
                </motion.h1>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl text-center mb-12"
                >
                    <p className="text-zinc-400 text-lg mb-8">
                        {t('pages.about.hero.description')}
                    </p>
                </motion.div>

                {/* Expertise Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    <div className="flex flex-col items-center p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                        <Terminal className="h-8 w-8 mb-4 text-white" />
                        <h3 className="text-lg font-semibold mb-2">
                            {t('pages.about.hero.expertise.processAutomation.title')}
                        </h3>
                        <p className="text-zinc-400 text-center text-sm">
                            {t('pages.about.hero.expertise.processAutomation.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                        <Globe2 className="h-8 w-8 mb-4 text-white" />
                        <h3 className="text-lg font-semibold mb-2">
                            {t('pages.about.hero.expertise.systemIntegration.title')}
                        </h3>
                        <p className="text-zinc-400 text-center text-sm">
                            {t('pages.about.hero.expertise.systemIntegration.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                        <Code2 className="h-8 w-8 mb-4 text-white" />
                        <h3 className="text-lg font-semibold mb-2">
                            {t('pages.about.hero.expertise.customDevelopment.title')}
                        </h3>
                        <p className="text-zinc-400 text-center text-sm">
                            {t('pages.about.hero.expertise.customDevelopment.description')}
                        </p>
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {getLanguages().map(([key, value]) => (
                        <div
                            key={key}
                            className="flex flex-col items-center p-3 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                        >
                            <span className="text-white font-medium">{value}</span>
                        </div>
                    ))}
                </motion.div>

                {/* About Me Link */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
                >
                    {t('pages.about.hero.aboutMe')}
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;