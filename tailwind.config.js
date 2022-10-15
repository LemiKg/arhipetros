/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  content: ['./*html'],
  theme: {
    extend: {
      backgroundImage: {
        'body-background': 'url("../assets/images/pozadina.webp")'
      },
      colors: {
        // 'background': '#000',
        // 'base-color': 'rgb(100, 34, 63)',
        // 'text-color': '#fff',
        // 'base-background': '#fff',
        // 'menu-icon': '#fff',
        // 'menu-shadow': '#e5e5e5',
        // 'side-divider': '#2146a1',

        'dark-color': '#100F0F',
        'primary-color': '#0F3D3E',
        'light-color': '#F1F1F1',
        'secondary-color': '#E2DCC8'
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
