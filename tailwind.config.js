/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'main-green': '#166041',
        'light-green': '#0cbe74',
        'footer-bg': '#1c1d1c',
        primary: '#f2fff9',
        'primary-light': '#f7fffb',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        hero: "url('./src/assets/images/hero-image.png')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
