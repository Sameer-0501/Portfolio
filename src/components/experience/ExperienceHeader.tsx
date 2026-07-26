import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceHeader: React.FC = () => {
  return (
    <motion.div
      className="mb-12 text-center max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textPrimary inline-block relative">
        Professional Experience
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-highlight to-primaryAccent rounded-full opacity-80" />
      </h2>
      <p className="mt-6 text-base sm:text-lg text-textSecondary leading-relaxed">
        Internships, practical training, and hands-on software development experience.
      </p>
    </motion.div>
  );
};
