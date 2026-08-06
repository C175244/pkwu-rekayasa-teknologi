/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0d9488',
        'primary-dark': '#0f766e',
        'primary-light': '#5eead4',
        'secondary': '#f59e0b',
        'accent': '#f97316',
        'dark': '#1e293b',
        'body': '#334155',
        'mute': '#64748b',
        'surface': '#f8fafc',
        'card-bg': '#ffffff',
        'border-color': '#e2e8f0',
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'nvidia': '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'pulse-slow': 'pulse 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
