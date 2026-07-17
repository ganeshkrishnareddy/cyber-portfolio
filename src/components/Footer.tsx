import Link from 'next/link';
import { Github, Linkedin, Mail, CheckCircle2, Shield } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-surface mt-20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <div className="font-mono text-lg font-bold text-text-primary flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Ganesh Krishna Reddy
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                            Building software that survives production. Specializing in full-stack engineering, application security, and zero-trust infrastructure.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="https://github.com/ganeshkrishnareddy" target="_blank" className="text-text-muted hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="https://linkedin.com/in/pganeshkrishnareddy" target="_blank" className="text-text-muted hover:text-[#0077b5] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://x.com/_this_is_ganesh" target="_blank" className="text-text-muted hover:text-white transition-colors">
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Engineering</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects & Systems</Link></li>
                            <li><Link href="/notes" className="hover:text-primary transition-colors">System Design Notes</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Engineering Blog</Link></li>
                            <li><Link href="/build-log" className="hover:text-primary transition-colors">Build Log</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Security</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="/security-research" className="hover:text-primary transition-colors">Vulnerability Research</Link></li>
                            <li><Link href="https://hackerone.com/pganeshkrishnareddy" target="_blank" className="hover:text-[#ff6600] transition-colors">HackerOne</Link></li>
                            <li><Link href="https://yeswehack.com/hunters/pganeshkrishnareddy" target="_blank" className="hover:text-[#e91e63] transition-colors">YesWeHack</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">Philosophy</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Connect</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Me</Link></li>
                            <li><a href="mailto:pganeshkrishnareddy@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
                            <li><a href="/P_Ganesh_Krishna_Reddy_Resume.pdf" download className="hover:text-primary transition-colors">Download Resume</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-surface flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="font-mono font-bold text-text-primary">
                            <span className="text-secondary">~/</span>ganesh
                        </span>
                        <span className="border-l border-surface-hover pl-2 ml-2">
                            © {new Date().getFullYear()}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        All Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
