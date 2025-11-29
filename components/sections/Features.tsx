"use client";

import React from "react";
import { Shield, Zap, Lock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Shield,
        title: "Post-Quantum Cryptography",
        description: "Built with CRYSTALS-Dilithium and Kyber algorithms, resistant to attacks from classical and quantum computers for the next 50 years.",
        color: "cyan" as const,
    },
    {
        icon: Zap,
        title: "Instant Finality",
        description: "Sub-second transaction finality with our quantum-safe consensus mechanism, enabling real-time applications at global scale.",
        color: "violet" as const,
    },
    {
        icon: Lock,
        title: "Zero-Knowledge Privacy",
        description: "Optional privacy layer using zk-SNARKs for confidential transactions while maintaining full auditability and compliance.",
        color: "purple" as const,
    },
    {
        icon: Globe,
        title: "Infinite Scalability",
        description: "Horizontal scaling architecture supporting 100,000+ TPS today with the capacity to grow infinitely as demand increases.",
        color: "green" as const,
    },
];

const colorClasses = {
    cyan: {
        icon: "text-fortis-cyan",
        bg: "bg-fortis-cyan/10",
        border: "group-hover:border-fortis-cyan/50",
        glow: "group-hover:shadow-neon-cyan",
    },
    violet: {
        icon: "text-fortis-violet",
        bg: "bg-fortis-violet/10",
        border: "group-hover:border-fortis-violet/50",
        glow: "group-hover:shadow-neon-violet",
    },
    purple: {
        icon: "text-fortis-purple",
        bg: "bg-fortis-purple/10",
        border: "group-hover:border-fortis-purple/50",
        glow: "group-hover:shadow-neon-purple",
    },
    green: {
        icon: "text-fortis-green",
        bg: "bg-fortis-green/10",
        border: "group-hover:border-fortis-green/50",
        glow: "group-hover:shadow-neon-cyan",
    },
};

export function Features() {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Built for the <span className="gradient-text">Quantum Age</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 max-w-3xl mx-auto">
                        The first blockchain infrastructure designed from the ground up to withstand quantum computing threats
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const colors = colorClasses[feature.color];

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group relative p-8 rounded-2xl",
                                    "bg-gradient-to-br from-fortis-gray-800/50 to-fortis-gray-900/50",
                                    "backdrop-blur-md border border-fortis-gray-700",
                                    "transition-all duration-500",
                                    "hover:-translate-y-1",
                                    colors.border,
                                    colors.glow
                                )}
                            >
                                {/* Icon */}
                                <div className={cn(
                                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                                    colors.bg,
                                    "group-hover:scale-110 transition-transform duration-300"
                                )}>
                                    <Icon className={cn("w-7 h-7", colors.icon)} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-fortis-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Corner glow */}
                                <div
                                    className={cn(
                                        "absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl",
                                        colors.bg
                                    )}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
