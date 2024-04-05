/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors:{
        primary: '#FF8700',
        secondary: '#d6d6d6',
        tertiary: '#03171E'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        homeBg: 'url("https://assets.website-files.com/63d0c13bf294b9ad2ad7a1f0/63fc8f011df7042b653ee41c_hero-image-1-1.jpg")'
      }
    },
  },
  plugins: [],
}

