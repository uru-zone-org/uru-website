/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./pages/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'transducer-hairline': ['“TransducerTest Hairline”', 'sans-serif'],
          'transducer-hairline-2': ['“TransducerTest Hairline 2”', 'sans-serif'],
        },
        animation: {
          'soft-breathe': 'soft-breathe 4s ease-in-out infinite',
          blink: 'blink 6s ease-in-out infinite',
        },
        keyframes: {
          'soft-breathe': {
            '0%, 100%': { transform: 'scale(1) translateY(-6px)' },
            '50%': { transform: 'scale(1.02) translateY(-8px)' },
          },
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.3 },
          },
        },
      },
    },
    plugins: [],
  };
  