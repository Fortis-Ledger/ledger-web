import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Link2, Shield, Zap, ArrowRightLeft, Network } from "lucide-react";

const supportedChains = [
    { name: "Ethereum", status: "Live", color: "cyan" },
    { name: "Bitcoin", status: "Live", color: "violet" },
    { name: "Polygon", status: "Live", color: "purple" },
    { name: "Avalanche", status: "Coming Soon", color: "green" },
    { name: "Solana", status: "Coming Soon", color: "yellow" },
    { name: "Cosmos", status: "Coming Soon", color: "blue" },
];

export default function BridgePage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Fortis Bridge"
                subtitle="Secure cross-chain asset and message transfer with quantum-resistant security"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Bridge" }
                ]}
            />

            {/* Hero Features */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Shield className="w-10 h-10 text-fortis-cyan mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Quantum-Safe</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                All bridge transactions use post-quantum signatures
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Zap className="w-10 h-10 text-fortis-violet mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Fast Transfers</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Cross-chain transfers complete in minutes
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <ArrowRightLeft className="w-10 h-10 text-fortis-purple mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Multi-Chain</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Support for 10+ major blockchain networks
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Network className="w-10 h-10 text-fortis-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Trustless</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Decentralized validators, no central authority
                            </p>
                        </div>
                    </div>

                    {/* How It Works */}
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        How the <span className="gradient-text">Bridge</span> Works
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <div className="text-5xl font-bold text-fortis-cyan mb-4">1</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Lock Assets</h3>
                            <p className="text-fortis-gray-300">
                                Your assets are locked in a smart contract on the source chain using
                                quantum-resistant multi-signature security.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <div className="text-5xl font-bold text-fortis-violet mb-4">2</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Verify Transfer</h3>
                            <p className="text-fortis-gray-300">
                                Decentralized validators confirm the lock event through consensus,
                                ensuring security across chains.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <div className="text-5xl font-bold text-fortis-purple mb-4">3</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Mint on Fortis</h3>
                            <p className="text-fortis-gray-300">
                                Equivalent assets are minted on Fortis Ledger, maintaining 1:1 parity
                                with the original chain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Chains */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Supported <span className="gradient-text">Chains</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Bridge assets from major blockchain networks
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {supportedChains.map((chain, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white">{chain.name}</h3>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${chain.status === "Live"
                                                ? "bg-fortis-green/20 text-fortis-green"
                                                : "bg-fortis-yellow/20 text-fortis-yellow"
                                            }`}
                                    >
                                        {chain.status}
                                    </span>
                                </div>
                                <p className="text-fortis-gray-300 text-sm">
                                    Transfer assets securely between {chain.name} and Fortis Ledger
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Security <span className="gradient-text">First</span>
                            </h2>
                            <p className="text-xl text-fortis-gray-300 mb-8">
                                The Fortis Bridge is built with multiple layers of security to protect your assets
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Quantum-Resistant Signatures</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            All bridge transactions use CRYSTALS-Dilithium signatures
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Decentralized Validators</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            100+ independent validators secure cross-chain transfers
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Multi-Signature Security</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Threshold signatures prevent single points of failure
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Audited Smart Contracts</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            All bridge contracts audited by leading security firms
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-gray-800 to-fortis-gray-900 border border-fortis-gray-700">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-fortis-cyan/10 rounded-full blur-[80px]" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Bridge Statistics</h3>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-4xl font-bold text-fortis-cyan mb-1">$2.5B+</div>
                                        <div className="text-fortis-gray-300">Total Value Locked</div>
                                    </div>

                                    <div>
                                        <div className="text-4xl font-bold text-fortis-violet mb-1">500K+</div>
                                        <div className="text-fortis-gray-300">Cross-Chain Transfers</div>
                                    </div>

                                    <div>
                                        <div className="text-4xl font-bold text-fortis-purple mb-1">99.99%</div>
                                        <div className="text-fortis-gray-300">Success Rate</div>
                                    </div>

                                    <div>
                                        <div className="text-4xl font-bold text-fortis-green mb-1">5 min</div>
                                        <div className="text-fortis-gray-300">Average Transfer Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to <span className="gradient-text">Bridge</span>?
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8">
                        Start transferring assets between chains securely
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            Launch Bridge App
                        </a>
                        <a
                            href="/developers/docs"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            Integration Guide
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
