import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Briefcase, Sparkles } from 'lucide-react';
import { personalData } from '../../data/personal';

export const AvailabilityCard: React.FC = () => {
    const { availability } = personalData;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-soft relative overflow-hidden group"
        >
            {/* Background ambient glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide uppercase">
                        Current Status
                    </span>
                </div>
                <span className="text-[11px] font-semibold text-highlight bg-highlight/10 border border-highlight/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Open to Hire
                </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-textPrimary mb-2">
                {availability.status}
            </h3>

            <div className="flex items-center gap-2 text-xs text-textSecondary mb-5">
                <Clock className="w-4 h-4 text-highlight flex-shrink-0" />
                <span>{availability.responseTime}</span>
            </div>

            <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-mutedText uppercase tracking-wider mb-2.5">
                    <Briefcase className="w-3.5 h-3.5 text-highlight" />
                    <span>Preferred Roles</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {availability.preferredRoles.map((role, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-medium text-textPrimary bg-elevatedSurface border border-white/10 hover:border-highlight/30 px-3 py-1.5 rounded-xl transition-all duration-200"
                        >
                            {role}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
