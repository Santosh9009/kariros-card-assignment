/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
      },
      borderColor: {
        DEFAULT: 'var(--border-color)',
        border: 'your-color-here', // Replace with your desired color
      },
      colors: {
        background: 'rgb(var(--background-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [],
};
