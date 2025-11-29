"use client";

import { Button } from "@/components/ui/button";
import EnhancedHeroScene from "@/components/webgl/EnhancedHeroScene";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const hudRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // HUD elements animation
        tl.from(hudRef.current?.children || [], {
            opacity: 0,
            y: -10,
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out",
        });

        // Main text animation
        tl.from(textRef.current?.children || [], {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
        }, "-=1");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-fortis-black">
            {/* Enhanced WebGL Background */}
            <EnhancedHeroScene />

            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-10 pointer-events-none" />

            {/* Minimal HUD Elements */}
            <div ref={hudRef} className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                {/* Top Bar */}
                <div className="absolute top-24 left-0 right-0 px-12 flex justify-between items-start text-[10px] font-mono text-fortis-gray-500 tracking-widest uppercase">
                    <div className="flex flex-col gap-1">
                        <span className="text-fortis-cyan">System Status: Nominal</span>
                        <span>Encryption: Post-Quantum 256-bit</span>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                        <span className="text-fortis-violet">Network: Testnet Alpha</span>
                        <span>Block Height: 12,405,992</span>
                    </div>
                </div>

                {/* Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/20 opacity-50" />
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center pt-20">
                <div ref={textRef} className="flex flex-col items-center">

                    {/* Badge */}
                    <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fortis-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-fortis-cyan"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-medium text-fortis-gray-300 tracking-wider uppercase">Ecosystem Preview • Q2 2024</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]">
                        <span className="block text-2xl sm:text-4xl md:text-6xl font-light text-fortis-gray-400 mb-1 md:mb-2 tracking-wide opacity-80">Secure Beyond</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fortis-cyan via-white to-fortis-violet animate-gradient-x pb-2 block">
                            Tomorrow
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-fortis-gray-400 max-w-xs sm:max-w-2xl mb-8 md:mb-10 leading-relaxed font-light mx-auto">
                        The world's first <span className="text-white font-medium">quantum-resistant</span> Layer 1 blockchain.
                        Engineered for infinite scalability and zero-trust security.
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
                        <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-white text-black hover:bg-fortis-cyan hover:text-black transition-all duration-300 font-semibold text-base rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                            Start Building <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-medium text-base rounded-full backdrop-blur-sm">
                            <Play className="mr-2 w-3 h-3 fill-current" /> Watch Demo
                        </Button>
                    </div>

                    {/* Bottom Stats - Clean & Minimal */}
                    <div className="mt-12 md:mt-24 w-full max-w-3xl border-t border-white/5 pt-6 md:pt-8 flex justify-between items-center px-2 md:px-16 gap-2">
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <span className="text-xl md:text-2xl font-bold text-white font-mono">PQC</span>
                            <span className="text-[8px] md:text-[10px] text-fortis-gray-500 uppercase tracking-widest">Security</span>
                        </div>
                        <div className="w-px h-6 md:h-8 bg-white/10" />
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <span className="text-xl md:text-2xl font-bold text-white font-mono">100k+</span>
                            <span className="text-[8px] md:text-[10px] text-fortis-gray-500 uppercase tracking-widest">TPS</span>
                        </div>
                        <div className="w-px h-6 md:h-8 bg-white/10" />
                        <div className="flex flex-col items-center gap-1 flex-1">
                            <span className="text-xl md:text-2xl font-bold text-white font-mono">0.5s</span>
                            <span className="text-[8px] md:text-[10px] text-fortis-gray-500 uppercase tracking-widest">Finality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
