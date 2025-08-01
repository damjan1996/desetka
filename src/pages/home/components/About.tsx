import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    style={{
                        transform: 'translateZ(0)',
                        willChange: 'opacity, transform'
                    }}
                >
                    {/* Image Section */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-3xl overflow-hidden aspect-square"
                            style={{
                                transform: 'translateZ(0)',
                                willChange: 'opacity, transform'
                            }}
                        >
                            <img
                                src="/portrait.jpg"
                                alt={t('pages.home.about.image.alt')}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl font-bold text-white"
                            style={{
                                transform: 'translateZ(0)',
                                willChange: 'opacity, transform'
                            }}
                        >
                            {t('pages.home.about.title')}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-zinc-400 leading-relaxed"
                            style={{
                                transform: 'translateZ(0)',
                                willChange: 'opacity, transform'
                            }}
                        >
                            <div className="text-zinc-400 leading-relaxed text-justify">
                                {t('pages.home.about.content')}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-24"
                />

                {/* Background Dots Pattern */}
                <div className="absolute top-12 right-12 grid grid-cols-7 gap-2 opacity-20">
                    {[...Array(28)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-zinc-600" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;