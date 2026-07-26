import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, type HighlightCardItem } from '../../data/about';
import { Target, ShieldCheck, Zap, Users } from 'lucide-react';

const highlightIconMap: Record<HighlightCardItem['iconName'], React.ReactNode> = {
  Target: <Target className="w-5 h-5 text-highlight" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-highlight" />,
  Zap: <Zap className="w-5 h-5 text-highlight" />,
  Users: <Users className="w-5 h-5 text-highlight" />
};

export const HighlightCards: React.FC = () => {
  return (
    <div className="space-y-3 pt-2">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-mutedText mb-3">
        Core Competencies
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {aboutData.highlights.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)" }}
            className="p-5 rounded-2xl bg-card border border-white/10 shadow-soft hover:border-highlight/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 flex items-center justify-center mb-3 group-hover:border-highlight/40 group-hover:scale-105 transition-all duration-300">
                {highlightIconMap[item.iconName]}
              </div>
              <h5 className="text-base font-bold text-textPrimary mb-1.5 group-hover:text-highlight transition-colors">
                {item.title}
              </h5>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
