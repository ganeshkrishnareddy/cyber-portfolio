'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Shield, Terminal as TerminalIcon, ShieldCheck, Lock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Terminal, TerminalLine } from '@/components/Terminal';
import { SkillBadge } from '@/components/SkillBadge';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Security Engineer & Threat Hunter</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-text-primary">
                Defending Systems by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Thinking Like an Attacker.
                </span>
              </h1>

              <p className="text-xl text-text-muted max-w-lg leading-relaxed">
                I identify authorization flaws, validate security controls, and harden systems against real-world attacks.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    View Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="gap-2">
                    About My Journey
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="https://drive.google.com/file/d/1WvuVPSjeQaGeq_6C0fKmxxTDzRJbQD39/view?usp=sharing" target="_blank">
                  <Button variant="secondary" size="lg" className="gap-2">
                    Resume
                    <FileDown className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <Terminal title="whoami">
                <TerminalLine prefix="$">whoami</TerminalLine>
                <div className="text-primary pb-2">ganesh_krishna_reddy</div>

                <TerminalLine prefix="$">cat role.json</TerminalLine>
                <div className="text-yellow-400">
                  {`{
  "role": "Security Engineer",
  "name": "P Ganesh Krishna Reddy",
  "focus": ["AppSec", "Network Defense", "Risk Assessment"],
  "certifications": ["Security+", "CySA+", "PenTest+", "Network+"],
  "status": "Ready to Defend"
}`}
                </div>

                <TerminalLine prefix="$">./run-security-audit.sh</TerminalLine>
                <div className="text-text-muted">Initiating vulnerability scan...</div>
                <div className="text-text-muted">Checking network perimeter... <span className="text-green-500">SECURE</span></div>
                <div className="text-text-muted">Validating access controls... <span className="text-green-500">ENFORCED</span></div>
                <TerminalLine prefix="$"><span className="animate-pulse">_</span></TerminalLine>
              </Terminal>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief Skills / Stats */}
      <section className="border-y border-surface bg-surface/30">
        <div className="container max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Vulnerabilities Identified", value: "50+", context: "Labs & Academic Projects", icon: Shield },
              { label: "Projects Secured", value: "10+", context: "Web & Network Defense", icon: Lock },
              { label: "Lines of Code Audited", value: "10k+", context: "Python, JS, Backend APIs", icon: TerminalIcon },
              { label: "Certifications", value: "5", context: "CompTIA & Malware Analysis", icon: ShieldCheck }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center gap-1">
                <div className="p-3 bg-surface rounded-full border border-surface-hover mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary">{stat.value}</div>
                <div className="text-sm font-bold text-text-primary">{stat.label}</div>
                <div className="text-xs text-text-muted">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between border-b border-surface pb-4">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Featured Security Work</h2>
              <p className="text-text-muted mt-2">Selected case studies in defense and breakage.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Web App Security Assessment"
              description="Structured risk assessment focusing on authorization flaws and access control weaknesses according to OWASP ASVS."
              problem="Potential unauthorized access to sensitive user data due to weak session management."
              methodology="Manual testing with Burp Suite combined with automated scanning tailored to business logic."
              outcome="Identified and remediated 3 critical IDOR vulnerabilities and enforced role-based access control."
              tags={["Burp Suite", "OWASP ASVS", "Python", "AppSec"]}
            />
            <ProjectCard
              title="MailShield – AI Phishing Defense"
              description="Automated phishing detection system utilizing heuristic analysis and real-time URL sandboxing."
              problem="High-velocity phishing attacks bypassing traditional filters, risking credential theft."
              methodology="AI-driven URL classification and sandboxing for threat validation."
              outcome="Reduced phishing exposure by 85% and automated end-user remediation."
              tags={["AI/ML", "Phishing Defense", "Python", "Automation"]}
              githubUrl="https://github.com/ganeshkrishnareddy/mailsheild"
            />
          </div>

          <Link href="/projects" className="sm:hidden flex items-center justify-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
