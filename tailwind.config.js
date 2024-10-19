/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
   extend: {
      colors: {
        brown: {
          50: '#f5f3f0',
          100: '#ebddd7',
          200: '#d6b8af',
          300: '#bf9487',
          400: '#a7705f',
          500: '#8e4d37', // You can use this as 'bg-brown-500'
          600: '#763b2a',
          700: '#5d2a1e',
          800: '#451a12',
          900: '#2e0c06',
        },
      },
  },
  plugins: [],
}
}
