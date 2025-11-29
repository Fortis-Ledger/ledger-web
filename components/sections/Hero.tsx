"use client";

import { Button } from "@/components/ui/button";
import HeroScene from "@/components/webgl/HeroScene";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(textRef.current?.children || [], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* WebGL Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div ref={textRef} className="flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                        <ShieldCheck className="w-4 h-4 text-fortis-cyan" />
                        <span className="text-xs font-medium text-fortis-cyan tracking-wide uppercase">
                            Post-Quantum Secure
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 text-glow">
                        Secure Beyond <br />
                        <span className="text-transparent bg-clip-text bg-fortis-gradient">
                            Tomorrow
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-fortis-slate max-w-2xl mb-10 leading-relaxed">
                        Fortis Ledger secures your digital sovereignty with post-quantum cryptography,
                        infinite scalability, and zero-trust architecture.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="shadow-neon-cyan group">
                            Start Building
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="backdrop-blur-sm">
                            Read Whitepaper
                        </Button>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1">
                    <div className="w-1 h-2 bg-fortis-cyan rounded-full" />
                </div>
            </div>
        </section>
    );
}
