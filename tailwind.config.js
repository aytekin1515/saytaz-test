/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    screens: {
      'sm': '350px',   
      'md': '768px',   
      'lg': '1024px',  
      'xl': '1280px', 
      '2xl': '1536px', 
    },

    container: {
      center: true,  
      padding: '1rem',
      screens: {
        'sm': '350px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px', 
      },
    },
    extend: {},
  },
  plugins: [],
}