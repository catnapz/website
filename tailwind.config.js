/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "surface-tint": {
        "DEFAULT": "#00658E",
        "dark": "#84CFFF"
      },
      "surface-tint-color": {
        "DEFAULT": "#00658E",
        "dark": "#84CFFF"
      },
      "on-error-container": {
        "DEFAULT": "#410002",
        "dark": "#FFB4AB"
      },
      "on-error": {
        "DEFAULT": "#FFFFFF",
        "dark": "#690005"
      },
      "error-container": {
        "DEFAULT": "#FFDAD6",
        "dark": "#93000A"
      },
      "on-tertiary-container": {
        "DEFAULT": "#1F1539",
        "dark": "#E8DDFF"
      },
      "on-tertiary": {
        "DEFAULT": "#FFFFFF",
        "dark": "#342A4F"
      },
      "tertiary-container": {
        "DEFAULT": "#E8DDFF",
        "dark": "#4B4167"
      },
      "tertiary": {
        "DEFAULT": "#635880",
        "dark": "#CDC0EE"
      },
      "shadow": {
        "DEFAULT": "#000000",
        "dark": "#000000"
      },
      "error": {
        "DEFAULT": "#BA1A1A",
        "dark": "#FFB4AB"
      },
      "outline": {
        "DEFAULT": "#71787E",
        "dark": "#8B9198"
      },
      "on-background": {
        "DEFAULT": "#191C1E",
        "dark": "#E2E2E5"
      },
      "background": {
        "DEFAULT": "#FCFCFF",
        "dark": "#191C1E"
      },
      "inverse-on-surface": {
        "DEFAULT": "#F0F1F3",
        "dark": "#2E3133"
      },
      "inverse-surface": {
        "DEFAULT": "#2E3133",
        "dark": "#E2E2E5"
      },
      "on-surface-variant": {
        "DEFAULT": "#41484D",
        "dark": "#C1C7CE"
      },
      "on-surface": {
        "DEFAULT": "#191C1E",
        "dark": "#E2E2E5"
      },
      "surface-variant": {
        "DEFAULT": "#DDE3EA",
        "dark": "#41484D"
      },
      "surface": {
        "DEFAULT": "#FCFCFF",
        "dark": "#191C1E"
      },
      "on-secondary-container": {
        "DEFAULT": "#071E2B",
        "dark": "#CFE5F7"
      },
      "on-secondary": {
        "DEFAULT": "#FFFFFF",
        "dark": "#1E3340"
      },
      "secondary-container": {
        "DEFAULT": "#CFE5F7",
        "dark": "#354958"
      },
      "secondary": {
        "DEFAULT": "#4C6170",
        "dark": "#B3C9DB"
      },
      "inverse-primary": {
        "DEFAULT": "#84CFFF",
        "dark": "#00658E"
      },
      "on-primary-container": {
        "DEFAULT": "#001E2E",
        "dark": "#C7E7FF"
      },
      "on-primary": {
        "DEFAULT": "#FFFFFF",
        "dark": "#00344C"
      },
      "primary-container": {
        "DEFAULT": "#C7E7FF",
        "dark": "#004C6C"
      },
      "primary": {
        "DEFAULT": "#00658E",
        "dark": "#84CFFF"
      },
    }
    ,
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}