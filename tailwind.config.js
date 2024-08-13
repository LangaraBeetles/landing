/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: { 50: "#FFF8E6", 100: "#FDD462", 200: "#FFCD43" },
      neutral: {
        100: "#E7E5E4",
        500: "#5F5C56",
        600: "#4B4944",
        800: "#201F1D",
      },
      coral: { 50: "#FFF0F0" },
      "baltic-green": {
        50: "#F0F9F9",
        200: "#C1E7E3",
        600: "#3AA199",
        700: "#2F7973",
        800: "#20514D",
      },
    },
    borderRadius: {
      DEFAULT: "1.25rem",
      md: "1rem",
      lg: "1.75rem",
      xl: "6.25rem",
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
    },

    extend: {
      fontSize: {
        s: [
          "1rem",
          {
            lineHeight: "1.4rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "s-l": [
          "1.125rem",
          {
            lineHeight: "1.575rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "s-l2": [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
            fontFamily: "Nunito",
          },
        ],
        m: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "m-l": [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "500",
            fontFamily: "Nunito",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "1.8rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "2xl": [
          "1.75rem",
          {
            lineHeight: "2.1rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "2xl-l": [
          "2.5rem",
          {
            lineHeight: "3rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.4rem",
            fontWeight: "800",
            fontFamily: "Nunito",
          },
        ],
        "3xl-l": [
          "2rem",
          {
            lineHeight: "2.4rem",
            fontWeight: "700",
            fontFamily: "Nunito",
          },
        ],
        "4xl": [
          "3.5rem",
          {
            lineHeight: "4.2rem",
            fontWeight: "800",
            fontFamily: "Nunito",
          },
        ],
      },
    },
  },
  plugins: [],
};
