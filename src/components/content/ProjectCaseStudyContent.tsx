'use client';

import { motion } from 'framer-motion';
import { Github, ArrowLeft, Terminal as TerminalIcon, Database, Server, Shield, Zap, RefreshCcw, Wrench, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Mermaid from '@/components/Mermaid';

export function ProjectCaseStudyContent({ project }: { project: any }) {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-12 space-y-12">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
            >
                <div className="flex flex-wrap items-center gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight">{project.title}</h1>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 px-4 bg-primary/10 border border-primary/20 rounded-lg text-primary hover:bg-primary/20 transition-colors flex items-center gap-2">
                            <span className="text-sm font-medium">Live App</span>
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface border border-surface-hover rounded-lg text-text-muted hover:text-white transition-colors flex items-center gap-2">
                            <Github className="w-5 h-5" />
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                    )}
                </div>
                <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-mono">
                    {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 pt-8 border-t border-surface">
                <div className="md:col-span-2 space-y-12">
                    {/* Case Study Sections */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                            <TerminalIcon className="w-5 h-5 text-primary" /> Overview
                        </h2>
                        <p className="text-text-muted leading-relaxed text-lg">{project.overview}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-text-primary">The Problem</h2>
                        <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                            <p className="text-text-primary leading-relaxed font-medium">{project.problem}</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-text-primary">System Architecture</h2>
                        {project.architecture?.includes('graph') || project.architecture?.includes('flowchart') ? (
                            <div className="p-6 rounded-xl bg-[#0d1117] border border-surface overflow-x-auto">
                                <Mermaid chart={project.architecture} />
                            </div>
                        ) : (
                            <p className="text-text-muted leading-relaxed text-lg border-l-4 border-surface pl-4">{project.architecture}</p>
                        )}
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                            <RefreshCcw className="w-5 h-5 text-primary" /> Engineering Trade-offs
                        </h2>
                        <p className="text-text-muted leading-relaxed text-lg border-l-4 border-surface pl-4">
                            {project.tradeoffs}
                        </p>
                    </section>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                            <Wrench className="w-5 h-5 text-primary" /> Lessons Learned & Future
                        </h2>
                        <div className="space-y-4">
                            <div className="p-6 rounded-xl bg-surface/30 border border-surface">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-2">Production Learnings</h3>
                                <p className="text-text-primary">{project.lessonsLearned}</p>
                            </div>
                            <div className="p-6 rounded-xl bg-surface/30 border border-surface">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-2">Future Improvements</h3>
                                <p className="text-text-primary">{project.futureImprovements}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Tech Specs */}
                <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-surface/30 border border-surface space-y-8 sticky top-8">
                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-primary">
                                <Database className="w-4 h-4 text-secondary" /> Database Layer
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">{project.database}</p>
                        </div>
                        
                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-primary">
                                <Server className="w-4 h-4 text-blue-400" /> API Design
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">{project.apiDesign}</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-primary">
                                <Shield className="w-4 h-4 text-primary" /> Security Decisions
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">{project.securityDecisions}</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-primary">
                                <Zap className="w-4 h-4 text-yellow-400" /> Scale & Metrics
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed font-semibold">{project.performance}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
