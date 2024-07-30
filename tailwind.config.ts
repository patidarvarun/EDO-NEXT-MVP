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
      },
      colors: {
        customColor: "#1b1c3b",
        sidebarText: "#AA0100",
        backgroundColor: "#F1F1F8",
        sidebarFontColor: "#111928",
        btnbg: "#6B7280",
        borderRight: "#525252",
        subHeaderBorderRight: "#c9c9c9",
        customLightGray: "#e1dca8",
      },
    },
  },
  plugins: [],
};
export default config;
