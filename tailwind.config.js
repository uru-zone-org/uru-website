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
        keyframes: {
            'eye-pulse': {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.20)' },
            },
          },
          animation: {
            'eye-pulse': 'eye-pulse 3s ease-in-out infinite',
          }
      },
    },
    plugins: [],
  };
  