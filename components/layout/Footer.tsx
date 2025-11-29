import Link from "next/link";
import { Shield, Twitter, Github, Disc } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-fortis-event border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="h-6 w-6 text-fortis-cyan" />
                            <span className="text-lg font-bold tracking-tighter text-white">
                                FORTIS<span className="text-fortis-slate font-light">LEDGER</span>
                            </span>
                        </div>
                        <p className="text-fortis-slate text-sm leading-relaxed mb-6">
                            The quantum-resistant blockchain for the next era of digital sovereignty. Secure beyond tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-fortis-slate hover:text-fortis-cyan transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-fortis-slate hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-fortis-slate hover:text-fortis-violet transition-colors">
                                <Disc className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Technology</Link></li>
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Explorer</Link></li>
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Wallet</Link></li>
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Token</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Documentation</Link></li>
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Whitepaper</Link></li>
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">GitHub</Link></li>
                            <li><Link href="#" className="text-fortis-slate hover:text-fortis-cyan text-sm">Audits</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                        <p className="text-fortis-slate text-sm mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-fortis-cyan transition-colors"
                            />
                            <Button variant="secondary" size="sm" className="w-full">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-fortis-slate text-xs">
                        © 2024 Fortis Ledger Foundation. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-fortis-slate hover:text-white text-xs">Privacy Policy</Link>
                        <Link href="#" className="text-fortis-slate hover:text-white text-xs">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
