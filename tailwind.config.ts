import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#10B981", dark: "#059669", light: "#34D399" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        "bar-grow": { "0%": { transform: "scaleY(0.15)" }, "100%": { transform: "scaleY(1)" } },
        "line-draw": { to: { strokeDashoffset: "0" } },
        "pulse-dot": { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
        "price-tick": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
      animation: {
        "bar-grow": "bar-grow 1.2s ease-out both",
        "line-draw": "line-draw 2.4s ease-out forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "price-tick": "price-tick 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
