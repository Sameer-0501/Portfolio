import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../data/projects';
import { StatusBadge } from './StatusBadge';
import { CategoryBadge } from './CategoryBadge';
import { ProjectMetrics } from './ProjectMetrics';
import { Github, ExternalLink, ArrowUpRight, Check, Star } from 'lucide-react';
import { Button } from '../ui/Button';

interface FeaturedProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)" }}
      className="bg-card rounded-3xl border border-white/10 overflow-hidden shadow-large mb-12 group transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Side: Large Image Preview */}
        <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] overflow-hidden bg-surface flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card pointer-events-none" />
          
          {/* Top Floating Category & Status Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-highlight text-slate-950 shadow-soft">
              <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              FEATURED PROJECT
            </span>
            <div className="flex items-center gap-2">
              <CategoryBadge category={project.category} />
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>

        {/* Right Side: Project Story & Details */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">
          <div>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight mb-3 group-hover:text-highlight transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-textSecondary text-sm sm:text-base leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Problem & Solution Callout */}
            {project.problemStatement && (
              <div className="mb-4 p-3.5 rounded-xl bg-elevatedSurface/70 border border-white/10 space-y-2">
                <div>
                  <span className="text-[10px] font-bold text-primaryAccent uppercase tracking-widest block mb-0.5">
                    The Problem
                  </span>
                  <p className="text-xs text-textSecondary leading-normal">
                    {project.problemStatement}
                  </p>
                </div>
                {project.solutionSummary && (
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[10px] font-bold text-highlight uppercase tracking-widest block mb-0.5">
                      The Solution
                    </span>
                    <p className="text-xs text-textSecondary leading-normal">
                      {project.solutionSummary}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features List */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-5">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-mutedText mb-2">
                  Key Technical Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyFeatures.slice(0, 4).map((feature, idx) => (
                    <div key={`feat-${idx}`} className="flex items-center gap-2 text-xs text-textSecondary">
                      <span className="w-4 h-4 rounded-full bg-highlight/15 text-highlight flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project?.tags?.map(tag => (
                <span key={tag} className="text-xs font-medium text-softAccent bg-elevatedSurface px-2.5 py-1 rounded-md border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <ProjectMetrics metrics={project.metrics} />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-white/10 text-xs font-semibold text-textSecondary hover:text-textPrimary hover:border-highlight/40 hover:bg-elevatedSurface transition-all shadow-soft"
                >
                  <Github className="w-4 h-4 text-highlight" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-white/10 text-xs font-semibold text-textSecondary hover:text-textPrimary hover:border-highlight/40 hover:bg-elevatedSurface transition-all shadow-soft"
                >
                  <ExternalLink className="w-4 h-4 text-highlight" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-xs border-highlight/30 hover:border-highlight text-textPrimary hover:text-highlight"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
