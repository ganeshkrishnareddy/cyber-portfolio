'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectCard3D } from '@/components/3d/ProjectCard3D';

export function ProjectsContent() {
    const projects = [
        {
            title: "CRAG – Cognitive Resilience and Automated Governance",
            description: "Built an AI-powered third-party vendor risk monitoring prototype with real-time risk scoring (0–100) and automated alerts.",
            problem: "Organizations struggle to monitor vendor risks in real-time, often relying on manual periodic surveys that fail to capture immediate threat posture changes.",
            methodology: "Implemented RBAC for Admin/Vendor views, APScheduler-driven dynamic scoring engine, and compliance audit log. Designed a live glassmorphism dashboard with Chart.js visualizations.",
            outcome: "Delivered a dynamic risk score monitoring dashboard with continuous vendor risk visibility, backed by FastAPI, SQLAlchemy, and Firebase.",
            tags: ["Full-Stack", "AI Governance", "FastAPI", "SQLAlchemy", "Firebase"],
            githubUrl: "https://github.com/ganeshkrishnareddy/CRAG"
        },
        {
            title: "SentinelMind – Autonomous Threat Guardian for Agentic AI Systems",
            description: "Zero-trust security layer and real-time monitoring gateway built for multi-agent AI ecosystems. Developed for the Microsoft Build AI Hackathon.",
            problem: "As AI agents transition to taking autonomous, real-world actions, they become vulnerable to adversarial command hijacking, privilege escalation, and data exfiltration from compromised internal components.",
            methodology: "Designed a zero-trust scoring engine with keyword analyzers and payload inspection. Built a highly responsive Next.js dashboard with Recharts telemetry visualizing threat vectors in real-time.",
            outcome: "Achieved sub-12ms mitigation gateway latency with customizable threshold blocking (ALLOW / QUARANTINE / BLOCK) and immutable action audit logging.",
            tags: ["AI/ML Security", "Next.js", "TypeScript", "Zero-Trust", "Threat Defense"],
            githubUrl: "https://github.com/ganeshkrishnareddy/Sentinel-Mind"
        },
        {
            title: "Sarathi AI – Agentic Customer Acquisition & Onboarding Concierge",
            description: "Intelligent customer onboarding portal and automated qualification system engineered for State Bank of India. Developed for the SBI Hackathon.",
            problem: "Traditional banking onboarding systems are slow and complex, often lacking conversational support, leading to high drop-off rates and insecure KYC validation.",
            methodology: "Developed a Vite + React + TypeScript interface. Integrated Gemini LLM for product matching, qualification agents for suitability scoring, and a Compliance Agent for real-time conversation safety monitoring.",
            outcome: "Successfully implemented dynamic e-KYC (Aadhaar & OTP simulation) and low-latency product matching, with interactive live log traces of agent orchestration.",
            tags: ["Full-Stack", "AI Agents", "Vite + React", "Compliance Engine", "Secure Authentication"],
            githubUrl: "https://github.com/ganeshkrishnareddy/SBIHackathonGFF2026",
            liveUrl: "https://sarathi-sbi.web.app"
        },
        {
            title: "IDS Defense – SOC-Grade ML Intrusion Detection",
            description: "Addressed lack of real-time visibility into network attacks faced by SOC teams handling high-volume logs.",
            problem: "Network security teams lack real-time visibility into complex attack vectors, overwhelmed by raw logs without actionable insights or ML context.",
            methodology: "Developed a real-time intrusion detection system with ML-based anomaly detection and live SOC dashboards. Implemented XGBoost models with WebSocket streaming to detect DDoS, SQL injection, and brute-force attacks.",
            outcome: "Integrated high-volume network log ingestion pipeline to provide continuous visibility for SOC analysts, delivering sub-10ms inference latency.",
            tags: ["Full-Stack", "ML/AI", "XGBoost", "FastAPI", "Next.js"],
            githubUrl: "https://github.com/ganeshkrishnareddy/IDS-Defense"
        },
        {
            title: "MailShield – AI-Powered Phishing Defense",
            description: "Built an automated phishing detection system for email and URL analysis targeting enterprise spam filter gaps.",
            problem: "High-velocity phishing attacks bypassing traditional spam filters, leading to credential theft and malware delivery within organizations.",
            methodology: "Applied heuristic-based AI analysis with sandbox validation for real-time threat classification and alerting. Engineered URL reputation checks and header anomaly detection.",
            outcome: "Reduced phishing exposure by proactive URL blocking and sandbox validation, protecting enterprise communication channels.",
            tags: ["Python", "AI/ML Heuristics", "API Security", "Automation"],
            githubUrl: "https://github.com/ganeshkrishnareddy/mailsheild"
        },
        {
            title: "MealRoute – Secure Logistics Platform",
            description: "Production-style logistics system with secure authentication, RBAC, and real-time synchronization for food delivery operations.",
            problem: "Unauthorized access risks and data leakage across multi-tenant delivery operations.",
            methodology: "Implemented secure auth flows, role-based dashboards, and encrypted data channels.",
            outcome: "Prevented unauthorized access to operational data and streamlined delivery management.",
            tags: ["Full-Stack", "Backend", "Secure Systems", "Firebase"],
            githubUrl: "https://github.com/ganeshkrishnareddy/mealroute"
        },
        {
            title: "Android Security – Insecure Storage & Network Analysis",
            description: "Conducted deep-dive security research into Android application vulnerabilities, focusing on insecure data persistence and network communication flaws.",
            problem: "Sensitive JWT tokens were stored in plain-text shared preferences, and lack of SSL pinning allowed for easy MITM interception of encrypted traffic.",
            methodology: "Performed static analysis with JADX/MobSF. Utilized Frida for dynamic runtime hooking to bypass SSL pinning and inspect binary data structures.",
            outcome: "Secured local storage using the Android Keystore system and implemented robust certificate pinning, eliminating local data theft vectors.",
            tags: ["AppSec", "Android", "APIs", "Security Research"],
            githubUrl: "https://github.com/ganeshkrishnareddy/AndroidSecurityProject"
        },
        {
            title: "Web App Assessment & Risk Validation",
            description: "Conducted structured security assessments to identify data exposure, authorization flaws, and access control weaknesses. Validated findings through controlled testing.",
            problem: "Exposed API endpoints allowed Insecure Object Reference (IDOR) and weak session management, risking unauthorized multi-tenant data access.",
            methodology: "Manual intercept testing with Burp Suite for broken access control and session hijacks. Automated baseline scans with OWASP ZAP.",
            outcome: "Eliminated IDOR risks and stored XSS flaws by enforcing strict RBAC and server-side input validation across the API layer.",
            tags: ["Backend", "AppSec", "APIs", "OWASP ASVS"],
            githubUrl: "https://github.com/ganeshkrishnareddy"
        },
        {
            title: "FlowMatch",
            description: "AI-powered platform to build and orchestrate autonomous AI agent workflows.",
            problem: "Building multi-agent systems and managing their workflows is complex and lacks visual orchestration.",
            methodology: "Developed a highly interactive UI with visual node-based workflow builder, real-time logging, and agent memory management.",
            outcome: "Enabled users to seamlessly create, deploy, and monitor AI agent workflows with full observability.",
            tags: ["AI Agents", "Workflow Orchestration", "Next.js", "Full-Stack"],
            githubUrl: "https://github.com/ganeshkrishnareddy/FlowMatch"
        },
        {
            title: "PixoPDF (ZeroPDF Online Suite)",
            description: "A fast, client-side PDF processing suite for editing, merging, and converting PDF documents.",
            problem: "Many online PDF tools compromise privacy by uploading sensitive documents to external servers for processing.",
            methodology: "Built a privacy-first web application utilizing WebAssembly and client-side JavaScript to perform all PDF operations locally in the browser.",
            outcome: "Delivered a secure, offline-capable PDF suite that ensures zero data leaves the user's device.",
            tags: ["WebAssembly", "Privacy-First", "Client-Side Processing", "Next.js"],
            githubUrl: "https://github.com/ganeshkrishnareddy/ZeroPDF"
        },
        {
            title: "InstaDemoX",
            description: "Interactive product demo creation platform for SaaS companies.",
            problem: "Creating engaging, interactive product demonstrations often requires significant engineering resources or complex video editing.",
            methodology: "Engineered a platform that captures DOM states to generate highly interactive, clickable product walkthroughs without writing code.",
            outcome: "Allowed marketing and sales teams to create self-serve, interactive product demos in minutes, boosting engagement.",
            tags: ["SaaS", "DOM Capture", "Interactive UI", "React"],
            githubUrl: "https://github.com/ganeshkrishnareddy/InstaDemoX"
        },
        {
            title: "LaunchWise",
            description: "All-in-one product launch and marketing automation platform for creators.",
            problem: "Founders struggle to coordinate multiple marketing channels, waitlists, and analytics during product launches.",
            methodology: "Integrated waitlist management, email automation, and conversion tracking into a single dashboard using modern web technologies.",
            outcome: "Streamlined the launch process, improving lead capture rates and providing actionable insights for successful product releases.",
            tags: ["Marketing Automation", "SaaS", "Analytics", "Full-Stack"],
            githubUrl: "https://github.com/ganeshkrishnareddy/LaunchWise"
        }
    ];

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Secure Engineering Projects</h1>
                <p className="text-xl text-text-muted">
                    A collection of full-stack applications and security work.
                    Focusing on the <b>engineering</b> and <b>defense</b> aspects of each project.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard3D key={project.title} delay={index * 0.1}>
                        <ProjectCard {...project} />
                    </ProjectCard3D>
                ))}
            </div>
        </div>
    );
}
