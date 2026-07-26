import React from 'react';
import type { ProjectItem } from '../../data/projects';
import { Layers, Cpu, Code2, Globe } from 'lucide-react';

interface CategoryBadgeProps {
  category?: ProjectItem['category'];
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  if (!category) return null;

  const getIcon = () => {
    switch (category) {
      case 'Blockchain':
        return <Cpu className="w-3 h-3 text-highlight" />;
      case 'Full Stack':
        return <Layers className="w-3 h-3 text-lightAccent" />;
      case 'Frontend':
        return <Code2 className="w-3 h-3 text-softAccent" />;
      case 'WebAssembly':
        return <Globe className="w-3 h-3 text-primaryAccent" />;
      default:
        return null;
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-elevatedSurface border border-white/10 text-softAccent uppercase tracking-wider">
      {getIcon()}
      <span>{category}</span>
    </span>
  );
};

export default CategoryBadge;
