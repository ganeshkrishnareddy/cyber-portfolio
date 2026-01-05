'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { ParticleBackground } from '@/components/3d/ParticleBackground';
import { ArrowRight, FileDown, Shield, Terminal as TerminalIcon, ShieldCheck, Lock, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { TiltCard } from '@/components/3d/TiltCard';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';

const SecureSystemHero = null; // Removed 3D Hero usage as requested

export default function Home() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);
  const [showAuditResults, setShowAuditResults] = useState(false);

  const runAudit = () => {
    setIsAuditing(true);
    setAuditProgress(0);
    setShowAuditResults(false);
  };

  useEffect(() => {
    if (isAuditing) {
      const interval = setInterval(() => {
        setAuditProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsAuditing(false);
              setShowAuditResults(true);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAuditing]);

  return (
    <div className="flex flex-col gap-12 md:gap-20 pb-12 md:pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50" />
          <ParticleBackground />

          {/* Scanning Animation */}
          <AnimatePresence>
            {isAuditing && (
              <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="container max-w-7xl mx-auto px-4 z-10 relative">
          <div className="flex flex-col items-center text-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure Software Engineer | Cybersecurity & Full-Stack</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-text-primary">
                Building & Defending Systems <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  with Engineering Precision.
                </span>
              </h1>
              <p className="text-sm text-text-muted font-mono tracking-wide">
                Secure Software Engineer • Full-Stack Development • Application Security
              </p>

              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                Architecting resilient systems by combining deep full-stack engineering with a security-first defensive mindset.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    Explore Projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/journey">
                  <Button variant="outline" size="lg" className="gap-2">
                    Engineering Journey
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  onClick={runAudit}
                  variant="ghost"
                  size="lg"
                  className={clsx(
                    "gap-2 border border-white/5 bg-white/5 hover:bg-white/10 transition-all group",
                    isAuditing && "opacity-50 pointer-events-none"
                  )}
                >
                  <TerminalIcon className={clsx("w-4 h-4", isAuditing ? "animate-pulse" : "group-hover:text-primary transition-colors")} />
                  {isAuditing ? `Auditing System... ${auditProgress}%` : "Run Technical Audit"}
                </Button>
              </div>

              {/* Audit Results Overlay */}
              <AnimatePresence>
                {showAuditResults && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-md max-w-2xl mx-auto"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-text-primary tracking-tight">Technical Audit Complete</span>
                      </div>
                      <div className="flex gap-4">
                        {[
                          { label: 'Latency', value: '18ms', color: 'text-primary' },
                          { label: 'Security', value: 'Grade A', color: 'text-secondary' },
                          { label: 'Accessibility', value: '100', color: 'text-blue-400' }
                        ].map((stat, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</span>
                            <span className={clsx("text-sm font-mono font-bold", stat.color)}>{stat.value}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowAuditResults(false)}
                        className="text-[10px] uppercase font-bold text-text-muted hover:text-text-primary transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl min-h-[100px]"
            >
              {/* 3D Hero removed as requested */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section (Prominent & Centered) */}
      <section className="container max-w-7xl mx-auto px-4 -mt-20 mb-8 relative z-20">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-text-primary">Secure System Architecture Interface</h2>
            <p className="text-text-muted font-mono text-sm tracking-tighter uppercase opacity-60">Visualizing layered frontend, backend, and security controls.</p>
          </div>
          <InteractiveTerminal />
        </div>
      </section>

      {/* Top Expertise & Certifications */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Industry-Recognized Certifications */}
          <div className="p-8 rounded-2xl bg-surface/30 border border-surface backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Industry-Recognized Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "CompTIA CySA+", issuer: "Cybersecurity Analyst", color: "from-primary/20", icon: "🛡️" },
                { name: "CompTIA PenTest+", issuer: "Penetration Tester", color: "from-secondary/20", icon: "⚔️" }
              ].map((cert, i) => (
                <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} to-transparent border border-white/5 space-y-1 group hover:border-primary/50 transition-colors`}>
                  <div className="text-lg mb-1">{cert.icon}</div>
                  <div className="font-bold text-text-primary">{cert.name}</div>
                  <div className="text-xs text-text-muted">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Expertise Slots */}
          <div className="p-8 rounded-2xl bg-surface/30 border border-surface backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Core Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Application Security', 'Secure System Design', 'Full-Stack Engineering', 'Cloud Security', 'DevSecOps', 'Threat Modeling'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-text-muted hover:text-primary hover:border-primary/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brief Skills / Stats */}
      <section className="border-y border-surface bg-surface/30">
        <div className="container max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-text-primary">Engineering Impact</h2>
            <p className="text-text-muted">Quantifiable achievements from engineering security-first architectures and conducting in-depth vulnerability research.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: "Critical Vulnerabilities Remediated", value: "50+", context: "Identified and fixed across labs, academic projects, and production-style environments", icon: Shield },
              { label: "Secure Websites Deployed", value: "10+", context: "Architected and delivered via ProgVision for global clients", icon: Globe },
            ].map((stat, i) => (
              <TiltCard key={i} className="p-8 rounded-2xl bg-surface/50 border border-surface shadow-xl shadow-primary/5">
                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-extrabold text-text-primary tracking-tight">{stat.value}</div>
                  <div className="text-lg font-bold text-text-primary">{stat.label}</div>
                  <div className="text-sm text-text-muted leading-relaxed opacity-80">{stat.context}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between border-b border-surface pb-4">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Featured Secure Engineering Projects</h2>
              <p className="text-text-muted mt-2">Selected work combining engineering and security. Each project addresses specific security challenges while delivering robust functionality.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Web App Security Assessment"
              description="Structured risk assessment focusing on authorization flaws and access control weaknesses according to OWASP ASVS."
              whyItMatters="Simulates real enterprise AppSec reviews aligned with OWASP ASVS."
              problem="Potential unauthorized access to sensitive user data due to weak session management."
              methodology="Manual testing with Burp Suite combined with automated scanning tailored to business logic."
              outcome="Identified and remediated 3 critical IDOR vulnerabilities and enforced role-based access control."
              tags={["Backend", "AppSec", "APIs", "OWASP ASVS"]}
            />
            <ProjectCard
              title="MealRoute – Secure Logistics Platform"
              description="Production-style logistics system with secure authentication, RBAC, and real-time synchronization for food delivery operations."
              whyItMatters="Prevented unauthorized access and data leakage in a multi-tenant delivery system."
              problem="Unauthorized access risks and data leakage across multi-tenant delivery operations."
              methodology="Implemented secure auth flows, role-based dashboards, and encrypted data channels."
              outcome="Prevented unauthorized access to operational data and streamlined delivery management."
              tags={["Full-Stack", "Backend", "Security Systems", "Firebase"]}
              githubUrl="https://github.com/ganeshkrishnareddy/mealroute"
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
