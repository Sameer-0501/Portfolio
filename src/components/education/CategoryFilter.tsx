import React from 'react';
import { motion } from 'framer-motion';
import { type CertificationCategory, certificationCategories } from '../../data/certifications';

interface CategoryFilterProps {
    selectedCategory: CertificationCategory;
    onSelectCategory: (category: CertificationCategory) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
    selectedCategory,
    onSelectCategory
}) => {
    return (
        <div
            role="tablist"
            aria-label="Certification Categories"
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-card/60 backdrop-blur-md border border-white/10 rounded-2xl mb-6 shadow-soft"
        >
            {certificationCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => onSelectCategory(category)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onSelectCategory(category);
                            }
                        }}
                        role="tab"
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        className={`relative px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-highlight min-h-[44px] flex items-center justify-center ${
                            isActive
                                ? 'text-textPrimary font-semibold'
                                : 'text-textSecondary hover:text-textPrimary hover:bg-white/5'
                        }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeCategoryPill"
                                className="absolute inset-0 bg-elevatedSurface border border-highlight/30 rounded-xl shadow-soft -z-10"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{category}</span>
                    </button>
                );
            })}
        </div>
    );
};
