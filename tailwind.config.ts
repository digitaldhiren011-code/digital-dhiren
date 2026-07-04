import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#7C3AED",
          secondary: "#A855F7",
          dark: "#09090B",
          surface: "#18181B",
          accent: "#C084FC",
          muted: "#A1A1AA"
        }
      },
      borderRadius: {
        brand: "24px"
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(168, 85, 247, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
