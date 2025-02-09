// SkillBar.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface SkillBarProps {
    name: string;
    level: number;
    className?: string;
    'aria-label'?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, className = '', 'aria-label': ariaLabel }) => {
    const { t } = useTranslation();

    return (
        <div className={`space-y-2 ${className}`}>
            <div className="flex justify-between items-center">
                <span className="text-white text-sm">{name}</span>
                <span className="text-white text-sm">
                    {level}%
                </span>
            </div>
            <div
                className="h-2 bg-zinc-800 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={ariaLabel || t('pages.about.skills.screenReader.skillProgress', {
                    skill: name,
                    level
                })}
            >
                <motion.div
                    className="h-full bg-zinc-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default SkillBar;