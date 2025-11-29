"use client";

import { ExplorerSidebar } from "@/components/explorer/Sidebar";
import { ChartCard } from "@/components/explorer/ChartCard";
import { TransactionTable } from "@/components/explorer/TransactionTable";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Layers, Box, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExplorerPage() {
    return (
        <div className="min-h-screen bg-[#020412] text-white flex">
            {/* Sidebar */}
            <ExplorerSidebar />

            {/* Main Content */}
            <main className="flex-1 lg:pl-64 min-h-screen relative">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

                <div className="p-4 lg:p-8 max-w-[1600px] mx-auto relative z-10">

                    {/* Development Warning */}
                    <div className="mb-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-yellow-500/20">
                            <Zap className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div className="text-sm text-yellow-200/80">
                            <span className="font-bold text-yellow-500">System Under Development:</span> You are viewing simulated data on the Fortis Testnet. Mainnet launch is scheduled for Q4 2025.
                        </div>
                    </div>

                    {/* Top Bar */}
                    <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button variant="outline" className="border-white/10 bg-[#0A0F1E] text-white hover:bg-white/5 gap-2 min-w-[140px] justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    Testnet (Beta)
                                </div>
                                <ChevronDown className="w-4 h-4 text-white/40" />
                            </Button>
                        </div>

                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/40" />
                            <Input
                                placeholder="Search for a tx, address, name or block"
                                className="pl-10 bg-[#0A0F1E] border-white/10 text-white placeholder:text-blue-200/20 h-10 rounded-xl focus-visible:ring-blue-500/50"
                            />
                        </div>
                    </header>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: "Addresses", value: "2,631,766", icon: Layers, color: "text-blue-400" },
                            { label: "Block Height", value: "1,544,968", icon: Box, color: "text-purple-400" },
                            { label: "Transactions", value: "26,771,945", icon: Activity, color: "text-cyan-400" },
                            { label: "TPS", value: "0.79", icon: Zap, color: "text-green-400" },
                        ].map((stat, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-[#0A0F1E] border border-white/5 flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-blue-200/50 mb-1">{stat.label}</div>
                                    <div className="text-xl font-bold text-white">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <ChartCard
                            title="Transactions"
                            value="46,937"
                            change="+12.5%"
                            data={[30, 45, 35, 55, 45, 60, 50, 75, 65, 80, 70, 90]}
                            color="cyan"
                        />
                        <ChartCard
                            title="Address Growth"
                            value="5,839"
                            change="+5.2%"
                            data={[20, 25, 30, 28, 35, 40, 38, 45, 50, 55, 60, 65]}
                            color="blue"
                        />
                    </div>

                    {/* Transactions Table */}
                    <TransactionTable />

                </div>
            </main>
        </div>
    );
}
