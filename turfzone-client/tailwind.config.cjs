/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FE386B',
        'secondary-color': '#37003C',
        'secondary-darker': '#300134'

      },
    },
  },
  plugins: [],
}