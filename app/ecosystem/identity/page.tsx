import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Shield, Key, Fingerprint, Globe, Lock, CheckCircle } from "lucide-react";

const useCases = [
    {
        icon: Globe,
        title: "Web3 Authentication",
        description: "Single sign-on for all dApps with quantum-resistant signatures",
        color: "cyan",
    },
    {
        icon: Lock,
        title: "Credential Management",
        description: "Securely store and share verifiable credentials",
        color: "violet",
    },
    {
        icon: CheckCircle,
        title: "KYC/AML Compliance",
        description: "Privacy-preserving identity verification for institutions",
        color: "purple",
    },
    {
        icon: Key,
        title: "Access Control",
        description: "Grant permissions without revealing your full identity",
        color: "green",
    },
];

export default function FortisIDPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Fortis ID"
                subtitle="Decentralized quantum-safe identity for the Web3 era"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Fortis ID" }
                ]}
            />

            {/* Hero Message */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <p className="text-2xl text-fortis-gray-200 leading-relaxed mb-8">
                        <strong className="text-white">Own your identity.</strong> Fortis ID gives you complete control
                        over your digital identity with zero-knowledge proofs, quantum-resistant cryptography, and
                        decentralized storage.
                    </p>
                </div>

                {/* Core Features */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <Shield className="w-12 h-12 text-fortis-cyan mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Self-Sovereign</h3>
                            <p className="text-fortis-gray-300">
                                You control your data. No centralized authority can access, modify, or delete your identity.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <Key className="w-12 h-12 text-fortis-violet mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Privacy-First</h3>
                            <p className="text-fortis-gray-300">
                                Prove attributes without revealing your full identity using zero-knowledge proofs.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <Fingerprint className="w-12 h-12 text-fortis-purple mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Quantum-Safe</h3>
                            <p className="text-fortis-gray-300">
                                All credentials signed with CRYSTALS-Dilithium, secure against quantum computers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Use <span className="gradient-text">Cases</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        What you can build with Fortis ID
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all"
                                >
                                    <Icon className={`w-10 h-10 text-fortis-${useCase.color} mb-4`} />
                                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                                    <p className="text-fortis-gray-300">{useCase.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        How It <span className="gradient-text">Works</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <div className="text-5xl font-bold text-fortis-cyan mb-4">1</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Create Identity</h3>
                            <p className="text-fortis-gray-300">
                                Generate a decentralized identifier (DID) stored on Fortis Ledger. Your private keys
                                never leave your device.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <div className="text-5xl font-bold text-fortis-violet mb-4">2</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Get Verified</h3>
                            <p className="text-fortis-gray-300">
                                Trusted issuers (governments, universities, employers) attest to your credentials,
                                which are stored encrypted.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <div className="text-5xl font-bold text-fortis-purple mb-4">3</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Prove Claims</h3>
                            <p className="text-fortis-gray-300">
                                Use zero-knowledge proofs to prove attributes (e.g., "I'm over 21") without revealing
                                your full identity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Details */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Technical <span className="gradient-text">Architecture</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">Decentralized Identifiers (DIDs)</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                W3C-compliant DIDs stored on-chain with quantum-resistant key pairs.
                            </p>
                            <code className="block p-3 rounded bg-fortis-black/50 text-fortis-cyan text-sm font-mono">
                                did:fortis:1qx7k9p2vh3m8r5...
                            </code>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">Verifiable Credentials</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                JSON-LD credentials signed with CRYSTALS-Dilithium for quantum resistance.
                            </p>
                            <code className="block p-3 rounded bg-fortis-black/50 text-fortis-violet text-sm font-mono">
                                type: "UniversityDegree"
                            </code>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">Zero-Knowledge Proofs</h3>
                            <p className="text-fortis-gray-300">
                                zk-SNARKs enable selective disclosure. Prove you have a valid credential without
                                revealing the credential itself.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">Encrypted Storage</h3>
                            <p className="text-fortis-gray-300">
                                Personal data encrypted with your keys, stored on IPFS. On-chain only stores
                                hashes and signatures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Get Your <span className="gradient-text">Fortis ID</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8">
                        Start controlling your digital identity today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            Create Your ID
                        </a>
                        <a
                            href="/developers/docs"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            Developer Docs
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
