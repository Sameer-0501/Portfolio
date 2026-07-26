import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink } from 'lucide-react';

export interface ActionItem {
    label: string;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
    isCopyAction?: boolean;
    copyText?: string;
}

export interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    subValue?: string;
    actions?: ActionItem[];
    badge?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
    icon,
    title,
    value,
    subValue,
    actions = [],
    badge
}) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleActionClick = (action: ActionItem, idx: number) => {
        if (action.isCopyAction && action.copyText) {
            navigator.clipboard.writeText(action.copyText);
            setCopiedIndex(idx);
            setTimeout(() => setCopiedIndex(null), 2000);
        } else if (action.onClick) {
            action.onClick();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="bg-card/70 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-highlight/40 transition-all duration-300 shadow-soft group flex flex-col justify-between"
        >
            <div>
                <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 flex items-center justify-center text-highlight group-hover:scale-105 transition-transform duration-300 shadow-inner">
                        {icon}
                    </div>
                    {badge && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-highlight bg-highlight/10 border border-highlight/20 px-2 py-0.5 rounded-full">
                            {badge}
                        </span>
                    )}
                </div>

                <div className="text-xs font-medium text-mutedText uppercase tracking-wider mb-1">
                    {title}
                </div>
                <div className="text-sm font-semibold text-textPrimary tracking-tight break-all mb-1">
                    {value}
                </div>
                {subValue && (
                    <div className="text-xs text-textSecondary mb-3">
                        {subValue}
                    </div>
                )}
            </div>

            {actions.length > 0 && (
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                    {actions.map((action, idx) => {
                        const isCopied = copiedIndex === idx;

                        if (action.href) {
                            return (
                                <a
                                    key={idx}
                                    href={action.href}
                                    target={action.href.startsWith('http') ? "_blank" : undefined}
                                    rel={action.href.startsWith('http') ? "noreferrer" : undefined}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-elevatedSurface border border-white/10 text-textPrimary hover:text-highlight hover:border-highlight/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight min-h-[36px]"
                                >
                                    {action.icon || <ExternalLink className="w-3.5 h-3.5" />}
                                    <span>{action.label}</span>
                                </a>
                            );
                        }

                        return (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => handleActionClick(action, idx)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight min-h-[36px] ${
                                    isCopied
                                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                        : 'bg-elevatedSurface border border-white/10 text-textPrimary hover:text-highlight hover:border-highlight/30'
                                }`}
                            >
                                {isCopied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        {action.icon || <Copy className="w-3.5 h-3.5" />}
                                        <span>{action.label}</span>
                                    </>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );
};
