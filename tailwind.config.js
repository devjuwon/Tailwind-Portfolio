/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        "big":"48rem" 
     },
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      nunito:['nunito', 'sans-serif']
    }
  },
  plugins: [],
}

