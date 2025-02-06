/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      xxl: { max: '1440px'},
      xl: { max: '1280px' },    
      xlg: { max: '1180px' },    
      lg: { max: '1024px' },
      md: { max: '960px' },
      xmd: { max: '850px' },
      lsm: { max: '760px' },
      sm: { max: '720px' },
      lxs: { max: '600px' },
      xxs: { max: '520px' },
      xs: { max: '440px' },
    },

    extend: {},
  },
  plugins: [],
}
