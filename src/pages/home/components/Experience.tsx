import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const { t } = useTranslation();

    const [currentPage, setCurrentPage] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Entfernen des 'translation.' Prefixes, da dies nicht in der Struktur vorhanden ist
    const experiences = t('pages.home.experience.positions', {
        returnObjects: true,
        defaultValue: []
    });

    const itemsPerPage = window.innerWidth >= 768 ? 2 : 1;
    const totalPages = Math.ceil((Array.isArray(experiences) ? experiences.length : 0) / itemsPerPage);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
        if (isRightSwipe && currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    const getCurrentPageItems = () => {
        if (!Array.isArray(experiences)) return [];

        const startIndex = currentPage * itemsPerPage;
        return experiences.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <section className="py-12 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{
                        transform: 'translateZ(0)',
                        willChange: 'opacity, transform'
                    }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        {t('pages.home.experience.title')}
                    </h2>
                    <div
                        ref={containerRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="relative"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                                transition={{ 
                                    duration: 0.5,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                style={{
                                    transform: 'translateZ(0)',
                                    willChange: 'opacity, transform'
                                }}
                            >
                                {getCurrentPageItems().map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 0.6,
                                            delay: index * 0.15,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            y: -5,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="p-6 md:p-8 rounded-3xl bg-zinc-800/40 hover:bg-zinc-800/60 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/50"
                                        style={{
                                            transform: 'translateZ(0)',
                                            willChange: 'opacity, transform'
                                        }}
                                    >
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-base md:text-lg text-zinc-400 mb-2">
                                            {exp.company}
                                        </h4>
                                        <p className="text-sm text-zinc-500 mb-6">
                                            {exp.period}
                                        </p>
                                        <ul className="space-y-3 md:space-y-4">
                                            {exp.highlights?.map((highlight: string, hIndex: number) => (
                                                <motion.li
                                                    key={hIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: 0.3 + (hIndex * 0.1),
                                                        ease: "easeOut"
                                                    }}
                                                    className="text-zinc-400 text-sm leading-relaxed flex items-start"
                                                >
                                                    <span className="text-white/40 mr-2 mt-0.5">→</span>
                                                    <span>{highlight}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={() => currentPage > 0 && setCurrentPage(prev => prev - 1)}
                                className="text-zinc-400 hover:text-white transition-all duration-300 p-2 text-2xl font-light disabled:opacity-30"
                                disabled={currentPage === 0}
                                aria-label={t('pages.home.experience.navigation.prev')}
                            >
                                ‹
                            </button>
                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPage(index)}
                                        className={`rounded-full transition-all duration-300 ${
                                            index === currentPage 
                                                ? 'bg-white' 
                                                : 'bg-zinc-600 hover:bg-zinc-400'
                                        }`}
                                        style={{
                                            width: '5px',
                                            height: '5px',
                                            minWidth: '5px',
                                            minHeight: '5px',
                                            padding: '0'
                                        }}
                                        aria-label={t('pages.home.experience.navigation.page', { page: index + 1 })}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => currentPage < totalPages - 1 && setCurrentPage(prev => prev + 1)}
                                className="text-zinc-400 hover:text-white transition-all duration-300 p-2 text-2xl font-light disabled:opacity-30"
                                disabled={currentPage === totalPages - 1}
                                aria-label={t('pages.home.experience.navigation.next')}
                            >
                                ›
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;