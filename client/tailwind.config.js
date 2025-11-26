/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "hsl(221.2, 83.2%, 53.3%)",
          500: "hsl(221.2, 83.2%, 65%)",
          200: "hsl(221.2, 83.2%, 85%)",
        },
        secondary: {
          500: "hsl(210, 40%, 96.1%)",
        },
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(222.2, 84%, 4.9%)",
        muted: {
          500: "hsl(215.4, 16.3%, 46.9%)",
        },
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};

