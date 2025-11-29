import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Terminal, Code, Box, Layers } from "lucide-react";

export default function DevelopersPage() {
    return (
        <main className="min-h-screen bg-fortis-black selection:bg-fortis-cyan/30">
            <Navbar />

            <PageHeader
                title="Build the Future"
                description="Frictionless tooling. Familiar languages. Quantum security. Start building decentralized applications that last forever."
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Tools List */}
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-fortis-cyan/10 flex items-center justify-center shrink-0">
                                    <Terminal className="w-6 h-6 text-fortis-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Fortis CLI</h3>
                                    <p className="text-fortis-slate mb-4">
                                        Deploy contracts, manage keys, and run local nodes with a single command.
                                    </p>
                                    <code className="bg-black/50 px-3 py-1 rounded text-sm text-fortis-cyan font-mono border border-white/10">
                                        npm install -g @fortis/cli
                                    </code>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-fortis-violet/10 flex items-center justify-center shrink-0">
                                    <Code className="w-6 h-6 text-fortis-violet" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">SDKs & Libraries</h3>
                                    <p className="text-fortis-slate mb-4">
                                        Native support for TypeScript, Rust, and Python.
                                    </p>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">TypeScript</Button>
                                        <Button variant="outline" size="sm">Rust</Button>
                                        <Button variant="outline" size="sm">Python</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Box className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Smart Contracts</h3>
                                    <p className="text-fortis-slate">
                                        Write high-performance contracts in Rust or AssemblyScript. Compiled to WASM for near-native speed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Code Snippet */}
                        <div className="bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <span className="ml-2 text-xs text-fortis-slate font-mono">contract.rs</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="text-sm font-mono text-gray-300">
                                    {`use fortis_std::{Contract, Context};

pub struct SecureVault {
    owner: Address,
    balance: u64,
}

impl Contract for SecureVault {
    fn init(ctx: &Context) -> Self {
        Self {
            owner: ctx.sender(),
            balance: 0,
        }
    }

    fn deposit(&mut self, amount: u64) {
        self.balance += amount;
    }
}`}
                                </pre>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 bg-fortis-event border-t border-white/5 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to build?</h2>
                    <p className="text-fortis-slate mb-8">
                        Join thousands of developers building the next generation of secure dApps.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="shadow-neon-cyan">Read the Docs</Button>
                        <Button size="lg" variant="secondary">Join Discord</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
