// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind reset to avoid overriding Docusaurus styles
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    colors: {
      white: "#fff",
      primary: {
        300: "#c0c0c0", // Light gray
        400: "#a9a9a9",
        500: "#808080", // Medium gray
        600: "#696969",
        default: "#696969",
        700: "#404040", // Dark gray
        800: "#333333",
        900: "#1a1a1a",
      },
      secondary: {
        300: "#c0c0c0", // Light gray
        400: "#a9a9a9",
        500: "#808080", // Medium gray
        600: "#696969",
        default: "#696969",
        700: "#404040", // Dark gray
        800: "#333333",
        900: "#1a1a1a",
      },
      success: "#333333", // Change success color to blue
      warning: "#f4b400",
      danger: "#db4437",
    },
    extend: {},
  },
  plugins: [],
};
