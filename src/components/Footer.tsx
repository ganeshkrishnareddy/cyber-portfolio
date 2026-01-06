import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-surface mt-10">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Availability Signal Banner */}
                <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold text-text-primary tracking-wide">
                            Currently open to full-time roles & high-impact internships
                        </span>
                    </div>
                    <Link
                        href="/contact"
                        className="h-8 px-3 text-xs inline-flex items-center justify-center rounded-md font-medium transition-colors border border-primary text-primary hover:bg-primary/10"
                    >
                        Get in Touch
                    </Link>
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
