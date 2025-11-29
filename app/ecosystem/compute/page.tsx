import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Terminal } from "@/components/ui/terminal";
import { Cpu, Zap, DollarSign, Cloud, Code, TrendingUp } from "lucide-react";

const deployCode = `# Deploy a compute job
$ fortis-compute deploy \
  --image my-ml-model:latest \
  --gpu 1 \
  --memory 16GB \
  --storage 100GB

✓ Job deployed: job-abc123
✓ GPUs allocated: 1x NVIDIA A100
✓ Endpoint: https://job-abc123.compute.fortis.network

# Monitor your job
$ fortis-compute logs job-abc123`;

const pricingTiers = [
    { name: "CPU", price: "0.02", unit: "per core-hour", color: "cyan" },
    { name: "GPU (T4)", price: "0.45", unit: "per GPU-hour", color: "violet" },
    { name: "GPU (A100)", price: "2.50", unit: "per GPU-hour", color: "purple" },
    { name: "Storage", price: "0.10", unit: "per GB/month", color: "green" },
];

export default function ComputePage() {
    return (
        <main className="min-h-screen bg-fortis-black">
            <Navbar />

            <PageHeader
                title="Fortis Compute"
                subtitle="Decentralized cloud computing with pay-as-you-go pricing and quantum-safe execution"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Ecosystem", href: "/ecosystem" },
                    { label: "Compute" }
                ]}
            />

            {/* Hero Features */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Cpu className="w-10 h-10 text-fortis-cyan mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Any Workload</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                CPUs, GPUs, TPUs for ML, rendering, simulations
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Zap className="w-10 h-10 text-fortis-violet mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Instant Deploy</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Deploy containers in seconds, no setup required
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <DollarSign className="w-10 h-10 text-fortis-purple mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Pay Per Second</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                Only pay for what you use, no minimum commitments
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <Cloud className="w-10 h-10 text-fortis-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Global Network</h3>
                            <p className="text-fortis-gray-300 text-sm">
                                1000+ providers across 50+ countries
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4 bg-fortis-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Built for <span className="gradient-text">Developers</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <div className="text-4xl mb-4">🧠</div>
                            <h3 className="text-xl font-bold text-white mb-3">AI/ML Training</h3>
                            <p className="text-fortis-gray-300">
                                Train models on distributed GPUs with automatic scaling and checkpointing
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <div className="text-4xl mb-4">🎬</div>
                            <h3 className="text-xl font-bold text-white mb-3">Rendering</h3>
                            <p className="text-fortis-gray-300">
                                Render 3D animations, visual effects, and architectural visualization
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <div className="text-4xl mb-4">🔬</div>
                            <h3 className="text-xl font-bold text-white mb-3">Scientific Computing</h3>
                            <p className="text-fortis-gray-300">
                                Run simulations, molecular dynamics, and quantum chemistry workloads
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <div className="text-4xl mb-4">🎮</div>
                            <h3 className="text-xl font-bold text-white mb-3">Game Servers</h3>
                            <p className="text-fortis-gray-300">
                                Host multiplayer game servers with auto-scaling and DDoS protection
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
                            <p className="text-fortis-gray-300">
                                Process big data with Spark, Hadoop, and distributed databases
                            </p>
                        </div>

                        <div className="p-8 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700">
                            <div className="text-4xl mb-4">🔐</div>
                            <h3 className="text-xl font-bold text-white mb-3">CI/CD Pipelines</h3>
                            <p className="text-fortis-gray-300">
                                Run automated tests and build pipelines with on-demand resources
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deploy Example */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Deploy in <span className="gradient-text">Seconds</span>
                            </h2>
                            <p className="text-xl text-fortis-gray-300 mb-8">
                                Bring your own Docker container or use our pre-configured images
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <Code className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Container-First</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Deploy any Docker image, works with your existing CI/CD
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Auto-Scaling</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Automatically scale based on demand, from 0 to 1000s of instances
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-fortis-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-4 h-4 text-fortis-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Real-Time Monitoring</h4>
                                        <p className="text-fortis-gray-300 text-sm">
                                            Track CPU, memory, GPU utilization with built-in dashboards
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Terminal code={deployCode} title="deploy.sh" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-fortis-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-4">
                        Simple <span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="text-xl text-fortis-gray-300 text-center mb-16">
                        Pay only for what you use, down to the second
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-fortis-gray-800/50 border border-fortis-gray-700 text-center"
                            >
                                <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                                <div className="text-4xl font-bold text-fortis-cyan mb-1">
                                    ${tier.price}
                                </div>
                                <div className="text-sm text-fortis-gray-400">{tier.unit}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-fortis-gray-300 mb-6">
                            Volume discounts available. Pay with FORT tokens for an additional 20% discount.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-fortis-gradient text-white font-semibold shadow-neon-cyan hover:shadow-neon-cyan-lg transition-all"
                        >
                            Start Computing
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
