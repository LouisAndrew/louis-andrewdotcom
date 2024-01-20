import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Varys Web'", ...defaultTheme.fontFamily.mono],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        body: ["'Plus Jakarta Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "mfed-background": "#131313",
        "mfed-background-accent": "#1f2425",
        "mfed-primary": "#ffffff",
        "mfed-secondary": colors.gray[200],
        "mfed-tertiary": "#bfbfbf",
        "mfed-decoration": colors.blue[300],
      },
    },
  },
  plugins: [],
};
