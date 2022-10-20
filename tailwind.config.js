/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/img/bg_main.png')",
      },
      colors:{
        myback:"#08080C",
        mygreen:"#1EE1B3",
        back_col2:"#515151"
      }

    },
  },
  plugins: [],
}