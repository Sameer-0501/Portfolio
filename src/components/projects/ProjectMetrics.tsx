import React from 'react';
import type { ProjectMetric } from '../../data/projects';

interface ProjectMetricsProps {
  metrics?: ProjectMetric[];
}

export const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ metrics }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/5">
      {metrics.map((metric, idx) => (
        <div 
          key={`metric-${idx}`}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-elevatedSurface/60 border border-white/5 text-xs"
        >
          <span className="font-bold text-highlight">{metric.value}</span>
          <span className="text-mutedText">{metric.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectMetrics;
