/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // background: 'rgb(var(--bg) / <alpha-value>)',
        // foreground: 'rgb(var(--fg) / <alpha-value>)',
        background: 'rgb(var(--bg))', // TODO : make it work for opacity configure
        foreground: 'rgb(var(--fg))',
        brand:      'rgb(var(--brand))',
        accent:     'rgb(var(--accent) / <alpha-value>)',

      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor:       ['dark'],
    },
  },
  plugins: [],
}

