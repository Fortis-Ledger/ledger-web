"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
    value: string | number;
    label: string;
    suffix?: string;
    prefix?: string;
    description?: string;
    color?: "cyan" | "violet" | "purple" | "green";
    animated?: boolean;
    className?: string;
}

const colorClasses = {
    cyan: "text-fortis-cyan",
    violet: "text-fortis-violet",
    purple: "text-fortis-purple",
    green: "text-fortis-green",
};

const glowClasses = {
    cyan: "text-glow",
    violet: "text-glow-violet",
    purple: "text-glow-purple",
    green: "text-glow",
};

export function StatCounter({
    value,
    label,
    suffix = "",
    prefix = "",
    description,
    color = "cyan",
    animated = true,
    className,
}: StatCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Extract numeric value for animation
    const numericValue = typeof value === "string"
        ? parseFloat(value.replace(/[^0-9.]/g, ""))
        : value;

    useEffect(() => {
        if (!animated || !ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [animated]);

    useEffect(() => {
        if (!isVisible || !animated || isNaN(numericValue)) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * numericValue);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, animated, numericValue]);

    const displayValue = animated ? count : numericValue;

    return (
        <div ref={ref} className={cn("text-center", className)}>
            <div className={cn(
                "text-5xl md:text-6xl font-bold mb-2",
                colorClasses[color],
                glowClasses[color]
            )}>
                {prefix}
                {animated && !isNaN(numericValue) ? displayValue.toLocaleString() : value}
                {suffix}
            </div>
            <div className="text-lg font-semibold text-white mb-1">
                {label}
            </div>
            {description && (
                <div className="text-sm text-fortis-gray-300 max-w-xs mx-auto">
                    {description}
                </div>
            )}
        </div>
    );
}
