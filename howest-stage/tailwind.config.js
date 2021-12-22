const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#44c8f5",
      blue: {
        DEFAULT: "#44c8f5"
      },
      black: {
        DEFAULT: "#000000"
      },
      magenta: "#e6007e",
      teal: "#009a93",
      yellow: {
        DEFAULT: "#ffff00"
      },
      white: colors.white,
      gray: "#7f7f7f",
      indigo: colors.indigo,
      red: "#ff0000",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      vag: ['VAG Rounded', 'sans-serif'],
      vagbold: ['VAG Rounded Bold', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        'fit': 'fit-content'
      },
      height: {
        'fit': 'fit-content'
      },
      minWidth: {
        'fit': 'fit-content'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}

