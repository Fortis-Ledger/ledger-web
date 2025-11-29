import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <div className={cn("relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden", className)}>
            <div className="absolute inset-0 bg-fortis-black z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fortis-violet/20 via-fortis-black to-fortis-black opacity-50" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 text-glow">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-fortis-slate max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
