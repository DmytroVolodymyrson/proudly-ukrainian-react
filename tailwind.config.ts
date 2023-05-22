import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * General color variants
         */
        primary: {
          DEFAULT: "#FF4000",
        },
        secondary: {
          DEFAULT: "#070707",
        },
        background: {
          DEFAULT: "#F8EACA",
        },
      },
      screens: {
        xs: "380px",
      },
      fontFamily: {
        body: "'Orienta', sans-serif",
        "namu-body": "'NAMU-1960', sans-serif",
        "namu-title": "'NAMU-1910', sans-serif",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
