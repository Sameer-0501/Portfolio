import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../data/projects';
import { StatusBadge } from './StatusBadge';
import { CategoryBadge } from './CategoryBadge';
import { ProjectMetrics } from './ProjectMetrics';
import { Github, ExternalLink, ArrowUpRight, Check } from 'lucide-react';

interface ProjectGridCardProps {
  project: ProjectItem;
  index: number;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project, index, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)" }}
      className="bg-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-white/10 hover:border-highlight/30 transition-all duration-300 shadow-soft"
      onClick={() => onOpenModal(project)}
    >
      {/* Thumbnail Container */}
      <div className="h-48 relative overflow-hidden flex items-center justify-center bg-surface">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <CategoryBadge category={project.category} />
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h4 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-highlight transition-colors line-clamp-1">
          {project.title}
        </h4>

        <p className="text-textSecondary text-sm mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* Key Features Preview */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-4 space-y-1">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={`grid-feat-${idx}`} className="flex items-center gap-1.5 text-xs text-textSecondary">
                <Check className="w-3 h-3 text-highlight flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project?.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs font-medium text-softAccent bg-elevatedSurface px-2.5 py-1 rounded-md border border-white/10">
              {tag}
            </span>
          ))}
          {(project?.tags?.length || 0) > 3 && (
            <span className="text-xs font-medium text-softAccent bg-elevatedSurface px-2 py-1 rounded-md border border-white/10">
              +{(project?.tags?.length || 0) - 3}
            </span>
          )}
        </div>

        {/* Compact Metrics */}
        <ProjectMetrics metrics={project.metrics} />

        {/* Bottom Card Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 relative z-10">
          <div className="flex items-center gap-2">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-mutedText hover:text-highlight hover:bg-white/5 p-2 rounded-full transition-colors relative z-20"
                onClick={(e) => e.stopPropagation()}
                title="View Source Code"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-mutedText hover:text-highlight hover:bg-white/5 p-2 rounded-full transition-colors relative z-20"
                onClick={(e) => e.stopPropagation()}
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <div className="flex items-center text-xs font-semibold text-textPrimary group-hover:text-highlight transition-colors relative z-10">
            View Details <ArrowUpRight size={15} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectGridCard;
