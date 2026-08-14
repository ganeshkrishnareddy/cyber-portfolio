'use client';

import { motion } from 'framer-motion';
import { ProjectCard3D } from '@/components/3d/ProjectCard3D';
import { ShieldAlert, Calendar, Building, CheckCircle2, AlertTriangle, Lock } from 'lucide-react';

export function SecurityResearchContent() {
    const findings = [
        {
            title: "CtrlB Security Assessment",
            description: "Identified critical vulnerabilities allowing full remote system compromise on an observability control plane.",
            problem: "Unauthenticated agent registration combined with internal SSRF vulnerabilities exposed internal cloud infrastructure.",
            methodology: "Discovered live backend URLs via GitHub exposure, analyzed API routing for authentication bypasses, and mapped internal SSRF callback paths.",
            outcome: "Found Critical SSRF via Agent Command Execution, Unauthenticated Agent Registration, and supply-chain RCE via curl-to-bash scripts.",
            tags: ["SSRF", "Auth Bypass", "Supply Chain"],
            githubUrl: "https://github.com/ganeshkrishnareddy",
            severity: "Critical",
            cvss: "9.8",
            timeline: "Feb 2026",
            vendor: "CtrlB",
            status: "Patched",
            disclosure: "Authorized"
        },
        {
            title: "Sarvam AI Security Assessment",
            description: "Discovered critical vulnerabilities including a blind SSRF and active leaked API keys in production.",
            problem: "Callback URLs in the Speech-to-Text batch processing API lacked hostname and internal IP validation.",
            methodology: "Intercepted callback mechanisms to attempt SSRF against cloud metadata endpoints. Searched for hardcoded credentials in public repos and client-side bundles.",
            outcome: "Exploited SSRF via STT Batch Job Callback. Identified an active leaked API key granting full access to core NLP services, and discovered CORS misconfigurations.",
            tags: ["SSRF", "Leaked Secrets", "CORS"],
            githubUrl: "https://github.com/ganeshkrishnareddy",
            severity: "Critical",
            cvss: "9.1",
            timeline: "Mar 2026",
            vendor: "Sarvam AI",
            status: "Remediated",
            disclosure: "Authorized"
        },
        {
            title: "Infoseclabs Security Assessment",
            description: "Identified Critical authentication flaws and sensitive data exposure on a cybersecurity education platform.",
            problem: "Registration endpoint issued functional JWT session tokens without requiring email verification, alongside unprotected configuration endpoints.",
            methodology: "Analyzed registration flows, manipulated JWT parameters, and audited unauthenticated API endpoints for sensitive data leaks.",
            outcome: "Achieved mass account creation via Email Verification Bypass. Discovered unauthenticated exposure of Stripe Live Keys and OAuth Secrets.",
            tags: ["Auth Bypass", "Data Leak", "API Security"],
            githubUrl: "https://github.com/ganeshkrishnareddy",
            severity: "High",
            cvss: "8.2",
            timeline: "Jan 2026",
            vendor: "Infoseclabs",
            status: "Patched",
            disclosure: "Authorized"
        },
        {
            title: "Megaminds Reconnaissance Report",
            description: "Discovered critical data exposure and authentication system breakage in an academic portal.",
            problem: "Improper routing and unauthenticated endpoints exposed internal assignment databases and broken authentication flows.",
            methodology: "Performed endpoint discovery, parameter tampering, and Socket.IO connection analysis.",
            outcome: "Found Public Assignment Data Exposure, broken Auth endpoints returning HTTP 500s, and unauthenticated Socket.IO connections.",
            tags: ["Data Exposure", "Broken Auth", "WebSockets"],
            githubUrl: "https://github.com/ganeshkrishnareddy",
            severity: "High",
            cvss: "7.5",
            timeline: "Nov 2025",
            vendor: "Megaminds",
            status: "Reported",
            disclosure: "Responsible"
        },
        {
            title: "Odoo Reconnaissance Report",
            description: "Uncovered significant information disclosure across 12 production instances of Odoo ERP.",
            problem: "Improper error handling and unauthenticated APIs leaked detailed server configurations and stack traces.",
            methodology: "Used XMLRPC introspection and forced error states to leak backend configurations. Analyzed Weblate translation endpoints for unauthorized data access.",
            outcome: "Identified XMLRPC Stack Trace Leaks, Weblate API Data Exposure (50M+ strings), and Session Info Leakage across multiple instances.",
            tags: ["Information Disclosure", "XMLRPC", "API"],
            githubUrl: "https://github.com/ganeshkrishnareddy",
            severity: "Medium",
            cvss: "5.3",
            timeline: "Oct 2025",
            vendor: "Odoo",
            status: "Patched",
            disclosure: "Public"
        },
        {
            title: "Cyberintelsys Security Assessment",
            description: "Found multiple attack vectors on a corporate WordPress deployment.",
            problem: "Default configurations and exposed REST APIs facilitated user enumeration and accelerated brute-force attacks.",
            methodology: "Enumerated WordPress REST API namespaces and author parameters. Tested XML-RPC multicall for credential stuffing.",
            outcome: "Discovered WordPress User Enumeration via REST API, XML-RPC Multicall Brute Force vector, and Missing Security Headers.",
            tags: ["User Enumeration", "Brute Force", "WordPress"],
            githubUrl: "https://github.com/ganeshkrishnareddy",
            severity: "Medium",
            cvss: "5.0",
            timeline: "Dec 2025",
            vendor: "Cyberintelsys",
            status: "Reported",
            disclosure: "Responsible"
        }
    ];

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Vulnerability Disclosures</h1>
                <p className="text-xl text-text-muted leading-relaxed">
                    Technical write-ups on critical vulnerabilities (SSRF, Auth Bypasses, Data Leaks) discovered across enterprise platforms and AI infrastructure.
                </p>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono w-max">
                    <AlertTriangle className="w-4 h-4" />
                    <span>All findings reported via coordinated disclosure.</span>
                </div>
            </motion.div>

            {/* Bug Bounty Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="grid sm:grid-cols-3 gap-4"
            >
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 space-y-2">
                    <div className="text-3xl font-extrabold text-primary font-mono">$400</div>
                    <div className="text-sm font-bold text-text-primary">USD HackerOne Bug Bounty &mdash; Paid</div>
                    <p className="text-xs text-text-muted leading-relaxed">
                        Awarded Jul 29, 2026 (Report #3851049, CLEAR program); payout confirmed via PayPal Jul 30, 2026.
                        Earning the <span className="text-primary">Bounty Hunter</span> badge &mdash; my first paid bounty.
                        Verify on <a className="text-primary underline" href="https://hackerone.com/pganeshkrishnareddy" target="_blank" rel="noopener">hackerone.com/pganeshkrishnareddy</a>.
                    </p>
                </div>
                <div className="rounded-xl border border-surface bg-surface/30 p-6 space-y-2">
                    <div className="text-3xl font-extrabold text-text-primary font-mono">P5 &rarr; P1</div>
                    <div className="text-sm font-bold text-text-primary">Severity Classes Submitted</div>
                    <p className="text-xs text-text-muted leading-relaxed">
                        Reports across every severity class on live programs (HackerOne + Com Olho) &mdash; $400 paid bounty
                        secured, actively pursuing P1 (critical) validation.
                    </p>
                </div>
                <div className="rounded-xl border border-surface bg-surface/30 p-6 space-y-2">
                    <div className="text-3xl font-extrabold text-text-primary font-mono">18+</div>
                    <div className="text-sm font-bold text-text-primary">Reports Submitted</div>
                    <p className="text-xs text-text-muted leading-relaxed">
                        8 on HackerOne (Plaid, CLEAR, Stripchat, 1win) and 10 on Com Olho &mdash; plus 7 professional certifications
                        (CompTIA Security+, CySA+, PenTest+, Network+, QuickHeal &times;2, CS50).
                    </p>
                </div>
            </motion.div>

            {/* Verified Submissions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-text-primary">Verified Submissions</h2>
                    <p className="text-sm text-text-muted">
                        Live report record across bug bounty platforms. Statuses shown exactly as triaged.
                    </p>
                </div>

                <div className="rounded-xl border border-surface bg-surface/30 overflow-hidden">
                    <div className="px-6 py-3 border-b border-surface flex items-center justify-between">
                        <h3 className="font-bold text-text-primary">HackerOne &mdash; 8 reports</h3>
                        <span className="text-xs font-mono text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 rounded">1 bounty paid: $400</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-[10px] uppercase tracking-widest text-text-muted border-b border-surface">
                                    <th className="px-6 py-2">Report</th>
                                    <th className="px-4 py-2">Program</th>
                                    <th className="px-4 py-2">Subject</th>
                                    <th className="px-4 py-2">Severity</th>
                                    <th className="px-6 py-2 text-right">Reward</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface/50">
                                {[
                                    ["#3900831", "Plaid", "Subdomain takeover on verify-testing.plaid.com", "Low"],
                                    ["#3905298", "Plaid", "Server-side reCAPTCHA validation bypass on account signup", "Low"],
                                    ["#3900681", "CLEAR", "OAuth/OIDC infra exposure + unauth admin API surface", "None"],
                                    ["#3851077", "CLEAR", "Salesforce sandbox exposes OIDC discovery + token exchange", "High"],
                                    ["#3851049", "CLEAR", "Unauthenticated data injection in FormAssembly form allows database poisoning", "Low"],
                                    ["#3851068", "CLEAR", "postMessage wildcard origin + missing X-Frame-Options (clickjacking chain)", "Low"],
                                    ["#39793920", "Stripchat", "CNAME chain exposes internal AWS VPC via public DNS", "Medium"],
                                    ["#3792633", "1win", "Unauthenticated API endpoints exposing configuration data", "Low"],
                                ].map(([rep, prog, subj, sev]) => (
                                    <tr key={rep} className="hover:bg-surface/40 transition-colors">
                                        <td className="px-6 py-2 font-mono text-primary whitespace-nowrap">{rep}</td>
                                        <td className="px-4 py-2 font-medium text-text-primary whitespace-nowrap">{prog}</td>
                                        <td className="px-4 py-2 text-text-muted max-w-md truncate">{subj}</td>
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                                sev === 'High' ? 'bg-red-500/10 text-red-400' :
                                                sev === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                                                'bg-surface text-text-muted'
                                            }`}>{sev}</span>
                                        </td>
                                        <td className="px-6 py-2 text-right whitespace-nowrap">{rep === '#3851049' ? <span className="text-primary font-bold">$400 PAID</span> : <span className="text-text-muted">&mdash;</span>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rounded-xl border border-surface bg-surface/30 overflow-hidden">
                    <div className="px-6 py-3 border-b border-surface flex items-center justify-between">
                        <h3 className="font-bold text-text-primary">Com Olho &mdash; 10 submissions</h3>
                        <span className="text-xs font-mono text-text-muted border border-surface px-2 py-0.5 rounded">2 in review</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-[10px] uppercase tracking-widest text-text-muted border-b border-surface">
                                    <th className="px-6 py-2">Program</th>
                                    <th className="px-4 py-2">Subject</th>
                                    <th className="px-4 py-2">Severity</th>
                                    <th className="px-6 py-2 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface/50">
                                {[
                                    ["Sai Life Sciences", "Laravel debug mode on production eprocure.sailife.com", "P3", "In Review / Triaged"],
                                    ["Nykaa", "Unauthenticated admin UI + GraphQL introspection", "P4", "In Review"],
                                    ["Cleartax", "Unverified arbitrary GSTIN attach (broken access control)", "P1", "Rejected"],
                                    ["SBI Card", "Spring Boot Actuator exposure leading to internal infrastructure", "P2", "Duplicate"],
                                    ["Zerodha", "Loans API error leak (HTTP 500 + Python stack trace)", "P3", "Duplicate"],
                                    ["Cleartax", "Firebase config + multiple critical/high findings exposure", "P5", "Rejected"],
                                    ["SBI Card", "Exposed Aadhaar eKYC API config with hardcoded secrets", "P5", "Rejected"],
                                    ["Quickwork", "API surface exposure & authentication gaps", "P5", "Rejected"],
                                    ["Com Olho", "Weak Content Security Policy (CSP) configuration", "P4", "Rejected"],
                                ].map(([prog, subj, sev, status]) => (
                                    <tr key={prog + subj} className="hover:bg-surface/40 transition-colors">
                                        <td className="px-6 py-2 font-medium text-text-primary whitespace-nowrap">{prog}</td>
                                        <td className="px-4 py-2 text-text-muted max-w-md truncate">{subj}</td>
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                                sev === 'P1' ? 'bg-red-500/10 text-red-400' :
                                                sev === 'P2' ? 'bg-orange-500/10 text-orange-400' :
                                                sev === 'P3' ? 'bg-yellow-500/10 text-yellow-400' :
                                                sev === 'P4' ? 'bg-blue-500/10 text-blue-400' :
                                                'bg-surface text-text-muted'
                                            }`}>{sev}</span>
                                        </td>
                                        <td className="px-6 py-2 text-right whitespace-nowrap">
                                            <span className={`text-xs font-bold ${
                                                status.includes('In Review') ? 'text-blue-400' :
                                                status.includes('Duplicate') ? 'text-orange-400' : 'text-red-400/70'
                                            }`}>{status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>

            <div className="relative border-l border-surface ml-4 md:ml-6 space-y-12">
                {findings
                    .sort((a, b) => new Date(b.timeline).getTime() - new Date(a.timeline).getTime())
                    .map((finding, index) => (
                    <motion.div 
                        key={finding.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Node */}
                        <div className="absolute -left-[21px] top-1 p-2 rounded-full bg-background border border-surface text-text-muted">
                            <ShieldAlert className="w-4 h-4 text-primary" />
                        </div>

                        <div className="group relative rounded-xl border border-surface bg-surface/30 overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col">
                            <div className="p-6 space-y-6">
                                {/* Header */}
                                <div className="space-y-2">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                                            {finding.title}
                                        </h3>
                                        <div className="px-2 py-1 rounded font-mono text-xs font-bold uppercase tracking-wider bg-surface border border-surface-hover text-text-primary">
                                            CVSS {finding.cvss}
                                        </div>
                                    </div>
                                    <p className="text-text-muted text-sm leading-relaxed">{finding.description}</p>
                                </div>

                                {/* Metadata Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-surface/50">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-text-muted tracking-wider">
                                            <ShieldAlert className="w-3.5 h-3.5" /> Severity
                                        </div>
                                        <div className={`text-sm font-semibold ${
                                            finding.severity === 'Critical' ? 'text-red-500' :
                                            finding.severity === 'High' ? 'text-orange-400' : 'text-yellow-400'
                                        }`}>{finding.severity}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-text-muted tracking-wider">
                                            <Calendar className="w-3.5 h-3.5" /> Timeline
                                        </div>
                                        <div className="text-sm text-text-primary font-medium">{finding.timeline}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-text-muted tracking-wider">
                                            <Building className="w-3.5 h-3.5" /> Vendor
                                        </div>
                                        <div className="text-sm text-text-primary font-medium">{finding.vendor}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-text-muted tracking-wider">
                                            <Lock className="w-3.5 h-3.5" /> Status
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-primary font-medium">
                                            <CheckCircle2 className="w-3.5 h-3.5" /> {finding.status}
                                        </div>
                                    </div>
                                </div>

                                {/* Deep Dive Content */}
                                <div className="space-y-4 pt-2">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest block">Root Cause</span>
                                        <p className="text-sm text-text-primary leading-relaxed">{finding.problem}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest block">Impact</span>
                                        <p className="text-sm text-text-primary leading-relaxed">{finding.outcome}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tags Footer */}
                            <div className="px-6 py-4 bg-background/50 border-t border-surface flex flex-wrap gap-2">
                                {finding.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted bg-surface/50 border border-surface px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
