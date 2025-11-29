import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb?: Array<{ label: string; href?: string }>;
    className?: string;
}

export function PageHeader({ title, subtitle, breadcrumb, className }: PageHeaderProps) {
    return (
        <div className={cn(
            "relative pt-32 pb-24 px-4 overflow-hidden",
            "bg-gradient-to-b from-fortis-gray-900 to-fortis-black",
            className
        )}>
            {/* Background effects */}
            <div className="absolute inset-0 cyber-grid-bg opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-fortis-cyan/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-fortis-violet/10 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Breadcrumb */}
                {breadcrumb && breadcrumb.length > 0 && (
                    <nav className="flex items-center gap-2 mb-6 text-sm">
                        {breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && (
                                    <ChevronRight className="w-4 h-4 text-fortis-gray-500" />
                                )}
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="text-fortis-gray-400 hover:text-fortis-cyan transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className="text-fortis-cyan">{item.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                )}

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-xl md:text-2xl text-fortis-gray-300 max-w-4xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
