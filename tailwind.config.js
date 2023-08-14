/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true, 
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#f9004d',
        dark: '#0f172a',
        secondary: '#64748b',
        tertiary: '#94a3b8'
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

