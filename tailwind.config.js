module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        1664: "1664px",
      },
      colors: {
        background: "#030E21",
        foreground: "#F0F7FE",
        primary: "#3276DE",
        secondary: "#8D2063",
        "pink/800": "#A70A4A",
      },
      fontFamily: {
        seravek: ["Seravek", "sans-serif"],
      },
      keyframes: {
        moveArrow: {
          "0%": {
            // transform: "translateX(0%)",
            backgroundColor: "#fff",
            // left: "4%",
          },
          "100%": {
            // transform: "translateX(-100%)",
            backgroundColor: "transparent",
            // left: "96%",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },

        moveBlurCircle1: {
          "0%": { top: "0", left: "0" },
          "25%": { top: "calc(100% - 11rem)", left: "0" },
          "50%": { top: "calc(100% - 11rem)", left: "calc(100% - 11rem)" },
          "75%": { top: "0", left: "calc(100% - 11rem)" },
          "100%": { top: "0", left: "0" },
        },
        moveBlurCircle2: {
          "0%": { top: "calc(100% - 11rem)", left: "calc(100% - 11rem)" },
          "25%": { top: "0", left: "calc(100% - 11rem)" },
          "50%": { top: "0", left: "0" },
          "75%": { top: "calc(100% - 11rem)", left: "0" },
          "100%": { top: "calc(100% - 11rem)", left: "calc(100% - 11rem)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        moveArrow: "moveArrow .5s ease-in-out",
        moveBlurCircle1: "moveBlurCircle1 20s infinite linear",
        moveBlurCircle2: "moveBlurCircle2 20s infinite linear",
      },
    },
  },
};
