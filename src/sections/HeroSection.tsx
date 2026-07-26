import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { personalData } from '../data/personal';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroPortrait } from '../components/HeroPortrait';

// Stagger container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

// Item fade-up animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Right side image/placeholder container animation
const visualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }
  }
};


export const HeroSection: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Top-Left Ambient Orb */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-[5%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-[#A45A3D]/5 rounded-full blur-[130px]"
        />

        {/* Bottom-Right Ambient Orb */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 right-[5%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-[#D9BF77]/4 rounded-full blur-[140px]"
        />

        {/* Center Soft Highlight Blob */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6B4226]/3 rounded-full blur-[150px]"
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 xl:gap-12">
          
          {/* ================= LEFT SIDE: TYPOGRAPHY & CTAS ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* 1. GREETING BADGE */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#A45A3D]/15 text-[#D9BF77] border border-[#D9BF77]/30 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9BF77] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A45A3D]"></span>
                </span>
                HELLO THERE
              </span>
            </motion.div>

            {/* 2. NAME HEADING */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05]">
                I'm{' '}
                <span className="text-gradient inline-block bg-gradient-to-r from-[#D9BF77] via-[#E8DAB2] to-[#A45A3D] bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
            </motion.div>

            {/* 3. PROFESSIONAL TITLE */}
            <motion.div variants={itemVariants} className="mb-5">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-textPrimary flex flex-wrap items-center gap-2 sm:gap-3 leading-snug">
                <span>Full Stack Developer</span>
                <span className="text-[#D9BF77]/70 font-light hidden sm:inline">|</span>
                <span className="text-textSecondary font-medium">AI & Backend Systems</span>
              </h2>
            </motion.div>

            {/* 4. DESCRIPTION (Max 2-3 lines, confident, clear) */}
            <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
              <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-normal">
                Architecting high-performance web applications, intelligent backend architectures, and scalable digital systems with modern engineering and precision data solutions.
              </p>
            </motion.div>

            {/* 5. CTA BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-[#D9BF77] to-[#A45A3D] text-slate-950 font-bold shadow-medium hover:shadow-glow transition-all duration-300 border-none min-h-[44px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Projects
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>

              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border-borderGlass hover:border-[#D9BF77]/40 hover:bg-[#D9BF77]/10 transition-all duration-300 min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-[#D9BF77]" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            {/* 6. SOCIAL LINKS */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-textSecondary font-semibold mr-2">
                Connect
              </span>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-full bg-card/60 backdrop-blur-md border border-borderGlass flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-highlight/50 hover:bg-highlight/10 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 min-w-[44px] min-h-[44px]"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-card/60 backdrop-blur-md border border-borderGlass flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-highlight/50 hover:bg-highlight/10 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 min-w-[44px] min-h-[44px]"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Send Email"
                className="w-11 h-11 rounded-full bg-card/60 backdrop-blur-md border border-borderGlass flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-highlight/50 hover:bg-highlight/10 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 min-w-[44px] min-h-[44px]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: PROFESSIONAL PORTRAIT INTEGRATION ================= */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0"
          >
            <HeroPortrait />
          </motion.div>
        </div>

        {/* ================= SCROLL DOWN INDICATOR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center"
        >
          <button
            onClick={handleScrollToAbout}
            aria-label="Scroll down to About section"
            className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="text-[11px] uppercase tracking-widest text-textSecondary font-semibold group-hover:text-[#D9BF77] transition-colors">
              Scroll Down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-textSecondary/40 group-hover:border-[#D9BF77]/80 p-1 flex justify-center transition-colors shadow-soft">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2.5 rounded-full bg-[#D9BF77]"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

