/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      screen: "100dvh",
    },
    extend: {
      colors: {
        text: "#ffffff",
        background: "#141414",
        primary: "#1f1f1f",
        secondary: "#333333",
        accent: "#c5f82a",
      },
    },
  },
  plugins: [],
};
