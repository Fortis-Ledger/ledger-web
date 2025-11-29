import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/accordion";
import { Tabs } from "@/components/ui/tabs";
import { Terminal } from "@/components/ui/terminal";
import { Shield, Zap, Lock, Boxes } from "lucide-react";

const consensusCode = `// Quantum-safe consensus mechanism
class FortisConsensus {
  async validateBlock(block: Block): Promise<boolean> {
    // Verify post-quantum signatures
    const signature = await dilithium.verify(
      block.hash,
      block.signature,
      block.validator.publicKey
    );
    
    if (!signature.valid) return false;
    
    // Check validator stake and reputation
    const validator = await this.getValidator(block.validator.id);
    return validator.stake >= MIN_STAKE;
  }
}`;

const cryptoCode = `// Post-quantum key generation
import { dilithium, kyber } from '@fortis/crypto';

// Generate signing keys (CRYSTALS-Dilithium)
const signingKeys = await dilithium.generateKeyPair();

// Generate encryption keys (CRYSTALS-Kyber)
const encryptionKeys = await kyber.generateKeyPair();

console.log('Quantum-resistant keys generated ✓');`;

export default function TechnologyPage() {
    const faqItems = [
        {
            title: "What is post-quantum cryptography?",
            children: (
                <p>
                    Post-quantum cryptography (PQC) refers to cryptographic algorithms that are secure
                    against attacks from both classical and quantum computers. Unlike RSA and ECC, which
                    will be broken by quantum computers using Shor's algorithm, PQC algorithms are based
                    on mathematical problems (like lattice problems) that remain hard even for quantum computers.
                </p>
            ),
        },
        {
            title: "How does Fortis achieve sub-second finality?",
            children: (
                <p>
                    Our consensus mechanism combines optimistic Byzantine Fault Tolerance (BFT) with
                    quantum-safe signatures. Validators reach consensus in a single round for normal
                    operation, with fallback mechanisms for adversarial conditions. This allows transaction
                    finality in under 1 second while maintaining security.
                </p>
            ),
        },
        {
            title: "Can Fortis scale to millions of users?",
            children: (
                <p>
                    Yes. Fortis uses horizontal scaling through sharding and layer-2 solutions. Each shard
                    can process 10,000+ TPS, and we can dynamically add shards as demand grows. Combined
                    with our optimistic rollup layer, the network can theoretically scale infinitely.
                </p>
            ),
        },
        {
            title: "Is Fortis completely decentralized?",
            children: (
                <p>
                    Absolutely. Fortis has no central authority, no admin keys, and no single point of failure.
                    Anyone can run a validator node by staking tokens. The network is governed by token holders
                    through on-chain voting. All code is open source and audited.
                </p>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Technology Stack"
                subtitle="Quantum-resistant architecture built for infinite scale and absolute security"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Technology" }
                ]}
            />

            {/* Core Tech Stack */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Core <span className="gradient-text">Architecture</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16 max-w-3xl mx-auto">
                        Every component designed for the quantum age
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cryptography */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-gray-800/80 to-fortis-gray-900/80 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all">
                            <Shield className="w-12 h-12 text-fortis-cyan mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Post-Quantum Cryptography</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Built with NIST-approved algorithms that resist quantum attacks:
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-cyan mt-1">•</span>
                                    <span><strong>CRYSTALS-Dilithium</strong> for digital signatures</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-cyan mt-1">•</span>
                                    <span><strong>CRYSTALS-Kyber</strong> for key encapsulation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-cyan mt-1">•</span>
                                    <span><strong>Lattice-based</strong> security assumptions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-cyan mt-1">•</span>
                                    <span><strong>50-year</strong> security guarantee</span>
                                </li>
                            </ul>
                        </div>

                        {/* Consensus */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-gray-800/80 to-fortis-gray-900/80 border border-fortis-gray-700 hover:border-fortis-violet/30 transition-all">
                            <Zap className="w-12 h-12 text-fortis-violet mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Quantum-Safe Consensus</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Optimistic BFT with quantum-resistant signatures:
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-violet mt-1">•</span>
                                    <span><strong>Sub-second finality</strong> for all transactions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-violet mt-1">•</span>
                                    <span><strong>10,000+ validators</strong> securing the network</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-violet mt-1">•</span>
                                    <span><strong>Byzantine fault tolerance</strong> (33% threshold)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-violet mt-1">•</span>
                                    <span><strong>Dynamic validator sets</strong> with slashing</span>
                                </li>
                            </ul>
                        </div>

                        {/* Privacy */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-gray-800/80 to-fortis-gray-900/80 border border-fortis-gray-700 hover:border-fortis-purple/30 transition-all">
                            <Lock className="w-12 h-12 text-fortis-purple mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Zero-Knowledge Privacy</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Optional privacy layer for confidential transactions:
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-purple mt-1">•</span>
                                    <span><strong>zk-SNARKs</strong> for transaction privacy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-purple mt-1">•</span>
                                    <span><strong>Selective disclosure</strong> for compliance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-purple mt-1">•</span>
                                    <span><strong>Shielded addresses</strong> with view keys</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-purple mt-1">•</span>
                                    <span><strong>Auditable by design</strong> for institutions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Scalability */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-gray-800/80 to-fortis-gray-900/80 border border-fortis-gray-700 hover:border-fortis-green/30 transition-all">
                            <Boxes className="w-12 h-12 text-fortis-green mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Infinite Scalability</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Horizontal scaling without compromising security:
                            </p>
                            <ul className="space-y-2 text-fortis-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-green mt-1">•</span>
                                    <span><strong>Dynamic sharding</strong> with cross-shard messaging</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-green mt-1">•</span>
                                    <span><strong>100,000+ TPS</strong> base layer capacity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-green mt-1">•</span>
                                    <span><strong>Optimistic rollups</strong> for unlimited scale</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fortis-green mt-1">•</span>
                                    <span><strong>State rent model</strong> for efficiency</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code Examples */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        See It In <span className="gradient-text">Action</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Real code examples from the Fortis SDK
                    </p>

                    <Tabs
                        items={[
                            {
                                id: "crypto",
                                label: "Post-Quantum Crypto",
                                content: (
                                    <Terminal
                                        code={cryptoCode}
                                        title="quantum-keys.ts"
                                        showLineNumbers
                                    />
                                ),
                            },
                            {
                                id: "consensus",
                                label: "Consensus",
                                content: (
                                    <Terminal
                                        code={consensusCode}
                                        title="consensus.ts"
                                        showLineNumbers
                                    />
                                ),
                            },
                        ]}
                    />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Technical deep-dive questions answered
                    </p>

                    <Accordion items={faqItems} allowMultiple />
                </div>
            </section>

            <Footer />
        </main>
    );
}
