// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./pages/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        },
        keyframes: {
          'pulse-slow': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
          },
        },
      },
    },
    plugins: [],
  };
  