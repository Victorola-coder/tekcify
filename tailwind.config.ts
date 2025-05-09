import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // if you are using variable and want to use more than one fonts for your webapp,you could define it here. like i did
        geistSans: ["var(--font-geist-sans)"],
        instrumentSans: ["var(--font-instrument-sans)"],
      },
      keyframes: {
        "fade-effect": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        loader: {
          "0%": {
            opacity: "0.2",
          },
          "100%": {
            opacity: "1",
          },
        },
        spin: {},
      },
      animation: {
        "fade-in": "fade-effect 300ms linear",
        "slide-down": "slide-down 300ms linear forwards",
        "slide-up": "slide-up 300ms linear forwards",
        "rotate-clockwise": "rotate-clockwise 1s infinite linear",
        "loader-opacity": "loader 1s ease-in-out alternate infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#8434d4", // purple_heart
          100: "#8820a0", // seance
          200: "#8434d4", // purple_heart
        },
        dark: {
          DEFAULT: "#040404", // black
          100: "#040404", // black
          200: "#040404", // black
          300: "#8820a0", // seance
        },
        main: {
          DEFAULT: "#8434d4", // purple_heart
          100: "#8820a0", // seance
        },
        purpleHeart: "#8434d4",
        seance: "#8820a0",
        black: "#040404",
      },
    },
  },
  plugins: [],
};
export default config;
