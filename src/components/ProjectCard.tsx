'use client';

import Link from 'next/link';
import { ExternalLink, Github, ShieldAlert, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { clsx } from 'clsx';
import { SkillBadge } from '@/components/SkillBadge';

interface ProjectCardProps {
    title: string;
    description: string;
    problem: string;
    methodology: string;
    outcome: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string; // Optional for now
}

export function ProjectCard({
    title,
    description,
    problem,
    methodology,
    outcome,
    tags,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <div className="group relative rounded-xl border border-surface bg-surface/50 overflow-hidden hover:border-primary/50 transition-colors duration-300">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative p-6 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            {githubUrl && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-text-muted hover:text-primary transition-colors" aria-label="View Source">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {liveUrl && (
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-text-muted hover:text-primary transition-colors" aria-label="View Live Project">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                </div>

                {/* Case Study Details */}
                <div className="flex flex-col gap-4 text-sm bg-background/50 p-4 rounded-lg border border-surface">
                    {/* Problem - High Emphasis */}
                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-red-500 font-bold tracking-wide uppercase text-xs">
                            <ShieldAlert className="w-4 h-4" />
                            <span>The Threat</span>
                        </div>
                        <p className="text-text-primary pl-6 font-medium leading-relaxed">{problem}</p>
                    </div>

                    {/* Methodology - Reduced Cognitive Load */}
                    <div className="space-y-1.5 opacity-90">
                        <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wide uppercase">
                            <Shield className="w-4 h-4" />
                            <span>Methodology</span>
                        </div>
                        <p className="text-text-muted pl-6">{methodology}</p>
                    </div>
                    {/* Outcome - Clear Takeaway */}
                    <div className="space-y-2 pt-3 mt-1 border-t border-surface/50">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                                <span className="text-primary font-bold text-xs tracking-wide uppercase block mb-1">Result & Impact</span>
                                <p className="text-text-primary font-medium">{outcome}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                        <SkillBadge key={tag} name={tag} level="Basic" className="bg-surface border-surface-hover text-text-muted" />
                    ))}
                </div>
            </div>
        </div>
    );
}
