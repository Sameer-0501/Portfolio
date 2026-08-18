import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';
import {
  Coffee,
  Sparkles,
  Code2,
  Layers,
  Server,
  Database
} from 'lucide-react';

interface HeroPortraitProps {
  imageSrc?: string;
  altText?: string;
  className?: string;
}

// Tech Badges Configuration with positioning and icons in requested order
const techBadges = [
  {
    name: 'Java',
    icon: Coffee,
    color: 'text-primaryAccent',
    position: 'top-2 -left-4 sm:-left-10 lg:-left-12',
    floatDelay: 0,
    connectionPath: 'M 30,30 Q 80,40 120,70'
  },
  {
    name: 'Spring Boot',
    icon: Sparkles,
    color: 'text-softAccent',
    position: 'top-4 -right-4 sm:-right-8 lg:-right-10',
    floatDelay: 0.3,
    connectionPath: 'M 370,30 Q 320,50 280,70'
  },
  {
    name: 'JavaScript',
    icon: Code2,
    color: 'text-lightAccent',
    position: 'top-1/2 -left-6 sm:-left-12 lg:-left-16 -translate-y-1/2',
    floatDelay: 0.5,
    connectionPath: 'M 30,170 Q 90,170 120,170'
  },
  {
    name: 'React',
    icon: Layers,
    color: 'text-highlight',
    position: 'top-1/2 -right-6 sm:-right-12 lg:-right-16 -translate-y-1/2',
    floatDelay: 0.8,
    connectionPath: 'M 370,170 Q 310,170 280,170'
  },
  {
    name: 'ASP.NET',
    icon: Server,
    color: 'text-primaryAccent',
    position: 'bottom-4 -left-4 sm:-left-8 lg:-left-10',
    floatDelay: 1,
    connectionPath: 'M 30,310 Q 80,290 120,270'
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    color: 'text-softAccent',
    position: 'bottom-6 -right-4 sm:-right-8 lg:-right-10',
    floatDelay: 1.2,
    connectionPath: 'M 370,310 Q 320,290 280,270'
  }
];

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  imageSrc = personalData.portraitUrl,
  altText = `${personalData.name} - ${personalData.role}`,
  className = ""
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>

      {/* ================= BACKGROUND GLOW & HALO ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden transform-gpu" aria-hidden="true">
        {/* Soft Radial Warm Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-primaryAccent/8 rounded-full blur-3xl sm:blur-[80px] transform-gpu will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] bg-highlight/5 rounded-full blur-2xl sm:blur-[60px] transform-gpu will-change-transform" />
      </div>

      {/* ================= SVG CONNECTOR LINES ================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block overflow-visible"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="portraitConnectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9BF77" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#A45A3D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6B4226" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {techBadges.map((badge, idx) => (
          <path
            key={`portrait-svg-path-${idx}`}
            d={badge.connectionPath}
            stroke="url(#portraitConnectorGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
        ))}
      </svg>

      {/* ================= MAIN PORTRAIT CARD CONTAINER ================= */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] aspect-[4/5] z-10 transform-gpu">

        {/* Rotating Subtle Warm Aura Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[2px] rounded-[30px] bg-gradient-to-tr from-highlight/50 via-primaryAccent/35 to-darkAccent/20 opacity-60 blur-xs pointer-events-none transform-gpu will-change-transform"
          aria-hidden="true"
        />

        {/* Glass Card Container Frame */}
        <motion.div
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full rounded-[28px] bg-card border border-white/10 p-3 flex flex-col justify-between shadow-large overflow-hidden backdrop-blur-md lg:backdrop-blur-xl group cursor-pointer transform-gpu"
        >
          {/* Inner Image Container (Supports transparent PNGs and photos) */}
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-b from-surface via-elevatedSurface to-background flex items-center justify-center">

            {/* Portrait Image */}
            <img
              src={imageSrc}
              alt={altText}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-top rounded-[22px] transition-transform duration-700 ease-out group-hover:scale-104"
            />

            {/* Soft Ambient Inner Bottom Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Status Tag Overlay */}
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="py-2 px-3 rounded-xl bg-card/85 backdrop-blur-md border border-white/10 flex items-center justify-center gap-2.5 shadow-soft">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-textPrimary tracking-wide">
                  Available for Software Projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= FLOATING TECH BADGES ================= */}
        {techBadges.map((badge, idx) => {
          const IconComponent = badge.icon;
          return (
            <motion.div
              key={badge.name}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4 + idx * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.floatDelay
              }}
              whileHover={{ scale: 1.08, y: -7 }}
              className={`absolute ${badge.position} z-20`}
            >
              <div className="bg-card backdrop-blur-xl border border-white/10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl flex items-center gap-2 shadow-medium text-xs sm:text-sm font-medium text-textSecondary hover:text-textPrimary hover:border-highlight/40 hover:bg-elevatedSurface transition-all duration-300 cursor-pointer">
                <IconComponent className={`w-4 h-4 ${badge.color}`} />
                <span className="whitespace-nowrap">{badge.name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
