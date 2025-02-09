import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Server, Store, Code2, Box } from 'lucide-react';

interface SkillItem {
    name: string;
    level: number;
}

interface SkillGroup {
    category: string;
    items: SkillItem[];
}

const iconMap: { [key: string]: React.ReactNode } = {
    'Python': <Code2 className="w-8 h-8" />,
    'Server': <Server className="w-8 h-8" />,
    'Google Ads': <Store className="w-8 h-8" />,
    'Meta Ads': <Store className="w-8 h-8" />,
    'Shopware': <Store className="w-8 h-8" />,
    'Shopify': <Store className="w-8 h-8" />,
    'WooCommerce': <Store className="w-8 h-8" />,
    'JTL WAWI': <Box className="w-8 h-8" />,
    'AirFlow': <Database className="w-8 h-8" />
};

const Skills = () => {
    const { t } = useTranslation();
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const skillGroups = t('pages.about.skills.skillGroups', {
        returnObjects: true
    }) as SkillGroup[];

    // Alle Skills aus allen Gruppen flach auflisten
    const allSkills = skillGroups.flatMap(group => group.items);

    return (
        <section className="py-24 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-12">
                        {t('pages.about.skills.title')}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Skills Progress Bars */}
                        <div className="space-y-6">
                            {allSkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onHoverStart={() => setSelectedSkill(skill.name)}
                                    onHoverEnd={() => setSelectedSkill(null)}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <span className="text-white text-sm font-medium">
                                                {skill.name}
                                            </span>
                                            {selectedSkill === skill.name && (
                                                <span className="text-zinc-400 text-xs">
                                                    {t('pages.about.skills.ui.skillLevel', {
                                                        level: skill.level,
                                                        skill: skill.name
                                                    })}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-white text-sm">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div
                                        className="h-2 bg-zinc-800 rounded-full overflow-hidden"
                                        role="progressbar"
                                        aria-valuenow={skill.level}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label={t('pages.about.skills.aria.skillBar', { skill: skill.name })}
                                    >
                                        <motion.div
                                            className={`h-full rounded-full ${
                                                selectedSkill === skill.name ? 'bg-zinc-500' : 'bg-zinc-600'
                                            }`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Icons Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {allSkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className={`p-6 rounded-xl bg-zinc-800 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:bg-zinc-700 ${
                                        selectedSkill === skill.name ? 'ring-2 ring-zinc-500' : ''
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedSkill(skill.name === selectedSkill ? null : skill.name)}
                                    role="button"
                                    aria-pressed={selectedSkill === skill.name}
                                    aria-label={t('pages.about.skills.aria.selectSkill')}
                                >
                                    <div className={selectedSkill === skill.name ? 'text-zinc-500' : 'text-white'}>
                                        {iconMap[skill.name] || <Box className="w-8 h-8" />}
                                    </div>
                                    <span className="text-white text-sm text-center">
                                        {skill.name}
                                    </span>
                                    {selectedSkill === skill.name && (
                                        <span className="text-zinc-400 text-xs text-center mt-1">
                                            {t('pages.about.skills.screenReader.skillProgress', {
                                                skill: skill.name,
                                                level: skill.level
                                            })}
                                        </span>
                                    )}
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