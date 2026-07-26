import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../data/projects';
import { StatusBadge } from './StatusBadge';
import { CategoryBadge } from './CategoryBadge';
import { ProjectMetrics } from './ProjectMetrics';
import { Github, ExternalLink, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '../ui/Button';

interface FeaturedProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)" }}
      className="max-w-4xl mx-auto bg-card rounded-2xl border border-white/10 overflow-hidden shadow-medium mb-8 group transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        
        {/* Left Side: Compact Image Preview */}
        <div className="md:col-span-5 relative h-48 sm:h-52 md:h-full min-h-[180px] overflow-hidden bg-surface flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card pointer-events-none" />
          
          {/* Top Floating Category & Status Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-highlight text-slate-950 shadow-soft">
              <Star className="w-2.5 h-2.5 fill-slate-950 text-slate-950" />
              FEATURED
            </span>
            <div className="flex items-center gap-1">
              <CategoryBadge category={project.category} />
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>

        {/* Right Side: Compact Story & Details */}
        <div className="md:col-span-7 p-4 sm:p-5 flex flex-col justify-between relative z-10">
          <div>
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-textPrimary tracking-tight mb-1.5 group-hover:text-highlight transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-textSecondary text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project?.tags?.map(tag => (
                <span key={tag} className="text-[10px] font-medium text-softAccent bg-elevatedSurface px-2 py-0.5 rounded border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Compact Metrics */}
            <div className="mb-1">
              <ProjectMetrics metrics={project.metrics} />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mt-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-card border border-white/10 text-[11px] font-semibold text-textSecondary hover:text-textPrimary hover:border-highlight/40 transition-all shadow-soft"
                >
                  <Github className="w-3.5 h-3.5 text-highlight" />
                  <span>Code</span>
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-card border border-white/10 text-[11px] font-semibold text-textSecondary hover:text-textPrimary hover:border-highlight/40 transition-all shadow-soft"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-highlight" />
                  <span>Demo</span>
                </a>
              )}
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1 text-[11px] py-1 px-2.5 border-highlight/30 hover:border-highlight text-textPrimary hover:text-highlight"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
