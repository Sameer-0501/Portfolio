import React from 'react';
import { motion } from 'framer-motion';
import { CertificationGrid } from '../components/education/CertificationGrid';

export const CertificationsSection: React.FC = () => {
    return (
        <section id="certifications" className="py-20 md:py-28 relative overflow-hidden bg-background/50">
            {/* Background Accent Gradients */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primaryAccent/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-highlight bg-highlight/10 border border-highlight/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                        Professional Credentials
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary tracking-tight mb-4 relative inline-block">
                        Licenses & Certifications
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-highlight to-primaryAccent rounded-full opacity-80" />
                    </h2>
                    <p className="text-base sm:text-lg text-textSecondary leading-relaxed mt-4">
                        Industry-recognized certifications validating technical skills, software engineering standards, and cloud proficiency.
                    </p>
                </motion.div>

                {/* Certification Grid with category filter */}
                <CertificationGrid />
            </div>
        </section>
    );
};
