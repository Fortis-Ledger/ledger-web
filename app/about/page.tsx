import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/layout/ContentSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-fortis-black selection:bg-fortis-cyan/30">
            <Navbar />

            <PageHeader
                title="Our Mission"
                description="To secure the future of decentralized value against the inevitable quantum computing threat."
            />

            <ContentSection title="Vision">
                <p>
                    We envision a world where digital sovereignty is mathematically guaranteed for centuries. As quantum computing advances, the cryptographic foundations of the current internet will crumble.
                </p>
                <p>
                    Fortis Ledger is not just a blockchain; it is a digital fortress designed to protect the world's value, identity, and data from the decryption capabilities of tomorrow.
                </p>
            </ContentSection>

            <section className="py-24 bg-fortis-event border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Roadmap</h2>
                    <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">

                        <div className="relative pl-8 md:ml-auto md:w-1/2 md:pl-12">
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-fortis-cyan shadow-neon-cyan" />
                            <div className="text-sm text-fortis-cyan font-mono mb-2">Q1 2024</div>
                            <h3 className="text-xl font-bold text-white mb-2">Testnet Alpha</h3>
                            <p className="text-fortis-slate">Validator onboarding and initial stress testing of the Aegis consensus protocol.</p>
                        </div>

                        <div className="relative pl-8 md:mr-auto md:w-1/2 md:pr-12 md:text-right md:pl-0">
                            <div className="absolute left-[-5px] md:right-[-5px] md:left-auto top-2 w-2.5 h-2.5 rounded-full bg-white/20" />
                            <div className="text-sm text-fortis-slate font-mono mb-2">Q2 2024</div>
                            <h3 className="text-xl font-bold text-white mb-2">Smart Contract VM Beta</h3>
                            <p className="text-fortis-slate">Release of the WASM-based virtual machine and developer SDKs.</p>
                        </div>

                        <div className="relative pl-8 md:ml-auto md:w-1/2 md:pl-12">
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white/20" />
                            <div className="text-sm text-fortis-slate font-mono mb-2">Q3 2024</div>
                            <h3 className="text-xl font-bold text-white mb-2">Mainnet Launch</h3>
                            <p className="text-fortis-slate">Public launch of the Fortis Ledger mainnet and Token Generation Event (TGE).</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
