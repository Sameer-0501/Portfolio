import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, Cpu, Sparkles, BookOpen } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { StatusBadge } from './projects/StatusBadge';
import { CategoryBadge } from './projects/CategoryBadge';
import { ProjectMetrics } from './projects/ProjectMetrics';

export type Project = ProjectItem;

interface ProjectModalProps {
    project: ProjectItem | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
                    />

                    {/* Modal Outer Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 py-8 sm:py-12 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl pointer-events-auto border border-white/10 shadow-large text-textPrimary"
                        >
                            <div className="p-6 sm:p-8 md:p-10 relative">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    aria-label="Close modal"
                                    className="absolute right-4 sm:right-6 top-4 sm:top-6 text-mutedText hover:text-textPrimary transition-colors rounded-full hover:bg-white/10 bg-black/40 backdrop-blur-md z-20 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                                >
                                    <X size={20} />
                                </button>

                                {/* Project Image Banner */}
                                {project.image && (
                                    <div className="w-full h-52 sm:h-72 rounded-2xl overflow-hidden mb-6 relative bg-surface">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover relative z-0" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
                                    </div>
                                )}

                                {/* Top Badges */}
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <CategoryBadge category={project.category} />
                                    <StatusBadge status={project.status} />
                                </div>

                                {/* Project Title */}
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-textPrimary mb-4 pr-10 tracking-tight">
                                    {project.title}
                                </h3>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project?.tags?.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-elevatedSurface text-softAccent rounded-lg text-xs font-medium border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Overview Description */}
                                <p className="text-textSecondary text-base sm:text-lg mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Problem & Solution Cards */}
                                {(project.problemStatement || project.solutionSummary) && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        {project.problemStatement && (
                                            <div className="p-4 rounded-xl bg-elevatedSurface/60 border border-white/10">
                                                <span className="text-xs font-bold text-primaryAccent uppercase tracking-widest block mb-1">
                                                    Problem Statement
                                                </span>
                                                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                                                    {project.problemStatement}
                                                </p>
                                            </div>
                                        )}
                                        {project.solutionSummary && (
                                            <div className="p-4 rounded-xl bg-elevatedSurface/60 border border-white/10">
                                                <span className="text-xs font-bold text-highlight uppercase tracking-widest block mb-1">
                                                    Implemented Solution
                                                </span>
                                                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                                                    {project.solutionSummary}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Key Features & Achievements */}
                                {(project.keyFeatures || project.achievements) && (
                                    <div className="mb-6 bg-elevatedSurface/40 rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-textPrimary font-bold text-base mb-4 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-highlight" />
                                            Key Features & Engineering Highlights
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {(project.keyFeatures || project.achievements || []).map((feat, i) => (
                                                <li key={i} className="flex items-start text-textSecondary text-xs sm:text-sm leading-relaxed">
                                                    <Check className="w-4 h-4 text-highlight mr-2.5 mt-0.5 flex-shrink-0" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Architecture & Lessons Learned */}
                                {(project.architecture || project.lessonsLearned) && (
                                    <div className="space-y-4 mb-6">
                                        {project.architecture && (
                                            <div className="p-4 rounded-xl bg-elevatedSurface/30 border border-white/5">
                                                <h5 className="text-xs font-semibold text-highlight uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                    <Cpu className="w-3.5 h-3.5" />
                                                    System Architecture
                                                </h5>
                                                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                                                    {project.architecture}
                                                </p>
                                            </div>
                                        )}
                                        {project.lessonsLearned && (
                                            <div className="p-4 rounded-xl bg-elevatedSurface/30 border border-white/5">
                                                <h5 className="text-xs font-semibold text-lightAccent uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                    Key Engineering Insights
                                                </h5>
                                                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                                                    {project.lessonsLearned}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Metrics */}
                                <div className="mb-6">
                                    <ProjectMetrics metrics={project.metrics} />
                                </div>

                                {/* Modal Footer CTAs */}
                                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-white/10 text-sm font-semibold text-textPrimary hover:border-highlight hover:text-highlight transition-all shadow-soft"
                                        >
                                            <Github size={18} />
                                            View Source Code
                                        </a>
                                    )}
                                    {project.liveUrl && project.liveUrl !== "" && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gradient text-slate-950 text-sm font-bold shadow-soft hover:brightness-105 transition-all"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
