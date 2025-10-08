/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'newsreader': ['Newsreader', 'serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
      },
      colors: {
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
      },
    },
  },
  plugins: [],
}
