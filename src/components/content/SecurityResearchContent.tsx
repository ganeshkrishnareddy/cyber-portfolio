'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectCard3D } from '@/components/3d/ProjectCard3D';

export function SecurityResearchContent() {
    const findings = [
        {
            title: "CtrlB Security Assessment",
            description: "Identified critical vulnerabilities allowing full remote system compromise on an observability control plane.",
            problem: "Unauthenticated agent registration combined with internal SSRF vulnerabilities exposed internal cloud infrastructure.",
            methodology: "Discovered live backend URLs via GitHub exposure, analyzed API routing for authentication bypasses, and mapped internal SSRF callback paths.",
            outcome: "Found Critical SSRF via Agent Command Execution, Unauthenticated Agent Registration, and supply-chain RCE via curl-to-bash scripts.",
            tags: ["SSRF", "Auth Bypass", "Supply Chain", "Critical"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Sarvam AI Security Assessment",
            description: "Discovered critical vulnerabilities including a blind SSRF and active leaked API keys in production.",
            problem: "Callback URLs in the Speech-to-Text batch processing API lacked hostname and internal IP validation.",
            methodology: "Intercepted callback mechanisms to attempt SSRF against cloud metadata endpoints. Searched for hardcoded credentials in public repos and client-side bundles.",
            outcome: "Exploited SSRF via STT Batch Job Callback. Identified an active leaked API key granting full access to core NLP services, and discovered CORS misconfigurations.",
            tags: ["SSRF", "Leaked Secrets", "CORS", "Critical"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Infoseclabs Security Assessment",
            description: "Identified Critical authentication flaws and sensitive data exposure on a cybersecurity education platform.",
            problem: "Registration endpoint issued functional JWT session tokens without requiring email verification, alongside unprotected configuration endpoints.",
            methodology: "Analyzed registration flows, manipulated JWT parameters, and audited unauthenticated API endpoints for sensitive data leaks.",
            outcome: "Achieved mass account creation via Email Verification Bypass. Discovered unauthenticated exposure of Stripe Live Keys and OAuth Secrets.",
            tags: ["Auth Bypass", "Data Leak", "API Security", "Critical"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Megaminds Reconnaissance Report",
            description: "Discovered critical data exposure and authentication system breakage in an academic portal.",
            problem: "Improper routing and unauthenticated endpoints exposed internal assignment databases and broken authentication flows.",
            methodology: "Performed endpoint discovery, parameter tampering, and Socket.IO connection analysis.",
            outcome: "Found Public Assignment Data Exposure, broken Auth endpoints returning HTTP 500s, and unauthenticated Socket.IO connections.",
            tags: ["Data Exposure", "Broken Auth", "WebSockets", "High"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Odoo Reconnaissance Report",
            description: "Uncovered significant information disclosure across 12 production instances of Odoo ERP.",
            problem: "Improper error handling and unauthenticated APIs leaked detailed server configurations and stack traces.",
            methodology: "Used XMLRPC introspection and forced error states to leak backend configurations. Analyzed Weblate translation endpoints for unauthorized data access.",
            outcome: "Identified XMLRPC Stack Trace Leaks, Weblate API Data Exposure (50M+ strings), and Session Info Leakage across multiple instances.",
            tags: ["Information Disclosure", "XMLRPC", "API", "Medium"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Cyberintelsys Security Assessment",
            description: "Found multiple attack vectors on a corporate WordPress deployment.",
            problem: "Default configurations and exposed REST APIs facilitated user enumeration and accelerated brute-force attacks.",
            methodology: "Enumerated WordPress REST API namespaces and author parameters. Tested XML-RPC multicall for credential stuffing.",
            outcome: "Discovered WordPress User Enumeration via REST API, XML-RPC Multicall Brute Force vector, and Missing Security Headers.",
            tags: ["User Enumeration", "Brute Force", "WordPress", "Medium"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        }
    ];

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Security Research & Vulnerability Discovery</h1>
                <p className="text-xl text-text-muted">
                    A detailed log of security reconnaissance, external assessments, and critical vulnerability findings across various platforms and organizations.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {findings.map((finding, index) => (
                    <ProjectCard3D key={finding.title} delay={index * 0.1}>
                        <ProjectCard {...finding} />
                    </ProjectCard3D>
                ))}
            </div>
        </div>
    );
}
