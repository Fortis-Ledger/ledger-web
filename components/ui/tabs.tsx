"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TabItem {
    id: string;
    label: string;
    icon?: LucideIcon;
    content: ReactNode;
}

interface TabsProps {
    items: TabItem[];
    defaultTab?: string;
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export function Tabs({
    items,
    defaultTab,
    orientation = "horizontal",
    className,
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

    const activeIndex = items.findIndex((item) => item.id === activeTab);
    const activeItem = items[activeIndex];

    return (
        <div
            className={cn(
                "flex gap-6",
                orientation === "vertical" ? "flex-row" : "flex-col",
                className
            )}
        >
            {/* Tab buttons */}
            <div
                className={cn(
                    "relative",
                    orientation === "vertical"
                        ? "flex flex-col gap-2 min-w-[200px]"
                        : "flex gap-2 overflow-x-auto scrollbar-hide border-b border-fortis-gray-700"
                )}
                role="tablist"
            >
                {items.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = item.id === activeTab;

                    return (
                        <button
                            key={item.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`tabpanel-${item.id}`}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "relative px-4 py-3 rounded-lg font-medium transition-all duration-300",
                                "flex items-center gap-2 whitespace-nowrap",
                                "focus:outline-none focus:ring-2 focus:ring-fortis-cyan",
                                isActive
                                    ? "text-white bg-fortis-gray-800 shadow-neon-cyan"
                                    : "text-fortis-gray-400 hover:text-white hover:bg-fortis-gray-800/50"
                            )}
                        >
                            {Icon && <Icon className="w-4 h-4" />}
                            <span>{item.label}</span>

                            {/* Active indicator */}
                            {isActive && orientation === "horizontal" && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-fortis-gradient" />
                            )}
                            {isActive && orientation === "vertical" && (
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-fortis-gradient" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Tab content */}
            <div
                role="tabpanel"
                id={`tabpanel-${activeTab}`}
                aria-label ledby={`tab-${activeTab}`}
                className="flex-1 animate-fade-in"
            >
                {activeItem?.content}
            </div>
        </div>
    );
}
