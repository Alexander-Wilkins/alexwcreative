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

        // Primary
        "xp-blue": "#0038FF",
        "ms-gray": "#696969",
        "ms-light-gray": "#C0C0C0",
        "ms-dark-red": "#9B0000",
        "ms-red": "#FF0000",
        "ms-dark-yellow": "#8D8800",
        "ms-yellow": "#FFF500",
        "ms-dark-green": "#00A507",
        "ms-green": "#00FF0B",
        "ms-dark-turq": "#00A0B6",
        "ms-turq": "#00E0FF",
        "ms-dark-blue": "#030090",
        "ms-blue": "#001AFF",
        "ms-dark-pink": "#9E00A1",
        "ms-pink": "#FA00FF",
        "ms-dark-tan": "#A49239",
        "ms-tan": "#FFEB87",
        "ms-dark-kelly": "#0F5C58",
        "ms-kelly": "#00FFA3",
        "ms-ocean": "#2B8CFF",
        "ms-light-ocean": "#6FF6FF",
        "ms-dark-navy": "#00498D",
        "ms-light-purple": "#B196FF",
        "ms-violet": "#8000FF",
        "ms-hot-pink": "#FF2574",
        "ms-dark-orange": "#8B510D",
        "ms-orange": "#FF9432",
      },
    },
  },
  plugins: [],
};
export default config;
