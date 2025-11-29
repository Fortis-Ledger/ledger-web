import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Terminal } from "@/components/ui/terminal";
import { StatCounter } from "@/components/ui/stat-counter";
import { Shield, Zap, Lock, Globe, Users, Database } from "lucide-react";

const validatorCode = `# Run a Fortis validator node
$ fortis-node init --validator

# Configure your validator
$ fortis-node config set \
  --moniker "my-validator" \
  --commission-rate 0.05 \
  --min-self-delegation 1000

# Start the node
$ fortis-node start --validator

✓ Validator node started
✓ Syncing with network...
✓ Connected to 127 peers
✓ Current block height: 1,234,567`;

export default function BlockchainPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Fortis Blockchain"
                subtitle="The quantum-resistant Layer 1 protocol securing the future of decentralized finance"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Blockchain" }
                ]}
            />

            {/* Stats Section */}
            <section className="py-16 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCounter value="100,000" suffix="+" label="TPS Capacity" color="cyan" />
                        <StatCounter value="0.8" suffix="s" label="Block Time" color="violet" />
                        <StatCounter value="10,000" suffix="+" label="Validators" color="purple" />
                        <StatCounter value="99.99" suffix="%" label="Uptime" color="green" />
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Core <span className="gradient-text">Features</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Shield className="w-10 h-10 text-fortis-cyan mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Post-Quantum Security</h3>
                            <p className="text-fortis-gray-300 leading-relaxed">
                                Built with CRYSTALS-Dilithium and Kyber algorithms, providing 50+ years
                                of security against quantum attacks. Every signature, every transaction
                                is quantum-resistant by default.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Zap className="w-10 h-10 text-fortis-violet mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Instant Finality</h3>
                            <p className="text-fortis-gray-300 leading-relaxed">
                                Transactions are confirmed and irreversible in under 1 second using
                                our optimized Byzantine Fault Tolerant consensus with quantum-safe signatures.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Lock className="w-10 h-10 text-fortis-purple mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Zero-Knowledge Privacy</h3>
                            <p className="text-fortis-gray-300 leading-relaxed">
                                Optional privacy layer using zk-SNARKs for confidential transactions
                                while maintaining compliance and auditability for institutions.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Globe className="w-10 h-10 text-fortis-green mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Infinite Scalability</h3>
                            <p className="text-fortis-gray-300 leading-relaxed">
                                Dynamic sharding and layer-2 rollups enable unlimited throughput.
                                Start at 100,000 TPS and scale infinitely as demand grows.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Users className="w-10 h-10 text-fortis-cyan mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">True Decentralization</h3>
                            <p className="text-fortis-gray-300 leading-relaxed">
                                No admin keys, no central authority. Anyone can run a validator node
                                by staking tokens. Governed entirely by the community.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Database className="w-10 h-10 text-fortis-violet mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Efficient State Management</h3>
                            <p className="text-fortis-gray-300 leading-relaxed">
                                State rent model prevents blockchain bloat. Merkle tree optimization
                                and pruning ensure validators can run on standard hardware.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Deep Dive */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Technical <span className="gradient-text">Architecture</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16 max-w-3xl mx-auto">
                        Built from the ground up for the quantum age
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Consensus */}
                        <div className="relative p-8 rounded-2xl bg-fortis-gray-800/80 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Consensus Mechanism</h3>
                            <div className="space-y-4 text-fortis-gray-300">
                                <p>
                                    <strong className="text-white">Quantum-Safe BFT:</strong> Our consensus
                                    algorithm combines the speed of optimistic BFT with quantum-resistant
                                    digital signatures (CRYSTALS-Dilithium).
                                </p>
                                <p>
                                    <strong className="text-white">Validator Selection:</strong> Weighted
                                    random sampling based on stake, with reputation scoring to prevent
                                    malicious behavior.
                                </p>
                                <p>
                                    <strong className="text-white">Finality:</strong> Single-round consensus
                                    in normal operation, with multi-round fallback for Byzantine conditions.
                                </p>
                                <p>
                                    <strong className="text-white">Slashing Conditions:</strong> Validators
                                    are slashed for double-signing, prolonged downtime, or censorship.
                                </p>
                            </div>
                        </div>

                        {/* Cryptography */}
                        <div className="relative p-8 rounded-2xl bg-fortis-gray-800/80 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Cryptographic Primitives</h3>
                            <div className="space-y-4 text-fortis-gray-300">
                                <p>
                                    <strong className="text-white">CRYSTALS-Dilithium:</strong> NIST-approved
                                    post-quantum signature scheme based on module lattices. Provides 128-bit
                                    quantum security.
                                </p>
                                <p>
                                    <strong className="text-white">CRYSTALS-Kyber:</strong> Key encapsulation
                                    mechanism for secure key exchange, resistant to quantum attacks.
                                </p>
                                <p>
                                    <strong className="text-white">Hash Functions:</strong> BLAKE3 for general
                                    hashing, SHA-3 for Merkle trees and transaction IDs.
                                </p>
                                <p>
                                    <strong className="text-white">VRF:</strong> Verifiable Random Function
                                    for unpredictable validator selection and leader election.
                                </p>
                            </div>
                        </div>

                        {/* Sharding */}
                        <div className="relative p-8 rounded-2xl bg-fortis-gray-800/80 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Sharding Architecture</h3>
                            <div className="space-y-4 text-fortis-gray-300">
                                <p>
                                    <strong className="text-white">Dynamic Shards:</strong> Network automatically
                                    spawns new shards as transaction volume increases. Each shard can process
                                    10,000+ TPS.
                                </p>
                                <p>
                                    <strong className="text-white">Cross-Shard Communication:</strong> Atomic
                                    cross-shard transactions using two-phase commit with quantum-safe signatures.
                                </p>
                                <p>
                                    <strong className="text-white">Beacon Chain:</strong> Coordinates shard
                                    creation, validator assignment, and cross-shard message routing.
                                </p>
                            </div>
                        </div>

                        {/* Smart Contracts */}
                        <div className="relative p-8 rounded-2xl bg-fortis-gray-800/80 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Smart Contract VM</h3>
                            <div className="space-y-4 text-fortis-gray-300">
                                <p>
                                    <strong className="text-white">WASM-based:</strong> WebAssembly virtual
                                    machine supporting Rust, C++, and AssemblyScript for maximum performance.
                                </p>
                                <p>
                                    <strong className="text-white">Gas Metering:</strong> Predictable execution
                                    costs with gas limits to prevent DoS attacks.
                                </p>
                                <p>
                                    <strong className="text-white">Sandboxed Execution:</strong> Complete
                                    isolation between contracts with capability-based security model.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Become a Validator */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Become a <span className="gradient-text">Validator</span>
                            </h2>
                            <p className="text-xl text-fortis-gray-300 mb-8">
                                Secure the network and earn rewards by running a validator node
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Minimum Requirements</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            1,000 FORT stake, 16GB RAM, 500GB SSD, stable internet
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Install Node Software</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Download and configure the Fortis validator client
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Start Validating</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Sync with the network and start earning block rewards
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/network/validators"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                            >
                                Validator Guide
                            </a>
                        </div>

                        <div>
                            <Terminal code={validatorCode} title="validator-setup.sh" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
