/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    screens: {
      'sm': '280px',
      'ls': '390px',
      'md': '470px',
      'lg': '740px',
      'xl': '780px'
    },
    extend: {
      dropShadow: {
        
      }
    },
    colors: {
      'primary-white': '#f5f5f5',
      'secondary-white': '#E5E9F2',
      'primary-blue': '#6d80ff',
      'primary-blue-two': '#4760ff',
      'primary-brown': '#916f00',
      'linear-blue': '#6B94FE',
      'linear-blue-primary': '#4E6CBB',
      'secondary-blue': '#2840de',
      'secondary-brown': '#deb328'
    },
    fontFamily: {
      'akshar': ['Akshar', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
