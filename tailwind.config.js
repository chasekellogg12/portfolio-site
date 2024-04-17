/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/*.html',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "l-blue": "#265077",
        "d-blue": "#022140",
        "l-purple": "#494B68",
        "teal": "#1E4258",
        "mint": "#2D5F5D"
      },
      animation: { // Animations extend here
        shimmer: "shimmer 2s linear infinite",
        shimmerSlow: "shimmer 6s linear infinite",
      },
      keyframes: { // Keyframes extend here
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, addDynamicIconSelectors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

