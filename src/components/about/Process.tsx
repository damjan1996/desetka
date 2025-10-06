'use client';

import { motion } from 'framer-motion';
import { Music, Wand2, Upload, Radio } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

const processIcons = [Wand2, Music, Upload, Radio];

export default function Process() {
    const t = useTranslations();
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-zinc-900 mb-4">
                        {t.aboutPage.process.title}
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        {t.aboutPage.process.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.aboutPage.process.steps.map((step, index) => {
                        const Icon = processIcons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Number Background */}
                                <div className="absolute -top-4 -left-4 text-8xl font-bold text-zinc-200 select-none">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Card */}
                                <div className="relative p-6 bg-white/80 rounded-2xl border border-zinc-200 hover:border-neon-green/30 transition-all duration-300 h-full shadow-sm">
                                    {/* Icon */}
                                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-zinc-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Line (not on last item) */}
                                {index < t.aboutPage.process.steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-zinc-300">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-300 rounded-full" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-sm"
                >
                    <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
                        {t.aboutPage.process.techStack.title}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-zinc-600 mb-2">{t.aboutPage.process.techStack.aiProduction}</p>
                            <p className="text-zinc-900 font-semibold">Suno</p>
                        </div>
                        <div className="text-center">
                            <p className="text-zinc-600 mb-2">{t.aboutPage.process.techStack.postProduction}</p>
                            <p className="text-zinc-900 font-semibold">Reaper</p>
                        </div>
                        <div className="text-center">
                            <p className="text-zinc-600 mb-2">{t.aboutPage.process.techStack.videoEditing}</p>
                            <p className="text-zinc-900 font-semibold">Premiere Pro</p>
                        </div>
                        <div className="text-center">
                            <p className="text-zinc-600 mb-2">{t.aboutPage.process.techStack.distribution}</p>
                            <p className="text-zinc-900 font-semibold">TuneCore</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
