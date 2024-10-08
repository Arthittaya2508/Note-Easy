import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dull-lavender": {
          "50": "#f4f3ff",
          "100": "#ebe9fe",
          "200": "#dad7fd",
          "300": "#bfb6fc",
          "400": "#a594f9",
          "500": "#7f5ef4",
          "600": "#6e3ceb",
          "700": "#5f2ad7",
          "800": "#4f23b4",
          "900": "#421f93",
          "950": "#271164",
        },
        "titan-white": {
          "50": "#f5efff",
          "100": "#f1e9fe",
          "200": "#e5d6fe",
          "300": "#d3b5fd",
          "400": "#be8bfa",
          "500": "#ab5cf6",
          "600": "#a13aed",
          "700": "#9228d9",
          "800": "#7a21b6",
          "900": "#651d95",
          "950": "#401065",
        },
        "gable-green": {
          "50": "#f3faf9",
          "100": "#d6f1ed",
          "200": "#ade2dc",
          "300": "#7cccc5",
          "400": "#50b1ab",
          "500": "#379591",
          "600": "#2a7775",
          "700": "#256060",
          "800": "#214e4e",
          "900": "#1a3636",
          "950": "#0d2526",
        },
      },
    },
  },
  plugins: [],
};
export default config;
