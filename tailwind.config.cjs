/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'LightPink': 'hsl(275, 100%, 97%)',
        'GrayishPurple': 'hsl(292, 16%, 49%)',
        'DarkPurple': 'hsl(292, 42%, 14%)'
      },
      backgroundImage: {
        'background-pattern': "url('/images/background-pattern-desktop.svg')",
      },
      fontFamily: {
        'workSans' : ['"Work Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

