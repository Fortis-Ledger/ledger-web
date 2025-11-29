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
          black: "#050505",
          white: "#F5F5F7",
          event: "#0F0F11",
          slate: "#8899A6",
          void: "#1A1E23",
          cyan: "#00F0FF",
          violet: "#7000FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fortis-gradient": "linear-gradient(135deg, #00F0FF 0%, #7000FF 100%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 240, 255, 0.3)",
        "neon-violet": "0 0 20px rgba(112, 0, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
