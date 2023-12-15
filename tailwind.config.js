/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: 'Playfair Display',
    },
    screens: {
      sm: '441px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1400px',
    },
    extend: {
      colors: {
        'flash-white': '#E6E9EF',
        'pale-blue': '#B4CBF0',
        periwinkle: '#B4ADEA',
        'davy-gray': '#50514F',
        'saira-red': '#FFA0B5',
        'heavy-blue': '#142D54',
        'tint-teal': '#13AEAE',
        sunshine: '#FED600',
        cream: '#FFFDD4',
      },
    },
  },
  plugins: [require('@igorkowalczyk/is-browser')],
};
