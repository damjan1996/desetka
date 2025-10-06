'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/contexts/LanguageContext';

const inspirationItems = [
    {
        items: [
            'The Midnight',
            'Gunship',
            'Perturbator',
            'Carpenter Brut',
            'Timecop1983',
        ],
        color: 'from-pink-500/10 to-purple-500/10',
    },
    {
        items: [
            'Ceca',
            'Lepa Brena',
            'Alen Islamović',
            'Bijelo Dugme',
            'Riblja Čorba',
        ],
        color: 'from-neon-green/10 to-primary/10',
    },
    {
        items: [
            'Blade Runner',
            'Drive (2011)',
            'Stranger Things',
            'VHS & Neon',
            '80s Yugoslav Design',
        ],
        color: 'from-blue-500/10 to-cyan-500/10',
    },
];

export default function Inspiration() {
    const t = useTranslations();
    
    const inspirations = [
        {
            category: t.aboutPage.inspiration.categories.synthwave,
            ...inspirationItems[0]
        },
        {
            category: t.aboutPage.inspiration.categories.balkan,
            ...inspirationItems[1]
        },
        {
            category: t.aboutPage.inspiration.categories.visual,
            ...inspirationItems[2]
        },
    ];
    
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
                        {t.aboutPage.inspiration.title}
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        {t.aboutPage.inspiration.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Inspiration Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {inspirations.map((inspiration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${inspiration.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />
                            <div className="relative p-8 bg-white/80 rounded-2xl border border-zinc-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                                <h3 className="text-xl font-bold text-zinc-900 mb-6">
                                    {inspiration.category}
                                </h3>
                                <ul className="space-y-3">
                                    {inspiration.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-zinc-700 group-hover:text-zinc-900 transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-primary/10 to-neon-green/10 rounded-3xl blur-2xl" />
                    <div className="relative p-12 bg-white/70 backdrop-blur-md rounded-3xl border border-zinc-200 shadow-sm">
                        <div className="max-w-3xl mx-auto text-center">
                            <svg
                                className="w-12 h-12 text-primary/40 mx-auto mb-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <blockquote className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-6 leading-relaxed">
                                {t.aboutPage.inspiration.quote}
                            </blockquote>
                            <cite className="text-zinc-600 not-italic">— Desetka</cite>
                        </div>
                    </div>
                </motion.div>

                {/* Vision & Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="p-8 bg-white/80 rounded-2xl border border-zinc-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t.aboutPage.inspiration.vision.title}</h3>
                        <p className="text-zinc-700 leading-relaxed">
                            {t.aboutPage.inspiration.vision.content}
                        </p>
                    </div>

                    <div className="p-8 bg-white/80 rounded-2xl border border-zinc-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t.aboutPage.inspiration.mission.title}</h3>
                        <p className="text-zinc-700 leading-relaxed">
                            {t.aboutPage.inspiration.mission.content}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
