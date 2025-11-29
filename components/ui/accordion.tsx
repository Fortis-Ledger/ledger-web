"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

interface AccordionProps {
    items: AccordionItemProps[];
    allowMultiple?: boolean;
    className?: string;
}

function AccordionItem({
    title,
    children,
    isOpen,
    onToggle,
}: AccordionItemProps & { isOpen: boolean; onToggle: () => void }) {
    return (
        <div className={cn(
            "border border-fortis-gray-700 rounded-xl overflow-hidden",
            "transition-all duration-300",
            isOpen && "border-fortis-cyan/30 shadow-neon-cyan"
        )}>
            {/* Header */}
            <button
                onClick={onToggle}
                className={cn(
                    "w-full flex items-center justify-between p-5",
                    "bg-fortis-gray-800/50 hover:bg-fortis-gray-800",
                    "transition-colors duration-200",
                    "text-left"
                )}
            >
                <span className="text-lg font-semibold text-white pr-4">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-fortis-cyan transition-transform duration-300 flex-shrink-0",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {/* Content */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-5 bg-fortis-gray-900/30">
                    <div className="text-fortis-gray-300 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Accordion({
    items,
    allowMultiple = false,
    className,
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<Set<number>>(
        new Set(items.map((item, index) => item.defaultOpen ? index : -1).filter(i => i >= 0))
    );

    const handleToggle = (index: number) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                if (!allowMultiple) {
                    newSet.clear();
                }
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div className={cn("space-y-3", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    {...item}
                    isOpen={openItems.has(index)}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
