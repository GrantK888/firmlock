import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1628",
          800: "#0F1E33",
          700: "#162A45",
          500: "#1E3A5F",
        },
        action: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          soft: "#DBEAFE",
        },
        silver: "#B0C4DE",
        paper: "#F9F9F9",
        "slate-accent": "#94A3B8",
        "brand-emerald": "#10B981",
        "brand-amber": "#F59E0B",
        "brand-red": "#EF4444",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(40px, 5.5vw, 64px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["clamp(32px, 4vw, 44px)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h2: ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["20px", { lineHeight: "1.3" }],
        overline: ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      borderRadius: {
        btn: "10px",
        card: "16px",
      },
      maxWidth: {
        container: "1100px",
      },
      boxShadow: {
        "btn-primary":
          "0 1px 2px rgba(10,22,40,.08), 0 4px 12px rgba(59,130,246,.18)",
        "btn-primary-hover":
          "0 2px 4px rgba(10,22,40,.1), 0 8px 20px rgba(59,130,246,.24)",
        card:
          "0 1px 2px rgba(10,22,40,.04), 0 12px 32px -8px rgba(10,22,40,.08), 0 32px 80px -20px rgba(10,22,40,.15)",
        "card-dark": "0 24px 60px -20px rgba(10,22,40,.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
