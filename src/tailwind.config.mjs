/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      "primary-Dark-Violet": "#2d2640",
      "primary-Grayish-Blue": "#95a9c6",
      "neutral-Very-Dark-Violet": "#2b272f",
      "neutral-Dark-Grayish-Violet": "#837d87",
      "neutral-Very-Light-Gray": "#fafafa",
    },
    fontFamily: {
      headings: ["DM Serif Display", "sans-serif"],
      body: ["Karla", "sans-serif"],
    },
  },
  plugins: [],
};
