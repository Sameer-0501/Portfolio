import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type ExperienceItem } from '../../data/experience';
import { TechStackPills } from './TechStackPills';
import { AchievementBadge } from './AchievementBadge';
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, Award, Code, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="text-highlight w-5 h-5" />,
  briefcase: <Briefcase className="text-highlight w-5 h-5" />,
  award: <Award className="text-highlight w-5 h-5" />,
  lightbulb: <Lightbulb className="text-highlight w-5 h-5" />
};

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleBullets = 3;
  const hasMoreBullets = (item.bullets?.length || 0) > maxVisibleBullets;
  const displayedBullets = isExpanded ? item.bullets : item.bullets?.slice(0, maxVisibleBullets);

  return (
    <div className="relative z-10 flex gap-3 sm:gap-8 group">
      {/* Timeline Node Column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
          className="mt-1.5"
        >
          <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-background border-4 border-highlight flex items-center justify-center shadow-[0_0_12px_rgba(217,191,119,0.3)] group-hover:scale-110 group-hover:border-primaryAccent transition-all duration-300">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primaryAccent rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Main Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)" }}
        className="flex-grow bg-card p-4 sm:p-8 rounded-2xl border border-white/10 hover:border-highlight/40 transition-all duration-300 shadow-soft mb-8"
      >
        {/* Card Header: Role Title & Employment Type */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="w-8 h-8 rounded-lg bg-elevatedSurface border border-white/10 flex items-center justify-center flex-shrink-0">
                {iconMap[item.icon] || <Briefcase className="text-highlight w-4 h-4" />}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                {item.title}
              </h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap text-sm sm:text-base font-semibold text-highlight mt-1">
              <span>{item.company}</span>
              {item.type && (
                <span className="text-xs font-medium text-softAccent bg-elevatedSurface border border-white/10 px-2.5 py-0.5 rounded-full">
                  {item.type}
                </span>
              )}
            </div>
          </div>

          {/* Duration & Location Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-mutedText">
            {item.duration && (
              <span className="inline-flex items-center gap-1.5 bg-elevatedSurface border border-white/10 px-3 py-1 rounded-full text-softAccent whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5 text-highlight" />
                {item.duration}
              </span>
            )}
            {item.location && (
              <span className="inline-flex items-center gap-1.5 bg-elevatedSurface border border-white/10 px-3 py-1 rounded-full text-mutedText whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-highlight" />
                {item.location}
              </span>
            )}
          </div>
        </div>

        {/* Short Summary */}
        {item.summary && (
          <p className="text-sm text-textSecondary leading-relaxed mb-4 italic">
            "{item.summary}"
          </p>
        )}

        {/* Responsibilities Bullets */}
        {item.bullets && item.bullets.length > 0 && (
          <div className="space-y-2 mt-4">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-mutedText mb-2">
              Key Responsibilities
            </span>
            <ul className="space-y-2.5">
              <AnimatePresence initial={false}>
                {displayedBullets?.map((bullet, i) => (
                  <motion.li
                    key={`bullet-${index}-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex text-sm text-textSecondary items-start leading-relaxed"
                  >
                    <span className="text-primaryAccent mr-3 mt-1 text-base leading-none flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            {/* Expand / Collapse Button */}
            {hasMoreBullets && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-highlight hover:underline focus:outline-none cursor-pointer"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "View Less" : `View ${item.bullets.length - maxVisibleBullets} More Responsibilities`}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        )}

        {/* Achievements Callout */}
        <AchievementBadge achievements={item.achievements} />

        {/* Tech Stack Chips */}
        <TechStackPills technologies={item.technologies} />
      </motion.div>
    </div>
  );
};
