const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // Main brand blue
          light: "#3b82f6",
          dark: "#1e40af",
        },
        accent: {
          DEFAULT: "#10b981", // Teal accent
          light: "#34d399",
          dark: "#059669",
        },
        muted: {
          DEFAULT: "#9ca3af", // Muted text
          light: "#d1d5db",
          dark: "#6b7280",
        },
        background: {
          light: "#f9fafb",
          dark: "#111827",
        },
        surface: {
          light: "#ffffff",
          dark: "#1f2937",
        },
        border: {
          light: "#e5e7eb",
          dark: "#374151",
        },
        destructive: {
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#b91c1c",
        },
        success: {
          DEFAULT: "#22c55e",
          light: "#4ade80",
          dark: "#15803d",
        },
        warning: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#b45309",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  // Tailwind v4 uses CSS imports for plugins; animations come from `tw-animate-css` via CSS import.
  plugins: [],
};
