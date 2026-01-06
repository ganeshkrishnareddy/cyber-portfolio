'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Award, Zap, Code } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Engineering Journey', path: '/journey' },
    { name: 'Contact', path: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[56px]">
                    {/* Logo with Hover Card */}
                    <div className="relative group/logo">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-1.5 bg-surface rounded-md border border-surface-hover group-hover:border-primary/50 transition-colors">
                                <Terminal className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-mono text-sm font-bold text-text-primary tracking-tight">
                                <span className="text-secondary">~/</span>ganesh
                            </span>
                        </Link>

                        {/* Interactive Identity Card */}
                        <div className="absolute top-full left-0 pt-4 hidden group-hover/logo:block animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                            <div className="w-64 p-4 rounded-xl bg-surface/90 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-primary/10">
                                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                                    <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Technical Status</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Live</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-primary/10 rounded-lg">
                                            <Award className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-text-muted leading-none mb-0.5">Certifications</div>
                                            <div className="text-xs font-bold text-text-primary uppercase tracking-tighter">5x Industry Standard</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-secondary/10 rounded-lg">
                                            <Code className="w-3.5 h-3.5 text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-text-muted leading-none mb-0.5">Tech Focus</div>
                                            <div className="text-xs font-bold text-text-primary uppercase tracking-tighter">Full-Stack Security</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg">
                                            <Zap className="w-3.5 h-3.5 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-text-muted leading-none mb-0.5">Availability</div>
                                            <div className="text-xs font-bold text-text-primary uppercase tracking-tighter">Open for High-Impact</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className={twMerge(
                                            'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                                            'hover:text-primary hover:bg-surface-hover',
                                            isActive
                                                ? 'text-primary bg-surface border border-surface-hover'
                                                : 'text-text-muted'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-text-muted hover:text-primary hover:bg-surface focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-surface bg-background"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={twMerge(
                                            'block px-3 py-2 rounded-md text-base font-medium',
                                            isActive
                                                ? 'text-primary bg-surface'
                                                : 'text-text-muted hover:text-primary hover:bg-surface-hover'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
