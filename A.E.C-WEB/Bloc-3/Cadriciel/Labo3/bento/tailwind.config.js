
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DMSans', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.625rem',  // Extra extra small font size
        'xxl': '2rem',      // Extra extra large font size
      },
    },
  },
  plugins: [],
}
