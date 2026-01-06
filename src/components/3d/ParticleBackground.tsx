'use client';

import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

export function ParticleBackground() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const particlesOptions = {
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            detectsOn: 'canvas' as const,
            events: { resize: true },
        },
        particles: {
            color: { value: ['#3b82f6', '#22c55e', '#a855f7'] },
            links: { enable: false },
            move: { direction: 'none' as const, enable: true, speed: 0.4, outModes: { default: 'out' as const } },
            number: { value: 30 },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            shape: { type: 'circle' },
        },
    };

    return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
}
