module.exports = {
  theme: {
    extend: {
      colors: {
        darkness: "#040D12",
        green: {
          light: "#93B1A6",
          DEFAULT: "#5C8374",
          dark: "#183D3D",
        },
        "ice-blue": "#42b7f6",
      },
    },
  },
  content: ["./*.html", "./src/**/*.{css,html,js,tsx}"],
  plugins: [require("@tailwindcss/forms")],
};
