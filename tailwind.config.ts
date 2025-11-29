import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fortis: {
          // Core grayscale
          black: "#050505",
          "gray-900": "#0A0A0B",
          "gray-800": "#0F0F11",
          "gray-700": "#1A1E23",
          "gray-600": "#2A2E33",
          "gray-500": "#4A4E53",
          "gray-400": "#6A6E73",
          "gray-300": "#8899A6",
          "gray-200": "#B0B8C0",
          "gray-100": "#D8DCE0",
          white: "#F5F5F7",

          // Primary quantum colors
          cyan: "#00F0FF",
          "cyan-light": "#33F3FF",
          "cyan-dark": "#00C0CC",
          "cyan-glow": "#00F0FF80",

          violet: "#7000FF",
          "violet-light": "#8C33FF",
          "violet-dark": "#5500CC",
          "violet-glow": "#7000FF80",

          // Accent colors
          purple: "#B537F2",
          "purple-light": "#C961F5",
          "purple-dark": "#8F26C2",

          blue: "#0066FF",
          "blue-light": "#3385FF",
          "blue-dark": "#0052CC",

          green: "#00FF88",
          "green-light": "#33FFA3",
          "green-dark": "#00CC6E",

          yellow: "#FFD600",
          "yellow-light": "#FFDF33",
          "yellow-dark": "#CCAB00",

          red: "#FF0055",
          "red-light": "#FF3377",
          "red-dark": "#CC0044",

          // Semantic aliases
          event: "#0F0F11",
          slate: "#8899A6",
          void: "#1A1E23",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        // Extended typography scale
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.05" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fortis-gradient": "linear-gradient(135deg, #00F0FF 0%, #7000FF 100%)",
        "fortis-gradient-reverse": "linear-gradient(135deg, #7000FF 0%, #00F0FF 100%)",
        "quantum-gradient": "linear-gradient(90deg, #00F0FF 0%, #7000FF 50%, #B537F2 100%)",
        "quantum-radial": "radial-gradient(circle at center, #7000FF 0%, #00F0FF 100%)",
        "cyber-grid": "linear-gradient(90deg, rgba(0,240,255,0.1) 1px, transparent 1px), linear-gradient(rgba(0,240,255,0.1) 1px, transparent 1px)",
        "quantum-noise": "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 240, 255, 0.3)",
        "neon-cyan-lg": "0 0 40px rgba(0, 240, 255, 0.4)",
        "neon-violet": "0 0 20px rgba(112, 0, 255, 0.3)",
        "neon-violet-lg": "0 0 40px rgba(112, 0, 255, 0.4)",
        "neon-purple": "0 0 20px rgba(181, 55, 242, 0.3)",
        "quantum": "0 0 30px rgba(0, 240, 255, 0.2), 0 0 60px rgba(112, 0, 255, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(0, 240, 255, 0.1)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "glitch": "glitch 1s linear infinite",
        "particle": "particle 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "ripple": "ripple 1s ease-out",
        "scan": "scan 2s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
      },
      keyframes: {
        glow: {
          "0%": { filter: "brightness(1) contrast(1)" },
          "100%": { filter: "brightness(1.2) contrast(1.1)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        particle: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-1000px) rotate(720deg)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
    },
  },
  plugins: [
    // Custom plugin for glassmorphism
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".glass": {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".glass-strong": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".text-glow": {
          textShadow: "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)",
        },
        ".text-glow-violet": {
          textShadow: "0 0 20px rgba(112, 0, 255, 0.5), 0 0 40px rgba(112, 0, 255, 0.3)",
        },
        ".border-glow": {
          boxShadow: "0 0 10px rgba(0, 240, 255, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.2)",
        },
        ".cyber-border": {
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            inset: "0",
            borderRadius: "inherit",
            padding: "2px",
            background: "linear-gradient(135deg, #00F0FF, #7000FF)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
