import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
    return (
        <div className={cn(
            "p-6 rounded-xl bg-white/5 border border-white/10 hover:border-fortis-cyan/50 transition-colors group",
            className
        )}>
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-fortis-cyan/20 transition-colors">
                <Icon className="w-6 h-6 text-fortis-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-fortis-slate leading-relaxed">
                {description}
            </p>
        </div>
    );
}
