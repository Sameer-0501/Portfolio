import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Send } from 'lucide-react';
import { personalData } from '../data/personal';
import { ContactCard } from '../components/contact/ContactCard';
import { AvailabilityCard } from '../components/contact/AvailabilityCard';
import { ResumeCard } from '../components/contact/ResumeCard';
import { ContactForm } from '../components/contact/ContactForm';
import { SocialLinks } from '../components/contact/SocialLinks';

export const ContactSection: React.FC = () => {
    const { contact } = personalData;

    const contactCardsData = [
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: contact.email,
            subValue: "Best for opportunities & inquiries",
            badge: "Primary",
            actions: [
                {
                    label: "Copy Email",
                    isCopyAction: true,
                    copyText: contact.email,
                },
                {
                    label: "Open Gmail",
                    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`,
                    icon: <Send className="w-3.5 h-3.5" />,
                },
            ],
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            title: "LinkedIn",
            value: "sameer501",
            subValue: "Professional network & messaging",
            badge: "Networking",
            actions: [
                {
                    label: "Open LinkedIn",
                    href: contact.linkedin,
                    icon: <ExternalLink className="w-3.5 h-3.5" />,
                },
            ],
        },
        {
            icon: <Github className="w-5 h-5" />,
            title: "GitHub",
            value: "Sameer-0501",
            subValue: "Source code & repositories",
            badge: "Code",
            actions: [
                {
                    label: "Open GitHub",
                    href: contact.github,
                    icon: <ExternalLink className="w-3.5 h-3.5" />,
                },
            ],
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Location",
            value: contact.location,
            subValue: "Available for remote & hybrid roles",
            badge: "Location",
            actions: [
                {
                    label: "View Location",
                    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`,
                    icon: <ExternalLink className="w-3.5 h-3.5" />,
                },
            ],
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-primaryAccent/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-highlight bg-highlight/10 border border-highlight/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary tracking-tight mb-4 relative inline-block">
                        Let's Build Something Amazing Together
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-highlight to-primaryAccent rounded-full opacity-80" />
                    </h2>
                    <p className="text-base sm:text-lg text-textSecondary leading-relaxed mt-4">
                        I'm always interested in software engineering opportunities, internships, freelance projects, and meaningful collaborations. Feel free to reach out.
                    </p>
                </motion.div>

                {/* Main Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
                    {/* Left Column: Contact Cards, Availability & Resume */}
                    <div className="lg:col-span-5 xl:col-span-5 space-y-6">
                        {/* Availability Panel */}
                        <AvailabilityCard />

                        {/* Resume CTA Card */}
                        <ResumeCard />

                        {/* Contact Info Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {contactCardsData.map((card, idx) => (
                                <ContactCard key={idx} {...card} />
                            ))}
                        </div>

                        {/* Social Links Panel */}
                        <div className="bg-card/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h5 className="text-xs font-bold text-textPrimary uppercase tracking-wider">
                                    Social Connect
                                </h5>
                                <p className="text-xs text-textSecondary mt-0.5">
                                    Follow or message me on my channels
                                </p>
                            </div>
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Right Column: Direct Interactive Contact Form */}
                    <div className="lg:col-span-7 xl:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
