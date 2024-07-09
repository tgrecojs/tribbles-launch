module.exports = {
  content: ["./src/**/*.js", "./src/*.js"],
  theme: {
    extend: {
      fontFamily: {
        baumans: ['"Baumans", system-ui'],
        kanit: ['"Gemunu Libre", sans-serif'],
        ksg: ['"ksg", sans-serif'],
      },

      colors: {
        local_blue: "#3EC5FF",
        local_pink: "#FF009A",
        local_green: "#19F000",
        local_violet: "#9177F6",
        local_dark_pink: "94388B",
      },
    },
  },
  variants: {},
  plugins: [],
};
