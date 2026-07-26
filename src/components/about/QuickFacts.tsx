import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, type QuickFactItem } from '../../data/about';
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  MapPin, 
  Briefcase 
} from 'lucide-react';

const iconMap: Record<QuickFactItem['iconName'], React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-4 h-4 text-highlight" />,
  Code: <Code className="w-4 h-4 text-highlight" />,
  Cpu: <Cpu className="w-4 h-4 text-highlight" />,
  MapPin: <MapPin className="w-4 h-4 text-highlight" />,
  Briefcase: <Briefcase className="w-4 h-4 text-highlight" />
};

export const QuickFacts: React.FC = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-mutedText mb-3">
        Quick Facts
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {aboutData.quickFacts.map((fact, idx) => (
          <motion.div
            key={fact.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -2 }}
            className="p-3.5 rounded-xl bg-card border border-white/10 shadow-soft hover:border-highlight/30 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-elevatedSurface border border-white/10 flex flex-shrink-0 items-center justify-center group-hover:border-highlight/30 transition-colors">
              {iconMap[fact.iconName]}
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium text-mutedText uppercase tracking-wider">
                {fact.label}
              </span>
              <span className="block text-sm font-semibold text-textPrimary truncate group-hover:text-highlight transition-colors">
                {fact.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
