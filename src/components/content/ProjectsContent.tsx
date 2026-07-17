'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectCard3D } from '@/components/3d/ProjectCard3D';

import { projectsData } from '@/data/projects';

export function ProjectsContent() {
    const projects = projectsData;

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Secure Engineering Projects</h1>
                <p className="text-xl text-text-muted">
                    A collection of full-stack applications and security work.
                    Focusing on the <b>engineering</b> and <b>defense</b> aspects of each project.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard3D key={project.title} delay={index * 0.1}>
                        <ProjectCard {...project as any} description={project.shortDescription} />
                    </ProjectCard3D>
                ))}
            </div>
        </div>
    );
}
