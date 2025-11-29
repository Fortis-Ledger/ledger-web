"use client";

import React from "react";
import { StatCounter } from "@/components/ui/stat-counter";
import { STATS } from "@/lib/brand";

export function Stats() {
    const statsList = [
        {
            value: STATS.network.tps,
            label: "Target TPS",
            color: "cyan" as const,
            description: "Projected throughput",
        },
        {
            value: STATS.network.finality,
            label: "Transaction Finality",
            color: "violet" as const,
            description: "Confirmed and irreversible",
        },
        {
            value: STATS.network.validators,
            label: "Validator Slots",
            color: "purple" as const,
            description: "Open for application",
        },
        {
            value: STATS.network.uptime,
            label: "Target Uptime",
            color: "green" as const,
            description: "High-availability design",
        },
    ];

    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-fortis-cyan/5 via-transparent to-fortis-violet/5" />
            <div className="absolute inset-0 cyber-grid-bg opacity-20" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Network <span className="gradient-text">Performance</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300">
                        Projected performance metrics for Mainnet Launch
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsList.map((stat, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl bg-fortis-gray-800/30 backdrop-blur-md border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all duration-300"
                        >
                            <StatCounter
                                value={stat.value}
                                label={stat.label}
                                description={stat.description}
                                color={stat.color}
                                animated={true}
                            />
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-12 text-center">
                    <p className="text-fortis-gray-400 text-sm">
                        Metrics based on internal testnet benchmarks. View live testnet data on the{" "}
                        <a href="/ecosystem/explorer" className="text-fortis-cyan hover:text-fortis-cyan-light transition-colors underline">
                            Block Explorer
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
