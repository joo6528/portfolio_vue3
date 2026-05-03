/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/assets/css/**/*.css',
  ],
  darkMode: 'class', // dark 모드
  theme: {
    extend: {
      fontFamily: {
        // font-family
        sans: ['IBM Plex Sans KR', 'sans-serif'],
      },
    },
    screens: {
      'max-1400': {'max': '1400px'},
      'max-1280': {'max': '1280px'},
      'max-900': {'max': '900px'},
      'max-600': {'max': '600px'},
    }
  },
  plugins: [],
}