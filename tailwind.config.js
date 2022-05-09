module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1440px',
      },
    },
    extend: {
      screens: {
        s1440: '1440px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        linearWhite: 'linear-gradient(90.19deg, #F2F2F2 9.98%, #AFAFAF 82.38%)',
        textGradient:
          'radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%)',
        linearGreen1:
          'linear-gradient(214.02deg, #0CD0B3 6.04%, #2AA28F 47.69%, #13A58E 92.95%)',
        linearGreen2:
          'linear-gradient(214.02deg, #13A58E 6.04%, #0AB198 47.69%, #12DBBC 92.95%)',
        linear1:
          'linear-gradient(180deg, #17069A 0%, rgba(54, 36, 189, 0) 100%)',
        linear2: 'linear-gradient(180deg, #554AB3 0%, #321ECA 100%)',
        linear4: 'linear-gradient(180deg, #322ECA 0%, #554AB3 100%)',
        linear3:
          'linear-gradient(267.43deg, rgba(30, 4, 77, 0.67) 1.78%, rgba(42, 8, 105, 0.27) 93.47%)',

        lg1: 'linear-gradient(89.59deg, #6788FF 22.6%, #C5FFE5 78.98%)',
        lg2: 'linear-gradient(96.18deg, rgba(103, 136, 255, 0.69) 9.89%, rgba(85, 74, 179, 0.69) 91.83%)',
        lg3: 'linear-gradient(90.15deg, #981664 35.4%, #F1275A 83.54%)',
        lg4: 'linear-gradient(96.18deg, rgba(103, 136, 255, 0.69) 9.89%, rgba(85, 74, 179, 0.69) 91.83%)',

        hero: 'url(/images/bg-hero.png)',
        hero1: 'url(/images/bg-hero1.png)',
        hero2: 'url(/images/header_bg.jpg)',
        about: 'url(/images/bg-about.png)',
        mobile: 'url(/images/shad_mobile.png)',
        desktop: 'url(/images/shad_desktop.png)',
        ab: 'url(/images/bg-ab.png)',
        w: 'url(/images/bg-w.png)',
      },
      colors: {
        primary: {
          DEFAULT: '#0E0743',
          bg: '#11011E',
          green: '#0FAE96',
          blue: '#554AB2',
          blue2: '#5D85DE',
          blue3: '#CFC9FC',
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
