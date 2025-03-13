/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gara:['EB Garamond','serif'],
        epi:['Epilogue',' sans-serif'],
        roboto:['Roboto','sans-serif'],
        lob:['Lobster','sans-serif']
      },
      screens:{
       'xs': {'min': '374px', 'max': '639px'},
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/banner.png')",
        
      }
    },
  },
  plugins: [],
}