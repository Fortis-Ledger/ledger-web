"use client";

import React from "react";
import { Terminal } from "@/components/ui/terminal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book } from "lucide-react";

const exampleCode = `$ npm install @fortis/sdk

$ node
> const { FortisClient } = require('@fortis/sdk');
> const client = new FortisClient();
> await client.connect();
✓ Connected to Fortis Ledger mainnet

> const balance = await client.getBalance('fortis1abc...');
> console.log(balance);
{ amount: '1000.50', denom: 'FORT' }`;

export function DeveloperCTA() {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background effects    */}
            <div className="absolute inset-0 bg-gradient-to-b from-fortis-gray-900 to-fortis-black" />
            <div className="absolute inset-0 cyber-grid-bg opacity-10" />

            {/* Glow orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-fortis-cyan/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fortis-violet/20 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fortis-cyan/10 border border-fortis-cyan/30 mb-6">
                            <span className="w-2 h-2 rounded-full bg-fortis-cyan animate-pulse" />
                            <span className="text-xs font-medium text-fortis-cyan uppercase tracking-wide">
                                Developer-First
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Start Building in <span className="gradient-text">Minutes</span>
                        </h2>

                        <p className="text-xl text-fortis-gray-300 mb-8 leading-relaxed">
                            Our SDKs, comprehensive documentation, and active developer community make it easy to build quantum-resistant applications.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Easy-to-use SDKs for JavaScript, Rust, and Python",
                                "Comprehensive API documentation with examples",
                                "Active Discord community with 24/7 support",
                                "Free testnet tokens and developer grants available",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-fortis-cyan" />
                                    </div>
                                    <span className="text-fortis-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="shadow-neon-cyan group">
                                View Documentation
                                <Book className="ml-2 w-4 h-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="group">
                                Explore Examples
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Right: Code example */}
                    <div className="relative">
                        <Terminal
                            code={exampleCode}
                            title="quickstart.js"
                            className="shadow-2xl"
                        />

                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-fortis-cyan/20 to-fortis-violet/20 rounded-3xl blur-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
