import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FilterX } from 'lucide-react';
import { certificationsData, type CertificationCategory } from '../../data/certifications';
import { CategoryFilter } from './CategoryFilter';
import { CertificationCard } from './CertificationCard';

export const CertificationGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CertificationCategory>('All');

    const filteredCertifications = useMemo(() => {
        if (selectedCategory === 'All') return certificationsData;
        return certificationsData.filter((item) => item.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primaryAccent shadow-[0_0_8px_rgba(164,90,61,0.8)]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                        Certifications & Training
                    </h3>
                </div>
                <span className="text-xs font-semibold text-softAccent bg-elevatedSurface border border-white/10 px-3 py-1 rounded-full">
                    {filteredCertifications.length} {filteredCertifications.length === 1 ? 'Credential' : 'Credentials'}
                </span>
            </div>

            {/* Category Filter Tabs */}
            <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Certification Cards Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <AnimatePresence mode="popLayout">
                    {filteredCertifications.length > 0 ? (
                        filteredCertifications.map((item, index) => (
                            <CertificationCard
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full py-12 text-center bg-card/40 rounded-2xl border border-dashed border-white/10"
                        >
                            <FilterX className="w-10 h-10 text-mutedText mx-auto mb-3" />
                            <p className="text-textSecondary font-medium">
                                No certifications found under "{selectedCategory}".
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
