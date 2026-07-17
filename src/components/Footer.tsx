import Link from 'next/link';
import { Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-surface mt-10">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Status & Availability */}
                <div className="mb-10 grid md:grid-cols-2 gap-8 bg-surface/5 rounded-2xl p-8 border border-surface">
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted">Currently Building</h4>
                        <ul className="space-y-3 text-sm text-text-primary font-medium">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/70" /> FlowMatch</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/70" /> AI Security Automation</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/70" /> Secure SaaS Infrastructure</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted">Available For</h4>
                        <ul className="space-y-3 text-sm text-text-primary font-medium">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Full-time</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Founding Engineer</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Security Engineering</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> AI Engineering</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-text-primary">
                                <span className="text-secondary">~/</span>ganesh
                            </span>
                            <span className="text-text-muted text-sm border-l border-surface-hover pl-2 ml-2">
                                © {new Date().getFullYear()}
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 text-[10px] uppercase tracking-widest text-text-muted/50 font-mono">
                            <span>A single platform showcasing secure software engineering — where development and cybersecurity meet.</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="https://github.com/ganeshkrishnareddy" target="_blank" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/pganeshkrishnareddy" target="_blank" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="https://x.com/_this_is_ganesh" target="_blank" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </Link>
                        <Link href="mailto:pganeshkrishnareddy@gmail.com" className="text-text-muted hover:text-primary transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
