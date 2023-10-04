import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1D1D1D",
      },
    },
  },
  plugins: [],
} satisfies Config;
