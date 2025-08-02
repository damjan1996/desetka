import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    const highlights = [
        { icon: <MapPin className="w-4 h-4" />, label: "Köln, Deutschland" },
        { icon: <Briefcase className="w-4 h-4" />, label: "5+ Jahre Erfahrung" },
        { icon: <Code className="w-4 h-4" />, label: "Full-Stack Developer" },
        { icon: <Award className="w-4 h-4" />, label: "ERP Spezialist" }
    ];

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Section - Simplified */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden aspect-square bg-zinc-800/30 backdrop-blur-sm">
                            <img
                                src="/portrait.jpg"
                                alt={t('pages.home.about.image.alt')}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="400" fill="%2327272a"/%3E%3Ctext x="50%25" y="50%25" font-family="system-ui" font-size="24" fill="%2371717a" text-anchor="middle" dominant-baseline="middle"%3EDamjan Savić%3C/text%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                {t('pages.home.about.title')}
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-full"></div>
                        </motion.div>

                        {/* Highlight Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-3"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/30 backdrop-blur-sm rounded-full border border-zinc-700/50 hover:border-zinc-600 transition-colors"
                                >
                                    <span className="text-zinc-400">{item.icon}</span>
                                    <span className="text-zinc-300 text-sm">{item.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <p className="text-zinc-300 leading-relaxed text-lg">
                                {t('pages.home.about.content')}
                            </p>
                        </motion.div>

                        {/* Call to Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-700/50 text-white rounded-xl font-medium transition-colors duration-300 flex items-center gap-2"
                            >
                                <GraduationCap className="w-4 h-4" />
                                Mehr erfahren
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-transparent hover:bg-zinc-800/30 text-zinc-300 border border-zinc-700/50 rounded-xl font-medium transition-colors duration-300"
                            >
                                CV herunterladen
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;