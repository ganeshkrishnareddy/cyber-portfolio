'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProjectCard3DProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function ProjectCard3D({ children, className = '', delay = 0 }: ProjectCard3DProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            className={`rounded-xl bg-surface/50 border border-surface hover:border-primary/50 transition-colors ${className}`}
        >
            {children}
        </motion.div>
    );
}
