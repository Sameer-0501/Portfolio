import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/about';
import { Compass, Sparkles } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Greeting / Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-highlight font-semibold text-sm sm:text-base uppercase tracking-wider"
      >
        <Sparkles className="w-4 h-4 text-highlight" />
        <span>My Background & Philosophy</span>
      </motion.div>

      {/* Main Narrative Paragraphs */}
      <div className="space-y-4">
        {aboutData.introParagraphs.map((paragraph, idx) => (
          <motion.p
            key={`intro-p-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-textSecondary leading-relaxed text-base sm:text-lg"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Career Objective Box */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 relative overflow-hidden rounded-2xl bg-card border border-white/10 p-6 sm:p-7 shadow-soft border-l-4 border-l-highlight group hover:border-highlight/30 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-elevatedSurface border border-white/10 flex items-center justify-center text-highlight group-hover:border-highlight/40 transition-colors">
            <Compass className="w-5 h-5 text-highlight" />
          </div>
          <h4 className="text-lg font-bold text-textPrimary tracking-tight">
            Career Objective
          </h4>
        </div>
        <p className="text-textSecondary text-sm sm:text-base leading-relaxed font-normal">
          {aboutData.careerObjective}
        </p>
      </motion.div>
    </div>
  );
};
