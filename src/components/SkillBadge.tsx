import { clsx } from 'clsx';

interface SkillBadgeProps {
    name: string;
    level?: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';
    className?: string;
}

const levelColors = {
    Basic: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    Advanced: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    Expert: 'bg-red-500/10 text-red-400 border-red-500/20',
};

export function SkillBadge({ name, level, className }: SkillBadgeProps) {
    return (
        <div
            className={clsx(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors',
                level ? levelColors[level] : 'bg-surface text-text-primary border-surface-hover',
                className
            )}
        >
            {name}
            {level && (
                <span className="ml-1.5 opacity-60 text-[10px] uppercase tracking-wider">
                    {level}
                </span>
            )}
        </div>
    );
}
