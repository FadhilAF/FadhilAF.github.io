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
      scale: {
        102: "1.02",
      },
      width: {
        '128': '32rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--fg-1)',
            a: {
              color: 'var(--fg-1)',
              '&:hover': {
                color: 'var(--link)',
              },
            },
            h1: {
              color: 'var(--fg-1)',
            },
            h2: {
              color: 'var(--fg-1)',
            },
            h3: {
              color: 'var(--fg-1)',
            },
            strong: {
              color: 'var(--fg-1)',
            },
            code: {
              color: 'var(--fg-1)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

//### Biar styling markdown idak di overwrite tailwindcss
//### kita bisa pakai tailwindcss/typography
//### https://github.com/tailwindlabs/tailwindcss-typography
//### https://github.com/codex-team/editor.js/discussions/1910#discussioncomment-1985381
