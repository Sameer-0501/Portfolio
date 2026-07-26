import React from 'react';
import { motion } from 'framer-motion';

interface TechStackPillsProps {
  technologies?: string[];
}

export const TechStackPills: React.FC<TechStackPillsProps> = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="mt-4 pt-3 border-t border-white/5">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-mutedText mb-2">
        Technologies Used
      </span>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <motion.span
            key={`tech-${tech}-${idx}`}
            whileHover={{ scale: 1.05, y: -1 }}
            className="text-xs font-medium text-softAccent bg-elevatedSurface border border-white/10 px-2.5 py-1 rounded-md hover:border-highlight/40 hover:text-textPrimary transition-all cursor-default shadow-soft"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
