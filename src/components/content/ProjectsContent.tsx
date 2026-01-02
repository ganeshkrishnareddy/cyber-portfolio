'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

export function ProjectsContent() {
    const projects = [
        {
            title: "Web Application Security Assessment & Risk Validation",
            description: "Conducted structured security assessments to identify data exposure, authorization flaws, and access control weaknesses. Validated findings through controlled testing.",
            problem: "Exposed API endpoints allowed Insecure Object Reference (IDOR) and weak session management, risking unauthorized multi-tenant data access.",
            methodology: "Manual intercept testing with Burp Suite for broken access control and session hijacks. Automated baseline scans with OWASP ZAP.",
            outcome: "Eliminated IDOR risks and stored XSS flaws by enforcing strict RBAC and server-side input validation across the API layer.",
            tags: ["Burp Suite", "OWASP ZAP", "Python", "AppSec", "OWASP ASVS"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Secure File Transfer System – Encrypted Data Protection",
            description: "Designed a secure file transfer solution emphasizing confidentiality and integrity. Implemented end-to-end encryption and verification mechanisms.",
            problem: "Legacy FTP transfers were vulnerable to MITM interception and lacked integrity checks, risking data tampering in transit.",
            methodology: "Implemented AES-256 for data at rest and RSA for secure key exchange. Integrated HMAC for cryptographic integrity verification.",
            outcome: "Deployed a zero-trust platform where files are encrypted pre-upload and verified post-download, ensuring 100% data integrity.",
            tags: ["Python", "AES-256", "RSA", "HMAC", "Linux Security"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "Android Application Security & Data Storage Analysis",
            description: "Analyzed mobile applications for insecure data storage and improper component exposure. Identified weak certificate validation risks.",
            problem: "Android application was storing sensitive JWT tokens in plain-text shared preferences and lacked SSL pinning.",
            methodology: "Static analysis with JADX/MobSF. Runtime hooking with Frida to bypass SSL pinning and inspect encrypted traffic.",
            outcome: "Secured local storage using Android Keystore and implemented certificate pinning, preventing 99% of local data theft vectors.",
            tags: ["MobSF", "JADX", "ADB", "Mobile Security", "Android"],
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

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
