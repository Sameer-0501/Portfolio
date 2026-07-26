import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'outline';
    className?: string;
    target?: string;
    rel?: string;
}

export const GradientButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, GradientButtonProps>(
    ({ children, href, variant = 'primary', className, ...props }, ref) => {
        const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300";

        const variants = {
            primary: "bg-gradient-to-r from-[#D9BF77] to-[#A45A3D] text-slate-950 font-bold hover:shadow-[0_0_25px_rgba(217,191,119,0.5)] border border-transparent",
            outline: "border border-[#D9BF77]/50 text-[#D9BF77] hover:bg-[#A45A3D]/10 hover:border-[#D9BF77]"
        };

        if (href) {
            return (
                <motion.a
                    href={href}
                    className={cn(baseStyles, variants[variant], className)}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: variant === 'primary' ? "0 0 25px rgba(217,191,119,0.5)" : "0 0 15px rgba(217,191,119,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                    {children}
                </motion.a>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={cn(baseStyles, variants[variant], className)}
                whileHover={{
                    scale: 1.05,
                    boxShadow: variant === 'primary' ? "0 0 25px rgba(217,191,119,0.5)" : "0 0 15px rgba(217,191,119,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
GradientButton.displayName = 'GradientButton';
