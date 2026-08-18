import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;
        const toggleVisibility = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const shouldShow = window.scrollY > 300;
                    setIsVisible(prev => (prev !== shouldShow ? shouldShow : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Scroll to top of page"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-elevatedSurface/90 backdrop-blur-md border border-white/20 text-highlight hover:border-highlight/50 hover:bg-card shadow-lg flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
