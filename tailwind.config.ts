import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#12151A",
        surface: "#181C23",
        raised: "#1F242D",
        border: "#2A303A",
        borderStrong: "#3A414D",
        ink: "#EBEDF0",
        "ink-dim": "#9BA3AF",
        "ink-faint": "#636B78",
        signal: "#F2A45C",
        "signal-dim": "#8A5E36",
        node: "#59C9BC",
        "node-dim": "#33665F",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #2A303A 1px, transparent 1px), linear-gradient(to bottom, #2A303A 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-node": "pulse-node 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
