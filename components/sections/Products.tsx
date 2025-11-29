"use client";

import React from "react";
import { ProductCard } from "@/components/ui/product-card";
import { PRODUCTS } from "@/lib/brand";
import { Shield, Wallet, Search, Code, Link2, User, Brain } from "lucide-react";

const productIcons = {
    blockchain: Shield,
    wallet: Wallet,
    explorer: Search,
    sdk: Code,
    bridge: Link2,
    identity: User,
    compute: Brain,
};

// Map product names to their URL slugs
const productUrls: Record<string, string> = {
    "Fortis Ledger": "/ecosystem/blockchain",
    "Quantum Wallet": "/ecosystem/wallet",
    "Fortis Explorer": "/ecosystem/explorer",
    "Fortis SDK": "/ecosystem/sdks",
    "Fortis Bridge": "/ecosystem/bridge",
    "Fortis ID": "/ecosystem/identity",
    "Fortis Compute": "/ecosystem/compute",
};

export function Products() {
    const productList = [
        { ...PRODUCTS.blockchain, icon: productIcons.blockchain },
        { ...PRODUCTS.wallet, icon: productIcons.wallet },
        { ...PRODUCTS.explorer, icon: productIcons.explorer },
        { ...PRODUCTS.sdk, icon: productIcons.sdk },
        { ...PRODUCTS.bridge, icon: productIcons.bridge },
        { ...PRODUCTS.identity, icon: productIcons.identity },
        { ...PRODUCTS.compute, icon: productIcons.compute },
    ];

    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-fortis-black to-fortis-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Complete <span className="gradient-text">Ecosystem</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 max-w-3xl mx-auto">
                        Everything you need to build, deploy, and scale quantum-resistant applications
                    </p>
                </div>

                {/* Products grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productList.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.name}
                            subtitle={product.subtitle}
                            description={product.description}
                            icon={product.icon}
                            color={product.color}
                            href={productUrls[product.name] || "/ecosystem"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
