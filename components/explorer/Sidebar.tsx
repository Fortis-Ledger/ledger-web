"use client";

import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Box,
    Activity,
    Layers,
    Coins,
    Network,
    Settings,
    Menu,
    X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/ecosystem/explorer", active: true },
    { icon: Box, label: "Blocks", href: "#" },
    { icon: Activity, label: "Transactions", href: "#" },
    { icon: Layers, label: "Addresses", href: "#" },
    { icon: Coins, label: "Tokens", href: "#" },
    { icon: Network, label: "Validators", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
];

export function ExplorerSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#0A0F1E] border border-white/10 text-white"
                >
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Sidebar Container */}
            <aside className={cn(
                "fixed top-0 left-0 h-screen w-64 bg-[#0A0F1E] border-r border-white/5 transition-transform duration-300 z-40 lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-10">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                            <Box className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Fortis<span className="text-blue-400">Scan</span></span>
                    </div>

                    <nav className="space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                    item.active
                                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                        : "text-blue-200/60 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="absolute bottom-8 left-6 right-6">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20">
                            <div className="text-xs font-medium text-blue-200 mb-2">Network Status</div>
                            <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                Testnet Live
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
