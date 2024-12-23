/** @type {import('tailwindcss').Config} */
const { withUt } = require("uploadthing/tw");
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default withUt({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: {
    //   borderRadius: {
    //     lg: "var(--radius)",
    //     md: "calc(var(--radius) - 2px)",
    //     sm: "calc(var(--radius) - 4px)",
    //   },
    //   colors: {
    //     sidebar: {
    //       DEFAULT: "hsl(var(--sidebar-background))",
    //       foreground: "hsl(var(--sidebar-foreground))",
    //       primary: "hsl(var(--sidebar-primary))",
    //       "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
    //       accent: "hsl(var(--sidebar-accent))",
    //       "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
    //       border: "hsl(var(--sidebar-border))",
    //       ring: "hsl(var(--sidebar-ring))",
    //     },
    //   },
    // },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
  variants: {
    extend: {
      backdropFilter: ["hover", "focus"], // Optional
    },
  },
});
