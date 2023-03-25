const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: {
    relative: true,
    files: [
    "./pages/**/*.{html,js,tsx}",
    "./components/**/*.{html,js,tsx}"
    ]
  },
  safelist: [ 'bg-sky-50' ],
  //mode: 'jit',
  //purge: false,
  //darkMode: false, // or 'media' or 'class'
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        display: ['Pally', 'Comic Sans MS', 'sans-serif'],
        body: ['Pally', 'Comic Sans MS', 'sans-serif'],
      },
      // c.f. https://www.figma.com/file/nS5IqnutUT2FuPwwJObHaY/Access-the-Data-Main-Figma?node-id=226-2117&t=fTKKYweg8NpVfyLm-0
      colors: {
        primary: {
          darkblue: "#2d3047",
          cyan: "#20639b",
          turquise: "#58c6b5",
          sunny: "#fffd82"
        },
        secondary: {
          weldone: "#7097a8",
          columbia:"#cbe7df",
          lemon: "#f5eabd",
          salmon: "#ff9b71",
          beige: "#f7f0dd"
        },
        accent: {
          terracotta: "#ed695f"
        },
        background: {
          light: "#fdfbf5"
        }
      }
    }
  }
};
