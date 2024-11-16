import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        tiny: ["Tiny5", "sans-serif"],
      },
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
