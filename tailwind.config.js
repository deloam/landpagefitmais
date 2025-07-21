/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fit-orange': '#FF6B00', // Um laranja vibrante, comum em marcas de fitness
        'fit-dark': '#1A1A1A',   // Um cinza escuro para fundos
      },
      backgroundPosition: {
        'left-30': '30% center',
      }
    },
  },
  plugins: [],
}
