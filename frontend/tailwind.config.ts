import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(180deg, #534239 0%, #443832 62.21%, #221E1C 100%)",
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
      colors: {
        primary: "#DABB74",
        "bg-opacity": "rgba(62, 61, 61, 1)",
        "bg-gray": "rgba(31, 31, 31)",
        "text-gray": "#B5B5B5",
        brown: "rgba(18, 13, 13, 1)",
        bbg: "rgba(79, 73, 69)",
      },
    },
  },
  plugins: [],
};
export default config;
