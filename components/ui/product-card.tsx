import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
    title: string;
    subtitle?: string;
    description: string;
    icon?: LucideIcon;
    emoji?: string;
    color?: "cyan" | "violet" | "purple" | "blue" | "green" | "yellow";
    href?: string;
    className?: string;
}

const colorClasses = {
    cyan: "group-hover:border-fortis-cyan/50 group-hover:shadow-neon-cyan",
    violet: "group-hover:border-fortis-violet/50 group-hover:shadow-neon-violet",
    purple: "group-hover:border-fortis-purple/50 group-hover:shadow-neon-purple",
    blue: "group-hover:border-fortis-blue/50",
    green: "group-hover:border-fortis-green/50",
    yellow: "group-hover:border-fortis-yellow/50",
};

const iconColorClasses = {
    cyan: "text-fortis-cyan",
    violet: "text-fortis-violet",
    purple: "text-fortis-purple",
    blue: "text-fortis-blue",
    green: "text-fortis-green",
    yellow: "text-fortis-yellow",
};

export function ProductCard({
    title,
    subtitle,
    description,
    icon: Icon,
    emoji,
    color = "cyan",
    href,
    className,
}: ProductCardProps) {
    const Card = href ? "a" : "div";

    return (
        <Card
            href={href}
            className={cn(
                "group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer",
                "bg-gradient-to-br from-fortis-gray-800/50 to-fortis-gray-900/50",
                "backdrop-blur-md border border-fortis-gray-700",
                "hover:-translate-y-2 hover:scale-[1.02]",
                colorClasses[color],
                className
            )}
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fortis-cyan/5 to-fortis-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                {(Icon || emoji) && (
                    <div className="mb-4">
                        {Icon ? (
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center",
                                "bg-fortis-gray-700/50 backdrop-blur-sm",
                                "group-hover:scale-110 transition-transform duration-300"
                            )}>
                                <Icon className={cn("w-6 h-6", iconColorClasses[color])} />
                            </div>
                        ) : (
                            <span className="text-4xl group-hover:scale-110 inline-block transition-transform duration-300">
                                {emoji}
                            </span>
                        )}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-glow transition-all">
                    {title}
                </h3>

                {/* Subtitle */}
                {subtitle && (
                    <p className={cn(
                        "text-sm font-medium mb-2",
                        iconColorClasses[color],
                        "group-hover:text-glow-purple"
                    )}>
                        {subtitle}
                    </p>
                )}

                {/* Description */}
                <p className="text-fortis-gray-300 leading-relaxed">
                    {description}
                </p>

                {/* Hover indicator */}
                {href && (
                    <div className="mt-4 flex items-center gap-2 text-fortis-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Learn more</span>
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </div>
                )}
            </div>

            {/* Corner accent */}
            <div className={cn(
                "absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity",
                "bg-gradient-to-bl",
                color === "cyan" ? "from-fortis-cyan" :
                    color === "violet" ? "from-fortis-violet" :
                        color === "purple" ? "from-fortis-purple" :
                            "from-fortis-blue"
            )} style={{ borderTopRightRadius: "1rem" }} />
        </Card>
    );
}
