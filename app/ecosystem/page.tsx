import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

const partners = [
    { name: "QuantumGuard", category: "Security" },
    { name: "Nebula Fi", category: "DeFi" },
    { name: "Aegis Wallet", category: "Wallet" },
    { name: "Orbital", category: "Infrastructure" },
    { name: "Flux Layer", category: "Bridge" },
    { name: "Zenith", category: "NFT" },
];

export default function EcosystemPage() {
    return (
        <main className="min-h-screen bg-fortis-black selection:bg-fortis-cyan/30">
            <Navbar />

            <PageHeader
                title="Thriving Ecosystem"
                description="Discover the dApps, wallets, and infrastructure projects securing their future on Fortis Ledger."
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Filter/Search Placeholder */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
                            <Button variant="secondary" size="sm" className="bg-fortis-cyan/20 text-fortis-cyan border border-fortis-cyan/50">All</Button>
                            <Button variant="outline" size="sm">DeFi</Button>
                            <Button variant="outline" size="sm">Infrastructure</Button>
                            <Button variant="outline" size="sm">Wallets</Button>
                            <Button variant="outline" size="sm">Gaming</Button>
                        </div>
                        <div className="w-full sm:w-64">
                            <input
                                type="text"
                                placeholder="Search ecosystem..."
                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-fortis-cyan transition-colors"
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partners.map((partner, i) => (
                            <div key={i} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-fortis-cyan/50 transition-all hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5" />
                                    <span className="text-xs font-medium text-fortis-slate bg-white/5 px-2 py-1 rounded-full">
                                        {partner.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                                <p className="text-fortis-slate text-sm mb-4">
                                    Building the next generation of {partner.category.toLowerCase()} on quantum-secure rails.
                                </p>
                                <div className="flex items-center text-fortis-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Project →
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-24 bg-fortis-event border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Partner with Fortis</h2>
                    <p className="text-fortis-slate max-w-2xl mx-auto mb-8">
                        We offer grants, technical support, and co-marketing opportunities for teams building high-impact projects.
                    </p>
                    <Button size="lg" className="shadow-neon-violet bg-gradient-to-r from-fortis-violet to-purple-600">
                        Apply for Grant
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
