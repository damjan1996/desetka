'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from '@/contexts/LanguageContext';

export default function AboutHero() {
    const t = useTranslations();
    
    return (
        <section className="relative pt-0 pb-12 sm:pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden">
                            <Image
                                src="/images/desetka2.webp"
                                alt="Desetka Mask"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 vhs-effect opacity-30" />
                            <div className="absolute inset-0 border-4 border-neon-green/20 rounded-3xl" />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-primary font-semibold mb-2"
                            >
                                {t.aboutPage.hero.story}
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-4"
                            >
                                DESETKA
                            </motion.h1>
                            <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-zinc-700 text-lg leading-relaxed"
                        >
                            {t.aboutPage.hero.description1}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-zinc-700 text-lg leading-relaxed"
                        >
                            {t.aboutPage.hero.description2}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="grid grid-cols-3 gap-4 pt-6"
                        >
                            <div className="p-4 rounded-xl border border-zinc-300/50">
                                <p className="text-3xl font-bold text-zinc-900 mb-1">2024</p>
                                <p className="text-zinc-600 text-sm">{t.aboutPage.hero.stats.start}</p>
                            </div>
                            <div className="p-4 rounded-xl border border-zinc-300/50">
                                <p className="text-3xl font-bold text-zinc-900 mb-1">32+</p>
                                <p className="text-zinc-600 text-sm">{t.aboutPage.hero.stats.tracks}</p>
                            </div>
                            <div className="p-4 rounded-xl border border-zinc-300/50">
                                <p className="text-3xl font-bold text-zinc-900 mb-1">549K</p>
                                <p className="text-zinc-600 text-sm">{t.aboutPage.hero.stats.views}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
