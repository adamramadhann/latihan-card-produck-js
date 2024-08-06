/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '70px 1fr 70px',
        
      },
      gridTemplateColumns: {
       'cart-item': '70px 150px 50px 1fr',
        
      },
    },
  },
  plugins: [],
}