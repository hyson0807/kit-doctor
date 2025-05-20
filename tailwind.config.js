/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter-Italic', 'sans-serif'], // 폴백 폰트 추가
        inter123: ['Inter-SemiBold', 'sans-serif'],
        italic: ['Inter-Italic', 'sans-serif'],
      },
      colors: {
        background: "#FFFFFF",
        primary: "#E4E4E4",
        textGray: "#626E78",
        buttonBlue: "#1682F9",
      },
    },
  },
  plugins: [],
};