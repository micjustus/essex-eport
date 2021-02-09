module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/6': '15%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {
      boxShadow:{
        'l-sm': '-1px 0 2px 0 rgba(0, 0, 0, 0.05)',
        'l-md': '-4px 0 8px -4px rgba(0, 0, 0, 0.1), -2px 0 6px -3px rgba(0, 0, 0, 0.06)',
        'l-lg': '-10px 0 15px -3px rgba(0, 0, 0, 0.1), -4px 0 6px -2px rgba(0, 0, 0, 0.05)',
        'l-xl': '-20px 0 25px -5px rgba(0, 0, 0, 0.1), -10px 0 10px -5px rgba(0, 0, 0, 0.04)',
        'l-2xl': '-25px 0 50px -12px rgba(0, 0, 0, 0.25)',
        'l-3xl': '-35px 0 60px -15px rgba(0, 0, 0, 0.3)',
      },
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
