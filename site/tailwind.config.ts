import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-base": "var(--bg-base)",
        "bg-card": "var(--bg-card)",
        "bg-card-raised": "var(--bg-card-raised)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "accent-amber": "var(--accent-amber)",
        "accent-blue": "var(--accent-blue)",
        "accent-green": "var(--accent-green)",
        "border-default": "var(--border-default)",
        "border-subtle": "var(--border-subtle)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-sc)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
