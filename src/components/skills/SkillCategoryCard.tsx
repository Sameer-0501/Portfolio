import React from 'react';
import { motion } from 'framer-motion';
import { type SkillCategory } from '../../data/skills';
import { ProficiencyBar } from './ProficiencyBar';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Bot, 
  Wrench 
} from 'lucide-react';

const iconMap: Record<SkillCategory['iconName'], React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-highlight" />,
  Layout: <Layout className="w-5 h-5 text-highlight" />,
  Server: <Server className="w-5 h-5 text-highlight" />,
  Database: <Database className="w-5 h-5 text-highlight" />,
  Bot: <Bot className="w-5 h-5 text-highlight" />,
  Wrench: <Wrench className="w-5 h-5 text-highlight" />
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)" }}
      className="bg-card border border-white/10 p-6 sm:p-7 rounded-2xl shadow-soft hover:border-highlight/30 transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start gap-3.5 mb-4 pb-3 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-highlight/40 group-hover:scale-105 transition-all duration-300">
            {iconMap[category.iconName]}
          </div>
          <div>
            <h3 className="text-lg font-bold text-textPrimary tracking-tight group-hover:text-highlight transition-colors">
              {category.categoryName}
            </h3>
            <p className="text-xs text-mutedText leading-relaxed mt-0.5">
              {category.description}
            </p>
          </div>
        </div>

        {/* Skills List with Proficiency Indicators */}
        <div className="space-y-3 mt-4">
          {category.skills.map((skill) => (
            <ProficiencyBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              rating={skill.rating}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
