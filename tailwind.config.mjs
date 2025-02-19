/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yellow-tail": ["Yellowtail-Regular", "sans-serif"],
        roboto: ["Roboto-Regular", "sans-serif"],
        robotoMedium: ["Roboto-Medium", "sans-serif"],
        clash: ["ClashGrotesk-Variable", "sans-serif"],
        clashExtralight: ["ClashGrotesk-Extralight", "sans-serif"],
        clashLight: ["ClashGrotesk-Light", "sans-serif"],
        clashRegular: ["ClashGrotesk-Regular", "sans-serif"],
        clashMedium: ["ClashGrotesk-Medium", "sans-serif"],
        clashSemibold: ["ClashGrotesk-Semibold", "sans-serif"],
        clashBold: ["ClashGrotesk-Bold", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
