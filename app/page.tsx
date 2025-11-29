import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Stats } from "@/components/sections/Stats";
import { DeveloperCTA } from "@/components/sections/DeveloperCTA";

export default function Home() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <Stats />
            <DeveloperCTA />
            <Footer />
        </main>
    );
}
