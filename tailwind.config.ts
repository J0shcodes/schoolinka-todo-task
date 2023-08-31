import type { Config } from 'tailwindcss'
const {colors: defaultColors} = require("tailwindcss/defaultTheme")

// const colors = {
//   ...defaultColors,
//   ...{
//     "shoolinka-primary": {"#3f5bf6"}
//   }
// }

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "schoolinka-primary": "#3f5bf6"
      }
    },
    screens: {
      'lg': {'max': '1200px'},
      // => @media (max-width: 1200px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
export default config
