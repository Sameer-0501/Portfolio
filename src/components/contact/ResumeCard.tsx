import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { personalData } from '../../data/personal';

export const ResumeCard: React.FC = () => {
    const { resumeUrl } = personalData;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-highlight/30 transition-all duration-300 shadow-soft relative overflow-hidden group flex flex-col justify-between"
        >
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-highlight/10 border border-highlight/20 flex items-center justify-center text-highlight flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-textPrimary tracking-tight">
                            Curriculum Vitae / Resume
                        </h4>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            Verified
                        </span>
                    </div>
                    <p className="text-xs text-textSecondary leading-relaxed">
                        Detailed breakdown of my technical projects, core skill matrix, education, and software development experience.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-white/10">
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-highlight to-primaryAccent text-textPrimary shadow-soft hover:shadow-highlight/20 hover:opacity-95 transition-all duration-200 min-h-[44px]"
                >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                </a>
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-elevatedSurface border border-white/10 text-textPrimary hover:text-highlight hover:border-highlight/30 transition-all duration-200 min-h-[44px]"
                >
                    <ExternalLink className="w-4 h-4" />
                    <span>Preview</span>
                </a>
            </div>
        </motion.div>
    );
};
