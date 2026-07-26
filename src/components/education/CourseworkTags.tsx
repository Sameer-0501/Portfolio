import React from 'react';
import { motion } from 'framer-motion';

interface CourseworkTagsProps {
    tags: string[];
    title?: string;
}

export const CourseworkTags: React.FC<CourseworkTagsProps> = ({ tags, title = "Relevant Coursework" }) => {
    if (!tags || tags.length === 0) return null;

    return (
        <div className="mt-4 pt-4 border-t border-white/5">
            {title && (
                <div className="text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                    {title}
                </div>
            )}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tags.map((tag, idx) => (
                    <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.03 }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-2.5 py-1 text-xs font-medium text-textPrimary bg-elevatedSurface/80 border border-white/10 hover:border-highlight/40 hover:bg-highlight/10 hover:text-highlight rounded-lg transition-all duration-200 cursor-default shadow-sm backdrop-blur-sm"
                    >
                        {tag}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};
