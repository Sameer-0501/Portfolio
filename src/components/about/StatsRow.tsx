import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutData, type StatItem } from '../../data/about';

const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const StatsRow: React.FC = () => {
  return (
    <div className="w-full pt-10 mt-12 border-t border-white/10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {aboutData.stats.map((stat: StatItem, idx: number) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-5 rounded-2xl bg-card border border-white/10 shadow-soft text-center hover:border-highlight/30 transition-all duration-300 group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-highlight tracking-tight mb-1">
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs sm:text-sm font-medium text-textSecondary group-hover:text-textPrimary transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
