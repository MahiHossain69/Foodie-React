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
      backgroundImage: {
        'hero-pattern': "url('./assets/banner.png')",
        
      }
    },
  },
  plugins: [],
}