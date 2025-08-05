import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen text-white overflow-hidden">
            {/* Concentric Circles Background - mit GPU-Beschleunigung */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 2 }}>
                {[1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="absolute rounded-full border border-zinc-800/30"
                        style={{
                            width: `${index * 30}%`,
                            height: `${index * 30}%`,
                            opacity: 0.1,
                            transform: 'translateZ(0)'
                        }}
                    />
                ))}
            </div>

            {/* Top Navigation */}
            <div className="absolute top-4 w-full px-8 flex justify-between items-center" style={{ zIndex: 40 }}>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/damjan-savi%C4%87-720288127/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 text-white hover:text-zinc-300 transition-colors"
                        aria-label={t('pages.home.hero.social.linkedin.title')}
                    >
                        <Linkedin className="h-5 w-5 pointer-events-none" />
                    </a>
                    <a
                        href="https://github.com/damjan1996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 text-white hover:text-zinc-300 transition-colors"
                        aria-label={t('pages.home.hero.social.github.title')}
                    >
                        <Github className="h-5 w-5 pointer-events-none" />
                    </a>
                </div>
                <a
                    href="mailto:info@damjan-savic.com"
                    className="text-white hover:text-zinc-300 transition-colors flex items-center gap-2 text-sm"
                    aria-label={t('pages.home.hero.social.email.title')}
                >
                    {t('pages.home.hero.cta')}
                </a>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-20 relative" style={{ zIndex: 30 }}>
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-56 h-56 sm:w-72 sm:h-72 mb-8 rounded-full overflow-hidden border-2 border-zinc-800"
                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                    <img
                        src="/portrait.jpg"
                        alt={t('pages.home.hero.image.alt')}
                        className="w-full h-full object-cover"
                        loading="eager"
                        style={{ transform: 'scale(1.01)' }}
                    />
                </motion.div>

                {/* Title and Name */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-sm sm:text-base tracking-wider mb-2"
                >
                    {t('pages.home.hero.title')}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl sm:text-5xl font-bold mb-8 flex items-center"
                >
                    {t('pages.home.hero.name')}<span className="animate-pulse ml-1">|</span>
                </motion.h1>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white text-base sm:text-lg z-20"
                >
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="relative w-full sm:w-auto px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group"
                    >
                        <span className="relative z-10">{t('pages.home.hero.navigation.experience')}</span>
                        <div className="absolute inset-0 bg-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="relative w-full sm:w-auto px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group"
                    >
                        <span className="relative z-10">{t('pages.home.hero.navigation.skills')}</span>
                        <div className="absolute inset-0 bg-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="relative w-full sm:w-auto px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group"
                    >
                        <span className="relative z-10">{t('pages.home.hero.navigation.projects')}</span>
                        <div className="absolute inset-0 bg-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="relative w-full sm:w-auto px-8 py-3 rounded-full uppercase cursor-pointer overflow-hidden group"
                    >
                        <span className="relative z-10">{t('pages.home.hero.navigation.about')}</span>
                        <div className="absolute inset-0 bg-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                </motion.div>
            </div>

            {/* Contact Button Bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" style={{ zIndex: 40 }}>
                <a
                    href="mailto:info@damjan-savic.com"
                    className="inline-flex items-center justify-center w-10 h-10 text-white hover:text-zinc-300 transition-colors"
                    aria-label={t('pages.home.hero.social.getInTouch')}
                >
                    <Mail className="h-6 w-6 pointer-events-none" />
                </a>
            </div>
        </section>
    );
};

export default Hero;