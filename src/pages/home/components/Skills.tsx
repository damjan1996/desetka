import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Store, Code2, CodepenIcon, Box } from 'lucide-react';

interface Skill {
    name: string;
    level: number;
    description: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
    'ERP': <Box className="w-8 h-8" />,
    'Datenbank': <Database className="w-8 h-8" />,
    'Database': <Database className="w-8 h-8" />,
    'Baze podataka': <Database className="w-8 h-8" />,
    'E-Commerce': <Store className="w-8 h-8" />,
    'Python': <Code2 className="w-8 h-8" />,
    'React': <CodepenIcon className="w-8 h-8" />,
    'Server': <Server className="w-8 h-8" />
};

const Skills = () => {
    const { t } = useTranslation();
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        try {
            // Type Assertion: Wir gehen davon aus, dass die Übersetzungsobjekte dem Skill-Interface entsprechen.
            const translatedSkills = t('pages.home.skills.skills', {
                returnObjects: true,
                defaultValue: []
            }) as Skill[];

            if (Array.isArray(translatedSkills)) {
                setSkills(translatedSkills);
            } else {
                console.error('Skills translation is not an array');
                setSkills([]);
            }
        } catch (error) {
            console.error('Error loading skills:', error);
            setSkills([]);
        }
    }, [t]);

    if (skills.length === 0) {
        return <div>Loading skills...</div>;
    }

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-12">
                        {t('pages.home.skills.title')}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Skills Progress Bars */}
                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: skills.indexOf(skill) * 0.1 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-white text-sm font-medium">
                                            {skill.name}
                                        </span>
                                        <span className="text-white text-sm">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div
                                        className="h-2 bg-zinc-800/50 rounded-full overflow-hidden"
                                        role="progressbar"
                                        aria-valuenow={skill.level}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label={t('pages.home.skills.aria.skillLevel')}
                                    >
                                        <motion.div
                                            className="h-full rounded-full bg-gradient-to-r from-zinc-600 to-zinc-500"
                                            initial={{ width: 0 }}
                                            animate={{ 
                                                width: `${skill.level}%`
                                            }}
                                            transition={{ 
                                                width: { duration: 1, delay: skills.indexOf(skill) * 0.1 }
                                            }}
                                            style={{
                                                transform: 'translateZ(0)',
                                                willChange: 'width'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Icons Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="relative"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: skills.indexOf(skill) * 0.1 }}
                                >
                                    <motion.div
                                        className={`relative p-6 rounded-xl bg-zinc-800/30 backdrop-blur-sm flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors duration-300 hover:bg-zinc-700/50 ${
                                            selectedSkill === skill.name ? 'ring-2 ring-zinc-500 z-20' : ''
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        onHoverStart={() => setSelectedSkill(skill.name)}
                                        onHoverEnd={() => setSelectedSkill(null)}
                                        role="button"
                                        aria-pressed={selectedSkill === skill.name}
                                        aria-label={t('pages.home.skills.aria.selectSkill')}
                                        style={{
                                            transform: 'translateZ(0)',
                                            willChange: 'transform',
                                            position: 'relative',
                                            zIndex: selectedSkill === skill.name ? 20 : 1
                                        }}
                                    >
                                        <motion.div 
                                            className={selectedSkill === skill.name ? 'text-zinc-500' : 'text-white'}
                                            animate={{ 
                                                rotate: selectedSkill === skill.name ? [0, -10, 10, 0] : 0,
                                                scale: selectedSkill === skill.name ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {iconMap[skill.name]}
                                        </motion.div>
                                        <span className="text-white text-sm text-center">
                                            {skill.name}
                                        </span>
                                        
                                        <AnimatePresence>
                                            {selectedSkill === skill.name && (
                                                <motion.div
                                                    className="absolute left-1/2 top-0 -translate-x-1/2 bg-zinc-800/80 backdrop-blur-sm rounded-lg px-4 py-2 text-zinc-300 text-xs text-center shadow-xl pointer-events-none"
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    transition={{ duration: 0.15 }}
                                                    style={{
                                                        whiteSpace: 'nowrap',
                                                        transform: 'translate(-50%, calc(-100% - 12px))',
                                                        zIndex: 999
                                                    }}
                                                >
                                                    {skill.description}
                                                    <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-zinc-800"></div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
