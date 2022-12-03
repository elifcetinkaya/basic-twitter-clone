/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-blue": "#15202B",
      },
      width: {
        '275': '275px',
      }
    },
  },
  plugins: [],
};
