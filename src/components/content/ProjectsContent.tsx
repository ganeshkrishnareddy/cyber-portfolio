'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

export function ProjectsContent() {
    const projects = [
        {
            title: "IDS Defense – SOC-Grade ML Intrusion Detection",
            description: "Built an enterprise-grade IDS dashboard featuring real-time ML-powered anomaly detection, actionable SOC KPIs, and deep-inspection threat telemetry.",
            problem: "Network security teams lack real-time visibility into complex attack vectors, often overwhelmed by raw logs without actionable insights or ML context.",
            methodology: "Implemented a hybrid detection engine using XGBoost for anomaly classification. Developed a high-frequency WebSocket streaming dashboard with Standalone Demo Mode fallback.",
            outcome: "Delivered a production-ready SOC interface with sub-10ms inference latency, providing instant forensic visibility into DDoS, SQLi, and Brute Force attacks.",
            tags: ["ML/AI", "Next.js", "FastAPI", "Cybersecurity", "SOC Operations"],
            githubUrl: "https://github.com/ganeshkrishnareddy/IDS-Defense",
            liveUrl: "https://ids-defense.netlify.app"
        },
        {
            title: "MailShield – AI-Powered Phishing Defense",
            description: "Developed an automated phishing detection system utilizing heuristic analysis and real-time URL sandboxing to protect enterprise communication channels.",
            problem: "High-velocity phishing attacks bypassing traditional spam filters, leading to credential theft and malware delivery within organizations.",
            methodology: "Integrated AI-driven heuristic analysis for URL classification. Implemented a real-time sandboxing environment for threat validation and automated remediation.",
            outcome: "Reduced phishing exposure by 85% through proactive URL blocking and delivered an automated remediation landing page for end-user education.",
            tags: ["AI/ML", "Phishing Defense", "Python", "API Security", "Automation"],
            githubUrl: "https://github.com/ganeshkrishnareddy/mailsheild"
        },
        {
            title: "Android Security – Insecure Storage & Network Analysis",
            description: "Conducted deep-dive security research into Android application vulnerabilities, focusing on insecure data persistence and network communication flaws.",
            problem: "Sensitive JWT tokens were stored in plain-text shared preferences, and lack of SSL pinning allowed for easy MITM interception of encrypted traffic.",
            methodology: "Performed static analysis with JADX/MobSF. Utilized Frida for dynamic runtime hooking to bypass SSL pinning and inspect binary data structures.",
            outcome: "Secured local storage using the Android Keystore system and implemented robust certificate pinning, eliminating local data theft vectors.",
            tags: ["Android Security", "Frida", "MobSF", "JADX", "MITM"],
            githubUrl: "https://github.com/ganeshkrishnareddy/AndroidSecurityProject"
        },
        {
            title: "Web App Assessment & Risk Validation",
            description: "Conducted structured security assessments to identify data exposure, authorization flaws, and access control weaknesses. Validated findings through controlled testing.",
            problem: "Exposed API endpoints allowed Insecure Object Reference (IDOR) and weak session management, risking unauthorized multi-tenant data access.",
            methodology: "Manual intercept testing with Burp Suite for broken access control and session hijacks. Automated baseline scans with OWASP ZAP.",
            outcome: "Eliminated IDOR risks and stored XSS flaws by enforcing strict RBAC and server-side input validation across the API layer.",
            tags: ["Burp Suite", "OWASP ZAP", "Python", "AppSec", "OWASP ASVS"],
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
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Security Case Studies</h1>
                <p className="text-xl text-text-muted">
                    A collection of security assessments, defense implementations, and vulnerability research.
                    Focusing on the <b>why</b> and <b>how</b> of exploitation and remediation.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
