/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: 'Playfair Display',
    },
    screens: {
      sm: '425px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'flash-white': '#E6E9EF',
        periwinkle: '#B4ADEA',
        'davy-gray': '#50514F',
        'ultra-pink': '#FF6FFF',
        'heavy-blue': '#142D54',
      },
    },
  },
  plugins: [],
};
