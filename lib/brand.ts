/**
 * Fortis Ledger Brand Configuration
 * Central source of truth for brand identity, design tokens, and messaging
 */

export const BRAND = {
    name: "Fortis Ledger",
    tagline: "Secure Beyond Tomorrow",
    description: "The quantum-resistant blockchain infrastructure for the next generation",

    colors: {
        primary: {
            cyan: "#00F0FF",
            violet: "#7000FF",
        },
        accent: {
            purple: "#B537F2",
            blue: "#0066FF",
            green: "#00FF88",
        },
        gradients: {
            primary: "linear-gradient(135deg, #00F0FF 0%, #7000FF 100%)",
            quantum: "linear-gradient(90deg, #00F0FF 0%, #7000FF 50%, #B537F2 100%)",
            radial: "radial-gradient(circle at center, #7000FF 0%, #00F0FF 100%)",
        },
    },

    typography: {
        fonts: {
            sans: "var(--font-inter)",
            mono: "var(--font-jetbrains)",
        },
        weights: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },

    spacing: {
        section: {
            sm: "4rem",
            md: "6rem",
            lg: "8rem",
            xl: "12rem",
        },
    },

    animation: {
        duration: {
            fast: "150ms",
            normal: "300ms",
            slow: "500ms",
        },
        easing: {
            quantum: "cubic-bezier(0.4, 0, 0.2, 1)",
            bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        },
    },
} as const;

export const MESSAGING = {
    mission: "To build the world's first quantum-resistant blockchain infrastructure that secures digital sovereignty for the next 50 years and beyond.",

    vision: "A future where blockchain technology remains secure against quantum computing threats, enabling trustless global collaboration and unstoppable digital economies.",

    values: [
        {
            title: "Security First",
            description: "Post-quantum cryptography at our core, protecting against threats both present and future.",
        },
        {
            title: "Radical Decentralization",
            description: "True permissionless architecture with no single point of failure or control.",
        },
        {
            title: "Developer Obsession",
            description: "World-class tools, documentation, and support to empower builders globally.",
        },
        {
            title: "Infinite Scalability",
            description: "Built to support billions of users without compromising security or decentralization.",
        },
        {
            title: "Transparent Innovation",
            description: "Open research, open source, and community-driven development at every layer.",
        },
    ],

    positioning: {
        primary: "Next-generation quantum-resistant blockchain infrastructure",
        secondary: "The only Layer 1 built from the ground up for the quantum age",
        differentiators: [
            "Post-quantum cryptography (CRYSTALS-Dilithium, CRYSTALS-Kyber)",
            "Sub-second finality with quantum-safe consensus",
            "100,000+ TPS with horizontal scaling",
            "Zero-knowledge privacy layer",
            "50-year security guarantee",
        ],
    },

    toneOfVoice: {
        adjectives: ["Clear", "Confident", "Technical", "Forward-thinking", "Trustworthy"],
        guidelines: [
            "Use simple language to explain complex concepts",
            "Be authoritative without being arrogant",
            "Focus on the future while respecting the present",
            "Technical accuracy is paramount",
            "Mission-driven, not sales-driven",
        ],
    },
} as const;

export const PRODUCTS = {
    blockchain: {
        name: "Fortis Ledger",
        subtitle: "Quantum-Resistant Layer 1",
        description: "The foundation layer providing post-quantum security, instant finality, and infinite scalability for the decentralized future.",
        icon: "🛡️",
        color: "cyan",
    },
    wallet: {
        name: "Quantum Wallet",
        subtitle: "Multi-Party Computation Wallet",
        description: "Next-generation wallet with MPC key management, post-quantum encryption, and seamless recovery—no seed phrases needed.",
        icon: "🔐",
        color: "violet",
    },
    explorer: {
        name: "Fortis Explorer",
        subtitle: "Real-Time Blockchain Explorer",
        description: "Comprehensive block explorer with live transaction monitoring, validator analytics, and network health metrics.",
        icon: "🔍",
        color: "blue",
    },
    sdk: {
        name: "Fortis SDK",
        subtitle: "Developer Toolkits",
        description: "Production-ready SDKs for JavaScript, Rust, and Python with comprehensive documentation and code examples.",
        icon: "⚡",
        color: "purple",
    },
    bridge: {
        name: "Fortis Bridge",
        subtitle: "Cross-Chain Interoperability",
        description: "Secure asset and message bridging between Fortis Ledger and other major blockchain networks.",
        icon: "🌉",
        color: "green",
    },
    identity: {
        name: "Fortis ID",
        subtitle: "Quantum Identity System",
        description: "Zero-knowledge identity and credential management system with quantum-resistant signatures.",
        icon: "👤",
        color: "yellow",
    },
    compute: {
        name: "Fortis Compute",
        subtitle: "Confidential Compute Layer",
        description: "Decentralized compute network for AI, analytics, and confidential computation with MPC guarantees.",
        icon: "🧠",
        color: "violet",
    },
} as const;

export const STATS = {
    network: {
        tps: "100,000+",
        finality: "<1s",
        validators: "10,000+",
        uptime: "99.99%",
    },
    security: {
        quantumSafe: "50 years",
        audits: "5+",
        bugBounty: "$5M",
    },
    adoption: {
        developers: "50,000+",
        transactions: "1B+",
        dApps: "500+",
    },
} as const;
