/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  content: ['./*html'],
  theme: {
    extend: {
      colors: {
        'base-color': 'rgb(100, 34, 63)',
        'meta-text-color': '#999',
        'base-background': '#fff',
        'menu-icon': '#fff',
        'menu-shadow': '#e5e5e5',
        'side-divider': '#2146a1'
      },
      gridTemplateColumns: {
        'content-layout': 'auto 300px'
      },
      gridTemplateRows: {
        'layout-2-two-cards': 'repeat(1, min-content)',
        'layout-2-four-cards': 'repeat(2, min-content)',
        'layout-2-six-cards': 'repeat(3, min-content)',
        'layout-2-eight-cards': 'repeat(4, min-content)'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    height: {
      'logo-height': '30px',
      'small-card-height': 'fit-content'
    },
    minWidth: {
      'small-card-width': '120px'
    }
  },
  plugins: [],
}
