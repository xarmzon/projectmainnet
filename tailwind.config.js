module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        s1440: '1440px',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        linearWhite: 'linear-gradient(90.19deg, #F2F2F2 9.98%, #AFAFAF 82.38%)',
        textGradient:
          'radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%)',
        linearGreen1:
          'linear-gradient(214.02deg, #0CD0B3 6.04%, #2AA28F 47.69%, #13A58E 92.95%)',
        linearGreen2:
          'linear-gradient(214.02deg, #13A58E 6.04%, #0AB198 47.69%, #12DBBC 92.95%)',
        hero: 'url(/images/bg-hero.png)',
        about: 'url(/images/bg-about.png)',
        wallets: 'url(/images/bg-wallets.png)',
      },
      colors: {
        primary: {
          bg: '#11011E',
          green: '#0FAE96',
        },
        secondary: {
          default: '#511281',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
