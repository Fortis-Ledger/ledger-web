import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCounter } from "@/components/ui/stat-counter";
import { Terminal } from "@/components/ui/terminal";
import { Shield, TrendingUp, Users, Award } from "lucide-react";

const setupCode = `# Install fortis validator
$ curl -O https://get.fortis.network/validator
$ chmod +x validator && ./validator

# Initialize node
$ fortis-node init --validator \
  --moniker "MyValidator" \
  --commission-rate 0.05

# Start syncing
$ fortis-node start

✓ Connected to network
✓ Syncing blocks... (height: 1,234,567)
✓ Validator ready in ~2 hours`;

export default function ValidatorsPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Become a Validator"
                subtitle="Secure the Fortis network and earn rewards by running a validator node"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Network" },
                    { label: "Validators" }
                ]}
            />

            {/* Network Stats */}
            <section className="py-16 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCounter value="10,247" label="Active Validators" color="cyan" />
                        <StatCounter value="2.5" suffix="B" label="Total Staked (FORT)" color="violet" />
                        <StatCounter value="12.5" suffix="%" label="Avg APR" color="purple" />
                        <StatCounter value="99.99" suffix="%" label="Network Uptime" color="green" />
                    </div>
                </div>
            </section>

            {/* Why Run a Validator */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Why Run a <span className="gradient-text">Validator</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <TrendingUp className="w-12 h-12 text-fortis-cyan mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Earn Rewards</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Block rewards + transaction fees + MEV
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <Shield className="w-12 h-12 text-fortis-violet mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Secure Network</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Help protect quantum-resistant infrastructure
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <Users className="w-12 h-12 text-fortis-purple mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Governance Power</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Vote on protocol upgrades and parameters
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center">
                            <Award className="w-12 h-12 text-fortis-green mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Build Reputation</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Earn validator reputation and attract delegators
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Validator <span className="gradient-text">Requirements</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        What you need to run a validator node
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Hardware */}
                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Hardware Specs</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">CPU</span>
                                    <span className="text-white font-semibold">8+ cores (3.0+ GHz)</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">RAM</span>
                                    <span className="text-white font-semibold">32 GB minimum</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">Storage</span>
                                    <span className="text-white font-semibold">1 TB NVMe SSD</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">Network</span>
                                    <span className="text-white font-semibold">100 Mbps up/down</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-fortis-gray-300">Uptime</span>
                                    <span className="text-white font-semibold">99.9% SLA</span>
                                </div>
                            </div>
                        </div>

                        {/* Economics */}
                        <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Economics</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">Minimum Stake</span>
                                    <span className="text-white font-semibold">10,000 FORT</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">Commission</span>
                                    <span className="text-white font-semibold">5-20% (you set)</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">Block Reward</span>
                                    <span className="text-white font-semibold">50 FORT/block</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-fortis-gray-700">
                                    <span className="text-fortis-gray-300">Slashing Risk</span>
                                    <span className="text-white font-semibold">5% (downtime/misbehavior)</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-fortis-gray-300">Unbonding Period</span>
                                    <span className="text-white font-semibold">21 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Setup Guide */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Quick <span className="gradient-text">Setup</span>
                            </h2>
                            <p className="text-xl text-fortis-gray-300 mb-8">
                                Get your validator running in under 3 hours
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Provision Hardware</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Set up a server (bare metal, cloud, or home)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Install Software</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Download and configure the Fortis node client
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Sync & Stake</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Sync with the network and stake your FORT tokens
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-fortis-cyan font-bold text-sm">4</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Start Validating</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Join the active set and start earning rewards
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Terminal code={setupCode} title="validator-setup.sh" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to <span className="gradient-text">Validate</span>?
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8">
                        Join the network and start securing the quantum future
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            Full Setup Guide
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            Join Validator Community
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
