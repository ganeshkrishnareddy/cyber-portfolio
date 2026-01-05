'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sphere, Torus, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CyberShieldCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere
                ref={meshRef}
                args={[1, 64, 64]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <MeshDistortMaterial
                    color={hovered ? "#22c55e" : "#3b82f6"}
                    emissive={hovered ? "#15803d" : "#1d4ed8"}
                    emissiveIntensity={0.6}
                    roughness={0.1}
                    metalness={0.9}
                    distort={0.3}
                    speed={2}
                />
            </Sphere>
        </Float>
    );
}

function DataRing({ radius, speed, rotationAxis, color }: { radius: number; speed: number; rotationAxis: 'x' | 'y' | 'z'; color: string }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime() * speed;
            if (rotationAxis === 'x') ref.current.rotation.x = t;
            if (rotationAxis === 'y') ref.current.rotation.y = t;
            if (rotationAxis === 'z') ref.current.rotation.z = t;
        }
    });

    return (
        <Torus ref={ref} args={[radius, 0.02, 16, 100]}>
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                transparent
                opacity={0.6}
            />
        </Torus>
    );
}

function SecurityParticles({ count = 100 }) {
    const points = useRef<THREE.Points>(null!);
    const [coords] = useState(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return arr;
    });

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Points ref={points} positions={coords}>
            <PointMaterial
                transparent
                color="#22c55e"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function CyberShield() {
    return (
        <group>
            <CyberShieldCore />
            <DataRing radius={1.5} speed={0.5} rotationAxis="y" color="#3b82f6" />
            <DataRing radius={1.8} speed={-0.3} rotationAxis="x" color="#22c55e" />
            <DataRing radius={2.1} speed={0.2} rotationAxis="z" color="#a855f7" />
            <SecurityParticles count={200} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" />
        </group>
    );
}

export function SecureSystemHero() {
    const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            setWebglSupported(!!gl);
        } catch (e) {
            setWebglSupported(false);
        }
    }, []);

    if (webglSupported === null) {
        return (
            <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="animate-pulse text-primary font-mono">Initializing Neural Links...</div>
            </div>
        );
    }

    return (
        <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center relative">
            {webglSupported ? (
                <Canvas
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
                    <CyberShield />
                    <Environment preset="city" />
                </Canvas>
            ) : (
                <div className="text-center p-8 rounded-2xl bg-surface/50 border border-primary/20 backdrop-blur-md">
                    <div className="text-primary text-4xl mb-4">🛡️</div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Secure System Architecture Visualization</h3>
                    <p className="text-text-muted max-w-sm mx-auto">
                        Representing layered frontend, backend, and security controls. 3D visualization requires WebGL support.
                    </p>
                </div>
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted opacity-40">
                    Secure System Architecture Visualization<br />
                    Frontend • Backend • Security Controls
                </p>
            </div>
        </div>
    );
}
