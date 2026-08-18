import { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalData } from '../data/personal';
import { cn } from '../lib/utils';
import { Logo } from './ui/Logo';
import { ThemeToggle } from './ui/ThemeToggle';
import { Button } from './ui/Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navLinks = useMemo(() => [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ], []);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 40);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // IntersectionObserver for zero-layout-thrashing active section detection
        const sectionElements = navLinks
            .map(link => document.getElementById(link.href.substring(1)))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -65% 0px',
                threshold: 0.05
            }
        );

        sectionElements.forEach(el => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [navLinks]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-highlight to-primaryAccent origin-left z-50 transform-gpu pointer-events-none"
                style={{ scaleX }}
            />

            <header className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center mt-2 transform-gpu will-change-transform",
                isScrolled ? "py-2" : "py-6"
            )}>
                <nav className={cn(
                    "flex items-center justify-between w-full max-w-7xl mx-6 transition-all duration-300 transform-gpu",
                    isScrolled
                        ? "bg-card/95 backdrop-blur-md lg:backdrop-blur-xl border border-white/10 shadow-medium rounded-2xl px-4 py-3"
                        : "bg-transparent px-2 py-2"
                )}>
                    {/* Logo (Left) */}
                    <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-highlight rounded-xl">
                        <Logo />
                        <span className="text-lg font-bold tracking-wide hidden sm:block text-textPrimary">{personalData.name}</span>
                    </a>

                    {/* Links (Center) */}
                    <div className="hidden lg:flex items-center justify-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-highlight rounded-full z-10",
                                        isActive ? "text-highlight font-semibold" : "text-textSecondary hover:text-textPrimary"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavPill"
                                            className="absolute inset-0 bg-elevatedSurface border border-highlight/20 rounded-full -z-10 shadow-soft"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>

                    {/* Actions (Right) */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:block">
                            <ThemeToggle />
                        </div>
                        <a href={personalData.resumeUrl} target="_blank" rel="noreferrer" className="hidden sm:inline-flex">
                            <Button variant="primary" size="sm" className="min-h-[44px]">
                                Resume
                            </Button>
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden text-textSecondary hover:text-textPrimary p-2.5 outline-none focus-visible:ring-2 focus-visible:ring-primaryAccent rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-card border-l border-borderGlass shadow-2xl z-50 flex flex-col lg:hidden overflow-y-auto"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-borderGlass/50">
                                <span className="font-bold text-lg">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2.5 text-textSecondary hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-primaryAccent min-w-[44px] min-h-[44px] flex items-center justify-center"
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col p-4 gap-2 flex-grow">
                                {navLinks.map((link, i) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleClick(e, link.href)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className={cn(
                                                "px-4 py-3 rounded-xl text-base font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primaryAccent min-h-[44px] flex items-center",
                                                isActive
                                                    ? "bg-primaryAccent/10 text-white border border-primaryAccent/20"
                                                    : "text-textSecondary hover:bg-white/5 hover:text-textPrimary"
                                            )}
                                        >
                                            {link.name}
                                        </motion.a>
                                    )
                                })}
                            </div>

                            <div className="p-6 border-t border-borderGlass/50 flex items-center justify-between gap-3">
                                <div>
                                    <ThemeToggle />
                                </div>
                                <a href={personalData.resumeUrl} target="_blank" rel="noreferrer" className="flex-1">
                                    <Button variant="primary" size="md" className="w-full min-h-[44px]">
                                        Resume
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
