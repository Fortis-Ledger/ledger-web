"use client";

import { Button } from "@/components/ui/button";
import GlobeScene from "@/components/webgl/GlobeScene";
import { ArrowRight, Play, CheckCircle2, Users } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Text animation
        tl.from(textRef.current?.children || [], {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
        });

        // Floating card animation
        tl.from(cardRef.current, {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#020412]">
            {/* WebGL Globe Background (Right Aligned) */}
            <GlobeScene />

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020412] via-[#020412]/80 to-transparent z-0 pointer-events-none" />
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text Content */}
                <div ref={textRef} className="flex flex-col items-start text-left pt-20 lg:pt-0">

                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-medium text-blue-200 tracking-wide uppercase">Fortis Ledger • Early Preview</span>
                    </div>

                    {/* Headline - Reduced Size */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Revolutionize Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Digital Assets.
                        </span>
                    </h1>

                    {/* Description - Reduced Size */}
                    <p className="text-base sm:text-lg text-blue-100/60 max-w-xl mb-8 leading-relaxed font-light">
                        Streamline your blockchain infrastructure with AI-powered automation,
                        predictive security, and tools built to connect your business to the quantum future.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-white text-[#020412] hover:bg-blue-50 transition-all duration-300 font-bold text-base rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-white/10 text-white hover:bg-white/5 transition-all duration-300 font-medium text-base rounded-full backdrop-blur-sm">
                            Contact Sales
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex items-center gap-4 text-sm text-blue-200/40">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#020412] flex items-center justify-center text-[10px] text-white font-bold">
                                    U{i}
                                </div>
                            ))}
                        </div>
                        <p>Join 10,000+ developers on the waitlist</p>
                    </div>
                </div>

                {/* Right Column: Floating UI Card (Visual only, over globe) */}
                <div className="hidden lg:flex justify-end relative h-[600px] pointer-events-none">
                    {/* The Globe is in the background, this is just for the floating card overlay */}

                    <div ref={cardRef} className="absolute bottom-20 right-10 w-80 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-900/20">
                        {/* Fake UI Content */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Active Nodes</div>
                                    <div className="text-xs text-blue-200/50">Testnet Nodes</div>
                                </div>
                            </div>
                            <div className="text-green-400 text-xs font-bold">+24%</div>
                        </div>

                        <div className="space-y-3">
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[75%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                            </div>
                            <div className="flex justify-between text-xs text-blue-200/60">
                                <span>Sync Status</span>
                                <span>98.5%</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-white">Quantum Encryption</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-white">Zero-Knowledge Proofs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
