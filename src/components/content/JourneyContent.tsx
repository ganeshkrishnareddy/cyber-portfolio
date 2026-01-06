'use client';

import { motion } from 'framer-motion';
import { Award, Target, Rocket } from 'lucide-react';
import { SkillBadge } from '@/components/SkillBadge';

export function JourneyContent() {
    const certifications = [
        { name: "QuickHeal Certified Malware Analyst", issuer: "QuickHeal", date: "Dec 2025" },
        { name: "CompTIA CySA+", issuer: "CompTIA", date: "Aug 2025" },
        { name: "CompTIA PenTest+", issuer: "CompTIA", date: "Aug 2025" },
        { name: "CompTIA Security+", issuer: "CompTIA", date: "Jan 2025" },
        { name: "CompTIA Network+", issuer: "CompTIA", date: "Aug 2024" },
    ];

    const securityDomains = ["Risk Assessment", "Application Security", "Linux Hardening", "Network Defense", "Threat Detection"];
    const engineeringGrowth = ["React/Next.js", "Node.js", "REST APIs", "Firebase", "PostgreSQL", "System Design"];

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Security & Engineering Journey</h1>
                <p className="text-xl text-text-muted leading-relaxed">
                    How I&apos;m building towards becoming a Secure Software Engineer — combining full-stack development with cybersecurity fundamentals.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                    This journey reflects my transition from learning security fundamentals to applying them directly within full-stack and backend engineering projects.
                </p>
            </motion.div>

            {/* Learning Roadmap */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <Target className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Learning Roadmap</h2>
                </div>

                <div className="relative border-l-2 border-surface ml-3 pl-8 space-y-12">
                    {/* Next Milestone */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group pr-4 py-4 rounded-xl hover:bg-surface/20 transition-all cursor-default"
                    >
                        <div className="absolute -left-[45px] top-6 h-7 w-7 rounded-full border-4 border-background bg-surface-hover shadow-lg group-hover:scale-125 transition-transform" />
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-text-muted font-mono text-xs font-bold px-2 py-0.5 rounded border border-surface-hover uppercase tracking-tighter">Next Milestone</span>
                                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">Enterprise Secure Architect</h3>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Targeting high-impact roles in secure platform engineering. Scaling security principles across distributed systems and leading DevSecOps automation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Security Era (Present) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative group pr-4 py-4 rounded-xl hover:bg-surface/20 transition-all cursor-default"
                    >
                        <div className="absolute -left-[45px] top-6 h-7 w-7 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20 group-hover:scale-125 transition-transform" />
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-primary font-mono text-xs font-bold px-2 py-0.5 rounded border border-primary/20 uppercase tracking-tighter">2024 — Present</span>
                                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">Secure Software Engineering</h3>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Transitioned into secure engineering, combining years of web delivery experience with deep security research. Focusing on **Application Security**, **Secure Architecture**, and enterprise-grade resilience.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary/5 text-primary border border-primary/20 rounded">Security+ | CySA+</span>
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary/5 text-primary border border-primary/20 rounded">AppSec Research</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Freelance Era (Past) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group pr-4 py-4 rounded-xl hover:bg-surface/20 transition-all cursor-default"
                    >
                        <div className="absolute -left-[45px] top-6 h-7 w-7 rounded-full border-4 border-background bg-secondary shadow-lg shadow-secondary/20 group-hover:scale-125 transition-transform" />
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-secondary font-mono text-xs font-bold px-2 py-0.5 rounded border border-secondary/20 uppercase tracking-tighter">2020 — 2024</span>
                                <h3 className="text-xl font-bold text-text-primary group-hover:text-secondary transition-colors">Freelance Web Architect</h3>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Started my journey in the design field, evolving into a full-cycle website builder. Delivered high-performance, visually stunning websites for global clients through **ProgVision**.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-secondary/5 text-secondary border border-secondary/20 rounded">Worldwide Services</span>
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-secondary/5 text-secondary border border-secondary/20 rounded">Web Design</span>
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-secondary/5 text-secondary border border-secondary/20 rounded">Full-Cycle Build</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Security Foundations */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <Award className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Industry-Recognized Certifications</h2>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Certifications - Now Horizontal Grid */}
                    <div className="bg-surface/30 p-8 rounded-xl border border-surface">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 rounded-lg bg-background/50 border border-surface-hover group hover:border-primary/50 transition-all">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors">{cert.name}</h4>
                                        <span className="text-[10px] font-mono text-text-muted opacity-60">{cert.date}</span>
                                    </div>
                                    <div className="text-xs text-text-muted uppercase tracking-wider">{cert.issuer}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Core Security Domains */}
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface">
                        <h3 className="text-lg font-bold text-text-primary mb-4">Core Security Domains</h3>
                        <div className="flex flex-wrap gap-2">
                            {securityDomains.map(domain => (
                                <SkillBadge key={domain} name={domain} className="bg-background text-text-muted" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Growth */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <Rocket className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Engineering Growth</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Full-Stack Evolution */}
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface">
                        <h3 className="text-lg font-bold text-text-primary mb-4">Full-Stack Evolution</h3>
                        <div className="flex flex-wrap gap-2">
                            {engineeringGrowth.map(skill => (
                                <SkillBadge key={skill} name={skill} className="bg-background text-text-muted" />
                            ))}
                        </div>
                    </div>

                    {/* Secure System Design */}
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface">
                        <h3 className="text-lg font-bold text-text-primary mb-4">Secure System Design</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            I approach security as part of the software engineering lifecycle — not as a separate role. Every system I build incorporates authentication, authorization, and defense-in-depth from day one.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
