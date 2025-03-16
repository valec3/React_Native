/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#49129C",
        secondary: {
          DEFAULT: "#B40086",
          100: "#C51297",
          200: "#831266",
        },
        tertiary: {
          DEFAULT: "#FFD600",
          100: "#FFD600",
          200: "#FFD600",
        },
      },
      fontFamily: {
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
        "work-bold": ["WorkSans-Bold", "sans-serif"],
        "work-black": ["WorkSans-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
