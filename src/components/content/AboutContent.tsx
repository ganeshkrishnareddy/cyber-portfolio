'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Shield, Terminal as TerminalIcon } from 'lucide-react';
import { SkillBadge } from '@/components/SkillBadge';

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
                        <p>I didn't start in cybersecurity. I started building products.</p>
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
                            I don't believe security should happen after deployment. Or even in the CI pipeline. Security is an architectural property. Every pull request, every system design document, every database schema should explicitly improve the security posture.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-primary font-mono text-sm font-bold">02</div>
                        <h3 className="font-bold text-text-primary text-xl flex items-center gap-2">Complexity is the Enemy<br/>of Security.</h3>
                        <p className="text-text-muted leading-relaxed">
                            Hackers don't exploit encryption algorithms; they exploit complex state machines, dangling pointers, and misconfigured YAML files. I optimize for radical simplicity. If a junior engineer can't hold the architecture in their head, it's not secure.
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
                            I refuse to build systems that prioritize feature velocity over user data privacy. I don't compromise on JWT handling, I don't accept "we'll add auth later," and I never log PII.
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
                                <h3 className="text-xl font-bold text-text-primary">Technical Lead (Cyber Security)</h3>
                                <span className="text-sm font-mono text-text-muted">Apr 2026 - Present</span>
                            </div>
                            <div className="text-secondary font-medium">Zentoja Technologies Private Limited <span className="text-text-muted font-normal">• Remote</span></div>
                            <ul className="list-disc list-inside text-text-muted space-y-2 pt-2">
                                <li>Built secure authentication workflows and zero-trust policies for distributed infrastructure.</li>
                                <li>Remediated 50+ critical vulnerabilities before production deployment.</li>
                                <li>Reduced attack surface by enforcing strict RBAC and eliminating exposed legacy endpoints.</li>
                                <li>Automated vulnerability validation directly into the deployment pipeline.</li>
                                <li>Introduced secure deployment practices, saving significant engineering hours on reactive fixes.</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <SkillBadge name="Kali Linux" level="Applied" className="border-surface" />
                                <SkillBadge name="Burp Suite" level="Applied" className="border-surface" />
                                <SkillBadge name="Wireshark" level="Applied" className="border-surface" />
                                <SkillBadge name="Metasploit" level="Applied" className="border-surface" />
                                <SkillBadge name="Wazuh" level="Applied" className="border-surface" />
                                <SkillBadge name="Linux" level="Applied" className="border-surface" />
                                <SkillBadge name="Cloud Security" level="Applied" className="border-surface" />
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
                            <div className="text-sm text-text-muted mt-2">CGPA: 7.51</div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">Intermediate (MPC)</h3>
                            <div className="text-secondary">Narayana Junior College</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2020 - 2022</div>
                            <div className="text-sm text-text-muted mt-2">Percentage: 79.4%</div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">Secondary Education</h3>
                            <div className="text-secondary">Narayana E.M High School</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2019 - 2020</div>
                            <div className="text-sm text-text-muted mt-2">Percentage: 98%</div>
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
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">QuickHeal Certified Malware Analyst</h3>
                                <div className="text-sm text-text-muted">QuickHeal</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Dec 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">CompTIA Network+, Security+, CySA+, PenTest+</h3>
                                <div className="text-sm text-text-muted">CompTIA</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Aug 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">QuickHeal Certified Digital Forensic Investigator</h3>
                                <div className="text-sm text-text-muted">QuickHeal</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Jan 2025</span>
                        </li>
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
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">Bug Bounty Programs</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Participated in bug bounty programs, identifying and responsibly disclosing vulnerabilities in web applications.
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
