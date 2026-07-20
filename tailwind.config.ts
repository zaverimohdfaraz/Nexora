import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        secondary: "#1E40AF",
        accent: "#06B6D4",
        success: "#10B981",
        ink: "#111827",
        muted: "#6B7280",
        card: "#F8FAFC",
        surface: "#FFFFFF",
        "surface-dark": "#09090B",
        "border-subtle": "rgba(17, 24, 39, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "gradient-brand": "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.12) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.25)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.25)",
        soft: "0 8px 30px rgba(17, 24, 39, 0.06)",
        card: "0 1px 2px rgba(17,24,39,0.04), 0 12px 32px -12px rgba(17,24,39,0.12)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
