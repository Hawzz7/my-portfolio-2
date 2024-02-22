/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sign: ['Great Vibes'],
        sign2:['Sacramento']
      },
      backgroundImage: {
        'star-image': "url('src/assets/galaxy.png')"
      },
      keyframes: {
        'trans-up': {
          '0%, 100%': { transform: 'translateY(25px)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'trans-up': 'trans-up 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}