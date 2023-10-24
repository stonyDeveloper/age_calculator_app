/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'purple': 'hsl(259, 100%, 65%)',
      'light-red': 'hsl(0, 100%, 67%)',
      'white': 'hsl(0, 0%, 100%)',
      'off-white': 'hsl(0, 0%, 94%)',
      'smokey-grey': 'hsl(0, 1%, 44%)',
      'off-black': 'hsl(0, 0%, 8%)'
    },
    extend: {
    },
  },
  plugins: [],
}

