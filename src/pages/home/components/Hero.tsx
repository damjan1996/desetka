import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPaths } from '../../../components/FloatingPaths';

const Hero = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen bg-zinc-900 text-white">
            {/* Floating Paths Background */}
            <div className="absolute inset-0 pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Concentric Circles Background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((index) => (
                    <div
                        key={index}
                        className="absolute rounded-full border border-zinc-800"
                        style={{
                            width: `${index * 20}%`,
                            height: `${index * 20}%`,
                            opacity: 0.1
                        }}
                    />
                ))}
            </div>

            {/* Top Navigation */}
            <div className="absolute top-4 w-full px-8 flex justify-between items-center z-20">
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/damjan-savi%C4%87-720288127/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-zinc-300 transition-colors"
                        aria-label={t('pages.home.hero.social.linkedin.title')}
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/damjan1996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-zinc-300 transition-colors"
                        aria-label={t('pages.home.hero.social.github.title')}
                    >
                        <Github className="h-5 w-5" />
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
            <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-16 relative z-10">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-48 h-48 sm:w-64 sm:h-64 mb-6 rounded-full overflow-hidden border-2 border-zinc-800"
                >
                    <img
                        src="/portrait.jpg"
                        alt={t('pages.home.hero.image.alt')}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Title and Name */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-sm tracking-wider mb-2"
                >
                    {t('pages.home.hero.title')}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl font-bold mb-8 flex items-center"
                >
                    {t('pages.home.hero.name')}<span className="animate-pulse ml-1">|</span>
                </motion.h1>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-white text-sm z-20"
                >
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="w-full sm:w-auto px-6 py-2 hover:bg-zinc-800 rounded-full transition-all duration-300 uppercase cursor-pointer"
                    >
                        {t('pages.home.hero.navigation.experience')}
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="w-full sm:w-auto px-6 py-2 hover:bg-zinc-800 rounded-full transition-all duration-300 uppercase cursor-pointer"
                    >
                        {t('pages.home.hero.navigation.skills')}
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="w-full sm:w-auto px-6 py-2 hover:bg-zinc-800 rounded-full transition-all duration-300 uppercase cursor-pointer"
                    >
                        {t('pages.home.hero.navigation.projects')}
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="w-full sm:w-auto px-6 py-2 hover:bg-zinc-800 rounded-full transition-all duration-300 uppercase cursor-pointer"
                    >
                        {t('pages.home.hero.navigation.about')}
                    </button>
                </motion.div>
            </div>

            {/* Contact Button Bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <a
                    href="mailto:info@damjan-savic.com"
                    className="text-white hover:text-zinc-300 transition-colors"
                    aria-label={t('pages.home.hero.social.getInTouch')}
                >
                    <Mail className="h-6 w-6" />
                </a>
            </div>
        </section>
    );
};

export default Hero;