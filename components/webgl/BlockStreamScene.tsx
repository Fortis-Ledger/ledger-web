"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Edges, Text } from "@react-three/drei";
import * as THREE from "three";

function Block({ position, index }: { position: [number, number, number], index: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Float animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.2;
            // Gentle rotation
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
            meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + index) * 0.1;
        }
    });

    return (
        <group position={position}>
            <Box ref={meshRef} args={[1.5, 1.5, 1.5]}>
                <meshPhysicalMaterial
                    color="#001524"
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.9}
                    transmission={0.5}
                    thickness={2}
                />
                <Edges color="#00F0FF" threshold={15} />
            </Box>
            {/* Connecting Line to next block */}
            <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 2.5, 8]} />
                <meshBasicMaterial color="#00F0FF" transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

function Stream() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Move the whole stream left
            groupRef.current.position.x = (state.clock.elapsedTime * 2) % 4;
        }
    });

    // Create a row of blocks
    const blocks = Array.from({ length: 10 }, (_, i) => ({
        position: [i * -4, 0, 0] as [number, number, number],
        id: i
    }));

    return (
        <group ref={groupRef} position={[8, 0, 0]}>
            {blocks.map((block) => (
                <Block key={block.id} position={block.position} index={block.id} />
            ))}
        </group>
    );
}

export default function BlockStreamScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000FF" />
                <Stream />
                <fog attach="fog" args={['#020412', 5, 20]} />
            </Canvas>
        </div>
    );
}
