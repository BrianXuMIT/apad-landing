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
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        kanit: ["var(--font-kanit)", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "hiring-glow": "hiring-glow 2.4s ease-in-out infinite",
        "hiring-ripple": "hiring-ripple 2.4s ease-out infinite",
        "hiring-wiggle": "hiring-wiggle 3.2s ease-in-out infinite",
        "hiring-shine": "hiring-shine 3.6s ease-in-out infinite",
        "hiring-in": "hiring-in 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.2) 1.2s both",
      },
      keyframes: {
        "hiring-glow": {
          "0%, 100%": { boxShadow: "0 8px 22px rgba(140,69,255,0.35), 0 0 0 0 rgba(10,175,249,0.0)" },
          "50%": { boxShadow: "0 12px 30px rgba(140,69,255,0.55), 0 0 22px 4px rgba(10,175,249,0.45)" },
        },
        "hiring-ripple": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "70%, 100%": { transform: "scale(1.35, 1.7)", opacity: "0" },
        },
        "hiring-wiggle": {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "68%": { transform: "rotate(-16deg)" },
          "76%": { transform: "rotate(14deg)" },
          "84%": { transform: "rotate(-10deg)" },
          "92%": { transform: "rotate(6deg)" },
        },
        "hiring-shine": {
          "0%, 55%": { transform: "translateX(-130%) skewX(-20deg)" },
          "100%": { transform: "translateX(260%) skewX(-20deg)" },
        },
        "hiring-in": {
          "0%": { transform: "translateY(24px) scale(0.85)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
