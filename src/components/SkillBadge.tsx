import { clsx } from 'clsx';
import {
    Code,
    Terminal,
    Shield,
    Globe,
    Search,
    ExternalLink,
    Github,
    Cpu,
    Lock,
    Zap,
    Activity,
    Database,
    Binary,
    LucideIcon
} from 'lucide-react';

interface SkillBadgeProps {
    name: string;
    level?: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';
    className?: string;
    icon?: LucideIcon;
}

const levelColors = {
    Basic: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    Advanced: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    Expert: 'bg-red-500/10 text-red-400 border-red-500/20',
};

// Automatic icon mapping based on common security/dev keywords
const getIcon = (name: string): LucideIcon => {
    const n = name.toLowerCase();
    if (n.includes('python') || n.includes('scripting')) return Code;
    if (n.includes('linux') || n.includes('bash') || n.includes('terminal')) return Terminal;
    if (n.includes('security') || n.includes('defense') || n.includes('burp')) return Shield;
    if (n.includes('web') || n.includes('network')) return Globe;
    if (n.includes('scan') || n.includes('nmap') || n.includes('zap')) return Search;
    if (n.includes('git')) return Github;
    if (n.includes('hardware') || n.includes('android')) return Cpu;
    if (n.includes('encryption') || n.includes('lock') || n.includes('auth')) return Lock;
    if (n.includes('exploit') || n.includes('metasploit')) return Zap;
    if (n.includes('analysis') || n.includes('monitoring') || n.includes('wireshark')) return Activity;
    if (n.includes('data') || n.includes('sql')) return Database;
    if (n.includes('malware') || n.includes('binary')) return Binary;
    return Code;
};

export function SkillBadge({ name, level, className, icon: ManualIcon }: SkillBadgeProps) {
    const Icon = ManualIcon || getIcon(name);

    return (
        <div
            className={clsx(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 group',
                level ? levelColors[level] : 'bg-surface text-text-primary border-surface-hover hover:border-primary/40',
                className
            )}
        >
            <Icon className="w-3.5 h-3.5 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>{name}</span>
            {level && (
                <span className="ml-2 pl-2 border-l border-current/20 opacity-60 text-[10px] uppercase tracking-wider">
                    {level}
                </span>
            )}
        </div>
    );
}
