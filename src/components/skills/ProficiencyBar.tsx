import React from 'react';
import { motion } from 'framer-motion';

interface ProficiencyBarProps {
  name: string;
  level: string;
  rating: number; // 1 to 5
}

export const ProficiencyBar: React.FC<ProficiencyBarProps> = ({ name, level, rating }) => {
  const maxSegments = 5;

  return (
    <div className="space-y-1.5 py-1">
      {/* Skill Name & Level Label Badge */}
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <span className="font-semibold text-textPrimary tracking-wide">
          {name}
        </span>
        <span className="text-[11px] font-medium text-softAccent bg-elevatedSurface px-2 py-0.5 rounded-md border border-white/10">
          {level}
        </span>
      </div>

      {/* 5-Segment Progress Indicator */}
      <div 
        className="flex items-center gap-1.5 w-full" 
        role="progressbar" 
        aria-valuenow={rating} 
        aria-valuemin={1} 
        aria-valuemax={5}
        aria-valuetext={`${name}: ${level}`}
      >
        {Array.from({ length: maxSegments }).map((_, index) => {
          const isActive = index < rating;
          return (
            <div
              key={`seg-${name}-${index}`}
              className="h-1.5 flex-1 rounded-full overflow-hidden bg-elevatedSurface border border-white/5 relative"
            >
              {isActive && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                  className="w-full h-full bg-highlight origin-left rounded-full shadow-[0_0_6px_rgba(217,191,119,0.35)]"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
