import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-surface mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-text-muted/50 font-mono">
                            <span>Built with Next.js</span>
                            <span className="w-1 h-1 rounded-full bg-surface-hover" />
                            <span>Security-focused design</span>
                            <span className="w-1 h-1 rounded-full bg-surface-hover" />
                            <span>No trackers</span>
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
