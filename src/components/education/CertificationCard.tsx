import React from 'react';
import { motion } from 'framer-motion';
import { 
    Award, 
    Cpu, 
    Code, 
    Layers, 
    Smartphone, 
    Globe, 
    Layout, 
    Cloud, 
    ExternalLink, 
    ShieldCheck, 
    Clock 
} from 'lucide-react';
import type { CertificationItem } from '../../data/certifications';

const iconMap: Record<string, React.ReactNode> = {
    cpu: <Cpu className="w-5 h-5 text-highlight" />,
    code: <Code className="w-5 h-5 text-highlight" />,
    layers: <Layers className="w-5 h-5 text-highlight" />,
    smartphone: <Smartphone className="w-5 h-5 text-highlight" />,
    award: <Award className="w-5 h-5 text-highlight" />,
    globe: <Globe className="w-5 h-5 text-highlight" />,
    layout: <Layout className="w-5 h-5 text-highlight" />,
    cloud: <Cloud className="w-5 h-5 text-highlight" />
};

interface CertificationCardProps {
    item: CertificationItem;
    index: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ item, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="bg-card/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-highlight/40 transition-all duration-300 shadow-soft hover:shadow-medium group flex flex-col justify-between h-full"
        >
            <div>
                {/* Header: Provider Icon & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                    {/* Provider Icon / Logo Container */}
                    <div className="w-12 h-12 bg-elevatedSurface rounded-xl flex items-center justify-center border border-white/10 group-hover:border-highlight/40 group-hover:scale-105 transition-all duration-300 shadow-inner">
                        {iconMap[item.icon] || <Award className="w-5 h-5 text-highlight" />}
                    </div>

                    {/* Status Badge */}
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                        item.status === 'Completed'
                            ? 'bg-success/10 text-success border-success/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                    }`}>
                        {item.status === 'Completed' ? (
                            <ShieldCheck size={13} className="text-success" />
                        ) : (
                            <Clock size={13} className="text-amber-400 animate-spin-slow" />
                        )}
                        {item.status}
                    </span>
                </div>

                {/* Title & Issuer */}
                <h4 className="text-lg sm:text-xl font-bold text-textPrimary mb-1 group-hover:text-highlight transition-colors duration-200">
                    {item.title}
                </h4>

                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-highlight mb-3">
                    <span>{item.issuer}</span>
                    {item.issueDate && (
                        <span className="text-xs text-textSecondary font-normal">{item.issueDate}</span>
                    )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                </p>
            </div>

            {/* Footer: Credential ID & Verification Button */}
            <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 mt-auto">
                {item.credentialId ? (
                    <span className="text-[11px] font-mono text-softAccent bg-elevatedSurface/80 px-2.5 py-1 rounded border border-white/5">
                        ID: {item.credentialId}
                    </span>
                ) : (
                    <span />
                )}

                {item.verificationUrl && item.verificationUrl !== '#' ? (
                    <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-textPrimary hover:text-highlight bg-elevatedSurface hover:bg-highlight/15 border border-white/10 hover:border-highlight/40 rounded-xl transition-all duration-200 min-h-[36px]"
                        aria-label={`Verify ${item.title} certification`}
                    >
                        <span>Verify</span>
                        <ExternalLink size={13} />
                    </a>
                ) : (
                    <span className="text-[11px] font-medium text-mutedText italic">
                        Verified Credential
                    </span>
                )}
            </div>
        </motion.div>
    );
};
