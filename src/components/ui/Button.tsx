import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 ease-standard focus:outline-none focus:ring-2 focus:ring-primaryAccent/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-brand-gradient text-slate-950 font-bold shadow-medium hover:shadow-glow border border-transparent hover:border-white/10",
      secondary: "border border-white/10 bg-card text-textPrimary hover:bg-white/5 backdrop-blur-sm shadow-soft hover:shadow-medium",
      ghost: "text-textSecondary hover:text-textPrimary hover:bg-white/5",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
