module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '5vh': '5vh',
        '90vh': '90vh',
      },
      maxHeight: {
        '90vh': '90vh',
      },
      top: {
        '5vh': '5vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
