import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

interface SkillsMatrixProps {
  skills: Skill[];
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, categoryIndex) => (
        <div key={category} className="bg-gray-900/50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-6">{category}</h3>
          <div className="space-y-6">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <div className="group relative">
                      <span>{skill.name}</span>
                      <div className="absolute bottom-full left-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <p className="text-sm text-white/80">{skill.description}</p>
                      </div>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-orange-500"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMatrix;