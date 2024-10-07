import daisyui from "daisyui"; // Keep the ES module import
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Ensuring that dark mode works correctly
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.d.ts" // Include your custom types
  ],
  theme: {
  },
  plugins: [daisyui], // Keep the ES module import here
  daisyui: {
    themes: false, // Disable default themes
  },
};

export default config;
