import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        citrus: "#F5CBA7",
        "faded-gray": "rgb(184, 184, 184, 0.8)",
        "off-white": "#eeeeee",
        "dark-ocean": "#0E0E11",
        "dark-lake": "#18181b",
        code: "#f5f2f0;",
      },
      width: {
        "1/2": "50%",
        680: "680px",
        340: "340px",
        632: "632px",
        450: "450px",
        300: "300px",
      },
      width: {
        680: "680px",
        340: "340px",
        632: "632px",
        450: "450px",
        300: "300px",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1900px",
      },
      boxShadow: {
        "highlight-menu": "3px 0 0 0 #0ba90b inset",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
