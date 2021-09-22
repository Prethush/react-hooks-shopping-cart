module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        10: "0 1 18%",
        80: "0 1 82%",
        25: "0 1 25%",
        70: "0 1 65%",
        30: "0 1 33.2%",
        50: "0 1 50%",
        100: "0 1 100%"
      },

      height: {
        custom: "25rem",
        vertical: "70vh"
      },
      minHeight: {
        custom: "25rem"
      },
      colors: {
        custom: "rgb(27,26,32)",
        button: "rgb(44, 43, 43)"
      },
      width: {
        custom: "24vw"
      },
      boxShadow: {
        custom: "0px -6px 10px rgba(0, 0, 0, .5)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
