import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { hoverLift } from '../../lib/animations';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, interactive = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={interactive ? hoverLift : undefined}
        whileHover={interactive ? "whileHover" : undefined}
        whileTap={interactive ? "whileTap" : undefined}
        className={cn(
          "glass-card p-6 md:p-8",
          interactive && "cursor-pointer",
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
