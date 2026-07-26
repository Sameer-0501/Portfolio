import React from 'react';
import { categorizedSkills } from '../data/skills';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCategoryCard } from '../components/skills/SkillCategoryCard';

export const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative bg-sectionBg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <SectionHeading title="Skills & Technologies" />

                {/* Multi-column Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 items-stretch">
                    {categorizedSkills.map((category, index) => (
                        <SkillCategoryCard
                            key={category.id}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
