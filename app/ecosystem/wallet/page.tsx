import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Terminal } from "@/components/ui/terminal";
import { Accordion } from "@/components/ui/accordion";
import { Wallet, Shield, Key, Smartphone, Cloud, RefreshCw } from "lucide-react";

const installCode = `# Install Quantum Wallet
$ npm install -g @fortis/quantum-wallet

# Or download for your platform
# macOS: quantum-wallet-macos.dmg
# Windows: quantum-wallet-windows.exe
# Linux: quantum-wallet-linux.AppImage

# Create your first wallet
$ quantum-wallet create

✓ Generating quantum-resistant keys...
✓ Setting up MPC shares...
✓ Wallet created successfully!

Your address: fortis1qx7k9p2vh3m8r5...`;

const features = [
    {
        icon: Shield,
        title: "Post-Quantum Keys",
        description: "All private keys use CRYSTALS-Dilithium signatures, immune to quantum attacks.",
        color: "cyan",
    },
    {
        icon: Key,
        title: "MPC Key Management",
        description: "Multi-party computation splits keys across devices. No single point of failure.",
        color: "violet",
    },
    {
        icon: RefreshCw,
        title: "Seedless Recovery",
        description: "Recover your wallet without seed phrases using social recovery or biometrics.",
        color: "purple",
    },
    {
        icon: Smartphone,
        title: "Multi-Platform",
        description: "Native apps for iOS, Android, desktop, and browser extension.",
        color: "blue",
    },
    {
        icon: Cloud,
        title: "Cloud Backup",
        description: "Optional encrypted cloud backup with end-to-end encryption.",
        color: "green",
    },
    {
        icon: Shield,
        title: "Hardware Support",
        description: "Integration with Ledger and other hardware wallets for maximum security.",
        color: "cyan",
    },
];

export default function WalletPage() {
    const faqItems = [
        {
            title: "What is MPC and why is it better than traditional wallets?",
            children: (
                <p>
                    Multi-Party Computation (MPC) splits your private key into multiple shares distributed
                    across different devices or parties. No single share can access your funds—you need a
                    threshold (e.g., 2 of 3) to sign transactions. This eliminates the seed phrase vulnerability
                    and provides built-in multi-signature security.
                </p>
            ),
        },
        {
            title: "How does seedless recovery work?",
            children: (
                <p>
                    Instead of memorizing a 12/24-word seed phrase, Quantum Wallet uses social recovery.
                    You designate trusted contacts (guardians) who collectively hold encrypted shares of your
                    recovery key. If you lose access, your guardians can help you recover without ever having
                    full access to your funds themselves.
                </p>
            ),
        },
        {
            title: "Can quantum computers steal my funds?",
            children: (
                <p>
                    No. Quantum Wallet uses post-quantum cryptographic algorithms (CRYSTALS-Dilithium) that
                    are specifically designed to resist attacks from both classical and quantum computers.
                    Even with a powerful quantum computer, your private keys remain secure for 50+ years.
                </p>
            ),
        },
        {
            title: "What chains does Quantum Wallet support?",
            children: (
                <p>
                    Currently supports Fortis Ledger mainnet and testnet. We're adding support for Ethereum,
                    Bitcoin (via quantum-safe multi-sig), and other major chains via Fortis Bridge integration.
                    All cross-chain operations maintain quantum-resistant security.
                </p>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Quantum Wallet"
                subtitle="The first quantum-resistant wallet with MPC key management and seedless recovery"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Quantum Wallet" }
                ]}
            />

            {/* Hero Features */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Your Keys, <span className="gradient-text">Quantum-Safe</span>
                        </h2>
                        <p className="text-xl text-fortis-gray-300 max-w-3xl mx-auto">
                            The most secure wallet for the quantum age
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all"
                                >
                                    <Icon className="w-10 h-10 text-fortis-cyan mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-fortis-gray-300">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        How <span className="gradient-text">MPC</span> Works
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <div className="text-5xl font-bold text-fortis-cyan mb-4">1</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Key Generation</h3>
                            <p className="text-fortis-gray-300">
                                Your private key is never created as a single piece. Instead, it's generated
                                as distributed shares across multiple parties using cryptographic protocols.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <div className="text-5xl font-bold text-fortis-violet mb-4">2</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Distributed Storage</h3>
                            <p className="text-fortis-gray-300">
                                Each share is stored on a different device: your phone, computer, cloud backup,
                                or hardware wallet. No single device has your complete key.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <div className="text-5xl font-bold text-fortis-purple mb-4">3</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Threshold Signing</h3>
                            <p className="text-fortis-gray-300">
                                To sign a transaction, a threshold of shares (e.g., 2 of 3) collaborate using
                                MPC to create a valid signature without ever reconstructing the full key.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Get Started in <span className="gradient-text">Minutes</span>
                            </h2>
                            <p className="text-xl text-fortis-gray-300 mb-8">
                                Download Quantum Wallet for your platform and start securing your assets
                                with quantum-resistant technology.
                            </p>

                            <div className="space-y-4 mb-8">
                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-fortis-cyan/20 flex items-center justify-center">
                                        <Smartphone className="w-6 h-6 text-fortis-cyan" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold">Mobile Apps</h4>
                                        <p className="text-sm text-fortis-gray-400">iOS & Android</p>
                                    </div>
                                    <span className="text-fortis-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                                        Download →
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-fortis-violet/20 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-fortis-violet" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold">Desktop Apps</h4>
                                        <p className="text-sm text-fortis-gray-400">Windows, macOS, Linux</p>
                                    </div>
                                    <span className="text-fortis-violet opacity-0 group-hover:opacity-100 transition-opacity">
                                        Download →
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-fortis-purple/20 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-fortis-purple" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold">Browser Extension</h4>
                                        <p className="text-sm text-fortis-gray-400">Chrome, Firefox, Brave</p>
                                    </div>
                                    <span className="text-fortis-purple opacity-0 group-hover:opacity-100 transition-opacity">
                                        Install →
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <Terminal code={installCode} title="installation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Everything you need to know about Quantum Wallet
                    </p>

                    <Accordion items={faqItems} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
