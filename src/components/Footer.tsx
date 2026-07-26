import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalData } from '../data/personal';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-card/90 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-32 bg-highlight/5 blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-4">
                        <Logo />
                        <p className="text-sm font-semibold text-highlight tracking-wide">
                            {personalData.tagline}
                        </p>
                        <p className="text-xs sm:text-sm text-textSecondary max-w-sm leading-relaxed">
                            Information Science and Engineering student dedicated to architecting scalable, data-driven software solutions and modern web applications.
                        </p>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="md:col-span-4">
                        <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider mb-4">
                            Quick Navigation
                        </h4>
                        <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-textSecondary">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-highlight transition-colors duration-200 inline-block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-highlight rounded"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect & Top Action */}
                    <div className="md:col-span-3 flex flex-col justify-between space-y-4">
                        <div>
                            <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider mb-4">
                                Social Connect
                            </h4>
                            <div className="flex items-center gap-3">
                                <a
                                    href={personalData.contact.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 text-mutedText hover:text-highlight hover:border-highlight/30 flex items-center justify-center transition-all duration-200"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href={personalData.contact.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 text-mutedText hover:text-highlight hover:border-highlight/30 flex items-center justify-center transition-all duration-200"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href={`mailto:${personalData.contact.email}`}
                                    className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 text-mutedText hover:text-highlight hover:border-highlight/30 flex items-center justify-center transition-all duration-200"
                                    aria-label="Send Email"
                                >
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={scrollToTop}
                                className="inline-flex items-center gap-2 text-xs font-semibold text-textSecondary hover:text-highlight transition-colors py-2 px-3 rounded-lg border border-white/10 hover:border-highlight/30 bg-elevatedSurface/50"
                            >
                                <span>Back to top</span>
                                <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright & Tech Stack Info */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mutedText text-center sm:text-left">
                    <div>
                        © {currentYear} <span className="text-textPrimary font-semibold">{personalData.name}</span>. All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                        <span>Made with</span>
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                        <span>using React, TypeScript & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
