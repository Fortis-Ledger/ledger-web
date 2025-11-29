import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MESSAGING } from "@/lib/brand";
import { Shield, Target, Heart, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="About Fortis Ledger"
                subtitle="Building the quantum-resistant blockchain infrastructure for the next 50 years"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "About" }
                ]}
            />

            {/* Mission & Vision */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                        {/* Mission */}
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-fortis-cyan/20 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-fortis-cyan" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                            </div>
                            <p className="text-lg text-fortis-gray-200 leading-relaxed">
                                {MESSAGING.mission}
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-fortis-violet/20 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-fortis-violet" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                            </div>
                            <p className="text-lg text-fortis-gray-200 leading-relaxed">
                                {MESSAGING.vision}
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-bold text-center text-white mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-xl text-fortis-gray-300 text-center mb-12 max-w-3xl mx-auto">
                            The principles that guide everything we build
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MESSAGING.values.map((value, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-fortis-gray-300 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Quantum Resistance */}
                    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-fortis-gray-800 to-fortis-gray-900 border border-fortis-gray-700">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fortis-cyan/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fortis-violet/10 rounded-full blur-[100px]" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="w-10 h-10 text-fortis-cyan" />
                                <h2 className="text-4xl font-bold text-white">
                                    Why Quantum Resistance Matters
                                </h2>
                            </div>

                            <div className="space-y-6 text-fortis-gray-200 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-white">Quantum computers are coming.</strong> Within the next 10-15 years,
                                    quantum computers powerful enough to break current cryptographic standards (RSA, ECC) will likely exist.
                                    This poses an existential threat to all existing blockchain networks.
                                </p>

                                <p>
                                    <strong className="text-white">Current blockchains are vulnerable.</strong> Bitcoin, Ethereum, and
                                    virtually all major blockchains rely on elliptic curve cryptography that will be completely broken by
                                    Shor's algorithm running on a sufficiently powerful quantum computer.
                                </p>

                                <p>
                                    <strong className="text-white">Fortis Ledger is different.</strong> We've built our entire infrastructure
                                    from the ground up using post-quantum cryptographic algorithms (CRYSTALS-Dilithium, CRYSTALS-Kyber) that
                                    are specifically designed to resist both classical and quantum attacks.
                                </p>

                                <p>
                                    <strong className="text-white">50-year security guarantee.</strong> Our cryptographic choices are based on
                                    problems (lattice-based cryptography) that even quantum computers cannot efficiently solve. This provides
                                    security not just for today, but for the next five decades and beyond.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-fortis-gray-700/50">
                                    <div className="text-3xl font-bold text-fortis-cyan mb-1">CRYSTALS-Dilithium</div>
                                    <div className="text-sm text-fortis-gray-300">Digital Signatures</div>
                                </div>
                                <div className="p-4 rounded-xl bg-fortis-gray-700/50">
                                    <div className="text-3xl font-bold text-fortis-violet mb-1">CRYSTALS-Kyber</div>
                                    <div className="text-sm text-fortis-gray-300">Key Encapsulation</div>
                                </div>
                                <div className="p-4 rounded-xl bg-fortis-gray-700/50">
                                    <div className="text-3xl font-bold text-fortis-purple mb-1">NIST Approved</div>
                                    <div className="text-sm text-fortis-gray-300">Standardized Algorithms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
