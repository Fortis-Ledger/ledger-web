"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownLeft, Box, Copy } from "lucide-react";

const transactions = [
    { type: "Transfer", hash: "0x7f...9b2c", from: "0x12...4a", to: "0x82...3f", amount: "1,250.00", token: "FORT", time: "2 mins ago", status: "Success" },
    { type: "Contract", hash: "0x3e...5f1a", from: "0x9c...2d", to: "Contract", amount: "0.00", token: "FORT", time: "5 mins ago", status: "Success" },
    { type: "Transfer", hash: "0x9c...8e2d", from: "0x1a...5b", to: "0x6e...4f", amount: "540.50", token: "FORT", time: "8 mins ago", status: "Pending" },
    { type: "Stake", hash: "0x1a...3c5b", from: "0x6e...4f", to: "Validator", amount: "10,000.00", token: "FORT", time: "12 mins ago", status: "Success" },
    { type: "Transfer", hash: "0x6e...9a4f", from: "0x3e...1a", to: "0x12...4a", amount: "25.00", token: "FORT", time: "15 mins ago", status: "Failed" },
];

export function TransactionTable() {
    return (
        <div className="w-full bg-[#0F1629] border border-white/5 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Latest Transactions</h3>
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-white/2">
                        <tr>
                            <th className="px-6 py-4 text-xs font-medium text-blue-200/40 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-4 text-xs font-medium text-blue-200/40 uppercase tracking-wider">Tx Hash</th>
                            <th className="px-6 py-4 text-xs font-medium text-blue-200/40 uppercase tracking-wider">From</th>
                            <th className="px-6 py-4 text-xs font-medium text-blue-200/40 uppercase tracking-wider">To</th>
                            <th className="px-6 py-4 text-xs font-medium text-blue-200/40 uppercase tracking-wider text-right">Amount</th>
                            <th className="px-6 py-4 text-xs font-medium text-blue-200/40 uppercase tracking-wider text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {transactions.map((tx, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-8 h-8 rounded-lg flex items-center justify-center",
                                            tx.type === "Transfer" ? "bg-blue-500/10 text-blue-400" :
                                                tx.type === "Contract" ? "bg-purple-500/10 text-purple-400" :
                                                    "bg-green-500/10 text-green-400"
                                        )}>
                                            {tx.type === "Transfer" ? <ArrowUpRight className="w-4 h-4" /> :
                                                tx.type === "Contract" ? <Box className="w-4 h-4" /> :
                                                    <ArrowDownLeft className="w-4 h-4" />}
                                        </div>
                                        <span className="text-sm font-medium text-white">{tx.type}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-mono text-blue-400">{tx.hash}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-mono text-blue-200/60">{tx.from}</span>
                                        <Copy className="w-3 h-3 text-white/20 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-white" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-mono text-blue-200/60">{tx.to}</span>
                                        <Copy className="w-3 h-3 text-white/20 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-white" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <span className="text-sm font-bold text-white">{tx.amount}</span>
                                    <span className="text-xs text-blue-200/40 ml-1">{tx.token}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <span className="text-xs text-blue-200/40">{tx.time}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
