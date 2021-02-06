module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'hero-pattern-1': "url('../src/assets/images/banner.jpg')"
      })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
