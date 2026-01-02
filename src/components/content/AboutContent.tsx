'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Server, Shield, Globe, Terminal as TerminalIcon } from 'lucide-react';
import { Terminal, TerminalLine } from '@/components/Terminal';
import { SkillBadge } from '@/components/SkillBadge';

export function AboutContent() {
    const skills = {
        "Security & Governance": ["Risk Assessment", "Data Classification", "Data Exposure Analysis", "Compliance"],
        "Security Tools": ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "Metasploit"],
        "Domains": ["Web App Security", "Threat Detection", "Linux Hardening", "Network Security"],
        "Scripting & Auto": ["Python", "Bash", "Git", "GitHub Actions"],
    };

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">About Me</h1>
                <p className="text-xl text-text-muted leading-relaxed">
                    Security Engineer with a strong foundation in deploying security controls, validating access policies, and identifying data exposure risks.
                    I focus on defensive security, hardening Linux systems, and ensuring compliance-aligned security practices.
                </p>
            </motion.div>

            {/* How I Approach Security - Engineering Maturity */}
            <section className="bg-surface/30 border border-surface rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    How I Approach Security
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <h3 className="font-bold text-text-primary text-lg">Threat Modeling First</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Before scanning, I analyze the architecture to understand critical assets and potential attack vectors.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-full w-px bg-surface hidden md:block absolute right-0 top-0" /> {/* Separator hack if needed, or just cleaner grid */}
                        <h3 className="font-bold text-text-primary text-lg">Validation & Proof</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            I don't just report scanner outputs. I validate findings with reproducible steps (PoCs) to eliminate false positives.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-text-primary text-lg">Remediation Focused</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Finding bugs is half the job. I provide engineers with clear, actionable context to fix issues at the root.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Experience</h2>
                </div>

                <div className="relative border-l-2 border-surface ml-3 pl-8 space-y-10">
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                        <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-xl font-bold text-text-primary">Linux System Administration Trainee</h3>
                                <span className="text-sm font-mono text-text-muted">Jun 2024 - Jul 2024</span>
                            </div>
                            <div className="text-secondary font-medium">Red Hat <span className="text-text-muted font-normal">• Remote</span></div>
                            <ul className="list-disc list-inside text-text-muted space-y-2 pt-2">
                                <li>Hardened systems through SSH security, privilege management, and firewall rule enforcement.</li>
                                <li>Performed system security assessments using audit tools and manual validation techniques.</li>
                                <li>Supported remediation efforts by applying configuration fixes and validating post-change security posture.</li>
                            </ul>
                            <div className="flex gap-2 pt-2">
                                <SkillBadge name="Linux" level="Intermediate" className="border-surface" />
                                <SkillBadge name="Bash" level="Basic" className="border-surface" />
                                <SkillBadge name="Ansible" level="Basic" className="border-surface" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <TerminalIcon className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Technical Arsenal</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors">
                            <h3 className="text-lg font-bold text-text-primary mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <SkillBadge key={skill} name={skill} className="bg-background text-text-muted" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education & Certs */}
            <div className="grid md:grid-cols-2 gap-12">
                <section className="space-y-8">
                    <div className="flex items-center gap-2 pb-2 border-b border-surface">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-text-primary">Education</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">B.Tech in Computer Science and Engineering</h3>
                            <div className="text-text-muted">(Cyber Security)</div>
                            <div className="text-secondary">Lovely Professional University</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2022 - 2026</div>
                            <div className="text-sm text-text-muted mt-2">CGPA: 7.35 (Till 6th Semester)</div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">Intermediate (MPC)</h3>
                            <div className="text-secondary">Narayana Junior College</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2020 - 2022</div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center gap-2 pb-2 border-b border-surface">
                        <Award className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-text-primary">Certifications</h2>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">CompTIA Security+</h3>
                                <div className="text-sm text-text-muted">CompTIA</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Aug 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">CompTIA CySA+</h3>
                                <div className="text-sm text-text-muted">CompTIA</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Aug 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">CompTIA PenTest+</h3>
                                <div className="text-sm text-text-muted">CompTIA</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Aug 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">QuickHeal Certified Malware Analyst</h3>
                                <div className="text-sm text-text-muted">QuickHeal</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Dec 2025</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
