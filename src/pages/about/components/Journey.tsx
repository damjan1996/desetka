import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';

interface WorkPosition {
    title: string;
    period: string;
    company: string;
    location: string;
    highlights: string[];
}

const Journey = () => {
    const { t } = useTranslation();

    // Sichere Datenabruf-Funktionen
    const getWorkPositions = (): WorkPosition[] => {
        try {
            const positions = t('pages.about.journey.work.positions', { returnObjects: true });
            return Array.isArray(positions) ? (positions as WorkPosition[]) : [];
        } catch (error) {
            console.error('Error loading work positions:', error);
            return [];
        }
    };

    const getLanguageItems = () => {
        try {
            const items = t('pages.about.journey.languages.items', { returnObjects: true });
            return typeof items === 'object' ? Object.entries(items) : [];
        } catch (error) {
            console.error('Error loading language items:', error);
            return [];
        }
    };

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('pages.about.journey.title')}
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {t('pages.about.journey.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="p-6 bg-zinc-800/30 border border-zinc-800 rounded-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="h-5 w-5 text-zinc-400" />
                                <h3 className="text-lg font-medium text-white">
                                    {t('pages.about.journey.education.title')}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white font-medium">
                                        {t('pages.about.journey.education.degrees.masters.degree')}
                                    </h4>
                                    <p className="text-zinc-400 text-sm">
                                        {t('pages.about.journey.education.degrees.masters.university')}
                                    </p>
                                    <p className="text-zinc-500 text-sm">
                                        {t('pages.about.journey.education.degrees.masters.period')}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">
                                        {t('pages.about.journey.education.degrees.bachelors.degree')}
                                    </h4>
                                    <p className="text-zinc-400 text-sm">
                                        {t('pages.about.journey.education.degrees.bachelors.university')}
                                    </p>
                                    <p className="text-zinc-500 text-sm">
                                        {t('pages.about.journey.education.degrees.bachelors.period')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="p-6 bg-zinc-800/30 border border-zinc-800 rounded-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="h-5 w-5 text-zinc-400" />
                                <h3 className="text-lg font-medium text-white">
                                    {t('pages.about.journey.languages.title')}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {getLanguageItems().map(([key, item]) => (
                                    <div key={key}>
                                        <div className="text-zinc-300">{item.name}</div>
                                        <div className="text-zinc-500 text-sm">{item.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Work History */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {getWorkPositions().map((job, index) => (
                            <div
                                key={index}
                                className="p-6 bg-zinc-800/30 border border-zinc-800 rounded-lg"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-white">{job.title}</h3>
                                    <span className="text-zinc-500 text-sm">{job.period}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Briefcase className="h-4 w-4 text-zinc-400" />
                                    <p className="text-zinc-300">{job.company}</p>
                                    <span className="text-zinc-500">• {job.location}</span>
                                </div>
                                <ul className="space-y-2">
                                    {job.highlights.map((highlight: string, idx: number) => (
                                        <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                                            <span className="text-zinc-500">•</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
