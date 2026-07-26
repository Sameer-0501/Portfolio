import React from 'react';
import { Trophy } from 'lucide-react';

interface AchievementBadgeProps {
  achievements?: string[];
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="mt-4 p-3.5 rounded-xl bg-elevatedSurface/60 border border-highlight/20 shadow-soft">
      <div className="flex items-center gap-2 mb-1.5 text-highlight text-xs font-semibold uppercase tracking-wider">
        <Trophy className="w-4 h-4 text-highlight" />
        <span>Key Achievement</span>
      </div>
      <ul className="space-y-1">
        {achievements.map((achievement, idx) => (
          <li key={`achieve-${idx}`} className="text-xs sm:text-sm text-textSecondary leading-relaxed flex items-start">
            <span className="text-highlight mr-2 mt-0.5">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
