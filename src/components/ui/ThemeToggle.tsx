import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (document.documentElement.classList.contains('dark') && localStorage.getItem('theme') !== 'light');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-card text-textPrimary hover:border-highlight/40 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-highlight/50 cursor-pointer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <Moon size={18} className="text-highlight" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? -180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <Sun size={18} className="text-highlight" />
      </motion.div>
    </motion.button>
  );
};
