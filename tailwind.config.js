module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--font-primary)", "sans-serif"],

      secondary: ["var(--font-secondary)", "sans-serif"],
      tertiary: ["var(--font-tertiary)", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        // ink: "#12852D",
        ink: "#19B83D",
        dark: "#111111",
        grey: {
          DEFAULT: "#555555",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
