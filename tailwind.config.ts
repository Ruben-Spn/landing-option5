import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        component: "4px 4px 0 0 #2D2D2D",
        "inner-component": "inset 2px 2px 0 0 #2D2D2D",
      },
      colors: {
        beige: "#FEFAEF",
        red: "#FC4731",
        redSoft: "#FC705A",
        black: "#2D2D2D",
        grey: "#A7A7A7",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
