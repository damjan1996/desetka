'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Music, Instagram, Mail } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

export default function Hero() {
    const t = useTranslations();
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">

            {/* Top Navigation */}
            <div className="absolute top-4 w-full px-4 sm:px-8 flex justify-between items-center" style={{ zIndex: 40 }}>
                <div className="flex gap-3 sm:gap-4">
                    <a
                        href="https://open.spotify.com/intl-de/artist/5GVCVObf4MGbZCOjjFNDTE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 text-gray-900 hover:text-gray-600 transition-colors touch-manipulation"
                        aria-label="Spotify"
                    >
                        <Music className="h-5 w-5 pointer-events-none" />
                    </a>
                    <a
                        href="https://www.instagram.com/desetkanakvadrat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 text-gray-900 hover:text-gray-600 transition-colors touch-manipulation"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-5 w-5 pointer-events-none" />
                    </a>
                </div>
                <a
                    href="mailto:contact@desetka.net"
                    className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2 text-xs sm:text-sm touch-manipulation"
                    aria-label={t.hero.contact_cta}
                >
                    <span className="hidden sm:inline">{t.hero.contact_cta}</span>
                    <span className="sm:hidden"><Mail className="h-4 w-4" /></span>
                </a>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-20 relative" style={{ zIndex: 30 }}>
                {/* Mask/Logo Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-6 sm:mb-8 rounded-full overflow-hidden border-2 border-gray-200"
                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                    <Image
                        src="/images/desetka.webp"
                        alt="Desetka Mask"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                        priority
                    />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-600 text-sm sm:text-base tracking-wider mb-2"
                >
                    {t.hero.subtitle}
                </motion.p>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center text-gray-900"
                >
                    DESETKA<span className="animate-pulse ml-1">|</span>
                </motion.h1>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 text-gray-900 text-sm sm:text-base md:text-lg z-20 items-center justify-center"
                >
                    <button
                        onClick={() => scrollToSection('music')}
                        className="relative px-4 sm:px-6 md:px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group touch-manipulation text-center w-full sm:w-auto"
                    >
                        <span className="relative z-10">{t.hero.music}</span>
                        <div className="absolute inset-0 bg-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="relative px-4 sm:px-6 md:px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group touch-manipulation text-center w-full sm:w-auto"
                    >
                        <span className="relative z-10">{t.hero.about}</span>
                        <div className="absolute inset-0 bg-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                    <button
                        onClick={() => scrollToSection('faq')}
                        className="relative px-4 sm:px-6 md:px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group touch-manipulation text-center w-full sm:w-auto"
                    >
                        <span className="relative z-10">{t.hero.faq}</span>
                        <div className="absolute inset-0 bg-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                </motion.div>
            </div>

        </section>
    );
}