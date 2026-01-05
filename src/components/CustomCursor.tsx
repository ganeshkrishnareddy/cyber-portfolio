'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const show = () => setVisible(true);
        const hide = () => setVisible(false);
        const enter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, .cursor-pointer')) {
                setHovered(true);
            }
        };
        const leave = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, .cursor-pointer')) {
                setHovered(false);
            }
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseenter', show);
        window.addEventListener('mouseleave', hide);
        window.addEventListener('mouseover', enter);
        window.addEventListener('mouseout', leave);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseenter', show);
            window.removeEventListener('mouseleave', hide);
            window.removeEventListener('mouseover', enter);
            window.removeEventListener('mouseout', leave);
        };
    }, []);

    if (!visible) return null;

    const cursorClass = twMerge(
        'pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/70 transition-transform duration-150 ease-out z-50',
        hovered ? 'scale-150' : 'scale-100'
    );

    return (
        <div
            className={cursorClass}
            style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
        />
    );
}
