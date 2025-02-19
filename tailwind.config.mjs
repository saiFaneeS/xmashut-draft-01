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
      },
      fontSize: {
        xs: "clamp(0.6rem, 0.17vw + 0.76rem, 0.85rem)",
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.95rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.45rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 4.4vw + 1rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2rem, 6.66rem)",
        "6xl": "clamp(4rem, 7.48vw + 3rem, 8.5rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
