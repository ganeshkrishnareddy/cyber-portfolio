'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Shield, Terminal as TerminalIcon } from 'lucide-react';
import { SkillBadge } from '@/components/SkillBadge';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from '@/data/profile';

export function AboutContent() {
        const skills = {
            "Security Domains": ["SOC Operations", "Penetration Testing", "Application Security", "Network Security", "Threat Detection"],
            "Security Tools": ["Burp Suite", "Wireshark", "Wazuh (SIEM/EDR)", "Nmap", "Metasploit"],
            "Detection & Defense": ["IDS/IPS", "Phishing Detection", "Log Analysis", "Anomaly Detection"],
            "Programming & Frameworks": ["Python", "FastAPI", "Next.js", "JavaScript", "Bash", "HTML", "CSS"],
            "Concepts": ["OWASP ASVS", "SSL Pinning", "RBAC", "API Security", "CVE Research", "Secure Storage"]
        };

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-20">
            {/* Header */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-8 space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary">About Me</h1>
                    <div className="space-y-4 text-xl text-text-muted leading-relaxed">
                        <p>I didn&apos;t start in cybersecurity. I started building products.</p>
                        <p>While delivering production software, I realized most applications fail because security is treated as an afterthought.</p>
                        <p className="text-text-primary font-semibold border-l-4 border-primary pl-4">
                            Today, I design software where security is part of the architecture—not something added later.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-4 flex justify-center"
                >
                    <div className="relative w-[220px] h-[220px] group">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Brackets */}
                        <div className="absolute top-[-6px] left-[-6px] w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl" />
                        <div className="absolute top-[-6px] right-[-6px] w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr" />
                        <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl" />
                        <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 border-b-2 border-r-2 border-primary rounded-br" />

                        {/* Image Frame */}
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-surface relative z-10">
                            <img 
                                src="/profile.jpeg" 
                                alt="P Ganesh Krishna Reddy" 
                                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-[30%] -top-[30%] animate-scan pointer-events-none z-20" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Engineering Philosophy */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <TerminalIcon className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Engineering Philosophy</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <div className="text-primary font-mono text-sm font-bold">01</div>
                        <h3 className="font-bold text-text-primary text-xl flex items-center gap-2">Shift Left is Dead.<br/>Build Secure by Default.</h3>
                        <p className="text-text-muted leading-relaxed">
                            I don&apos;t believe security should happen after deployment. Or even in the CI pipeline. Security is an architectural property. Every pull request, every system design document, every database schema should explicitly improve the security posture.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-primary font-mono text-sm font-bold">02</div>
                        <h3 className="font-bold text-text-primary text-xl flex items-center gap-2">Complexity is the Enemy<br/>of Security.</h3>
                        <p className="text-text-muted leading-relaxed">
                            Hackers don&apos;t exploit encryption algorithms; they exploit complex state machines, dangling pointers, and misconfigured YAML files. I optimize for radical simplicity. If a junior engineer can&apos;t hold the architecture in their head, it&apos;s not secure.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-primary font-mono text-sm font-bold">03</div>
                        <h3 className="font-bold text-text-primary text-xl flex items-center gap-2">Default to Zero-Trust.</h3>
                        <p className="text-text-muted leading-relaxed">
                            The internal network is compromised. The database is exposed. The LLM prompt is hijacked. I build systems with the fundamental assumption that the perimeter has already failed.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-primary font-mono text-sm font-bold">04</div>
                        <h3 className="font-bold text-text-primary text-xl flex items-center gap-2">What I Refuse to Build.</h3>
                        <p className="text-text-muted leading-relaxed">
                            I refuse to build systems that prioritize feature velocity over user data privacy. I don&apos;t compromise on JWT handling, I don&apos;t accept &ldquo;we&apos;ll add auth later,&rdquo; and I never log PII.
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
                    {EXPERIENCE.map((job) => (
                        <div key={job.org + job.role} className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                            <div className="space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-xl font-bold text-text-primary">{job.role}</h3>
                                    <span className="text-sm font-mono text-text-muted">{job.period}</span>
                                </div>
                                <div className="text-secondary font-medium">{job.org}{job.type ? <span className="text-text-muted font-normal"> &bull; {job.type}</span> : null}</div>
                                <p className="text-text-muted">{job.description}</p>
                            </div>
                        </div>
                    ))}
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
                        {EDUCATION.map((edu) => (
                            <div key={edu.school}>
                                <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                                {edu.field ? <div className="text-text-muted">({edu.field})</div> : null}
                                <div className="text-secondary">{edu.school}</div>
                                <div className="text-sm text-text-muted font-mono mt-1">{edu.period}{edu.grade ? " \u00b7 Grade: " + edu.grade : ""}</div>
                                {edu.note ? <div className="text-sm text-text-muted mt-2">{edu.note}</div> : null}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center gap-2 pb-2 border-b border-surface">
                        <Award className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-text-primary">Certifications</h2>
                    </div>
                    <ul className="space-y-4">
                        {CERTIFICATIONS.map((cert) => (
                            <li key={cert.name} className="flex items-start justify-between group gap-3">
                                <div>
                                    <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">{cert.name}</h3>
                                    <div className="text-sm text-text-muted">{cert.issuer}</div>
                                    {cert.credentialId ? <div className="text-xs font-mono text-text-muted">ID {cert.credentialId}</div> : null}
                                    <a href={cert.verifyUrl} target="_blank" rel="noopener" className="text-sm text-primary underline">Verify</a>
                                </div>
                                <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded whitespace-nowrap">{cert.issued}{cert.expires ? " - " + cert.expires : ""}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Achievements Section */}
            <section className="space-y-8 pt-8 border-t border-surface">
                <div className="flex items-center gap-2 pb-2">
                    <Award className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Key Achievements</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">Reliance Foundation Scholarship</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Awarded the prestigious scholarship worth <b>Rs. 2,00,000</b> for academic excellence in engineering.
                        </p>
                    </div>
                    <div className="bg-surface/30 p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">$400 USD HackerOne Bug Bounty &mdash; Paid</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Awarded a <b>$400 USD</b> paid bug bounty on HackerOne, verified on the public
                            HackerOne profile. Every finding is disclosed responsibly.
                        </p>
                    </div>
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">Best Freelancer of 2024</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Recognized as <b>Best Freelancer of 2024</b> by IPSE; completed CS50 certification by Harvard University.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
