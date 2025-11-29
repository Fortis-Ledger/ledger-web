import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCounter } from "@/components/ui/stat-counter";
import { Accordion } from "@/components/ui/accordion";
import { Lock, TrendingUp, Shield, Zap } from "lucide-react";

export default function StakingPage() {
    const faqItems = [
        {
            title: "What is staking?",
            children: (
                <p>
                    Staking is the process of locking your FORT tokens to support network security and earn rewards.
                    When you stake, you're either running a validator node yourself or delegating your tokens to an
                    existing validator. In exchange, you earn a share of block rewards and transaction fees.
                </p>
            ),
        },
        {
            title: "What is the unbonding period?",
            children: (
                <p>
                    When you unstake your tokens, they enter a 21-day unbonding period during which they don't earn
                    rewards and cannot be transferred. This is a security measure to prevent certain types of attacks
                    on the network. After 21 days, your tokens are fully liquid again.
                </p>
            ),
        },
        {
            title: "Can I lose my staked tokens?",
            children: (
                <p>
                    Your validator can be slashed (lose a portion of staked tokens) if they engage in malicious behavior
                    like double-signing or if they experience significant downtime. As a delegator, you share in these
                    slashing penalties proportionally. Choose validators carefully based on their uptime history and reputation.
                </p>
            ),
        },
        {
            title: "How often are rewards distributed?",
            children: (
                <p>
                    Staking rewards are automatically distributed with every block (~0.8 seconds). Rewards are
                    auto-compounded, meaning they're automatically restaked to maximize your returns. You can claim
                    your accumulated rewards at any time.
                </p>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Staking Portal"
                subtitle="Stake FORT tokens to secure the network and earn rewards"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Network" },
                    { label: "Staking" }
                ]}
            />

            {/* Stats */}
            <section className="py-16 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCounter value="2.5" suffix="B" label="Total Staked" color="cyan" />
                        <StatCounter value="12.5" suffix="%" label="Current APR" color="violet" />
                        <StatCounter value="65" suffix="%" label="Network Staked" color="purple" />
                        <StatCounter value="45,230" label="Delegators" color="green" />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Why <span className="gradient-text">Stake</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <TrendingUp className="w-10 h-10 text-fortis-cyan mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Passive Income</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Earn 10-15% APR just by holding and staking
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Shield className="w-10 h-10 text-fortis-violet mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Network Security</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Help secure quantum-resistant blockchain
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Lock className="w-10 h-10 text-fortis-purple mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Governance</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Vote on protocol upgrades and parameters
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Zap className="w-10 h-10 text-fortis-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Instant Rewards</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Auto-compounding every block (~0.8s)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Stake */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        How to <span className="gradient-text">Stake</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <div className="text-5xl font-bold text-fortis-cyan mb-4">1</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Get FORT Tokens</h3>
                            <p className="text-fortis-gray-300">
                                Purchase FORT on exchanges or bridge from other chains using Fortis Bridge.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <div className="text-5xl font-bold text-fortis-violet mb-4">2</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Choose Validator</h3>
                            <p className="text-fortis-gray-300">
                                Browse validators, check their uptime, commission rates, and vote on who to delegate to.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <div className="text-5xl font-bold text-fortis-purple mb-4">3</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Start Earning</h3>
                            <p className="text-fortis-gray-300">
                                Delegate your tokens and watch your rewards automatically compound every block.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-6">
                        Rewards <span className="gradient-text">Calculator</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-12">
                        Estimate your staking returns
                    </p>

                    <div className="p-8 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                            <div>
                                <label className="block text-white font-semibold mb-3">Amount to Stake (FORT)</label>
                                <input
                                    type="number"
                                    placeholder="10000"
                                    className="w-full px-4 py-3 rounded-lg bg-fortis-gray-900 border border-fortis-gray-700 text-white focus:outline-none focus:border-fortis-cyan"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-3">Staking Duration</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-fortis-gray-900 border border-fortis-gray-700 text-white focus:outline-none focus:border-fortis-cyan">
                                    <option>1 Month</option>
                                    <option>3 Months</option>
                                    <option>6 Months</option>
                                    <option>1 Year</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-fortis-gray-900/50 text-center">
                                <div className="text-sm text-fortis-gray-400 mb-2">Daily Rewards</div>
                                <div className="text-3xl font-bold text-fortis-cyan">~3.42 FORT</div>
                            </div>

                            <div className="p-6 rounded-xl bg-fortis-gray-900/50 text-center">
                                <div className="text-sm text-fortis-gray-400 mb-2">Monthly Rewards</div>
                                <div className="text-3xl font-bold text-fortis-violet">~104 FORT</div>
                            </div>

                            <div className="p-6 rounded-xl bg-fortis-gray-900/50 text-center">
                                <div className="text-sm text-fortis-gray-400 mb-2">Yearly Rewards</div>
                                <div className="text-3xl font-bold text-fortis-purple">~1,250 FORT</div>
                            </div>
                        </div>

                        <p className="text-fortis-gray-400 text-sm text-center mt-6">
                            *Based on current APR of 12.5%. Actual returns may vary based on network conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Staking <span className="gradient-text">FAQ</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Common questions about staking
                    </p>

                    <Accordion items={faqItems} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all text-lg"
                    >
                        Start Staking Now
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
