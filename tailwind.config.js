/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.md",
    "./src/**/*.njk",
    "./src/**/*.js",
    "./src/**/*.png",
    "./src/**/*.svg",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

