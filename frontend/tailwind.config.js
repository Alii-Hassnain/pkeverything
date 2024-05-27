/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
   purge: {
    options: {
      safelist: ['transform', 'hover:scale-105', 'transition-transform', 'duration-200'],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#064663',
        secondary: '#4d194d',
        'regal-blue': '#243c5a',
        'w-dark': '#15191d',
        'w-grey-1': '#E3E1E3',
        'w-grey-2': '#6c7c93',
        'w-grey-3': '#4F4F4F',
        'w-black-1': '#1b2027',
        'w-black-2': '#1B1A21',
        'w-black-3': '#2A2D3A',
        'w-black-4': '#24252D',
        'w-red-voilet': '#DA18A3',
        'file-active': '#2196f3',
        'file-accept': '#00e676',
        'file-reject': '#ff1744',
        'overlay-black': 'rgba(0, 0, 0, 0.5)',
      },
      width: {
        215: '215px',
        357: '357px',
        557: '557px',
      },
      minWidth: {
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
      },
      height: {
        300: '300px',
        557: '557px',
      },
      inset: {
        45: '45%',
        65: '65px',
      },
      spacing: {
        65: '65px',
      },
      flex: {
        2: '2 2 0%',
      },
      lineHeight: {
        70: '70px',
      },
      zIndex: {
        '-5': '-5',
        0: '0',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      screens: {
        lg: { max: '1800px' },
        md: { max: '990px' },
        sm: { max: '600px' },
        xs: { max: '400px' },
        minmd: '1700px',
        minlg: '2100px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
