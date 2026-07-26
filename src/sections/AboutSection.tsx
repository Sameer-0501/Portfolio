import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AboutStory } from '../components/about/AboutStory';
import { QuickFacts } from '../components/about/QuickFacts';
import { HighlightCards } from '../components/about/HighlightCards';
import { StatsRow } from '../components/about/StatsRow';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 relative bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <SectionHeading title="About Me" />

                {/* Main 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-start">
                    
                    {/* LEFT COLUMN: Narrative Storytelling & Career Objective */}
                    <div className="lg:col-span-7">
                        <AboutStory />
                    </div>

                    {/* RIGHT COLUMN: Quick Facts & Highlight Cards */}
                    <div className="lg:col-span-5 space-y-8">
                        <QuickFacts />
                        <HighlightCards />
                    </div>
                </div>

                {/* Bottom Row: Viewport-Animated Statistics */}
                <StatsRow />
            </div>
        </section>
    );
};
