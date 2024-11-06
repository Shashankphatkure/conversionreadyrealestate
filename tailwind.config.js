/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ba8d4a",
      },
      fontFamily: {
        muli: ["muli", "Helvetica", "Arial", "sans-serif"],
        roboto: ["roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
