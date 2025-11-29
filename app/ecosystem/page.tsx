"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/ui/product-card";
import { Shield, Wallet, Search, Code, Link2, User, Brain } from "lucide-react";

const products = [
    {
        name: "Fortis Blockchain",
        subtitle: "Quantum-Resistant Layer 1",
        description: "Core blockchain infrastructure with post-quantum cryptography, sub-second finality, and infinite scalability.",
        icon: Shield,
        color: "cyan" as const,
        href: "/ecosystem/blockchain",
    },
    {
        name: "Quantum Wallet",
        subtitle: "MPC Wallet",
        description: "Next-gen wallet with multi-party computation, quantum-safe keys, and seedless recovery.",
        icon: Wallet,
        color: "violet" as const,
        href: "/ecosystem/wallet",
    },
    {
        name: "Fortis Explorer",
        subtitle: "Block Explorer",
        description: "Real-time blockchain explorer with transaction tracking, validator analytics, and network metrics.",
        icon: Search,
        color: "blue" as const,
        href: "/ecosystem/explorer",
    },
    {
        name: "Fortis SDK",
        subtitle: "Developer Toolkits",
        description: "Production-ready SDKs for JavaScript, Rust, and Python with comprehensive docs.",
        icon: Code,
        color: "purple" as const,
        href: "/ecosystem/sdks",
    },
    {
        name: "Fortis Bridge",
        subtitle: "Cross-Chain Bridge",
        description: "Secure asset and message bridging between Fortis and other major blockchains.",
        icon: Link2,
        color: "green" as const,
        href: "/ecosystem/bridge",
    },
    {
        name: "Fortis ID",
        subtitle: "Quantum Identity",
        description: "Zero-knowledge identity system with quantum-resistant signatures and credentials.",
        icon: User,
        color: "yellow" as const,
        href: "/ecosystem/identity",
    },
    {
        name: "Fortis Compute",
        subtitle: "Confidential Compute",
        description: "Decentralized compute for AI and analytics with MPC guarantees.",
        icon: Brain,
        color: "violet" as const,
        href: "/ecosystem/compute",
    },
];

export default function EcosystemPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Ecosystem"
                subtitle="Complete suite of quantum-resistant infrastructure and tools"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem" }
                ]}
            />

            {/* Products Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.name}
                                subtitle={product.subtitle}
                                description={product.description}
                                icon={product.icon}
                                color={product.color}
                                href={product.href}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration CTA */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Build on <span className="gradient-text">Fortis</span>?
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8 max-w-3xl mx-auto">
                        Join thousands of developers building quantum-resistant applications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/developers"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            Start Building
                        </a>
                        <a
                            href="/developers/docs"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            View Documentation
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
