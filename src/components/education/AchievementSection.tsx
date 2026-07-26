import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Award, BookOpen, Star, GraduationCap } from 'lucide-react';
import { educationData } from '../../data/education';

// Helper function to pick icon based on achievement content
const getAchievementIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('research') || lower.includes('paper') || lower.includes('published') || lower.includes('ijsrem')) {
        return <BookOpen className="w-5 h-5 text-highlight" />;
    }
    if (lower.includes('runner-up') || lower.includes('quiz') || lower.includes('1st') || lower.includes('winner') || lower.includes('trophy') || lower.includes('hackathon')) {
        return <Trophy className="w-5 h-5 text-highlight" />;
    }
    if (lower.includes('distinction') || lower.includes('commendation') || lower.includes('excellence') || lower.includes('award') || lower.includes('honor')) {
        return <Award className="w-5 h-5 text-highlight" />;
    }
    return <Star className="w-5 h-5 text-highlight" />;
};

export const AchievementSection: React.FC = () => {
    // Extract all achievements dynamically from educationData in education.ts
    const achievementsList = educationData.flatMap((edu) =>
        (edu.achievements || []).map((achievementText, idx) => ({
            id: `${edu.id}-ach-${idx}`,
            institution: edu.institution,
            degree: edu.degree,
            text: achievementText,
        }))
    );

    if (achievementsList.length === 0) return null;

    return (
        <div className="mt-14 pt-10 border-t border-white/10">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-highlight/10 border border-highlight/20 text-highlight">
                    <Sparkles className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                        Academic Highlights & Activities
                    </h3>
                    <p className="text-xs sm:text-sm text-textSecondary mt-0.5">
                        Key recognitions, research publications, and academic achievements from education history
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievementsList.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="bg-card/70 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-highlight/30 transition-all duration-300 shadow-soft flex items-start gap-4"
                    >
                        <div className="w-10 h-10 rounded-xl bg-elevatedSurface flex items-center justify-center border border-white/10 flex-shrink-0 mt-0.5 shadow-inner">
                            {getAchievementIcon(item.text)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[11px] font-semibold text-primaryAccent bg-primaryAccent/10 px-2.5 py-0.5 rounded-md border border-primaryAccent/20 flex items-center gap-1">
                                    <GraduationCap className="w-3 h-3" />
                                    {item.institution}
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-textPrimary font-medium leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
