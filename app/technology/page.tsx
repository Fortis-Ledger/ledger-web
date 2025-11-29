import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Shield, Cpu, Zap, Lock, Network, Server } from "lucide-react";

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-fortis-black selection:bg-fortis-cyan/30">
            <Navbar />

            <PageHeader
                title="Quantum-Resistant Architecture"
                description="Built from the ground up to withstand the decryption capabilities of the post-quantum era. Fortis Ledger combines lattice-based cryptography with high-speed consensus."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Shield}
                        title="Post-Quantum Security"
                        description="Utilizing NIST-standardized Dilithium and Falcon signature schemes to ensure immutable security against quantum attacks."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Aegis Consensus"
                        description="A novel proof-of-stake mechanism delivering sub-second finality and 100,000+ TPS without compromising decentralization."
                    />
                    <FeatureCard
                        icon={Network}
                        title="Zero-Trust Network"
                        description="Every node interaction is cryptographically verified, creating a resilient mesh that assumes no implicit trust."
                    />
                </div>
            </div>

            <ContentSection title="The Quantum Threat">
                <p>
                    Traditional blockchains rely on Elliptic Curve Cryptography (ECC), which is vulnerable to Shor's algorithm running on sufficiently powerful quantum computers. Experts predict this "Q-Day" could arrive within the next decade, rendering current digital assets insecure.
                </p>
                <p>
                    Fortis Ledger proactively addresses this by implementing <strong>Lattice-Based Cryptography</strong>. These mathematical structures are believed to be hard for both classical and quantum computers to solve, providing a long-term security guarantee for your digital legacy.
                </p>
            </ContentSection>

            <ContentSection title="Aegis Consensus Protocol" reversed>
                <p>
                    Speed shouldn't come at the cost of security. Our proprietary <strong>Aegis Consensus</strong> uses a directed acyclic graph (DAG) structure combined with a fast-voting overlay.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-fortis-slate">
                    <li><strong>Instant Finality:</strong> Transactions are confirmed in under 500ms.</li>
                    <li><strong>Asynchronous:</strong> The network continues to operate even if parts of it are partitioned.</li>
                    <li><strong>Leaderless:</strong> No single point of failure or censorship.</li>
                </ul>
            </ContentSection>

            <section className="py-24 bg-fortis-event border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Technical Specifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-fortis-cyan mb-2">100k+</div>
                            <div className="text-sm text-fortis-slate uppercase tracking-wider">TPS</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-fortis-violet mb-2">&lt;500ms</div>
                            <div className="text-sm text-fortis-slate uppercase tracking-wider">Time to Finality</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-white mb-2">PQC</div>
                            <div className="text-sm text-fortis-slate uppercase tracking-wider">NIST Level 5</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-fortis-cyan mb-2">0%</div>
                            <div className="text-sm text-fortis-slate uppercase tracking-wider">Downtime</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
