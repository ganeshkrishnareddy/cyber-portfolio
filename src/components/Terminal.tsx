'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TerminalProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export function Terminal({ children, title = 'bash', className }: TerminalProps) {
    return (
        <div
            className={twMerge(
                'w-full rounded-lg border border-surface bg-background overflow-hidden relative group',
                className
            )}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-surface-hover">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-text-muted opacity-70">
                    {title}
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm sm:text-base text-text-primary overflow-x-auto">
                <div className="flex flex-col space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function TerminalLine({ children, prefix = '$' }: { children: React.ReactNode; prefix?: string }) {
    return (
        <div className="flex gap-2">
            <span className="text-primary select-none">{prefix}</span>
            <span>{children}</span>
        </div>
    )
}
