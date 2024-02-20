/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fedraSansPro: ['Fedra Sans Pro', 'sans-serif'],
        centroSansPro: ['Centro Sans Pro', 'sans-serif'],
        bree: ['Bree', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
        museoSlab: ['Museo Slab', 'sans-serif'],
        ffKava:['FF Kava', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

