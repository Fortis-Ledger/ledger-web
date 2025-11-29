"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ThreeElements } from "@react-three/fiber";

function QuantumLattice(props: ThreeElements['points']) {
    const ref = useRef<THREE.Points>(null);

    // Generate random points for the lattice
    const sphere = useMemo(() => {
        const points = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.5 + Math.random() * 0.5; // Radius variation

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
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref as any} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00F0FF"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function EnergyCore() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
            (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.sin(t * 3) * 0.2;
        }
    })

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshBasicMaterial color="#7000FF" transparent opacity={0.5} wireframe />
        </mesh>
    )
}

function Scene() {
    return (
        <>
            <QuantumLattice />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <EnergyCore />
            </Float>
            <ambientLight intensity={0.5} />
        </>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <Scene />
            </Canvas>
        </div>
    );
}
