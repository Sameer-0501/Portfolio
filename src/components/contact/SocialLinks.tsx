import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../../data/personal';

export const SocialLinks: React.FC = () => {
    const { contact } = personalData;

    const socialItems = [
        {
            name: 'GitHub',
            href: contact.github,
            icon: <Github className="w-5 h-5" />,
            ariaLabel: 'Visit GitHub profile',
        },
        {
            name: 'LinkedIn',
            href: contact.linkedin,
            icon: <Linkedin className="w-5 h-5" />,
            ariaLabel: 'Visit LinkedIn profile',
        },
        {
            name: 'Email',
            href: `mailto:${contact.email}`,
            icon: <Mail className="w-5 h-5" />,
            ariaLabel: 'Send email directly',
        },
    ];

    return (
        <div className="flex flex-wrap items-center gap-3">
            {socialItems.map((item, idx) => (
                <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="w-11 h-11 rounded-xl bg-card border border-white/10 text-mutedText hover:text-highlight hover:border-highlight/40 flex items-center justify-center transition-all duration-200 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                >
                    {item.icon}
                </motion.a>
            ))}
        </div>
    );
};
