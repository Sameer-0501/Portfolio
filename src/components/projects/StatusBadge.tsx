import React from 'react';
import type { ProjectItem } from '../../data/projects';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface StatusBadgeProps {
  status?: ProjectItem['status'];
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (!status) return null;

  const getBadgeStyle = () => {
    switch (status) {
      case 'Production Ready':
        return {
          bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          icon: <Sparkles className="w-3 h-3 text-emerald-400" />
        };
      case 'Completed':
        return {
          bg: 'bg-highlight/10 border-highlight/30 text-highlight',
          icon: <CheckCircle2 className="w-3 h-3 text-highlight" />
        };
      case 'In Progress':
        return {
          bg: 'bg-primaryAccent/10 border-primaryAccent/30 text-primaryAccent',
          icon: <Clock className="w-3 h-3 text-primaryAccent" />
        };
      default:
        return {
          bg: 'bg-elevatedSurface border-white/10 text-softAccent',
          icon: null
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style.bg}`}>
      {style.icon}
      <span>{status}</span>
    </span>
  );
};

export default StatusBadge;
