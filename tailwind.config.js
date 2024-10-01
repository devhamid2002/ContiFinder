/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
       colors: {
        steelgray: '#212426',
        darkslate: '#1f2123' ,
        pastelpeach: '#f9d3b4',
      },
    },
  },
  plugins: [],
}