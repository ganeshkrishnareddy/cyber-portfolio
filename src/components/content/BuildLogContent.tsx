'use client';

import { motion } from 'framer-motion';
import { Terminal, Shield, GitCommit, Settings, Database, Activity } from 'lucide-react';

export function BuildLogContent() {
    const logs = [
        {
            date: "Jul 2026",
            title: "Architectural Shift: Zero-Trust Telemetry in SentinelMind",
            tag: "Architecture",
            icon: <Terminal className="w-4 h-4 text-primary" />,
            content: "Initially, SentinelMind's threat dashboard polled the database every 2 seconds. This introduced unacceptable latency (2000ms+). Rewrote the event pipeline to push telemetry over authenticated WebSockets. Cut P99 latency to 12ms and enabled instantaneous threat blocking."
        },
        {
            date: "May 2026",
            title: "Remediated Critical SSRF in CtrlB Engine",
            tag: "Security",
            icon: <Shield className="w-4 h-4 text-red-400" />,
            content: "During a deep dive into the CtrlB observability control plane, I discovered an unauthenticated agent registration endpoint that could be leveraged to hit internal AWS metadata endpoints (169.254.169.254). Wrote a custom filter to strictly validate and block internal IP ranges."
        },
        {
            date: "Apr 2026",
            title: "Scaling FlowMatch State Store",
            tag: "Infrastructure",
            icon: <Database className="w-4 h-4 text-blue-400" />,
            content: "FlowMatch agent state was originally stored in PostgreSQL. Under load, DB locks caused deadlocks on concurrent agent executions. Migrated ephemeral agent state to Redis, using Pub/Sub for UI updates, resolving the deadlock and allowing 500+ concurrent workflows."
        },
        {
            date: "Mar 2026",
            title: "Automated e-KYC Compliance for Sarathi AI",
            tag: "Feature",
            icon: <Activity className="w-4 h-4 text-green-400" />,
            content: "Integrated an asynchronous compliance agent that actively listens to the user-agent conversation. If the user mentions restricted terms, the compliance agent instantly flags the session and routes to a human operator. Decreased compliance violations by 100% in simulation."
        },
        {
            date: "Jan 2026",
            title: "Mitigated XML-RPC Amplification Vectors",
            tag: "Security",
            icon: <Shield className="w-4 h-4 text-red-400" />,
            content: "Discovered an exposed XML-RPC multicall endpoint on a corporate WordPress cluster that bypassed standard rate limiting, allowing 1000s of auth attempts per request. Enforced a WAF rule to block system.multicall payloads entirely."
        }
    ];

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Build Log</h1>
                <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                    A raw timeline of production problem-solving, architectural pivots, and security patches. 
                    This is where the actual engineering happens.
                </p>
            </motion.div>

            <div className="relative border-l border-surface ml-4 md:ml-6 space-y-12">
                {logs.map((log, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Node */}
                        <div className="absolute -left-[21px] top-1 p-2 rounded-full bg-background border border-surface text-text-muted">
                            {log.icon}
                        </div>

                        <div className="space-y-3 p-6 rounded-xl bg-surface/30 border border-surface hover:border-primary/50 transition-colors">
                            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-text-muted uppercase tracking-widest">
                                <span>{log.date}</span>
                                <span className="w-1 h-1 rounded-full bg-surface-hover" />
                                <span className="text-primary font-bold">{log.tag}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-text-primary">{log.title}</h3>
                            <p className="text-text-muted leading-relaxed">{log.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
