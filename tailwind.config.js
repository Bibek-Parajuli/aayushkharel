/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          red: '#DC143C',
          pink: '#FFB6C1',
          cream: '#FFF8DC',
          darkred: '#8B0000',
        }
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        elegant: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'envelope-open': 'envelope-open 1s ease-out forwards',
        'letter-rise': 'letter-rise 1s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-in forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'envelope-open': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-180deg)' },
        },
        'letter-rise': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
