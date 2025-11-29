import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Terminal } from "@/components/ui/terminal";
import { Tabs } from "@/components/ui/tabs";
import { Code, Download, Book, Package } from "lucide-react";

const jsInstall = `# Install via npm
npm install @fortis/sdk

# Or via yarn
yarn add @fortis/sdk

# Import in your project
import { FortisClient } from '@fortis/sdk';`;

const rustInstall = `# Add to Cargo.toml
[dependencies]
fortis-sdk = "0.1.0"

# Use in your code
use fortis_sdk::Client;`;

const pythonInstall = `# Install via pip
pip install fortis-sdk

# Import in your code
from fortis import Client`;

const jsExample = `import { FortisClient, Wallet } from '@fortis/sdk';

// Initialize client
const client = new FortisClient({
  network: 'mainnet',
  rpcUrl: 'https://rpc.fortis.network'
});

// Create wallet from mnemonic
const wallet = Wallet.fromMnemonic('your mnemonic here');

// Send transaction
const tx = await client.sendTokens({
  from: wallet,
  to: 'fortis1abc...',
  amount: '100',
  denom: 'FORT'
});

console.log('TX Hash:', tx.hash);`;

const rustExample = `use fortis_sdk::{Client, Wallet};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create client
    let client = Client::new("https://rpc.fortis.network")?;
    
    // Load wallet
    let wallet = Wallet::from_mnemonic("your mnemonic")?;
    
    // Send transaction
    let tx = client
        .build_send_tx()
        .from(&wallet)
        .to("fortis1abc...")
        .amount(100)
        .sign_and_broadcast()
        .await?;
    
    println!("TX Hash: {}", tx.hash);
    Ok(())
}`;

const pythonExample = `from fortis import Client, Wallet

# Initialize client
client = Client(rpc_url='https://rpc.fortis.network')

# Create wallet
wallet = Wallet.from_mnemonic('your mnemonic here')

# Send transaction
tx = client.send_tokens(
    from_wallet=wallet,
    to='fortis1abc...',
    amount='100',
    denom='FORT'
)

print(f'TX Hash: {tx.hash}')`;

export default function SDKsPage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Fortis SDKs"
                subtitle="Production-ready developer toolkits for JavaScript, Rust, and Python"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "SDKs" }
                ]}
            />

            {/* SDK Options */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-cyan/10 to-transparent border border-fortis-cyan/20">
                            <Code className="w-12 h-12 text-fortis-cyan mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">JavaScript/TypeScript</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Full-featured SDK for Node.js and browser environments with TypeScript support
                            </p>
                            <div className="flex gap-2">
                                <a href="#" className="text-sm text-fortis-cyan hover:underline">npm →</a>
                                <a href="#" className="text-sm text-fortis-cyan hover:underline">GitHub →</a>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-violet/10 to-transparent border border-fortis-violet/20">
                            <Package className="w-12 h-12 text-fortis-violet mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Rust</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                High-performance SDK for building production services and smart contracts
                            </p>
                            <div className="flex gap-2">
                                <a href="#" className="text-sm text-fortis-violet hover:underline">crates.io →</a>
                                <a href="#" className="text-sm text-fortis-violet hover:underline">Docs →</a>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-fortis-purple/10 to-transparent border border-fortis-purple/20">
                            <Download className="w-12 h-12 text-fortis-purple mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Python</h3>
                            <p className="text-fortis-gray-300 mb-4">
                                Easy-to-use SDK perfect for data analysis, automation, and rapid prototyping
                            </p>
                            <div className="flex gap-2">
                                <a href="#" className="text-sm text-fortis-purple hover:underline">PyPI →</a>
                                <a href="#" className="text-sm text-fortis-purple hover:underline">Docs →</a>
                            </div>
                        </div>
                    </div>

                    {/* Installation */}
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Installation <span className="gradient-text">Guide</span>
                    </h2>

                    <Tabs
                        items={[
                            {
                                id: "js",
                                label: "JavaScript",
                                content: <Terminal code={jsInstall} title="install.sh" />,
                            },
                            {
                                id: "rust",
                                label: "Rust",
                                content: <Terminal code={rustInstall} title="Cargo.toml" />,
                            },
                            {
                                id: "python",
                                label: "Python",
                                content: <Terminal code={pythonInstall} title="install.sh" />,
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Code Examples */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Code <span className="gradient-text">Examples</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Get started with these common patterns
                    </p>

                    <Tabs
                        items={[
                            {
                                id: "js-example",
                                label: "JavaScript",
                                content: <Terminal code={jsExample} title="example.js" showLineNumbers />,
                            },
                            {
                                id: "rust-example",
                                label: "Rust",
                                content: <Terminal code={rustExample} title="main.rs" showLineNumbers />,
                            },
                            {
                                id: "python-example",
                                label: "Python",
                                content: <Terminal code={pythonExample} title="example.py" showLineNumbers />,
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        SDK <span className="gradient-text">Features</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-3">🔐 Quantum-Safe by Default</h3>
                            <p className="text-fortis-gray-300">
                                All SDKs use post-quantum cryptography (CRYSTALS-Dilithium) for signatures
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-3">⚡ Fast & Lightweight</h3>
                            <p className="text-fortis-gray-300">
                                Optimized for performance with minimal dependencies
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-3">📚 Comprehensive Docs</h3>
                            <p className="text-fortis-gray-300">
                                Detailed API references, tutorials, and examples
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-3">🔄 Regular Updates</h3>
                            <p className="text-fortis-gray-300">
                                Maintained by the core team with frequent releases
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-3">🛡️ Type-Safe</h3>
                            <p className="text-fortis-gray-300">
                                Full TypeScript definitions and Rust type safety
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <h3 className="text-xl font-bold text-white mb-3">🧪 Well Tested</h3>
                            <p className="text-fortis-gray-300">
                                Extensive test coverage with integration tests
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Need <span className="gradient-text">Help</span>?
                    </h2>
                    <p className="text-xl text-fortis-gray-300 mb-8">
                        Check out our documentation and join the community
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/developers/docs"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            <Book className="w-5 h-5 mr-2" />
                            View Documentation
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-fortis-cyan text-fortis-cyan font-semibold hover:bg-fortis-cyan/10 transition-all"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
