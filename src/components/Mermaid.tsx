'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'monospace'
});

export default function Mermaid({ chart }: { chart: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Remove previous diagram
            containerRef.current.innerHTML = '';
            // Render new one
            mermaid.render('mermaid-chart-' + Math.random().toString(36).substr(2, 9), chart).then(({ svg }) => {
                if (containerRef.current) {
                    containerRef.current.innerHTML = svg;
                }
            });
        }
    }, [chart]);

    return <div ref={containerRef} className="mermaid-wrapper flex justify-center py-4" />;
}
