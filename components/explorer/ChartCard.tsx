"use client";

import { cn } from "@/lib/utils";

interface ChartCardProps {
    title: string;
    value: string;
    change?: string;
    data: number[];
    color?: "blue" | "purple" | "cyan" | "green";
    className?: string;
}

export function ChartCard({ title, value, change, data, color = "blue", className }: ChartCardProps) {
    // Generate SVG path from data
    const width = 300;
    const height = 100;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d - min) / range) * height;
        return `${x},${y}`;
    }).join(" ");

    const colors = {
        blue: "text-blue-400 from-blue-500/20",
        purple: "text-purple-400 from-purple-500/20",
        cyan: "text-cyan-400 from-cyan-500/20",
        green: "text-green-400 from-green-500/20",
    };

    const strokeColors = {
        blue: "#60A5FA",
        purple: "#A78BFA",
        cyan: "#22D3EE",
        green: "#4ADE80",
    };

    return (
        <div className={cn("p-6 rounded-3xl bg-[#0F1629] border border-white/5 relative overflow-hidden group", className)}>
            <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-sm font-medium text-blue-200/60 mb-1">{title}</h3>
                    <div className="text-2xl font-bold text-white">{value}</div>
                </div>
                {change && (
                    <div className="px-2 py-1 rounded-lg bg-white/5 text-xs font-bold text-green-400 border border-white/5">
                        {change}
                    </div>
                )}
            </div>

            <div className="h-24 w-full relative">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={strokeColors[color]} stopOpacity="0.2" />
                            <stop offset="100%" stopColor={strokeColors[color]} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d={`M0,${height} ${points} L${width},${height} Z`}
                        fill={`url(#gradient-${color})`}
                        className="transition-all duration-500 ease-in-out"
                    />
                    <path
                        d={`M${points}`}
                        fill="none"
                        stroke={strokeColors[color]}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    />
                </svg>
            </div>
        </div>
    );
}
