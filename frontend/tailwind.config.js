/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        cursor: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        typing: "typing 2.5s steps(56, end)",
        cursor: "cursor 0.4s step-end infinite alternate",
      },
      fontFamily: {
        Sora: ["sora", "sans-serif"],
        manrope: ["manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
