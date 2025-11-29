"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Terminal } from "@/components/ui/terminal";
import { Tabs } from "@/components/ui/tabs";
import { Code, Book, Rocket, Users, Github, MessageCircle } from "lucide-react";

const quickStartJS = `import { FortisClient } from '@fortis/sdk';

// Connect to mainnet
const client = new FortisClient({
  network: 'mainnet',
  rpcUrl: 'https://rpc.fortis.network'
});

// Check balance
const balance = await client.getBalance(
  'fortis1qx7k9p2vh3m8r5...'
);
console.log(balance); // { amount: '1000', denom: 'FORT' }

// Send transaction
const tx = await client.sendTokens({
  to: 'fortis1yz8m3...',
  amount: '100',
  denom: 'FORT'
});

console.log('Transaction hash:', tx.hash);`;

const quickStartRust = `use fortis_sdk::Client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize client
    let client = Client::new("https://rpc.fortis.network")?;
    
    // Query account
    let account = client.get_account(
        "fortis1qx7k9p2vh3m8r5..."
    ).await?;
    
    println!("Balance: {} FORT", account.balance);
    
    // Build and send transaction
    let tx = client.build_send_tx()
        .to("fortis1yz8m3...")
        .amount(100)
        .sign_and_broadcast()
        .await?;
    
    println!("Tx hash: {}", tx.hash);
    Ok(())
}`;

const quickStartPython = `from fortis import Client

# Create client instance
client = Client(rpc_url='https://rpc.fortis.network')

# Get account balance
balance = client.get_balance('fortis1qx7k9p2vh3m8r5...')
print(f"Balance: {balance.amount} {balance.denom}")

# Send tokens
tx = client.send_tokens(
    to='fortis1yz8m3...',
    amount='100',
    denom='FORT'
)

print(f"Transaction hash: {tx.hash}")`;

export default function DevelopersPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Developer Portal"
                subtitle="Build quantum-resistant applications with our comprehensive SDKs and tools"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Developers" }
                ]}
            />

            {/* Quick Start Paths */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Choose Your <span className="gradient-text">Path</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Start building in the way that works best for you
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a
                            href="/developers/docs"
                            className="group p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20 hover:border-fortis-cyan/50 transition-all hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-fortis-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Book className="w-7 h-7 text-fortis-cyan" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Read the Docs</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Comprehensive guides, API references, and tutorials to get you started
                            </p>
                            <span className="text-fortis-cyan font-medium group-hover:underline">
                                View Documentation →
                            </span>
                        </a>

                        <a
                            href="/developers/playground"
                            className="group p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20 hover:border-fortis-violet/50 transition-all hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-fortis-violet/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Code className="w-7 h-7 text-fortis-violet" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Try the Playground</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Interactive code editor with live examples and instant execution
                            </p>
                            <span className="text-fortis-violet font-medium group-hover:underline">
                                Open Playground →
                            </span>
                        </a>

                        <a
                            href="/developers/academy"
                            className="group p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20 hover:border-fortis-purple/50 transition-all hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-fortis-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Rocket className="w-7 h-7 text-fortis-purple" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Developer Academy</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Structured learning paths from beginner to advanced blockchain development
                            </p>
                            <span className="text-fortis-purple font-medium group-hover:underline">
                                Start Learning →
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SDK Showcase */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Quick Start <span className="gradient-text">Examples</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Get started with your favorite language
                    </p>

                    <Tabs
                        items={[
                            {
                                id: "javascript",
                                label: "JavaScript",
                                icon: Code,
                                content: (
                                    <div className="space-y-4">
                                        <Terminal
                                            code={quickStartJS}
                                            title="quickstart.js"
                                            showLineNumbers
                                        />
                                        <div className="flex gap-4">
                                            <a
                                                href="#"
                                                className="px-6 py-3 rounded-lg bg-fortis-cyan/10 border border-fortis-cyan/30 text-fortis-cyan hover:bg-fortis-cyan/20 transition-all"
                                            >
                                                Full JS Documentation
                                            </a>
                                            <a
                                                href="#"
                                                className="px-6 py-3 rounded-lg border border-fortis-gray-700 text-white hover:bg-fortis-gray-800 transition-all"
                                            >
                                                View on GitHub
                                            </a>
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                id: "rust",
                                label: "Rust",
                                icon: Code,
                                content: (
                                    <div className="space-y-4">
                                        <Terminal
                                            code={quickStartRust}
                                            title="main.rs"
                                            showLineNumbers
                                        />
                                        <div className="flex gap-4">
                                            <a
                                                href="#"
                                                className="px-6 py-3 rounded-lg bg-fortis-violet/10 border border-fortis-violet/30 text-fortis-violet hover:bg-fortis-violet/20 transition-all"
                                            >
                                                Full Rust Documentation
                                            </a>
                                            <a
                                                href="#"
                                                className="px-6 py-3 rounded-lg border border-fortis-gray-700 text-white hover:bg-fortis-gray-800 transition-all"
                                            >
                                                View on Crates.io
                                            </a>
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                id: "python",
                                label: "Python",
                                icon: Code,
                                content: (
                                    <div className="space-y-4">
                                        <Terminal
                                            code={quickStartPython}
                                            title="quickstart.py"
                                            showLineNumbers
                                        />
                                        <div className="flex gap-4">
                                            <a
                                                href="#"
                                                className="px-6 py-3 rounded-lg bg-fortis-purple/10 border border-fortis-purple/30 text-fortis-purple hover:bg-fortis-purple/20 transition-all"
                                            >
                                                Full Python Documentation
                                            </a>
                                            <a
                                                href="#"
                                                className="px-6 py-3 rounded-lg border border-fortis-gray-700 text-white hover:bg-fortis-gray-800 transition-all"
                                            >
                                                View on PyPI
                                            </a>
                                        </div>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Community & Support */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Join the <span className="gradient-text">Community</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Get help, share ideas, and connect with other builders
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <a
                            href="#"
                            className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-cyan/30 transition-all group"
                        >
                            <MessageCircle className="w-10 h-10 text-fortis-cyan mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Discord Community</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Join 50,000+ developers in our active Discord server. Get help 24/7.
                            </p>
                            <span className="text-fortis-cyan group-hover:underline">Join Discord →</span>
                        </a>

                        <a
                            href="#"
                            className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-violet/30 transition-all group"
                        >
                            <Github className="w-10 h-10 text-fortis-violet mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Explore our GitHub repos, contribute code, and report issues.
                            </p>
                            <span className="text-fortis-violet group-hover:underline">View GitHub →</span>
                        </a>

                        <a
                            href="/developers/grants"
                            className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 hover:border-fortis-green/30 transition-all group"
                        >
                            <Rocket className="w-10 h-10 text-fortis-green mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Developer Grants</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Apply for funding to build innovative projects on Fortis Ledger.
                            </p>
                            <span className="text-fortis-green group-hover:underline">Learn More →</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testnet Resources */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Test on Our <span className="gradient-text">Testnet</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8">
                        Get free test tokens and start building without risking real assets
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/network/testnet"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            Get Testnet Tokens
                        </a>
                        <a
                            href="/ecosystem/explorer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            Testnet Explorer
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
