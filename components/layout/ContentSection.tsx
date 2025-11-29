import { cn } from "@/lib/utils";

interface ContentSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    reversed?: boolean;
}

export function ContentSection({ title, children, className, reversed = false }: ContentSectionProps) {
    return (
        <section className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
            <div className="max-w-7xl mx-auto">
                <div className={cn("flex flex-col lg:flex-row gap-12 items-center", reversed && "lg:flex-row-reverse")}>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
                        <div className="text-fortis-slate text-lg leading-relaxed space-y-4">
                            {children}
                        </div>
                    </div>
                    <div className="flex-1 w-full min-h-[300px] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-fortis-cyan/10 to-fortis-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Placeholder for visual/image */}
                        <div className="w-32 h-32 rounded-full bg-fortis-gradient blur-3xl opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
