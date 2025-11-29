"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useState } from "react";
import { Search, TrendingUp, Users, Box } from "lucide-react";

const mockBlocks = [
    { height: 1234567, hash: "0x7f8a9b2c...", txCount: 234, validator: "Validator Alpha", time: "2s ago" },
    { height: 1234566, hash: "0x3e6d5f1a...", txCount: 189, validator: "Validator Beta", time: "4s ago" },
    { height: 1234565, hash: "0x9c4b8e2d...", txCount: 312, validator: "Validator Gamma", time: "6s ago" },
    { height: 1234564, hash: "0x1a7f3c5b...", txCount: 156, validator: "Validator Delta", time: "8s ago" },
    { height: 1234563, hash: "0x6e2d9a4f...", txCount: 278, validator: "Validator Epsilon", time: "10s ago" },
];

const mockTransactions = [
    { hash: "0xa1b2c3d4...", from: "fortis1qx7k...", to: "fortis1yz8m...", amount: "1,250.50 FORT", status: "Success" },
    { hash: "0xe5f6g7h8...", from: "fortis1ab3n...", to: "fortis1cd4p...", amount: "89.25 FORT", status: "Success" },
    { hash: "0xi9j0k1l2...", from: "fortis1ef5q...", to: "fortis1gh6r...", amount: "5,430.00 FORT", status: "Success" },
    { hash: "0xm3n4o5p6...", from: "fortis1ij7s...", to: "fortis1kl8t...", amount: "234.75 FORT", status: "Success" },
];

export default function ExplorerPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Fortis Explorer"
                subtitle="Real-time blockchain explorer with transaction tracking and network analytics (Demo Data - Mainnet Q2 2024)"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Explorer" }
                ]}
            />

            {/* Search Bar */}
            <section className="py-12 px-4 bg-fortis-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fortis-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by Block Height / Transaction Hash / Address"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-fortis-gray-800 border border-fortis-gray-700 text-white focus:outline-none focus:border-fortis-cyan transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <TrendingUp className="w-8 h-8 text-fortis-cyan mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">1,234,567</div>
                            <div className="text-sm text-fortis-gray-300">Block Height</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <Box className="w-8 h-8 text-fortis-violet mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">87,432</div>
                            <div className="text-sm text-fortis-gray-300">Transactions (24h)</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <Users className="w-8 h-8 text-fortis-purple mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">10,247</div>
                            <div className="text-sm text-fortis-gray-300">Active Validators</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-fortis-green/10 to-transparent border border-fortis-green/20">
                            <TrendingUp className="w-8 h-8 text-fortis-green mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">0.8s</div>
                            <div className="text-sm text-fortis-gray-300">Avg Block Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blocks & Transactions */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Latest Blocks */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Latest Blocks (Demo Data)</h2>
                            <div className="space-y-3">
                                {mockBlocks.map((block, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-fortis-cyan/20 flex items-center justify-center">
                                                    <Box className="w-5 h-5 text-fortis-cyan" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-semibold">
                                                        Block #{block.height.toLocaleString()}
                                                    </div>
                                                    <div className="text-sm text-fortis-gray-400">
                                                        {block.time}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-fortis-cyan">
                                                    {block.txCount} txns
                                                </div>
                                                <div className="text-xs text-fortis-gray-400">
                                                    {block.hash}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-fortis-gray-400">
                                            Validator: <span className="text-fortis-gray-300">{block.validator}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Latest Transactions */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Latest Transactions (Demo Data)</h2>
                            <div className="space-y-3">
                                {mockTransactions.map((tx, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-violet/30 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm text-fortis-gray-400">
                                                {tx.hash}
                                            </div>
                                            <div className="px-2 py-1 rounded bg-fortis-green/20 text-fortis-green text-xs font-medium">
                                                {tx.status}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm mb-1">
                                            <span className="text-fortis-gray-400">From:</span>
                                            <span className="text-fortis-gray-300 font-mono">{tx.from}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm mb-2">
                                            <span className="text-fortis-gray-400">To:</span>
                                            <span className="text-fortis-gray-300 font-mono">{tx.to}</span>
                                        </div>
                                        <div className="text-white font-semibold">
                                            {tx.amount}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* View All Links */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-fortis-cyan text-fortis-cyan font-medium hover:bg-fortis-cyan/10 transition-all"
                        >
                            View All Blocks
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-fortis-violet text-fortis-violet font-medium hover:bg-fortis-violet/10 transition-all"
                        >
                            View All Transactions
                        </a>
                    </div>
                </div>
            </section>

            {/* Network Health */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Network <span className="gradient-text">Health</span> (Simulated)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <div className="text-6xl font-bold text-fortis-green mb-2">99.99%</div>
                            <div className="text-xl text-white mb-2">Uptime</div>
                            <div className="text-sm text-fortis-gray-400">Since mainnet launch</div>
                        </div>

                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <div className="text-6xl font-bold text-fortis-cyan mb-2">127</div>
                            <div className="text-xl text-white mb-2">Active Peers</div>
                            <div className="text-sm text-fortis-gray-400">Globally distributed</div>
                        </div>

                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <div className="text-6xl font-bold text-fortis-violet mb-2">42ms</div>
                            <div className="text-xl text-white mb-2">Network Latency</div>
                            <div className="text-sm text-fortis-gray-400">Average P2P latency</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
