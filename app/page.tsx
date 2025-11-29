import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-fortis-black selection:bg-fortis-cyan/30">
            <Navbar />
            <Hero />
            {/* Placeholder for other sections */}
            <section className="py-24 px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Why Quantum Resistance?</h2>
                <p className="text-fortis-slate max-w-2xl mx-auto">
                    Quantum computing is coming. Current encryption will break. Fortis Ledger is built to withstand the decryption capabilities of the future.
                </p>
            </section>
            <Footer />
        </main>
    );
}
