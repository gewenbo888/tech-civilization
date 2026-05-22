import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        term: {
          950: "#04060c",
          900: "#06090f",
          800: "#0a0e18",
          700: "#0f1422",
          600: "#161d2e",
          500: "#1f2940",
        },
        cyan: {
          500: "#38e1ff",
          400: "#5fdcff",
          300: "#9aeaff",
        },
        sig: {
          // signal/terminal green
          500: "#4ade80",
          400: "#6ee7a8",
        },
        amberd: {
          500: "#f5a623",
          400: "#ffc35a",
        },
        viol: {
          500: "#8b7cff",
          400: "#a99cff",
        },
        mag: {
          500: "#ff5db1",
          400: "#ff8acb",
        },
        slatey: {
          50: "#e6edf5",
          100: "#d2dcea",
          300: "#9aaabf",
          500: "#6b7c95",
          700: "#3a465c",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        zh: ['"Noto Sans SC"', "sans-serif"],
      },
      boxShadow: {
        hud: "inset 0 0 0 1px rgba(56,225,255,0.14), 0 18px 50px -24px rgba(0,0,0,0.9)",
        glowc: "0 0 36px -8px rgba(56,225,255,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
