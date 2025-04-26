module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#1D3557", // Navy Blue - trust, reliability
          accent: "#FFC300", // Soft Gold - warmth, hope
          secondary: "#A8C686", // Sage Green - growth, peace
          background: "#F5F5F5", // Light Gray - clean, modern
          text: "#333333", // Charcoal - clear, readable
        },
      },
    },
  },
  plugins: [],
};
