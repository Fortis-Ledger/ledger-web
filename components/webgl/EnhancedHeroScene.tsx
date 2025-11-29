"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

// Enhanced quantum lattice with more particles and complexity
function EnhancedQuantumLattice() {
    const ref = useRef<THREE.Points>(null);
    const lineRefs = useRef<THREE.Line[]>([]);

    // Generate sphere of particles
    const particles = useMemo(() => {
        const points = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.5 + Math.random() * 0.8;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
        }
        return points;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 12;
            ref.current.rotation.y -= delta / 18;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref as any} positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00F0FF"
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

// Pulsing energy core with improved effect
function EnergyCore() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.15);
            (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(t * 3) * 0.25;
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.008;
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[0.8, 1]} />
                <meshBasicMaterial
                    color="#7000FF"
                    transparent
                    opacity={0.5}
                    wireframe
                />
            </mesh>
            <mesh>
                <icosahedronGeometry args={[0.85, 1]} />
                <meshBasicMaterial
                    color="#00F0FF"
                    transparent
                    opacity={0.2}
                    wireframe
                />
            </mesh>
        </group>
    );
}

// Orbital rings
function OrbitalRings() {
    const ring1Ref = useRef<THREE.Mesh>(null!);
    const ring2Ref = useRef<THREE.Mesh>(null!);
    const ring3Ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ring1Ref.current) {
            ring1Ref.current.rotation.z = t * 0.5;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.x = t * 0.3;
        }
        if (ring3Ref.current) {
            ring3Ref.current.rotation.y = t * 0.4;
        }
    });

    return (
        <group>
            <mesh ref={ring1Ref}>
                <torusGeometry args={[1.2, 0.01, 16, 100]} />
                <meshBasicMaterial color="#00F0FF" transparent opacity={0.6} />
            </mesh>
            <mesh ref={ring2Ref}>
                <torusGeometry args={[1.4, 0.008, 16, 100]} />
                <meshBasicMaterial color="#7000FF" transparent opacity={0.4} />
            </mesh>
            <mesh ref={ring3Ref}>
                <torusGeometry args={[1.6, 0.006, 16, 100]} />
                <meshBasicMaterial color="#B537F2" transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

function Scene() {
    return (
        <>
            <EnhancedQuantumLattice />
            <EnergyCore />
            <OrbitalRings />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#00F0FF" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000FF" />
        </>
    );
}

export default function EnhancedHeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <Scene />
            </Canvas>
        </div>
    );
}
