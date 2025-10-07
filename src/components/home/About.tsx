'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

export default function About() {
    const t = useTranslations();
    
    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
                            <Image
                                src="/images/desetka.webp"
                                alt="Desetka Mask"
                                fill
                                className="object-cover"
                            />

                            {/* Subtle Border */}
                            <div className="absolute inset-0 border border-gray-200 rounded-3xl" />
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg max-w-[120px] sm:max-w-none"
                        >
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                <div>
                                    <p className="text-xl sm:text-3xl font-bold text-gray-900">549K</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">{t.about.views}</p>
                                </div>
                                <div>
                                    <p className="text-xl sm:text-3xl font-bold text-gray-900">1.2K</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">{t.about.followers}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                {t.about.title}
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mb-6" />
                        </div>

                        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                            <p>
                                {t.about.description1}
                            </p>
                            <p>
                                {t.about.description2}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                                <p className="text-2xl font-bold text-gray-900 mb-1">48+</p>
                                <p className="text-gray-500 text-sm">{t.about.tracks}</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                                <p className="text-2xl font-bold text-gray-900 mb-1">{t.about.months_working}</p>
                                <p className="text-gray-500 text-sm">{t.about.months_working_label}</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                                <p className="text-2xl font-bold text-gray-900 mb-1">{t.about.total_viewers}</p>
                                <p className="text-gray-500 text-sm">{t.about.total_viewers_label}</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors group shadow-lg"
                            >
                                <span>{t.about.learn_more}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}