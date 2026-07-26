import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { ExperienceHeader } from '../components/experience/ExperienceHeader';
import { TimelineItem } from '../components/experience/TimelineItem';

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-24 relative bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <ExperienceHeader />

                <div className="mt-16 relative">
                    {/* Vertical Gradient Connector Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-[14px] sm:left-[16px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-highlight via-primaryAccent to-transparent shadow-[0_0_8px_rgba(217,191,119,0.2)] z-0"
                    />

                    {/* Timeline Entries List */}
                    <div className="space-y-2">
                        {experienceData.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
