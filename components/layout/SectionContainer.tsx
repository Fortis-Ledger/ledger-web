import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "gradient" | "grid";
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-[1400px]",
    full: "max-w-full",
};

export function SectionContainer({
    children,
    className,
    variant = "default",
    maxWidth = "xl",
}: SectionContainerProps) {
    return (
        <section
            className={cn(
                "relative py-16 md:py-24 px-4 overflow-hidden",
                variant === "gradient" && "bg-gradient-to-b from-fortis-black to-fortis-gray-900",
                variant === "grid" && "cyber-grid-bg",
                className
            )}
        >
            <div className={cn("mx-auto", maxWidthClasses[maxWidth])}>
                {children}
            </div>
        </section>
    );
}
