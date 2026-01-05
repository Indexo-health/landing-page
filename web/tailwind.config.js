/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        brand: "hsl(var(--brand) / <alpha-value>)",
        "brand-2": "hsl(var(--brand-2) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}
