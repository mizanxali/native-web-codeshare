module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/\\@wow/common/dist/*.js",
  ],
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
  theme: {
    extend: {},
  },
};
