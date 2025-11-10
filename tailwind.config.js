/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1ece6",
        foreground: "#000000",
        "footer-bg": "#000000",
        "footer-text": "#ffffff",
        "yc-red": "#DC2626",
      },
      fontFamily: {
        "federo": ["var(--font-federo)", "sans-serif"],
        "swear-display": ["Times New Roman", "Times", "serif"],
        "fanwood-text": ["Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};

