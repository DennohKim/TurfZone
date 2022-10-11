/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/BG-Hero.png')",
        'dot-pattern': "url('/src/assets/images/dot-pattern.png')",
      },
    },
  },
  plugins: [],
}