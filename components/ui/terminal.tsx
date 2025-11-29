"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

interface TerminalProps {
    code: string;
    language?: string;
    title?: string;
    showLineNumbers?: boolean;
    className?: string;
}

export function Terminal({
    code,
    language = "bash",
    title = "Terminal",
    showLineNumbers = false,
    className,
}: TerminalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const lines = code.split("\n");

    return (
        <div className={cn(
            "relative rounded-xl overflow-hidden",
            "bg-fortis-gray-900 border border-fortis-gray-700",
            "shadow-glass",
            className
        )}>
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-fortis-gray-800/80 border-b border-fortis-gray-700">
                <div className="flex items-center gap-2">
                    {/* MacOS-style dots */}
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-fortis-red/80" />
                        <div className="w-3 h-3 rounded-full bg-fortis-yellow/80" />
                        <div className="w-3 h-3 rounded-full bg-fortis-green/80" />
                    </div>
                    <span className="ml-3 text-sm text-fortis-gray-300 font-mono">
                        {title}
                    </span>
                </div>

                {/* Copy button */}
                <button
                    onClick={handleCopy}
                    className={cn(
                        "p-2 rounded-md transition-all duration-200",
                        "hover:bg-fortis-gray-700",
                        "text-fortis-gray-400 hover:text-fortis-cyan"
                    )}
                    aria-label="Copy code"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-fortis-green" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Terminal Content */}
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                    {showLineNumbers ? (
                        <code>
                            {lines.map((line, index) => (
                                <div key={index} className="flex">
                                    <span className="select-none text-fortis-gray-600 mr-4 text-right" style={{ minWidth: "2rem" }}>
                                        {index + 1}
                                    </span>
                                    <span className={cn(
                                        line.startsWith("$") || line.startsWith("#")
                                            ? "text-fortis-cyan"
                                            : "text-fortis-gray-200"
                                    )}>
                                        {line}
                                    </span>
                                </div>
                            ))}
                        </code>
                    ) : (
                        <code className="text-fortis-gray-200">
                            {code.split("\n").map((line, index) => (
                                <div key={index}>
                                    {line.startsWith("$") || line.startsWith("#") ? (
                                        <>
                                            <span className="text-fortis-cyan">{line.substring(0, 1)}</span>
                                            <span className="text-fortis-gray-200">{line.substring(1)}</span>
                                        </>
                                    ) : (
                                        <span className={cn(
                                            line.startsWith(">") ? "text-fortis-green" :
                                                line.includes("error") ? "text-fortis-red" :
                                                    line.includes("warning") ? "text-fortis-yellow" :
                                                        "text-fortis-gray-200"
                                        )}>
                                            {line}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </code>
                    )}
                </pre>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />
        </div>
    );
}
