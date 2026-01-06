'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Link from 'next/link';

export function ContactContent() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Let&apos;s Build & Secure Something.</h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            Open to opportunities in Secure Software Engineering, Backend Development, and Application Security.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-surface/30 border border-surface hover:border-primary/50 transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted">Email</div>
                                <a href="mailto:pganeshkrishnareddy@gmail.com" className="text-lg font-bold text-text-primary hover:text-primary transition-colors">pganeshkrishnareddy@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link href="https://linkedin.com/in/pganeshkrishnareddy" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-surface/30 border border-surface hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all group">
                                <Linkedin className="w-5 h-5 text-text-muted group-hover:text-[#0077b5] transition-colors" />
                                <span className="font-bold text-text-primary group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com/ganeshkrishnareddy" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-surface/30 border border-surface hover:border-[#333]/50 hover:bg-[#333]/10 transition-all group">
                                <Github className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                                <span className="font-bold text-text-primary group-hover:text-white transition-colors">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-surface/30 p-8 rounded-2xl border border-surface relative overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-text-primary">Send a Message</h2>
                            <p className="text-sm text-text-muted mt-1">Typically responds within 24–48 hours</p>
                        </div>
                        <Link
                            href="https://linkedin.com/in/pganeshkrishnareddy"
                            target="_blank"
                            className="p-3 bg-surface rounded-full border border-surface-hover hover:border-[#0077b5]/50 text-text-muted hover:text-[#0077b5] transition-all"
                            title="Connect on LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>

                    <form
                        className="space-y-6"
                        action="https://formspree.io/f/xojvdgbl"
                        method="POST"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-background rounded-lg border border-surface-hover focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted/50 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-background rounded-lg border border-surface-hover focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted/50 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Hello, I'd like to discuss a secure engineering role..."
                                className="w-full px-4 py-3 bg-background rounded-lg border border-surface-hover focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted/50 outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="space-y-4">
                            <Button type="submit" size="lg" className="w-full gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </Button>

                            <p className="text-center text-xs text-text-muted">
                                Prefer direct email? <a href="mailto:pganeshkrishnareddy@gmail.com" className="text-primary hover:underline">pganeshkrishnareddy@gmail.com</a>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
