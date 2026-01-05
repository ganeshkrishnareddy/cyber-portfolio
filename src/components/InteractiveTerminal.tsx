'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface CommandResponse {
    type: 'input' | 'output' | 'error';
    content: string | React.ReactNode;
}

export function InteractiveTerminal() {
    const [history, setHistory] = useState<CommandResponse[]>([
        { type: 'output', content: 'Welcome to the Secure System Interface v2.0.4' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    // Auto-run commands on mount for recruiter trust
    useEffect(() => {
        const commands = ['whoami', 'focus', 'current_status', 'projects'];
        let timeout: NodeJS.Timeout;

        const runNext = (index: number) => {
            if (index < commands.length) {
                timeout = setTimeout(() => {
                    handleCommand(commands[index]);
                    runNext(index + 1);
                }, 600 + (index * 400)); // Staggered delay for "natural" feel
            }
        };

        const initialDelay = setTimeout(() => runNext(0), 1000);
        return () => {
            clearTimeout(initialDelay);
            clearTimeout(timeout);
        };
    }, []);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let response: CommandResponse | CommandResponse[] = [];

        switch (trimmedCmd) {
            case 'help':
                response = {
                    type: 'output',
                    content: (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                            <span onClick={() => handleCommand('whoami')} className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">whoami</span>
                            <span>- Technical identity</span>
                            <span onClick={() => handleCommand('certs')} className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">certs</span>
                            <span>- Best certifications</span>
                            <span onClick={() => handleCommand('skills')} className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">skills</span>
                            <span>- Core expertise stack</span>
                            <span onClick={() => handleCommand('projects')} className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">projects</span>
                            <span>- Featured secure builds</span>
                            <span onClick={() => handleCommand('clear')} className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">clear</span>
                            <span>- Flush session</span>
                        </div>
                    ),
                };
                break;
            case 'whoami':
                response = {
                    type: 'output',
                    content: 'Secure Software Engineer (Cybersecurity & Full-Stack)',
                };
                break;
            case 'focus':
                response = {
                    type: 'output',
                    content: 'Application Security | Secure Backend | Full-Stack Engineering',
                };
                break;
            case 'current_status':
                response = {
                    type: 'output',
                    content: 'Open to full-time roles and high-impact internships',
                };
                break;
            case 'projects':
                response = {
                    type: 'output',
                    content: 'MealRoute | Web App Security Assessment | MailShield',
                };
                break;
            case 'skills':
                response = {
                    type: 'output',
                    content: 'React, Node.js, AppSec, Linux Hardening, APIs',
                };
                break;
            case 'contact':
                response = {
                    type: 'output',
                    content: 'Email: pganeshkrishnareddy@gmail.com | LinkedIn: /in/pganeshkrishnareddy',
                };
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                break;
            default:
                response = {
                    type: 'error',
                    content: `Command not found: ${trimmedCmd}. Type "help" for a list of commands.`,
                };
        }

        setHistory((prev) => [
            ...prev,
            { type: 'input', content: cmd },
            ...(Array.isArray(response) ? response : [response]),
        ]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div
            className="w-full max-w-3xl mx-auto rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/10 font-mono text-sm md:text-base cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Header */}
            <div className="flex items-center gap-4 px-4 py-2 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-text-muted text-xs uppercase tracking-widest opacity-70">
                    <TerminalIcon className="w-3 h-3" />
                    <span>Interactive Shell</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="p-4 h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
            >
                <div className="space-y-2">
                    {history.map((line, i) => (
                        <div key={i} className={twMerge(
                            'flex gap-2 leading-relaxed',
                            line.type === 'error' ? 'text-red-400' : 'text-text-primary'
                        )}>
                            {line.type === 'input' && (
                                <span className="text-secondary font-bold">➜</span>
                            )}
                            {line.type === 'input' && (
                                <span className="text-primary font-bold">~</span>
                            )}
                            <div className="flex-1">{line.content}</div>
                        </div>
                    ))}

                    {/* Input Line */}
                    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                        <span className="text-secondary font-bold">➜</span>
                        <span className="text-primary font-bold">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none flex-1 text-text-primary caret-primary"
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </form>
                </div>
            </div>

            {/* Footer Info */}
            <div className="px-4 py-1.5 bg-white/5 border-t border-white/10 flex justify-between items-center text-[10px] text-text-muted/50 font-mono">
                <span>Session: Active</span>
                <span>UTF-8</span>
            </div>
        </div>
    );
}
