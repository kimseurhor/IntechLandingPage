/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter var", sans-serif, "Apple Color Emoji", "Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      gridTemplateColumns:{
        '70/30':'70% 30%',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}

