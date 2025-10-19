/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ bu qator dark mode'ni yoqadi

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      variants: {
        scrollbar: ["rounded"],
      },

      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        golos: ["Golos Text", "sans-serif"],
      },

      colors: {
        red: "#d92e15",
        blue: "#0b2b5e",
      },
    },
    keyframes: {
      gradientX: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
    animation: {
      gradientX: "gradientX 8s ease infinite",
    },
    backgroundImage: {
      "dark-animated": "linear-gradient(120deg, #0b2b5e, #d92e15)",
    },
  },

  plugins: [],
};
