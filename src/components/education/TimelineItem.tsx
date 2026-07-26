import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import type { EducationItem } from '../../data/education';
import { CourseworkTags } from './CourseworkTags';

interface TimelineItemProps {
    item: EducationItem;
    index: number;
    isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
    return (
        <div className="relative z-10 flex gap-3 sm:gap-6 md:gap-8 group">
            {/* Timeline Connector Dot */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="flex-shrink-0 mt-2"
            >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background border-2 sm:border-4 border-highlight flex items-center justify-center shadow-[0_0_12px_rgba(217,191,119,0.3)] group-hover:border-primaryAccent group-hover:shadow-[0_0_16px_rgba(164,90,61,0.4)] transition-all duration-300">
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-highlight group-hover:text-primaryAccent transition-colors duration-300" />
                </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-grow pb-8"
            >
                <div className="bg-card/90 backdrop-blur-md p-4 sm:p-6 md:p-7 rounded-2xl border border-white/10 hover:border-highlight/30 transition-all duration-300 shadow-soft group-hover:shadow-medium">
                    
                    {/* Header Row: Degree, Period, Institution */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                        <div>
                            <div className="flex items-center gap-3 flex-wrap">
                                {/* Institution Badge/Logo */}
                                {item.logo && (
                                    <motion.span 
                                        whileHover={{ scale: 1.08 }}
                                        className="px-2.5 py-1 text-xs font-bold bg-highlight/15 text-highlight border border-highlight/30 rounded-md tracking-wider uppercase"
                                    >
                                        {item.logo}
                                    </motion.span>
                                )}
                                <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                                    {item.degree}
                                </h3>
                            </div>
                            {item.specialization && (
                                <p className="text-sm font-medium text-highlight mt-1">
                                    {item.specialization}
                                </p>
                            )}
                        </div>

                        {/* Period Badge */}
                        <div className="flex items-center gap-1.5 text-xs font-medium text-softAccent bg-elevatedSurface border border-white/10 px-3 py-1.5 rounded-full w-fit whitespace-nowrap self-start sm:self-auto">
                            <Calendar size={13} className="text-highlight" />
                            <span>{item.period}</span>
                        </div>
                    </div>

                    {/* Institution & Location */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm font-semibold text-textPrimary mb-3">
                        <span className="text-textPrimary">{item.institution}</span>
                        {item.location && (
                            <span className="flex items-center gap-1 text-xs font-normal text-textSecondary">
                                <MapPin size={12} className="text-primaryAccent" />
                                {item.location}
                            </span>
                        )}
                    </div>

                    {/* GPA / Score Badge */}
                    {item.gpa && (
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-highlight font-semibold mb-3 bg-highlight/10 border border-highlight/25 px-3 py-1 rounded-lg">
                            <Award size={14} className="text-highlight" />
                            <span>{item.gpa}</span>
                        </div>
                    )}

                    {/* Description */}
                    {item.description && (
                        <p className="text-sm sm:text-base text-textSecondary leading-relaxed mb-4">
                            {item.description}
                        </p>
                    )}

                    {/* Bullet Points */}
                    {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2 mb-4">
                            {item.bullets.map((bullet, i) => (
                                <li key={i} className="flex text-xs sm:text-sm text-textSecondary items-start gap-2">
                                    <CheckCircle2 size={14} className="text-primaryAccent flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Coursework Tags */}
                    {item.coursework && item.coursework.length > 0 && (
                        <CourseworkTags tags={item.coursework} />
                    )}
                </div>
            </motion.div>
        </div>
    );
};
