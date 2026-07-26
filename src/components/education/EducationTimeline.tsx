import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { TimelineItem } from './TimelineItem';

export const EducationTimeline: React.FC = () => {
    return (
        <div className="relative">
            {/* Header / Label */}
            <div className="flex items-center gap-2 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-highlight shadow-[0_0_8px_rgba(217,191,119,0.8)]" />
                <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                    Academic Background
                </h3>
            </div>

            <div className="relative">
                {/* Vertical Gradient Connector Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-[15px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-highlight via-primaryAccent to-highlight/20 shadow-[0_0_8px_rgba(217,191,119,0.25)] z-0"
                />

                <div className="space-y-2">
                    {educationData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            item={item}
                            index={index}
                            isLast={index === educationData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
