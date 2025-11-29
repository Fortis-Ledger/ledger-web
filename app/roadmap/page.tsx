import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Code2, TrendingUp, Calendar, CheckCircle2 } from "lucide-react";

const roadmapData = [
    {
        quarter: "Q1 2024",
        status: "Completed",
        color: "green",
        items: [
            { title: "Mainnet Launch", desc: "Genesis block and validator onboarding" },
            { title: "Quantum Wallet v1.0", desc: "MPC wallet with seedless recovery" },
            { title: "Fortis Explorer v1.0", desc: "Real-time blockchain explorer" },
        ],
    },
    {
        quarter: "Q2 2024",
        status: "In Progress",
        color: "cyan",
        items: [
            { title: "Bridge Launch", desc: "Ethereum and Bitcoin cross-chain support" },
            { title: "Fortis ID Beta", desc: "Self-sovereign identity protocol" },
            { title: "SDKs v2.0", desc: "Enhanced developer tooling" },
        ],
    },
    {
        quarter: "Q3 2024",
        status: "Planned",
        color: "violet",
        items: [
            { title: "Compute Network", desc: "Decentralized GPU marketplace" },
            { title: "Governance v2", desc: "On-chain voting and proposals" },
            { title: "Mobile Wallets", desc: "iOS and Android native apps" },
        ],
    },
    {
        quarter: "Q4 2024",
        status: "Planned",
        color: "purple",
        items: [
            { title: "Layer-2 Rollups", desc: "zk-Rollup integration for infinite scale" },
            { title: "DeFi Suite", desc: "Native DEX, lending, and derivatives" },
            { title: "Enterprise Features", desc: "Private chains and permissioned zones" },
        ],
    },
];

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Roadmap"
                subtitle="Our vision for the quantum-resistant future of blockchain"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Roadmap" }
                ]}
            />

            {/* Vision Statement */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Building the <span className="gradient-text">Future</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-200 leading-relaxed">
                        Fortis Ledger is more than a blockchain—it's a multi-decade commitment to building
                        quantum-resistant infrastructure that will remain secure and scalable for the next 50+ years.
                        Our roadmap balances innovation with pragmatism, ensuring every milestone delivers real value.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {roadmapData.map((quarter, qIndex) => (
                            <div key={qIndex} className="relative">
                                {/* Quarter Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`px-6 py-3 rounded-xl bg-fortis-${quarter.color}/10 border border-fortis-${quarter.color}/30`}>
                                        <Calendar className={`w-6 h-6 text-fortis-${quarter.color} inline mr-2`} />
                                        <span className="text-2xl font-bold text-white">{quarter.quarter}</span>
                                    </div>
                                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${quarter.status === "Completed"
                                            ? "bg-fortis-green/20 text-fortis-green"
                                            : quarter.status === "In Progress"
                                                ? "bg-fortis-cyan/20 text-fortis-cyan"
                                                : "bg-fortis-gray-700 text-fortis-gray-300"
                                        }`}>
                                        {quarter.status}
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {quarter.items.map((item, iIndex) => (
                                        <div
                                            key={iIndex}
                                            className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all"
                                        >
                                            {quarter.status === "Completed" ? (
                                                <CheckCircle2 className="w-8 h-8 text-fortis-green mb-4" />
                                            ) : (
                                                <div className={`w-8 h-8 rounded-lg bg-fortis-${quarter.color}/20 flex items-center justify-center mb-4`}>
                                                    <TrendingUp className={`w-5 h-5 text-fortis-${quarter.color}`} />
                                                </div>
                                            )}
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-fortis-gray-300">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Long-term Vision */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        2025 and <span className="gradient-text">Beyond</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-4">Institutional Adoption</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Partner with enterprises, governments, and financial institutions to deploy quantum-safe
                                blockchain infrastructure at scale.
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li>• Central bank digital currencies (CBDCs)</li>
                                <li>• Supply chain and logistics tracking</li>
                                <li>• Healthcare data management</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-4">Developer Ecosystem</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Build a thriving ecosystem of developers, protocols, and applications on Fortis Ledger.
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li>• 1,000+ active developers</li>
                                <li>• 100+ dApps deployed</li>
                                <li>• $100M+ ecosystem fund</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-4">Research & Innovation</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Continue advancing post-quantum cryptography and consensus mechanisms.
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li>• Academic partnerships</li>
                                <li>• Open source contributions</li>
                                <li>• Cryptography research grants</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-4">Global Infrastructure</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Expand to 100+ countries with localized support and compliance frameworks.
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li>• Multi-region node distribution</li>
                                <li>• Regulatory compliance tooling</li>
                                <li>• Localized developer communities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Join the <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8">
                        Be part of building the quantum-resistant future
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/developers"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            <Code2 className="w-5 h-5 mr-2" />
                            Start Building
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            Join Community
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
