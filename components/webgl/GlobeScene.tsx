"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
    const pointsRef = useRef<THREE.Points>(null);
    const globeRef = useRef<THREE.Group>(null);

    // Generate points on sphere surface
    const particles = useMemo(() => {
        const points = new Float32Array(3000 * 3);
        const radius = 2;
        for (let i = 0; i < 3000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
        }
        return points;
    }, []);

    // Generate connecting arcs (simplified as lines for now)
    const arcs = useMemo(() => {
        const lines = [];
        const radius = 2;
        for (let i = 0; i < 50; i++) {
            // Random start and end points
            const theta1 = 2 * Math.PI * Math.random();
            const phi1 = Math.acos(2 * Math.random() - 1);
            const theta2 = 2 * Math.PI * Math.random();
            const phi2 = Math.acos(2 * Math.random() - 1);

            const p1 = new THREE.Vector3(
                radius * Math.sin(phi1) * Math.cos(theta1),
                radius * Math.sin(phi1) * Math.sin(theta1),
                radius * Math.cos(phi1)
            );

            const p2 = new THREE.Vector3(
                radius * Math.sin(phi2) * Math.cos(theta2),
                radius * Math.sin(phi2) * Math.sin(theta2),
                radius * Math.cos(phi2)
            );

            // Bezier curve points (control point pushed out)
            const mid = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.5);
            const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
            const points = curve.getPoints(20);
            lines.push(points);
        }
        return lines;
    }, []);

    useFrame((state, delta) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group ref={globeRef} rotation={[0.2, 0, 0]}>
            {/* Base Sphere (Ocean) */}
            <Sphere args={[1.95, 64, 64]}>
                <meshPhongMaterial
                    color="#050A30"
                    emissive="#000020"
                    specular="#111111"
                    shininess={10}
                    transparent
                    opacity={0.9}
                />
            </Sphere>

            {/* Atmosphere Glow */}
            <Sphere args={[2.2, 64, 64]}>
                <meshBasicMaterial
                    color="#0066FF"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Particles (Cities/Nodes) */}
            <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#4D9FFF"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* Connecting Arcs */}
            {arcs.map((points, i) => (
                <Line
                    key={i}
                    points={points}
                    color={i % 2 === 0 ? "#00F0FF" : "#7000FF"}
                    opacity={0.3}
                    transparent
                    lineWidth={1}
                />
            ))}
        </group>
    );
}

export default function GlobeScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#4D9FFF" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000FF" />

                {/* Position globe to the right */}
                <group position={[1.5, 0, 0]}>
                    <Globe />
                </group>
            </Canvas>
        </div>
    );
}
