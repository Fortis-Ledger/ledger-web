import React from "react";
import { AlertCircle, Code2, Rocket } from "lucide-react";

type StatusType = "coming-soon" | "testnet" | "beta" | "demo";

interface StatusBannerProps {
    type?: StatusType;
    message?: string;
}

export function StatusBanner({ type = "coming-soon", message }: StatusBannerProps) {
    const config = {
        "coming-soon": {
            icon: Rocket,
            color: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/40",
            textColor: "text-yellow-400",
            iconColor: "text-yellow-400",
            title: "Coming Soon",
            defaultMessage: "This ecosystem is currently under development. All data shown is simulated for preview purposes.",
        },
        testnet: {
            icon: Code2,
            color: "bg-gradient-to-r from-fortis-cyan/20 to-fortis-blue/20 border-fortis-cyan/40",
            textColor: "text-fortis-cyan",
            iconColor: "text-fortis-cyan",
            title: "Testnet Only",
            defaultMessage: "Currently running on testnet. Mainnet launch coming soon.",
        },
        beta: {
            icon: AlertCircle,
            color: "bg-gradient-to-r from-fortis-violet/20 to-fortis-purple/20 border-fortis-violet/40",
            textColor: "text-fortis-violet",
            iconColor: "text-fortis-violet",
            title: "Beta Version",
            defaultMessage: "Beta release. Features may change.",
        },
        demo: {
            icon: AlertCircle,
            color: "bg-gradient-to-r from-fortis-purple/20 to-fortis-violet/20 border-fortis-purple/40",
            textColor: "text-fortis-purple",
            iconColor: "text-fortis-purple",
            title: "Demo Data",
            defaultMessage: "All data shown is simulated for demonstration purposes.",
        },
    };

    const { icon: Icon, color, textColor, iconColor, title, defaultMessage } = config[type];

    return (
        <div className={`relative ${color} border-y backdrop-blur-sm py-2.5 px-4 z-40`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-2.5 text-center">
                    <Icon className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
                    <div className="text-sm">
                        <span className={`font-bold ${textColor}`}>{title}:</span>
                        <span className="text-white/90 ml-2">{message || defaultMessage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

type BadgeType = "coming-soon" | "testnet" | "beta" | "live" | "demo";

interface StatusBadgeProps {
    type: BadgeType;
    className?: string;
}

export function StatusBadge({ type, className = "" }: StatusBadgeProps) {
    const config = {
        "coming-soon": {
            label: "Coming Soon",
            className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
        },
        testnet: {
            label: "Testnet",
            className: "bg-fortis-cyan/10 text-fortis-cyan border-fortis-cyan/30",
        },
        beta: {
            label: "Beta",
            className: "bg-fortis-violet/10 text-fortis-violet border-fortis-violet/30",
        },
        live: {
            label: "Live",
            className: "bg-fortis-green/10 text-fortis-green border-fortis-green/30",
        },
        demo: {
            label: "Demo Data",
            className: "bg-fortis-purple/10 text-fortis-purple border-fortis-purple/30",
        },
    };

    const { label, className: badgeClass } = config[type];

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${badgeClass} ${className}`}>
            {label}
        </span>
    );
}
