/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: "#179957",
        accentDark: "#184D47",
        customYellow: "#FEFCE8",
        customDarkYellow: "#FEF08A",
        moreDarkYellow: "#ffdf11"
      },
      scale: {
        '300': '3',
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
}



