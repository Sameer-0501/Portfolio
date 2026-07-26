import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, type ProjectItem } from '../data/projects';
import { personalData } from '../data/personal';
import { ProjectsHeader } from '../components/projects/ProjectsHeader';
import { FeaturedProjectCard } from '../components/projects/FeaturedProjectCard';
import { ProjectGridCard } from '../components/projects/ProjectGridCard';
import { ProjectModal } from '../components/ProjectModal';
import { Github, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    const featuredProject = (projectsData && projectsData.length > 0) 
        ? (projectsData.find(p => p.isFeatured) || projectsData[0])
        : null;

    const gridProjects = featuredProject 
        ? projectsData.filter(p => p.id !== featuredProject.id)
        : (projectsData || []);

    const handleOpenModal = (project: ProjectItem) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="py-24 relative bg-sectionBg overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <ProjectsHeader />

                {/* Featured Project Banner Card */}
                {featuredProject && (
                    <FeaturedProjectCard
                        project={featuredProject}
                        onOpenModal={handleOpenModal}
                    />
                )}

                {/* Remaining Projects Grid */}
                {gridProjects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridProjects.map((project, index) => (
                            <ProjectGridCard
                                key={project.id}
                                project={project}
                                index={index}
                                onOpenModal={handleOpenModal}
                            />
                        ))}
                    </div>
                )}

                {/* Compact GitHub Callout Banner with Reduced Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 max-w-2xl mx-auto bg-card border border-white/10 rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-soft group hover:border-highlight/40 transition-all duration-300"
                >
                    {/* Glowing Background Glow */}
                    <div className="absolute top-0 right-1/4 w-48 h-48 bg-highlight/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-elevatedSurface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-highlight/40 transition-all duration-300 shadow-soft">
                                <Github className="w-5 h-5 text-highlight" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-textPrimary tracking-tight">
                                    Explore More Repositories
                                </h3>
                                <p className="text-xs sm:text-sm text-mutedText leading-relaxed mt-0.5">
                                    View all projects & code on GitHub.
                                </p>
                            </div>
                        </div>

                        <a
                            href={personalData.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-gradient text-slate-950 font-bold text-xs sm:text-sm shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
                        >
                            <Github className="w-4 h-4 text-slate-950" />
                            <span>Visit GitHub</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
                        </a>
                    </div>
                </motion.div>

                {/* Interactive Project Details Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        isOpen={Boolean(selectedProject)}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </section>
    );
};
