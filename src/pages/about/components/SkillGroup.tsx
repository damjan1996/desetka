// SkillGroup.tsx
import { useTranslation } from 'react-i18next';
import SkillBar from './SkillBar';

interface SkillGroupProps {
    category: string;
    items: {
        name: string;
        level: number;
    }[];
    className?: string;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ category, items, className = '' }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`bg-zinc-800/30 border border-zinc-800 p-6 rounded-lg ${className}`}
            role="region"
            aria-label={t('pages.about.skills.aria.skillGroup', { category })}
        >
            <h3 className="text-xl font-semibold mb-6 text-white">{category}</h3>
            <div className="space-y-6">
                {items.map((skill) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        aria-label={t('pages.about.skills.aria.skillBar', { skill: skill.name })}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillGroup;