/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ffece3",
        cat1: "#D6D6D8",
        cat2:"#212121",
        cat3:"#EFE1C7",
        cat4:"#D7D7D9",
        opacityDownColor: "#ffffffba"
      }
    },
  },
  plugins: [],
}